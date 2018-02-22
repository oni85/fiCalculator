//------------INPUT VALIDATION-------------//
/*function inputValidation(input) {
  let value  = input.value;
  let rep = /[-\.;":'/a-zA-Zа-яА-Я ]/;
  if (rep.test(value)) {
    value = value.replace(rep, '');
    input.value = value;
  }
}*/
function cislo(){
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}
let a = [document.querySelector('.tableRy').textContent];
console.log(a);
