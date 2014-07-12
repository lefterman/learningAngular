function reverseString (s) {
	if (typeof s === 'string') {
		return s.split('').reverse().join('');
	}
	return false;
}