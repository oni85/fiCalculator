// ----------TABLE CLEANER FUNCTION ----------------------- //

function tableCleaner () {

  // cleaning tables from marks

  for (let i = 0; i < (document.getElementById('tableRy').children[0].children[0].children).length; i++) {
    document.getElementById('tableRy').children[0].children[0].children[i].classList.remove('tdActive');
  }
  for (let i = 0; i < document.getElementById('tableLambda').children[0].children.length; i++) {
    document.getElementById('tableLambda').children[0].children[i].children[0].classList.remove('tdActive');
  }
  for (let i = 0; i < document.getElementById('tableFi').children[0].children.length; i++) {
    for (let y = 0; y < document.getElementById('tableFi').children[0].children[i].children.length; y++) {
      document.getElementById('tableFi').children[0].children[i].children[y].classList.remove('tdActive');
    }
  }
  // cleaning validation messages

  document.getElementById('lambdaValidation').classList.remove('displayBlock');
  document.getElementById('ryValidation').classList.remove('displayBlock');
}
// ----------INPUT CLEANER FUNCTION ----------------------- //

function inputCleaner () {
  document.getElementById('rY').value = '';
  document.getElementById('lambda').value = '';
  document.getElementById('fI').innerHTML = '';
}

// ----------INPUT CLEANER FUNCTION ----------------------- //

// ----------CLICK ON CALCULATE BUTTON ----------------------- //

