function downloadPlaceholder(e){
  const note = document.getElementById("download-note");
  if (note) {
    e.preventDefault();
    note.textContent = "الرابط غير مضاف بعد. استبدل href=\"#\" في download.html برابط السكريبت الحقيقي.";
    note.style.color = "#635bff";
  }
}

async function copyScript(){
  const code = document.getElementById("script-code");
  const note = document.getElementById("copy-note");
  if (!code || !note) return;
  try {
    await navigator.clipboard.writeText(code.textContent);
    note.textContent = "تم نسخ السكريبت بنجاح ✓";
    note.style.color = "#635bff";
  } catch (err) {
    note.textContent = "لم يتم النسخ تلقائيًا. اضغط مطولًا على الكود وانسخه.";
  }
}