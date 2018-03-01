
document.getElementById('calcBtn').addEventListener('click', function calculate() {
  // ----------CREATING VARIABLES FROM INPUT DATA----------------------- //
  let rY = document.getElementById('rY').value;
  let lambda = document.getElementById('lambda').value;
  let ryArr = [];
  let lambdaArr = [];
  let fiArr = [];
  let ryIndex = [];
  let lambdaIndex = [];
  let fiIndex = [];

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
// ----------RYINDEX ARRAY FORMING----------------------- //
  for (var i = 0; i < ryArr.length; i++) {
      if (rY === ryArr[i]) {

        let c = ryArr.indexOf(ryArr[i]);
        ryIndex.push(c);
        document.getElementById('tableRy').children[0].children[0].children[i].classList.add('tdActive');
        console.log(ryIndex);
        break;
      } else if (rY < ryArr[i]) {
        let a = ryArr.indexOf(ryArr[i - 1]);
        let b = ryArr.indexOf(ryArr[i]);
        ryIndex.push(a, b);
        console.log(ryIndex);
        document.getElementById('tableRy').children[0].children[0].children[i - 1].classList.add('tdActive');
        document.getElementById('tableRy').children[0].children[0].children[i].classList.add('tdActive');
        break;
      } else if (rY > ryArr[i]) {

      }
    }
// ----------LAMBDAINDEX ARRAY FORMING----------------------- //
for (var i = 0; i < lambdaArr.length; i++) {
    if (lambda === lambdaArr[i]) {
      let f = lambdaArr.indexOf(lambdaArr[i]);
      lambdaIndex.push(f);
      document.getElementById('tableLambda').children[0].children[i].children[0].classList.add('tdActive');
      console.log(lambdaIndex);
      break;
    } else if (lambda < lambdaArr[i]) {
      let d = lambdaArr.indexOf(lambdaArr[i - 1]);
      let e = lambdaArr.indexOf(lambdaArr[i]);
      lambdaIndex.push(d, e);
      console.log(lambdaIndex);
      document.getElementById('tableLambda').children[0].children[i - 1].children[0].classList.add('tdActive');
      document.getElementById('tableLambda').children[0].children[i].children[0].classList.add('tdActive');
      break;
    } else if (lambda > lambdaArr[i]) {

    }
  }
// ----------FIINDEX ARRAY FORMING----------------------- //
fiIndex.push(ryIndex, lambdaIndex);
console.log(fiIndex);
}
)
