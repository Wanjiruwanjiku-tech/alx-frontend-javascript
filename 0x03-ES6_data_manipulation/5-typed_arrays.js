//Returns a new array buffer with an Int8 value

export default function createInt8TypedArray(length, position, value) {
    // If adding value is impossible throw an error
    let buffer;
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    } else {
        // create a new array buffer of the specified length
        buffer = new ArrayBuffer(length);
        // create a new Int8Array view on the buffer
        let view = new Int8Array(buffer);
        // set the value at the specified position
        veiw[position] = value;

        return buffer;
    }
}