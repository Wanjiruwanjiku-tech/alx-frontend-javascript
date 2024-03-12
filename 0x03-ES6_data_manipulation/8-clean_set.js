// Returns a string of all the set values that start with a specific string

export default function cleanSet(set, startString) {
    let result = '';
    for (let item of set) {
        if (item.startsWith(startString)) {
            result += item.slice(startString.length) + '-';
        }
    }
    return result.slice(0, -1); // remove the trailing '-'
}