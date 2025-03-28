// 9. Palindrome Number

function isPalindrome(x: number): boolean {
    const reverse = x.toString().split("").reverse().join("");
    if (Number(reverse) == x) {
        return true
    }else{
        return false
    }
};

console.log(isPalindrome(213))