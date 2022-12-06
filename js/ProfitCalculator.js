const calcButton = document.querySelector('.calcButton')

calcButton.addEventListener('click', computeProfit)

function computeProfit() {
 
    const countValues = document.querySelectorAll('.count-text')
    const priceValues = document.querySelectorAll('.price-text')
    const orderList = document.querySelector('.orderList')

    
    if(orderList.childNodes.length > 0) {
        for(let i = 0; i <= orderList.childNodes.length; i++) {
            orderList.removeChild(orderList.firstChild)
        }
    }

    if (countValues.length == priceValues.length) {
        for(let i = 0; i < countValues.length; i++) {
            let countValue = countValues[i].innerText;
            let priceValue = priceValues[i].innerText;

            const newItem = document.createElement('p');
            newItem.className = 'text';
            newItem.innerText = countValue * priceValue

            orderList.append(newItem)
        }
    }
    else {
        alert('Необходимо ввести значение')
    }


}

// function computeProfit() {
 
//     const countValue = document.querySelector('.count-text')
//     const priceValue = document.querySelector('.price-text')

//     const newItem = document.createElement('p');
//     newItem.className = 'text';
//     newItem.innerText = countValue.innerText * priceValue.innerText;

//     const orderList = document.querySelector('.orderList')

//     orderList.append(newItem)
// }