// Initialize jsPDF
const { jsPDF } = window.jspdf;

document.getElementById("generateBtn").addEventListener("click", function () {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Add content to the PDF
  doc.setFontSize(18);
  doc.text("Sample PDF Document", 10, 20);
  doc.setFontSize(12);
  doc.text("This is a sample PDF document generated using jsPDF.", 10, 30);
  doc.text("You can customize this content as per your requirements.", 10, 40);

  // Save the PDF
  doc.save("sample-document.pdf");
});