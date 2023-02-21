const btn = document.querySelector('.btn');
const pageInput = document.querySelector('.page');
const limitInput = document.querySelector('.limit');
const result = document.querySelector('.result');

pageInput.addEventListener('keypress', event => {
  if (event.key == 'Enter') {
    event.preventDefault();
    btn.click();
  }
});

limitInput.addEventListener('keypress', event => {
  if (event.key == 'Enter') {
    event.preventDefault();
    btn.click();
  }
});

window.onload = () => {
  const apiData = JSON.parse(localStorage.getItem('savedApiData'));

  displayResult(apiData);
}

btn.addEventListener('click', () => {
  const page = pageInput.value;
  const limit = limitInput.value;

  if ((page < 1 || page > 10) && (limit < 1 || limit > 10)) {
    result.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    return;
  }
  if (page < 1 || page > 10) {
    result.textContent = 'Номер страницы вне диапазона от 1 до 10';
    return;
  }
  if (limit < 1 || limit > 10) {
    result.textContent = 'Лимит вне диапазона от 1 до 10';
    return;
  } else {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      .then(response => {
        return apiData = response.json();
      })
      .then(apiData => {
        savedApiData = JSON.stringify(apiData);
        localStorage.setItem('savedApiData', savedApiData);

        displayResult(apiData);
      })
  }
});

function displayResult(apiData) {
  let cards = '';

  apiData.forEach(element => {
    const card = `
    <div class="card">
      <img
        src="${element.download_url}"
        class="card-image"
      />
      <p>${element.author}</p>
    </div>
    `;

    cards += card;
  });

  result.innerHTML = cards;
}
