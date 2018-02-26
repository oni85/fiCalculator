//------------INPUT VALIDATION-------------//
/*function inputValidation(input) {
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
//----------CLICK ON CALCULATE BUTTON-----------------------//

document.getElementById('calcBtn').addEventListener('click', function calculate() {
  //----------CREATING VARIABLES FROM INPUT DATA-----------------------//
  let rY = document.getElementById('rY').value;
  let lambda = document.getElementById('lambda').value;
  let ryArr = [];
  let lambdaArr = [];
  let fiArr = [];
  let fiArrContent = [];
  //console.log(document.getElementById('tableRy').children[0].children[0]);
  for (var i = 0; i < (document.getElementById('tableRy').children[0].children[0].children).length; i++) {
    ryArr[i] = document.getElementById('tableRy').children[0].children[0].children[i].textContent;
  }
  console.log(ryArr);

  //console.log(document.getElementById('tableLambda').children[0].children[0]);
  for (var i = 0; i < document.getElementById('tableLambda').children[0].children.length; i++) {
    lambdaArr[i] = document.getElementById('tableLambda').children[0].children[i].children[0].textContent;
  }
  console.log(lambdaArr);
  //console.log(document.getElementById('tableFi').children[0].children[0].children[0].textContent);
  for (var i = 0; i < document.getElementById('tableFi').children[0].children.length; i++) {
        for (var y = 0; y < document.getElementById('tableFi').children[0].children[0].children.length; y++) {
        fiArrContent[y] = document.getElementById('tableFi').children[0].children[0].children[y].textContent;
        console.log(fiArrContent);
        //fiArr[i] = [fiArrContent];
      }
      fiArr[i] = [fiArrContent];
  }
  console.log(fiArr);

}
)
