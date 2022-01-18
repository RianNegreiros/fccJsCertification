function palindrome (str) {
    const regex = /[\W_]/g;
    const letters = str.toLowerCase().replace(regex, "").split("");
    for (let i in letters) {
        if (letters[i] !== letters[letters.length - 1 - i]) return false;
    }
    return true;
}

palindrome("eye");