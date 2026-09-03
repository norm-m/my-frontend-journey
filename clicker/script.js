import { saveHistory, loadHistory } from './storage.js';
const btn = document.getElementById('counter-btn');
const resetBtn = document.getElementById('reset-btn');
const minusBtn = document.getElementById('minus-btn');
const greeting = document.getElementById('greeting');
const nameInput = document.getElementById('name-input');
const nameBtn = document.getElementById('name-btn');
const themeBtn = document.getElementById('theme-btn');
const historyBox = document.getElementById('history-box');
const fetchBtn = document.getElementById('fetch-btn');
let clickHistory = loadHistory();
let count = Number(localStorage.getItem(`savedClicks`)) || 0;

function updateScreen() {
  btn.textContent = `Клики : ${count}`;
  localStorage.setItem(`savedClicks`, count);
}
btn.addEventListener('click', () => {
  count++;
  updateScreen();
  logAction('plus');
});
resetBtn.addEventListener('click', () => {
  count = 0;
  historyBox.innerHTML = '';
  clickHistory = [];
  saveHistory(clickHistory);
  updateScreen();
});
minusBtn.addEventListener('click', () => {
  if (count > 0) {
    count = count - 1;
    updateScreen();
    logAction('minus');
  }
});
updateScreen();
nameBtn.addEventListener('click', () => {
  if (nameInput.value === '') {
    nameInput.classList.add('error');
    return;
  }
  greeting.textContent = `Привет, ${nameInput.value}`;
  localStorage.setItem('savedName', nameInput.value);
  nameInput.classList.remove('error');
});
const localName = localStorage.getItem(`savedName`);
if (localName) {
  greeting.textContent = `Привет, ${localName}`;
}
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('savedTheme', isDark);
});
const readDisk = localStorage.getItem('savedTheme');
if (readDisk === 'true') {
  document.body.classList.add('dark-mode');
}
const renderHistory = () => {
  const htmlString = [...clickHistory]
    .reverse()
    .map(({ id, action, value }) => {
      return `<p>Действие: ${action === 'plus' ? 'Плюс' : 'Минус'} -> ${value}</p>`;
      `<button class="delete-btn" data-id="${id}">
        [X]
      </button>`;
    })
    .join('');

  historyBox.innerHTML = htmlString;
};
function logAction(actionName) {
  clickHistory.push({ id: Date.now(), value: count, action: actionName });
  saveHistory(clickHistory);
  renderHistory();
}
fetchBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    console.log(data);
    const { quote, author } = data;
    clickHistory.push({ id: Date.now(), action: 'API', value: quote });
    renderHistory();
  } catch (error) {
    historyBox.innerHTML +=
      ' <p class = "error" >Ошибка сети. Попробуйти позже. </p>';
  }
});
renderHistory();
