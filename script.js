// ========== ДАННЫЕ (массив объектов — как база данных) ==========
const people = [
  {
    name: 'Ильмир',
    role: 'Frontend-разработчик в процессе...',
    badge: 'PRO',
    img: 'https://avatars.mds.yandex.net/i?id=3c28e2e93f4b33d67cbb1d50e959eee2f8d20e19-5845211-images-thumbs&n=13',
  },
  {
    name: 'Первый проект',
    role: 'Frontend-разработчик со стажем.',
    badge: null,
    img: 'https://avatars.mds.yandex.net/i?id=3c28e2e93f4b33d67cbb1d50e959eee2f8d20e19-5845211-images-thumbs&n=13',
  },
  {
    name: 'Работаю',
    role: 'Frontend-разработчик в работе',
    badge: null,
    img: 'https://avatars.mds.yandex.net/i?id=3c28e2e93f4b33d67cbb1d50e959eee2f8d20e19-5845211-images-thumbs&n=13',
  },
  {
    name: 'Я программист!',
    role: 'Учусь в универе',
    badge: null,
    img: 'https://avatars.mds.yandex.net/i?id=3c28e2e93f4b33d67cbb1d50e959eee2f8d20e19-5845211-images-thumbs&n=13',
  },
];

// ========== ГЕНЕРАЦИЯ КАРТОЧЕК ИЗ МАССИВА ==========
const container = document.getElementById('cards-container');

function renderCards() {
  container.innerHTML = ''; // Сначала очищаем витрину от старого

  people.forEach(function (person) {
    let badgeHTML = '';
    if (person.badge !== null) {
      badgeHTML = '<span class="badge">' + person.badge + '</span>';
    }

    const cardHTML =
      '<div class="card">' +
      badgeHTML +
      '<img src="' +
      person.img +
      '" alt="Аватар" />' +
      '<h2>' +
      person.name +
      '</h2>' +
      '<p>' +
      person.role +
      '</p>' +
      '<a href="#" class="btn sub-btn">Подписаться</a>' +
      '</div>';

    container.innerHTML = container.innerHTML + cardHTML;
  });
}
renderCards();

// ========== КЛИКЕР ==========
let count = 0;
const display = document.getElementById('counter-display');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const btnReset = document.getElementById('btn-reset');

btnPlus.onclick = function () {
  count = count + 1;
  display.innerHTML = 'Клики: ' + count;
};

btnMinus.onclick = function () {
  if (count > 0) {
    count = count - 1;
    display.innerHTML = 'Клики: ' + count;
  }
};

btnReset.onclick = function () {
  count = 0;
  display.innerHTML = 'Клики: ' + count;
};

// ========== ИЗМЕНЕНИЕ ИМЕНИ ==========
const nameInput = document.getElementById('name-input');
const changeNameBtn = document.getElementById('change-name-btn');

changeNameBtn.onclick = function () {
  const newName = nameInput.value;
  if (newName === '') {
    alert('Эй, введи имя!');
  } else {
    const newPerson = {
      name: newName,
      role: 'Новичок',
      badge: 'NEW',
      img: 'https://avatars.mds.yandex.net/i?id=3c28e2e93f4b33d67cbb1d50e959eee2f8d20e19-5845211-images-thumbs&n=13',
    };
    people.push(newPerson);
    console.log(people);
    renderCards();
  }
};

// ========== КРАСНАЯ ТРЕВОГА ==========
const alarmBtn = document.getElementById('alarm-btn');

alarmBtn.onclick = function () {
  const allButtons = document.querySelectorAll('.sub-btn');
  allButtons.forEach(function (button) {
    button.style.backgroundColor = 'red';
    button.innerHTML = 'ТРЕВОГА';
  });
};
const cart = ['Шерлок', 'You'];
cart.push('Менталист');
console.log(cart);
