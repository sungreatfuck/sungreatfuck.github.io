/** 
 * modal by sun
 */
class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
  }

  openModal() {
    this.modal.style.display = "block";
  }

  closeModal() {
    this.modal.style.display = "none";
  }
}

const myModal = new Modal("toyata-detail-modal")

function openModal(url) {
  var iframe = document.getElementById("detailFrame");
  iframe.src = url
  myModal.openModal();
}

function closeModal() {
  myModal.closeModal();
}
