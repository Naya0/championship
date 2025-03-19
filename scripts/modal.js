let modal = document.querySelector(".modal-back");
let closeModalElem = document.querySelector('.close-container svg');


modal.addEventListener('click', e => {
    e.target.classList.contains('modal-back')  && toggleForm();

    return;
})



function toggleForm(modalForm) {
    let modal = modalForm ? document.getElementById(modalForm) : document.querySelector(".modal-back");

    modal.classList.toggle('active-modal-form');
}