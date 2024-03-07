export default class Airport {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    // Getter and setter for each attribute
    //name
    set name(name) {
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw new TypeError('Name must be a string');
        }
    }
    get name() {
        return this._name;
    }

    //code
    set code(code) {
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a String')
        } else {
            this._code = code;
        }
    }
    get code() {
        return this._code;
    }
    // String description of the class
    get [Symbol.toStringTag]() {
        return this._code;
    }
}