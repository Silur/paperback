import * as openpgp from 'openpgp'

export function zbase32 (input) {
  const alphabet = 'ybndrfg8ejkmcpqxot1uwisza345h769'
  const inputLength = input.length
  const resultLength = Math.ceil(inputLength / 5) * 8
  const result = new Array(resultLength)
  let j = 0
  let shift = 3
  let carry = 0
  let byte, index
  for (let i = 0; i < inputLength; i++) {
    byte = input[i]

    index = carry | (byte >> shift)
    result[j++] = alphabet[index & 0x1f]

    if (shift > 5) {
      shift -= 5
      index = byte >> shift
      result[j++] = alphabet[index & 0x1f]
    }

    shift = 5 - shift
    carry = byte << shift
    shift = 8 - shift
  }

  if (shift !== 3) {
    result[j++] = alphabet[carry & 0x1f]
  }

  return result.slice(0, j).join('').match(/.{1,4}/g).join('-')
}

export async function generateDocument (type, quorumSize, shardsNeeded) {
  const kDoc = new Uint8Array(16)
  window.crypto.getRandomValues(kDoc)
  const { privateKey, publicKey } = await openpgp.generateKey({
    type: 'ecc',
    curve: 'curve25519',
    format: 'binary',
    userIDs: [{}]
  })
  console.log('pubkey', publicKey, 'privkey', privateKey)
  const id = zbase32(Uint8Array.from([1, 2, 3, 4, 5, 6]))
  return {
    id: id,
    meta: {
      n: quorumSize,
      k: shardsNeeded,
      type: type
    },
    kDoc: kDoc
  }
}
