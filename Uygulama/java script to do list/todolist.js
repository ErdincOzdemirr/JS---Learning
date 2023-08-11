//Element Ekleme Fonksiyonu:
function newElement() {
  const inputValue = document.getElementById("task").value;

  if (!inputValue) {
    showToast("error", "Listeye boş ekleme yapamazsınız!");
    return;
  }

  const list = document.getElementById("list");
  const listItem = document.createElement("li");
  listItem.textContent = inputValue;

  // Yapıldı işareti için tıklama olayı ekle
  listItem.addEventListener("click", toggleTask);

  list.appendChild(listItem);
  document.getElementById("task").value = "";

  showToast("success", "Listeye eklendi.");
}

//Görevi Tamamlandı Olarak İşaretleme Fonksiyonu:
function toggleTask(event) {
  const listItem = event.target;
  listItem.classList.toggle("checked");
}

// Bootstrap Toast Bildirim Fonksiyonu:
function showToast(type, message) {
  const toast = document.querySelector(`.toast.${type}`);
  const toastBody = toast.querySelector(".toast-body");
  toastBody.textContent = message;

  const toastInstance = new bootstrap.Toast(toast);
  toastInstance.show();
}
