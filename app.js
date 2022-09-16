// https://www.omnicalculator.com/conversion/volume-conversion

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const litersRadio = document.getElementById('litersRadio');
const mlRadio = document.getElementById('mlRadio');

let liters;
let ml = v; 

// labels of the inpust
const variable = document.getElementById('variable');

litersRadio.addEventListener('click', function() {
  variable.textContent = 'ml';
  ml = v;
  result.textContent = '';
});

mlRadio.addEventListener('click', function() {
  variable.textContent = 'liters';
  liters = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(litersRadio.checked)
    result.textContent = `liters = ${computemg().toFixed(5)}`;

  else if(mlRadio.checked)
    result.textContent = `ml = ${computeml().toFixed(5)}`;
})

// calculation

function computemg() {
  return Number(ml.value) / 1000;
}

function computeml() {
  return Number(liters.value) * 1000;
}