document.getElementById('calcBtn').addEventListener('click', function calculate () {

  tableCleaner();

  function interpolator(x, x1, x2, y1, y2) {
    let intRes;
    intRes = Math.round(y1 + (x - x1) * (y2 - y1) / (x2 - x1));
    return intRes;
  }

  // crearing variables from input data

  let rY = parseInt(document.getElementById('rY').value);
  let lambdaC = parseInt(document.getElementById('lambda').value);
  let ryArr = [];
  let lambdaArr = [];
  let fiArr = [];
  let ryIndex = [];
  let lambdaIndex = [];
  let fiIndex = [];
  let y1;
  let y2;
  let y3;
  let y4;
  let fi1;
  let fi2;
  let fi;

  for (var i = 0; i < (document.getElementById('tableRy').children[0].children[0].children).length; i++) {
    ryArr[i] = document.getElementById('tableRy').children[0].children[0].children[i].textContent;
  }

  for (i = 0; i < document.getElementById('tableLambda').children[0].children.length; i++) {
    lambdaArr[i] = document.getElementById('tableLambda').children[0].children[i].children[0].textContent;
  }

  for (i = 0; i < document.getElementById('tableFi').children[0].children.length; i++) {
    let fiArrContent = [];
    for (var y = 0; y < document.getElementById('tableFi').children[0].children[i].children.length; y++) {
      fiArrContent[y] = document.getElementById('tableFi').children[0].children[i].children[y].textContent;
    }
    fiArr[i] = fiArrContent;
  }

  // ----------INPUT VALIDATION----------------------- //
  let validationArr = [];
  let isValid;
  if (isNaN(rY)) {
    document.getElementById('ryValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('ryValidation').innerHTML = '<p class="centered">Only numbers allowed</p>';
    isValid = false;
    validationArr.push(isValid);
  } else {
    isValid = true;
    validationArr.push(isValid);
  }
  if (isNaN(lambdaC)) {
    document.getElementById('lambdaValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('lambdaValidation').innerHTML = '<p class="centered">Only numbers allowed</p>';
    isValid = false;
    validationArr.push(isValid);
  } else {
    isValid = true;
    validationArr.push(isValid);
  }
  if (rY < 200) {
    document.getElementById('ryValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('ryValidation').innerHTML = '<p class="centered">Ry is less than 200 mPa</p>';
    isValid = false;
    validationArr.push(isValid);
  } else {
    isValid = true;
    validationArr.push(isValid);
  }
  if (rY > 640) {
    document.getElementById('ryValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('ryValidation').innerHTML = '<p class="centered">Ry is more than 640 mPa</p>';
    isValid = false;
    validationArr.push(isValid);
  } else {
    isValid = true;
    validationArr.push(isValid);
  }
  if (rY === '') {
    document.getElementById('ryValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('ryValidation').innerHTML = '<p class="centered">Fill this field</p>';
    isValid = false;
    validationArr.push(isValid);
  } else {
    isValid = true;
    validationArr.push(isValid);
  }
  if (lambdaC < 10) {
    document.getElementById('lambdaValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('lambdaValidation').innerHTML = '<p class="centered">&#955; is less than 10</p>';
    isValid = false;
    validationArr.push(isValid);
  } else {
    isValid = true;
    validationArr.push(isValid);
  }
  if (lambdaC > 220) {
    document.getElementById('lambdaValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('lambdaValidation').innerHTML = '<p class="centered">&#955; is more than 220</p>';
    isValid = false;
    validationArr.push(isValid);
  } else {
    isValid = true;
    validationArr.push(isValid);
  }
  if (lambdaC === '') {
    document.getElementById('lambdaValidation').classList.add('displayBlock', 'transitionDiv');
    document.getElementById('lambdaValidation').innerHTML = '<p class="centered">Fill this field</p>';
    isValid = false;
    validationArr.push(isValid);
  } else {
    isValid = true;
    validationArr.push(isValid);
  }
  console.log(validationArr);

  // ----------RYINDEX ARRAY FORMING----------------------- //
  for (let i = 0; i < ryArr.length; i++) {
    if (rY === +ryArr[i]) {
      ryIndex.push(ryArr.indexOf(ryArr[i]));
      // cells highlighting
      document.getElementById('tableRy').children[0].children[0].children[i].classList.add('tdActive');
      x1 = parseInt(ryArr[i]);
      console.log('x1 = ' + x1);
      break;
    } else if (rY < +ryArr[i]) {
      x1 = parseInt(ryArr[i - 1]);
      x2 = parseInt(ryArr[i]);
      ryIndex.push(ryArr.indexOf(ryArr[i - 1]), ryArr.indexOf(ryArr[i]));
      document.getElementById('tableRy').children[0].children[0].children[i - 1].classList.add('tdActive');
      document.getElementById('tableRy').children[0].children[0].children[i].classList.add('tdActive');
      break;
    } else if (rY > +ryArr[i]) {

    }
  }
  // console.log(i);

  // ----------LAMBDAINDEX ARRAY FORMING----------------------- //
  for (let i = 0; i < lambdaArr.length; i++) {
    if (lambdaC === +lambdaArr[i]) {
      lambdaIndex.push(lambdaArr.indexOf(lambdaArr[i]));
      // cells highlighting
      document.getElementById('tableLambda').children[0].children[i].children[0].classList.add('tdActive');
      x3 = parseInt(lambdaArr[i]);
      console.log('x3 = ' + x3);
      break;
    } else if (lambdaC < +lambdaArr[i]) {
      lambdaIndex.push((lambdaArr.indexOf(lambdaArr[i - 1])), (lambdaArr.indexOf(lambdaArr[i])));
      x3 = parseInt(lambdaArr[i - 1]);
      // console.log('x3 = ' + x3);
      x4 = parseInt(lambdaArr[i]);
      // console.log('x4 = ' + x4);
      // cells highlighting
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
    // cells highlighting
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].classList.add('tdActive');
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][1]].classList.add('tdActive');
    document.getElementById('tableFi').children[0].children[fiIndex[1][1]].children[fiIndex[0][0]].classList.add('tdActive');
    document.getElementById('tableFi').children[0].children[fiIndex[1][1]].children[fiIndex[0][1]].classList.add('tdActive');
    // fi calculate
    let y1 = parseInt(document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].textContent);
    console.log('x1 = ' + x1);
    let y2 = parseInt(document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][1]].textContent);
    console.log('x2 = ' + x2);
    let y3 = parseInt(document.getElementById('tableFi').children[0].children[fiIndex[1][1]].children[fiIndex[0][0]].textContent);
    console.log('x3 = ' + x3);
    let y4 = parseInt(document.getElementById('tableFi').children[0].children[fiIndex[1][1]].children[fiIndex[0][1]].textContent);
    console.log('x4 = ' + x4);
    console.log('y1 = ' + y1);
    console.log('y2 = ' + y2);
    console.log('y3 = ' + y3);
    console.log('y4 = ' + y4);
    fi1 = interpolator(rY, x1, x2, y1, y2);
    console.log(fi1);
    console.log(typeof fi1);
    fi2 = interpolator(rY, x1, x2, y3, y4);
    console.log(fi2);
    console.log(typeof fi2);
    fi = interpolator(lambdaC, x3, x4, fi1, fi2);
    console.log(fi);
    console.log(typeof fi);
    document.getElementById('fI').textContent = (fi / 1000);
  } else if (fiIndex[0].length === 2 && fiIndex[1].length === 1) {
    // table marks add
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].classList.add('tdActive');
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][1]].classList.add('tdActive');
    // fi calculate
    let y1 = parseInt(document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].textContent);
    console.log('y1 = ' + x1);
    let y2 = parseInt(document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][1]].textContent);
    console.log('y2 = ' + x2);
    fi = interpolator(rY, x1, x2, y1, y2);
    console.log(fi);
    console.log(typeof fi);
    document.getElementById('fI').textContent = (fi / 1000);
  } else if (fiIndex[0].length === 1 && fiIndex[1].length === 2) {
    // table marks add
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].classList.add('tdActive');
    document.getElementById('tableFi').children[0].children[fiIndex[1][1]].children[fiIndex[0][0]].classList.add('tdActive');
    let y1 = parseInt(document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].textContent);
    console.log('y1 = ' + y1);
    let y3 = parseInt(document.getElementById('tableFi').children[0].children[fiIndex[1][1]].children[fiIndex[0][0]].textContent);
    console.log('y3 = ' + y3);
    // fi calculate
    fi = interpolator(lambdaC, x3, x4, y1, y3);
    console.log(fi);
    console.log(typeof fi);
    document.getElementById('fI').textContent = (fi / 1000);
  } else {
    document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].classList.add('tdActive');
    fi = parseInt(document.getElementById('tableFi').children[0].children[fiIndex[1][0]].children[fiIndex[0][0]].textContent);
    document.getElementById('fI').textContent = (fi / 1000);
  }
}
)

// ----------CLICK ON RESET BUTTON ----------------------- //

document.getElementById('resBtn').addEventListener('click', function reset () {
  inputCleaner();
  tableCleaner();
}
)
