import fitz # PyMuPDF

pdf_path = "bhagwat mockup-combined-combined.pdf"
doc = fitz.open(pdf_path)
for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=150)
    pix.save(f"book_page_{i}.jpg")
    print(f"Extracted page {i}")
print("Done!")
