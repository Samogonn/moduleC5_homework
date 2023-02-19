const widthInput = document.querySelector('.width');
const heightInput = document.querySelector('.height');
const btn = document.querySelector('.btn');
const image = document.querySelector('img');

widthInput.addEventListener('keypress', event => {
    if (event.key == 'Enter') {
        event.preventDefault();
        btn.click();
    }
});

heightInput.addEventListener('keypress', event => {
    if (event.key == 'Enter') {
        event.preventDefault();
        btn.click();
    }
});

btn.addEventListener('click', () => {
    const width = widthInput.value;
    const height = heightInput.value;

    if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
        url = `https://picsum.photos/${width}/${height}`;
        fetch(url)
            .then(response => response.url)
            .then(url => {
                image.setAttribute('src', url);
            })
            .catch(() => {
                console.log('Error');
            });
    } else {
        alert('Одно из чисел вне диапазона от 100 до 300.')
    }
});
