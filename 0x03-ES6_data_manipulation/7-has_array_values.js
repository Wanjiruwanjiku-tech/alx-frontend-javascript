// Returns a boolean if all the elements in the array within the set
export default function hasValuesFromArray(set, array) {
    return array.every(value => set.has(value));
}