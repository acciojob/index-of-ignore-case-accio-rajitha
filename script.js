function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (s1.length === 0 || s2.length === 0) {
        return -1; // Handle edge cases like empty strings
    }

    const lowerS1 = s1.toLowerCase();
    const lowerS2 = s2.toLowerCase();

    for (let i = 0; i < lowerS1.length; i++) {
        let match = true;
        for (let j = 0; j < lowerS2.length; j++) {
            if (lowerS1[i + j] !== lowerS2[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }

    return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
