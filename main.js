import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

document.addEventListener('DOMContentLoaded', () => {

    displayPortfolio();

//instances of buy and sell transactions to be dynamically displayed on portfolio
    const transaction1 = new Transaction(1, 'buy', 23); 
    const transaction2 = new Transaction(2, 'sell', 16); 

   
    displayTransaction(transaction1);
    displayPortfolio(); 

    displayTransaction(transaction2);
    displayPortfolio(); 
});

//will show the percentages of stocks and bond sales
function displayPortfolio() {
    const totalValue = calculatePortfolioValue();
    const allocation = getPortfolioAllocation();
    

    document.getElementById('portfolio-data').innerHTML = `
        <h2>Total Portfolio Value: $${totalValue.toFixed(2)}</h2>
        <h3>Portfolio Allocation:</h3>
        ${allocation.map(asset => `
            <p>${asset.name}: ${asset.allocatione}%</p>
        `).join('')}
    `;
}

function displayTransaction(transaction) {
    const transactionDetails = document.getElementById('transaction-details');
    
    const transactionElement = document.createElement('p');
    transactionElement.textContent = `Transaction: ${transaction.getTransactionDetails()}`;
    transactionDetails.appendChild(transactionElement);
}
