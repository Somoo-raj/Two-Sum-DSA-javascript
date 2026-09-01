
//  function countDigit(n) {
//     let count = 0;
//     while (n > 0) {
//         count++;
//         n = Math.floor( n / 10);
//     }
//     return count;
// }

// console.log(countDigit(153));

// function isPalindrome(n) {
//     let original = n;
//     let rev = 0;

//     while (n > 0) {
//         let lastDigit = n % 10;
//         rev = (rev * 10) + lastDigit;
//         n = Math.floor(n / 10);
//     }
//     return original === rev;
// }

// console.log(isPalindrome(153));

// function reverseNumber(n) {
//     let rev = 0;
//     while (n > 0) {
//         let lastDigit = n % 10;
//         rev = (rev * 10) + lastDigit;
//         n = Math.floor(n / 10);
//     }
//     return rev
// };

// console.log(reverseNumber(8299)); // reverse number is 9928


/* function sumDigits(n) {
    let sum = 0;
    while (n > 0) {
        let lastDigit = n % 10;
        sum = sum + lastDigit;
        n = Math.floor(n / 10);
    }
    return sum;
}
console.log(sumDigits(432)); // 9 */

/* function armstrongNumber(n) {
    let original = n;
    let cube = 0;
    
    while (n > 0) {
        let lastDigit = n % 10;
        cube += lastDigit * lastDigit * lastDigit;
        n = Math.floor(n / 10);
    
    }
    return original === cube;
}
console.log(armstrongNumber(153)); */

/* function solve(n) {
    let count = 0;
    while (n > 0) {
        let lastDigit = n % 10;
        if (lastDigit % 2 === 0) {
            count++;
        }
        n = Math.floor(n / 10);
    }
    return count;
}
console.log(solve(82541)); */

// Q.1 n = 534, output = 12 two sum question

/* function twoSum(n) {
    let sum = 0;
    while (n > 0) {
        let lastDigit = n % 10;
        sum = sum + lastDigit;
        n = Math.floor(n / 10);
    }
    return sum;
}
console.log(twoSum(534)); // output will be 12 */

// Q.2 n = 234, output = 24 two (multiplicaton)

/* function multiplicaton(n) {
    let sum = 1;
    while (n > 0) {
        let lastDigit = n % 10;
        sum = sum * lastDigit;
        n = Math.floor(n / 10);
    }
    return sum;
}
console.log(multiplicaton(234)); // output will be 24 */

// Q.3 n = 72354 , output = 3 (count odd numbers)

/* function oddCount(n) {
    let count = 0;
    while (n > 0) {
        let lastDigit = n % 10;
        if (lastDigit % 2 !== 0) {
            count++;
        }
        n = Math.floor(n / 10);
    }
    return count;
}
console.log(oddCount(72354)); output 3 */

/* Q.4 n = 5824 , output = 8 (largest digit) */

/* function largestDigit(n) {
    let maxDigit = 0;
    while( n > 0) {
        let lastDigit = n % 10;
        if (lastDigit > maxDigit) {
            maxDigit = lastDigit;
        }
        n = Math.floor(n / 10);
    }
    return maxDigit;
};

console.log(largestDigit(5824)); // output will be 8 */


/* Q.5 n = 305020 , output = 3 (zero digit check) */

/* function digitCheck (n) {
    let countZero = 0;

    while (n > 0) {
        let lastDigit = n % 10;
        if (lastDigit === 0) {
            countZero++;
        }
        n = Math.floor(n / 10);
    }
    return countZero;
};

console.log(digitCheck(305020)); output will be 3 */


/* Q.6 n = 1234 , output = 4321 (reverse number) */

/* function revNumber(n) {
    let rev = 0;
    while ( n > 0) {
        let lastDigit = n % 10;
        rev = (rev * 10) + lastDigit;
        n = Math.floor(n / 10);
    }
    return rev;
}
console.log(revNumber(1234)); // output will be 4321 */

