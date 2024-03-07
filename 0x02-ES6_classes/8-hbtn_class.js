export default class HolbertonClass {
    constructor(size, location) {
      this.size = size;
      this.location = location;
    }

    // getter and setter for each attribute
    get size() {
      return this._size;
    }
  
    set size(value) {
      this._size = value;
    }
  
    get location() {
      return this._location;
    }
  
    set location(value) {
      this._location = value;
    }

    // Handle casting
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
        return this.size;
      }
      if (hint === 'string') {
        return this.location;
      }
      return this;
    }
  }