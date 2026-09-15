function downloadPlaceholder(e){
  const note = document.getElementById("download-note");
  if (note) {
    e.preventDefault();
    note.textContent = "الرابط غير مضاف بعد. استبدل href=\"#\" في download.html برابط السكريبت الحقيقي.";
    note.style.color = "#635bff";
  }
}