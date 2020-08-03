const Point = require('../src/Point.js');

describe('Given a immutable Point class.', () => {

    test('Should able to initialize class.', () => {

        let somePoint = new Point(2, 3);
        expect(somePoint instanceof Point).toBeTruthy();
    });

    test('If first parameter is not a number it should throw an exception.', () =>{

        expect(() => {new Point('3', 3)}).toThrow(Point.messageBundle.firstParameterNotANumber);
        expect(() => {new Point(true, 3)}).toThrow(Point.messageBundle.firstParameterNotANumber);
        expect(() => {new Point({object:'object'}, 3)}).toThrow(Point.messageBundle.firstParameterNotANumber);
        expect(() => {new Point([1, 2], 3)}).toThrow(Point.messageBundle.firstParameterNotANumber);
        expect(() => {new Point(null, 3)}).toThrow(Point.messageBundle.firstParameterNotANumber);
        expect(() => {new Point(undefined, 3)}).toThrow(Point.messageBundle.firstParameterNotANumber);
    });

    test('If second parameter is not a number it should throw an exception.', () =>{

        expect(() => {new Point(3,'3')}).toThrow(Point.messageBundle.secondParameterNotANumber);
        expect(() => {new Point(3,true)}).toThrow(Point.messageBundle.secondParameterNotANumber);
        expect(() => {new Point(3,{object:'object'})}).toThrow(Point.messageBundle.secondParameterNotANumber);
        expect(() => {new Point(3,[1, 2])}).toThrow(Point.messageBundle.secondParameterNotANumber);
        expect(() => {new Point(3,null)}).toThrow(Point.messageBundle.secondParameterNotANumber);
        expect(() => {new Point(3,undefined)}).toThrow(Point.messageBundle.secondParameterNotANumber);
    });

    test('Distance between to points should return 0 or a positive value.', () => {
        let aPoint = new Point(3,4);
        expect(aPoint.distance()).toEqual(5);

        aPoint = new Point(-3,-4);
        expect(aPoint.distance()).toEqual(5);

        aPoint = new Point(0, 0);
        expect(aPoint.distance()).toEqual(0);
    });

    test('We should not be able to change its properties, thus state.', () => {
        let aPoint = new Point(3,4);
        aPoint.x = 5;
        expect(5).not.toEqual(aPoint.x);
    });
});