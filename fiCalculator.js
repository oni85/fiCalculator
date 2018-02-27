// ------------INPUT VALIDATION-------------//
/* function inputValidation(input) {
  let value  = input.value;
  let rep = /[-\.;":'/a-zA-Zа-яА-Я ]/;
  if (rep.test(value)) {
    value = value.replace(rep, '');
    input.value = value;
  }
}
function cislo(){
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}
let a = [document.querySelector('.tableRy').textContent];
console.log(a);
*/
// ----------CLICK ON CALCULATE BUTTON-----------------------//

document.getElementById('calcBtn').addEventListener('click', function calculate() {
  // ----------CREATING VARIABLES FROM INPUT DATA-----------------------//
  let rY = document.getElementById('rY').value;
  let lambda = document.getElementById('lambda').value;
  let ryArr = [];
  let lambdaArr = [];
  let fiArr = [];

  // console.log(document.getElementById('tableRy').children[0].children[0]);
  for (var i = 0; i < (document.getElementById('tableRy').children[0].children[0].children).length; i++) {
    ryArr[i] = document.getElementById('tableRy').children[0].children[0].children[i].textContent;
  }
  console.log(ryArr);

  // console.log(document.getElementById('tableLambda').children[0].children[0]);
  for (var i = 0; i < document.getElementById('tableLambda').children[0].children.length; i++) {
    lambdaArr[i] = document.getElementById('tableLambda').children[0].children[i].children[0].textContent;
  }
  console.log(lambdaArr);
  // console.log(document.getElementById('tableFi').children[0].children[0].children[0].textContent);
  for (var i = 0; i < document.getElementById('tableFi').children[0].children.length; i++) {
        let fiArrContent = [];
        for (var y = 0; y < document.getElementById('tableFi').children[0].children[i].children.length; y++) {
        fiArrContent[y] = document.getElementById('tableFi').children[0].children[i].children[y].textContent;
        //console.log(fiArrContent);
      }
      fiArr[i] = fiArrContent;
  }
//console.log(fiArr);
// ----------INPUT VALIDATION----------------------- //
  if (isNaN (rY)) {
    document.getElementById('ryValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('ryValidation').innerHTML = '<p class="centered">Only numbers allowed</p>';
  }
  if (isNaN (lambda)) {
    document.getElementById('lambdaValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('lambdaValidation').innerHTML = '<p class="centered">Only numbers allowed</p>';
  }
  if (rY < 200) {
    document.getElementById('ryValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('ryValidation').innerHTML = '<p class="centered">Ry is less than 200 mPa</p>';
  }
  if (rY > 640) {
    document.getElementById('ryValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('ryValidation').innerHTML = '<p class="centered">Ry is more than 640 mPa</p>';
  }
  if (rY === '') {
    document.getElementById('ryValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('ryValidation').innerHTML = '<p class="centered">Fill this field</p>';
  }
  if (lambda < 10) {
    document.getElementById('lambdaValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('lambdaValidation').innerHTML = '<p class="centered">&#955; is less than 10</p>';
  }
  if (lambda > 220) {
    document.getElementById('lambdaValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('lambdaValidation').innerHTML = '<p class="centered">&#955; is more than 220</p>';
  }
  if (lambda === '') {
    document.getElementById('lambdaValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('lambdaValidation').innerHTML = '<p class="centered">Fill this field</p>';
  }
  let a;
  let b;

  while (var i = 0; i < ryArr.length; i++) {
    if (rY < ryArr[i]) {
      a = ryArr[i];
    } else a = 'none';
  }
  console.log(a);
}
)
