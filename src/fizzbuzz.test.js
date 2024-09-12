import fizzbuzz from './fizzbuzz';

describe('Fizzbuzz', () => {
    test('expect true to be true', () => {
        expect(true).toBe(true);
    });

    test('should return fizzbuzz when passing 15', () => {
        //Arrange


        //Act
        const result = fizzbuzz(15)

        //Assert
        expect(result).toBe('fizzbuzz')
    })

    test('should return fizz when passing 3', () => {
        //Arrange


        //Act
        const result = fizzbuzz(3)

        //Assert
        expect(result).toBe('fizz')
    })


});
