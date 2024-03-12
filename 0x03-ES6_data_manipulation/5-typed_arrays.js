//Returns a new array buffer with an Int8 value

export default function createInt8TypedArray(length, position, value) {
    // If adding value is impossible throw an error
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    } else {
        const newBuffer = new ArrayBuffer(length);
        const newView = new DataView(newBuffer, 0, length);
        const newArray = new Int8Array(newBuffer);
        newArray[position] = value;
        
        return newView;
    }
}