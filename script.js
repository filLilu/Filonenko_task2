"use strict"

function chooseAll() {
  let checkboxes = document.querySelectorAll('input.checkDelete');
  for (let item of checkboxes)
    item.checked = true; 
}

function deleteCard() {
  let cards = document.querySelectorAll('.card');
  for (let card of cards) {
    let checkbox = card.querySelector('.checkDelete');
    if (checkbox.checked == true)
      card.remove();
  }
}