
import { assets } from './asset.js';


//Will find the percentage of the portfolio values
export const calculatePortfolioValue = () => {
    return assets.reduce((total, asset) => {
        return total + (asset.price * asset.quantity); 
    }, 0); 
};

//calculate allocation of assets as a percentage
export const getPortfolioAllocation = () => {
    const totalValue = calculatePortfolioValue(); 
    return assets.map(asset => {
        const allocation = (asset.price * asset.quantity) / totalValue * 100; 
        return {
            name: asset.name,
            allocatione: allocation.toFixed(2) 
        };
    });
};



