var clickToHide2 = document.querySelector('#click-to-hide-2');
clickToHide2.addEventListener("click", hideVisibleElem);
          
        /* Функция добавления / удаления класса, который скрывает элемент */
function hideVisibleElem() {
let wpcraftBox2 = document.querySelector('.wpcraft-box-2');
wpcraftBox2.classList.toggle("hide-element");
  
/* В зависимости от наличия скрывающего класса меняем текст в кнопке */
if (wpcraftBox2.classList.contains("hide-element")){
  clickToHide2.value = 'Open';
  } else {
    clickToHide2.value = 'Close';
  }
}