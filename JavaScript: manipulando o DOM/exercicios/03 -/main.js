function ocultaTintas() {
  document.querySelector('.lista').classList.add('oculto');
  document.querySelector('.lista').classList.remove('revelado');
  console.log(document.querySelector('.lista').classList);
}
function mostraTintas() {
  document.querySelector('.lista').classList.add('revelado');
  document.querySelector('.lista').classList.remove('oculto');
  console.log(document.querySelector('.lista').classList);
}
