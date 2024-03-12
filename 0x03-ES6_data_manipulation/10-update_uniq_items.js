// returns an updated map for all items with initial quantity at 1

export default function updateUniqueItems(myMap) {
    if (!(myMap instanceof Map)){
        throw new Error('Cannot process');
    } else {
        myMap.forEach((value, key) => {
            if (value === 1) {
              myMap.set(key, 100);
            }
          });
    }
}