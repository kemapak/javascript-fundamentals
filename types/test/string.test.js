describe('Given a string type ', () =>{

	let str, unicodeStr, emojiStr;

	beforeAll(() => {
		str = 'Hello, World';
		unicodeStr = '\ud83d\udc99'; //  '💙'
		emojiStr = '💙';  // '\ud83d\udc99'
	});

	test('it\'s length should return number of 16-bit values.', () =>{

		expect(str.length).toEqual(12);
		expect(unicodeStr.length).toEqual(2);
		expect(emojiStr.length).toEqual(2);
	});
});
