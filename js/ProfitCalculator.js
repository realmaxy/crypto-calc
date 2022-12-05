
function createCoinCountItem() {

    const coinCountText = document.createElement('p');
    coinCountText.className = 'items-text';
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


const coinCountForm = document.querySelector('.btc-buyCount__input');
const coinCountAddButton = document.querySelector('.btc-buyCount__add-btn');
const coinCountList = document.querySelector('.btc-buy-count-list');
const coinCountListItem = document.querySelectorAll('.btc-buy-count-item');

coinCountAddButton.addEventListener('click', addCoinCountItem);

