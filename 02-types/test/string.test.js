describe('Given a string type ', () =>{

	let str, unicodeStr, emojiStr;

	beforeAll(() => {
		str = 'Hello, World';
		unicodeStr = '\uD83D\uDE42'; //  '🙂'
		emojiStr = '🙂';  // '\uD83D\uDE42'
	});

	test('when string is initailized, it\'s length should return number of 16-bit values.', () =>{

		expect(str.length).toEqual(12);
		expect(unicodeStr.length).toEqual(2);
		expect(emojiStr.length).toEqual(2);
	});

	test('when literal defined by double quote \", single quote \', and back quote \` characters should be type of string.', () => {

		let doubleQuoteString = "This is O`Maly or O'Maly, and it's ok to use";
		let singleQuoteString = 'You can put html tags here <div id="123">This a div</div> or even O`Maly with a back quote';
		let backQuoteString = `Back quote string are also called template strings and can span multiple lines, 
		you can add "JavaScript" or O'Maly with single quote`;
		expect(typeof doubleQuoteString).toEqual('string');
		expect(typeof singleQuoteString).toEqual('string');
		expect(typeof backQuoteString).toEqual('string');
	});
});
