const items = document.querySelectorAll('.upload-item');
const used = document.getElementById('used');
const statusBar = document.getElementById('statusBar');
const max = document.getElementById('max');
const remaining = document.getElementById('remaining');

var startingValue = 815;
var maxSpace = 1000;
var usedSpace = startingValue;

max.innerHTML = `${maxSpace} gb`;
updateUsed();
updateRemaining();
updateBar();

items.forEach((item, index) => {
  item.addEventListener('click', () => {

    calculateSpace(index);
  });
});

function calculateSpace(index) {
	const paper = items[index] == items[0];
	const folder = items[index] == items[1];
	const cloud = items[index] == items[2];

  if (paper) startingValue += Math.round(Math.random() * 50);
  if (folder) startingValue += Math.round(Math.random() * 100);
  if (cloud) startingValue -= Math.round(Math.random() * 100);	

  updateUsed();
  updateRemaining();
  updateBar();

  console.log(startingValue);
}

function updateUsed() {
  usedSpace = startingValue;
  if (usedSpace >= maxSpace) {
    used.innerText = 'all';
  } else if (usedSpace <= 0) {
    used.innerText = 'none';
  } else {
    used.innerText = `${usedSpace} gb`;
  }
};

function updateRemaining() {
  var remainingValue = maxSpace - startingValue;

  if (usedSpace >= maxSpace) {
    remaining.innerText = '0';
  } else if (usedSpace <= 0) {
    remaining.innerText = `${maxSpace}`;
  } else {
    remaining.innerText = `${remainingValue}`;
  }
};

function updateBar() {
  var updatedWidth = Math.round((startingValue / maxSpace) * 100);

  if (usedSpace >= maxSpace) {
    statusBar.style.width = '100%';
  } else if (usedSpace <= 25) {
    statusBar.style.width = '3%';
  } else {
    statusBar.style.width = `${updatedWidth}%`; 
  }
};