// Returns a string of all the set values that start with a specific string

export default function cleanSet(set, startString) {
    let result;
    if (!startString || typeof startString !== 'string') {
      return '';
    } else {
        result = Array.from(set).filter((word) => typeof word === 'string' && word.startsWith(startString));
        result = result.map((word) => word.slice(startString.length));
        return result.join('-');
    }
  }