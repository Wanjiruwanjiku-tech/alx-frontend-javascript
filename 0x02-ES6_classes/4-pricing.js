import Currency from './3-currency';

export default class Pricing {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }
    // Implement getter and setter methods for each attribute
    set amount(amount) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a Number');
        } else {
            this._amount = amount;
        }
    }
    get amount(){
        return this._amount;
    }

    set currency(currency){
        if (currency instanceof Currency) {
            this._currency = currency;
        } else {
            throw new TypeError('Currency must be a number and an Instance of currency')
        }
    }
    get currency() {
        return this._currency;
    }
    
    displayFullPrice() {
        return `${this.amount} ${this.currency.displayFullCurrency()}`
    }

    // Static Method
    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new TypeError('Amount and Conversion rate must be numbers')
        } else {
            return amount * conversionRate;
        }
    }
}