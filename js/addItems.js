
function createCoinCountItem() {

    const coinCountText = document.createElement('p');
    coinCountText.className = 'count-text';
    coinCountText.innerText = coinCountForm.value;

    const coinCountDeleteButton = document.createElement('button');
    coinCountDeleteButton.className = 'delete';
    coinCountDeleteButton.onclick = () => {
        const getParent = coinCountDeleteButton.parentElement;
        getParent.remove();
    }
    
    const newItem = document.createElement('li');
    newItem.className = 'btc-buy-count-item';


    newItem.appendChild(coinCountText);
    newItem.appendChild(coinCountDeleteButton);


    return newItem;
}


function addCoinCountItem(event) { 
    event.preventDefault();

    if(coinCountForm.value === '') {
        return alert('Нужно ввести значение');
    }

    const newItem = createCoinCountItem(coinCountForm.value) 
    coinCountList.appendChild(newItem);
    coinCountForm.value = '';

}


function createCoinPriceItem() {

    const coinPriceText = document.createElement('p');
    coinPriceText.className = 'price-text';
    coinPriceText.innerText = coinPriceForm.value;

    const coinPriceDeleteButton = document.createElement('button');
    coinPriceDeleteButton.className = 'delete';
    coinPriceDeleteButton.onclick = () => {
        const getParent = coinPriceDeleteButton.parentElement;
        getParent.remove();
    }
    
    const newItem = document.createElement('li');
    newItem.className = 'btc-buyPrice-item';


    newItem.appendChild(coinPriceText);
    newItem.appendChild(coinPriceDeleteButton);


    return newItem;
}


function addCoinPriceItem(event) { 
    event.preventDefault();

    if(coinPriceForm.value === '') {
        return alert('Нужно ввести значение');
    }

    const newItem = createCoinPriceItem(coinPriceForm.value) 
    coinPriceList.appendChild(newItem);
    coinPriceForm.value = '';

}



const coinCountForm = document.querySelector('.btc-buyCount__input');
const coinCountAddButton = document.querySelector('.btc-buyCount__add-btn');
const coinCountList = document.querySelector('.btc-buy-count-list');
const coinCountListItem = document.querySelectorAll('.btc-buy-count-item');

const coinPriceForm = document.querySelector('.btc-buyPrice__input');
const coinPriceAddButton = document.querySelector('.btc-buyPrice__add-btn');
const coinPriceList = document.querySelector('.btc-buyPrice-list');
const coinPriceListItem = document.querySelectorAll('.btc-buyPrice-item');


coinCountAddButton.addEventListener('click', addCoinCountItem);
coinPriceAddButton.addEventListener('click', addCoinPriceItem);

