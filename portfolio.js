
import { assets } from './asset.js';

export const calculatePortfolioValue = () => {
    return assets.reduce((total, asset) => {
        return total + (asset.price * asset.quantity); 
    }, 0); 
};


export const getPortfolioAllocation = () => {
    const totalValue = calculatePortfolioValue(); 
    return assets.map(asset => {
        const allocation = (asset.price * asset.quantity) / totalValue * 100; 
        return {
            name: asset.name,
            allocation: allocation.toFixed(2) 
        };
    });
};
