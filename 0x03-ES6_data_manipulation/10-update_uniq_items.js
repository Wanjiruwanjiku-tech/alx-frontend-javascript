// returns an updated map for all items with initial quantity at 1

export default function updateUniqueItems(myMap) {
    if (!(myMap instanceof Map)){
        throw new Error('Cannot process');
    } else {
        // Iterate over each item in map
        for (let [key, value] of myMap) {
            if (value === 1){
                myMap.set(key, 100);
            }
        }
        return myMap;
    }
}