import Car from './10-car';
// class inheritance
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // use the parent class
    super(brand, motor, color);
    this.range = range;
  }
  // getter and setter
  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}