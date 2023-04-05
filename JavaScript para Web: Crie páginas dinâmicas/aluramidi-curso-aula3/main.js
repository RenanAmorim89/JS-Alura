function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const keyList = document.querySelectorAll('.tecla');

keyList[0].onclick = tocaSom;

// let contador = 0;

// while (contador < keyList.length) {
//   const key = keyList[contador];

//   const instrumento = key.classList[1];

//   //template string
//   const idAudio = `#som_${instrumento}`;
//   console.log(idAudio);

//   keyList[contador].onclick = function () {
//     tocaSom(idAudio);
//   };

//   contador = contador + 1;

//   console.log(contador);
// }

for (let contador = 0; contador < keyList.length; contador++) {
  const key = keyList[contador];
  const instrumento = key.classList[1];
  const idAudio = `#som_${instrumento}`;

  keyList[contador].onclick = function () {
    tocaSom(idAudio);
  };
}
