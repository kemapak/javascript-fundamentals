class Point {

    #x = 0;
    #y = 0;

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    /*
     * We made the Point instance immutable by disabling setters.
     */
    // set x(value) {
    //     this.#x = value;
    // }

    // set y(value) {
    //     this.#y = value;
    // }

    constructor(valueX, valueY) {

        if ('number' != typeof valueX) {
            throw new Error(Point.messageBundle.firstParameterNotANumber);
        }

        if ('number' != typeof valueY) {
            throw new Error(Point.messageBundle.secondParameterNotANumber);
        }

        this.#x = valueX;
        this.#y = valueY;
    }

    distance() {
        return Math.sqrt((this.#x * this.#x) + (this.#y * this.#y));
    }

    static messageBundle = {
        firstParameterNotANumber: 'First parameter must be a number.',
        secondParameterNotANumber: 'Second parameter must be a number.'
    }
}

module.exports = Point;
