function createCoinCountItem (title) {
    
    const coinCountText = document.createElement('p');
    coinCountText.className = 'title';
    coinCountText.innerText = coinCountForm.value;

    // Изменить
    const coinCountEditInput = document.createElement('input');
    coinCountEditInput.className = 'input';
    const coinCountEditButton = document.createElement('button');
    coinCountEditButton.innerText = 'Изменить';
    coinCountEditButton.className = 'edit';
    
    // Удалить
    const coinCountDeleteButton = document.createElement('button');
    coinCountDeleteButton.innerText = 'Удалить';
    coinCountDeleteButton.className = 'delete';

    const listItem = document.createElement('li');

    listItem.appendChild(coinCountText);
    listItem.appendChild(coinCountEditInput);
    listItem.appendChild(coinCountEditButton);
    listItem.appendChild(coinCountDeleteButton);

    
    return listItem;
}


function addCoinCountItem(event) {
    event.preventDefault();

    if (coinCountForm.value === '') {
        return alert('Необходимо ввести значение');
    }

    const listItem = createCoinCountItem(coinCountForm.value);

    coinCountItems.appendChild(listItem);

    // Очиста input
    coinCountForm.value = '';

}

const coinCountForm = document.querySelector('.btc-buyCount__input');
const addCoinCount = document.querySelector('.btc-buyCount__add-btn');
const coinCountList = document.querySelector('.btc-buy-count-list');
const coinCountItems = document.querySelector('.btc-buy-count-item')

addCoinCount.addEventListener('click', addCoinCountItem);

