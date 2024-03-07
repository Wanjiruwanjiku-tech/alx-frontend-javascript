import Building from './5-building';
// A class that extends from another
class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // sqft is assigned to parent class
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
export default SkyHighBuilding;