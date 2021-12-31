import { jsPDF } from 'jspdf'

export function generatePDF (doc) {
  // eslint-disable-next-line
  const pdf = new jsPDF()
  pdf.text('Document', 10, 10)
  pdf.setFontSize(20)
  pdf.setTextColor(255, 165, 0)
  pdf.text(doc.id, 10, 20)
  pdf.text('Main Document', 150, 10)
  pdf.setTextColor(0, 0, 0)
  pdf.setFontSize(10)
  const humanDocType = doc.meta.type === 'main' ? 'the main document' : 'a key shard'
  const description = doc.meta.type === 'main'
    ? `\nCombine this with ${doc.meta.k} shards in order to recover the secret\ncontained in this document` : `${doc.meta.k} of these shards can decrypt the main document with id: ${doc.id}`
  pdf.text('This is ' + humanDocType + ' of a paperback backup. ' + description, 10, 30)
  return pdf
}
