import { assets, getAssetById } from './asset.js';

export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.processTransaction();
    }

//With every new transaction, the data will be processed to show how much stock is sold
    processTransaction() {
        const asset = getAssetById(this.assetId); 

        if (this.type === 'buy') {
            asset.quantity += this.quantity;
            console.log(`Bought ${this.quantity} of ${asset.name} at $${asset.price} each. New quantity: ${asset.quantity}`);
        } 
        else if (this.type === 'sell') {
            if (asset.quantity < this.quantity) {
                throw new Error(`Insufficient quantity for sale of ${asset.name}`);
            }
            asset.quantity -= this.quantity;
            console.log(`Sold ${this.quantity} of ${asset.name} at $${asset.price} each. New quantity: ${asset.quantity}`);
        }
        else {
            throw new Error(`Transaction could not be processed.`);
        }
    }
}
