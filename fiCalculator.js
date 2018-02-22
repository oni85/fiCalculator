//------------INPUT VALIDATION-------------//
function inputValidation(input) {
  let value  = input.value;
  let rep = /[-\.;":'/a-zA-Zа-яА-Я ]/;
  if (rep.test(value)) {
    value = value.replace(rep, '');
    input.value = value;
  }
}
