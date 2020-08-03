class Point {

    #_x = 0;
    #_y = 0;

    get x() {
        return this.#_x;
    }

    get y() {
        return this.#_y;
    }

    /*
     * We made the Point instance immutable by disabling setters.
     */
    // set x(value) {
    //     this.#_x = value;
    // }

    // set y(value) {
    //     this.#_y = value;
    // }

    constructor(valueX, valueY) {

        if ('number' != typeof valueX) {
            throw new Error(Point.messageBundle.firstParameterNotANumber);
        }

        if ('number' != typeof valueY) {
            throw new Error(Point.messageBundle.secondParameterNotANumber);
        }

        this.#_x = valueX;
        this.#_y = valueY;
    }

    distance() {
        return Math.sqrt((this.#_x * this.#_x) + (this.#_y * this.#_y));
    }

    static messageBundle = {
        firstParameterNotANumber: 'First parameter must be a number.',
        secondParameterNotANumber: 'Second parameter must be a number.'
    }
}

module.exports = Point;