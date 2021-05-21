const { dollarsToPounds, poundsToDollars } = require('./script');

//Smoke Test
test('This is a Smoke Test to test the tests are working', () => {
	expect(true).toBeTruthy();
});

describe('Describe testing poundToDollars function ', () => {
	test('2 should convert to 2.78', () => {
		expect(poundsToDollars(2)).toBe(2.84);
		expect(poundsToDollars(6.78)).toBeCloseTo(9.6, 1);
	});
	test('should return the data type number', () => {
		expect(typeof poundsToDollars(5)).toBe('number');
	});
	test('should return the data type number', () => {
		expect(() => {
			poundsToDollars('hizxc');
		}).toThrow('Error: You havent entered a number');
	});
	test('should throw an error if more than 2 decimal places are entered', () => {
		expect(() => {
			poundsToDollars(5.2982323);
		}).toThrow('Error: It should be 2 decimal places');
	});

	test('should not allow negative numbers ', () => {
		expect(() => {
			poundsToDollars(-5.29);
		}).toThrow('Error: Please Enter Valid currency');
	});
});

describe('Describe testing dollarsToPounds function ', () => {
	test('2 should convert to 2.78', () => {
		expect(dollarsToPounds(2)).toBe(1.44);
	});
	test('should return the data type number', () => {
		expect(typeof dollarsToPounds(5)).toBe('number');
	});
	test('should return the data type number', () => {
		expect(() => {
			dollarsToPounds('hizxc');
		}).toThrow('Error: You havent entered a number');
	});
	test('should throw an error if more than 2 decimal places are entered', () => {
		expect(() => {
			dollarsToPounds(5.2982323);
		}).toThrow('Error: It should be 2 decimal places');
	});

	test('should not allow negative numbers ', () => {
		expect(() => {
			poundsToDollars(-78);
		}).toThrow('Error: Please Enter Valid currency');
	});
});
