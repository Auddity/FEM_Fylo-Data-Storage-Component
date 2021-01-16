const items = document.querySelectorAll('.upload-item');
const used = document.getElementById('used');
const statusBar = document.getElementById('statusBar');
const max = document.getElementById('max');
const remaining = document.getElementById('remaining');

var counter;
var maxSpace = 1000;
var startingValue = 815;
counter = startingValue;

max.innerHTML = `${maxSpace} gb`;
updateUsed();
updateRemaining();
updateBar();

function calclulateChange(index) {
  const paper = items[index] == items[0];
	const folder = items[index] == items[1];
	const cloud = items[index] == items[2];

  if (paper) counter += Math.round(Math.random() * 50);
  if (folder) counter += Math.round(Math.random() * 100);
  if (cloud) counter -= Math.round(Math.random() * 100);
  
  updateUsed();
  updateRemaining();
  updateBar();
}

function updateUsed() {
  if (counter >= maxSpace) {
    used.innerText = 'all';
    counter = maxSpace
  } else if (counter <= 0) {
    used.innerText = 'none';
    counter = 0;
  } else {
    used.innerText = `${counter} gb`;
  };
};

function updateRemaining() {
  var remainingValue = maxSpace - counter;
  if (counter >= maxSpace) {
    remaining.innerText = '0';
  } else if (counter <= 0) {
    remaining.innerText = `${maxSpace}`;
  } else {
    remaining.innerText = `${remainingValue}`;
  };
};

function updateBar() {
  var updatedWidth = Math.round((counter / maxSpace) * 100);
  
  if (counter >= maxSpace) {
    statusBar.style.width = '100%';
  } else if ((counter <= 42)) {
    statusBar.style.width = '20px';
  } else {
    statusBar.style.width = `${updatedWidth}%`;
  };
};

// Event Listener
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    calclulateChange(index);
  });
});