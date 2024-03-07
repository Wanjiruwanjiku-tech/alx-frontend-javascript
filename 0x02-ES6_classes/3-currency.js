export default class Currency {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
    // setter method for code
    set code(code) {
        if (typeof code === 'string') {
            this._code = code;
        } else {
            throw new TypeError('Code must be a String')
        }
    }
    // getter method for code
    get code(){
        return this._code;
    }

    // setter method for name
    set name(name) {
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw new TypeError('Name must be a String')
        }
    }
    // getter method for name
    get name(){
        return this._name;
    }

    displayFullCurrency() {
        return `${this.name} (${this._code})`;
    }
}