  // ----------PROGRAMM INIT FUNCTION ----------------------- //
function programmInit () {
  document.getElementById('tableRy').children[0].children[0].children[0].classList.remove('tdActive')
  document.querySelector('.td').classList.remove('tdActive');
  document.getElementById('lambdaValidation').classList.remove('displayBlock');
  document.getElementById('ryValidation').classList.remove('displayBlock');
}
  // ----------CLICK ON CALCULATE BUTTON ----------------------- //
document.getElementById('calcBtn').addEventListener('click', function calculate() {
  programmInit();
  // ----------CREATING VARIABLES FROM INPUT DATA ----------------------- //
  let rY = parseInt(document.getElementById('rY').value);
  let lambdaC = parseInt(document.getElementById('lambda').value);
  //console.log(typeof lambdaC);
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
  //console.log(ryArr);
  // console.log(document.getElementById('tableLambda').children[0].children[0]);
  for (i = 0; i < document.getElementById('tableLambda').children[0].children.length; i++) {
    lambdaArr[i] = document.getElementById('tableLambda').children[0].children[i].children[0].textContent;
  }
  //console.log(lambdaArr);
  //console.log(lambdaArr.length);
  // console.log(document.getElementById('tableFi').children[0].children[0].children[0].textContent);
  for (i = 0; i < document.getElementById('tableFi').children[0].children.length; i++) {
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
  if (isNaN (lambdaC)) {
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
  if (lambdaC < 10) {
    document.getElementById('lambdaValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('lambdaValidation').innerHTML = '<p class="centered">&#955; is less than 10</p>';
  }
  if (lambdaC > 220) {
    document.getElementById('lambdaValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('lambdaValidation').innerHTML = '<p class="centered">&#955; is more than 220</p>';
  }
  if (lambdaC === '') {
    document.getElementById('lambdaValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('lambdaValidation').innerHTML = '<p class="centered">Fill this field</p>';
  }
  // ----------RYINDEX ARRAY FORMING----------------------- //
  for (let i = 0; i < ryArr.length; i++) {
      if (rY === +ryArr[i]) {
        let c = ryArr.indexOf(ryArr[i]);
        ryIndex.push(c);
        // RYTABLE CELLS HIGHLIGHTING
        document.getElementById('tableRy').children[0].children[0].children[i].classList.add('tdActive');
        //console.log(ryIndex);
        //console.log(i);
        break;
      } else if (rY < +ryArr[i]) {
        let a = ryArr.indexOf(ryArr[i - 1]);
        let b = ryArr.indexOf(ryArr[i]);
        ryIndex.push(a, b);
        //console.log(ryIndex);
        // RYTABLE CELLS HIGHLIGHTING
        document.getElementById('tableRy').children[0].children[0].children[i - 1].classList.add('tdActive');
        document.getElementById('tableRy').children[0].children[0].children[i].classList.add('tdActive');
        //console.log(i);
        break;
      } else if (rY > +ryArr[i]) {
        //console.log(i);
      }
    }
    //console.log(i);
  // ----------LAMBDAINDEX ARRAY FORMING----------------------- //
  for (let i = 0; i < lambdaArr.length; i++) {
    if (lambdaC === +lambdaArr[i]) {
        lambdaIndex.push(lambdaArr.indexOf(lambdaArr[i]));
        // LAMBDATABLE CELLS HIGHLIGHTING
        document.getElementById('tableLambda').children[0].children[i].children[0].classList.add('tdActive');
        break;
    } else if (lambdaC < +lambdaArr[i]) {
        lambdaIndex.push((lambdaArr.indexOf(lambdaArr[i - 1])), (lambdaArr.indexOf(lambdaArr[i])));
        // LAMBDATABLE CELLS HIGHLIGHTING
        document.getElementById('tableLambda').children[0].children[i - 1].children[0].classList.add('tdActive');
        document.getElementById('tableLambda').children[0].children[i].children[0].classList.add('tdActive');
      break;
    } else if (lambdaC > +lambdaArr[i]) {

    }
  }
  // ----------FIINDEX ARRAY FORMING----------------------- //
  fiIndex.push(ryIndex, lambdaIndex);
  // ----------FITABLE CELLS HIGHLIGHTING----------------------- //
  if (fiIndex[0].length === 2 && fiIndex[1].length === 2) {
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].classList.add('tdActive');
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][1]].classList.add('tdActive');
    document.getElementById('tableFi').children[0].children[fiIndex[1][1]].children[fiIndex[0][0]].classList.add('tdActive');
    document.getElementById('tableFi').children[0].children[fiIndex[1][1]].children[fiIndex[0][1]].classList.add('tdActive');
  } else if (fiIndex[0].length === 2 && fiIndex[1].length === 1) {
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].classList.add('tdActive');
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][1]].classList.add('tdActive');
  } else if (fiIndex[0].length === 1 && fiIndex[1].length === 2) {
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].classList.add('tdActive');
    document.getElementById('tableFi').children[0].children[fiIndex[1][1]].children[fiIndex[0][0]].classList.add('tdActive');
  } else {
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].classList.add('tdActive');
  }

}
)
