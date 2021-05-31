"use strict"

const editButtonsList = document.querySelectorAll('.editButton');
const wrapForm = document.getElementById('editForm');
const form = wrapForm.querySelector('.form');

document.getElementById('cancel').addEventListener('click', closeForm);
form.addEventListener('submit', saveChanges);

for (let button of editButtonsList){
  button.addEventListener('click', openForm);
  button.addEventListener('click', loadForm);
}

let changedCard;

function openForm(event) {
  wrapForm.classList.add('active');
  changedCard = event.target.closest('.card');
}

function loadForm() {
  form.querySelector('#name_field').value = changedCard.querySelector('.name').innerHTML;
  let values = changedCard.querySelectorAll('.values p');
  form.querySelector('#year').value = values[0].innerHTML;
  form.querySelector('#country').value = values[1].innerHTML;
  form.querySelector('#genre').value = values[2].innerHTML;
  form.querySelector('#director').value = values[3].innerHTML;
  form.querySelector('#slogan').value = values[4].innerHTML;
}

function closeForm() {
  wrapForm.classList.remove('active');
  form.reset();
}

function saveChanges(event) { 

  if (form.checkValidity()) {
    var formData = new FormData(form);

    changedCard.querySelector('.name').innerHTML = formData.get('name_field');
    let values = changedCard.querySelectorAll('.values p');
    values[0].innerHTML = formData.get('year');
    values[1].innerHTML = formData.get('country');
    values[2].innerHTML = formData.get('genre');
    values[3].innerHTML = formData.get('director');
    values[4].innerHTML = formData.get('slogan');    
    changedCard.querySelector('.image').src = 'images/'+ formData.get('card_img').name;
    form.reset();
    wrapForm.classList.remove('active');
  }
  event.preventDefault();
}