describe("reverseString", function() {
	it("should reverse the given string", function() {
		expect(reverseString('asdf gh jkl�')).toEqual('�lkj hg fdsa');
	});
	
	it("should return false unless a string parameter given", function() {
		expect(reverseString({a:"valami"})).toEqual(false);
		expect(reverseString(234)).toEqual(false);
		var s;
		expect(reverseString(s)).toEqual(false);
	});
});