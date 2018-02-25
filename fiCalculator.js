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
  let rY = document.getElementById('rY').value;
  let lambda = document.getElementById('lambda').value;
  console.log(rY);
  console.log(lambda);
  let rYarr = [];

  console.log(document.getElementById('tableRy').children[0].children[0]);
  for (var i = 0; i < (document.getElementById('tableRy').children[0].children[0].children).length; i++) {
    rYarr[i] = document.getElementById('tableRy').children[0].children[0].children[i].textContent;
  }
  console.log(rYarr);
}
)
