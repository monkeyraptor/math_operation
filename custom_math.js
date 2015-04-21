//READTHIS: https://github.com/monkeyraptor/math_operation

/*
 * Change math "math" global keyword if it collided with your own JavaScript thingy.
 * For example, "goat".
 * Then to call the *factorial* function: goat.factorial(2).
 */

/*
 * This is without "this" keyword.
 * All using absolute reference "math".
 * So, if you need to change it, make sure to change all "math" (all lowercase) keyword.
 */

var math = {
    //checking above 21 digit length or infinity
    check: function (a) {
        "use strict";
        var result = 0;

        if (!!a.toString().match(/error/gi)) {
            result = -1;
        } else if (a.toString().length > 21 || !isFinite(a)) {
            result = 1;
        }
        
        return result;
    },

    //rounding down
    rd: function (a) {
        "use strict";
        return Math.floor(a);
    },

    //absolute
    ab: function (a) {
        "use strict";
        return Math.abs(a);
    },

    //square root
    sqr: function (a) {
        "use strict";
        return Math.sqrt(a);
    },
    //*****************************************
    //[1] Factorial
    factorial: function (n) {
        "use strict";
        var i = 1,
            result = 1;
        
        if (Number(n) >= 0) {
            n = math.rd(n);

            if (n > 1) {
                for (i; i <= n; i++) {
                    result *= i;
                }
            } else {
                result = 1;
            }
        } else {
            result = "INPUT ERROR: n >= 0";
        }
        if (math.check(result) > 0) {
            result = "Result is too LARGE: " + result;
        }
        return result;
    },

    //*****************************************
    //[2] Combination
    combination: function (n, k) {
        "use strict";
        var start,
            numerator = 1,
            denumerator = 1,
            i = 1,
            result;

        if (n >= k && Number(n) >= 0 && Number(k) >= 0) {
            n = math.rd(n);
            k = math.rd(k);

            if (n === k) {
                result = 1;
            } else if (k === 1) {
                result = n;
            } else {
                start = n - k + 1;

                for (i; i <= k; i++) {
                    denumerator *= i;
                }
                for (start; start <= n; start++) {
                    numerator *= start;
                }
                result = numerator / denumerator;
            }
        } else {
            result = "INPUT ERROR: n >= k, n >= 0, k >= 0";
        }
        if (math.check(result) > 0) {
            result = "Result is too LARGE: " + result;
        }
        return result;
    },

    //*****************************************
    //[3] Permutation
    permutation: function (n, k) {
        "use strict";
        var start,
            numerator = 1,
            result;

        if (n >= k && Number(n) >= 0 && Number(k) >= 0) {
            n = math.rd(n);
            k = math.rd(k);
            
            if (n === 0 || k === 0) {
                result = 1;
            } else if (n === k) {
                result = math.factorial(n);
            } else if (k === 1) {
                result = n;
            } else {
                start = n - k + 1;
                for (start; start <= n; start++) {
                    numerator *= start;
                }
                result = numerator;
            }
        } else {
            result = "INPUT ERROR: n >= k, n >= 0, k >= 0";
        }
        if (math.check(result) > 0) { //updated math (2015-04-21)
            result = "Result is too LARGE: " + result;
        }
        return result;
    },

    //*****************************************
    //[4] Adding comma to large integer
    addcomma: function (your_number) {
        "use strict";
        var f = [],
            p,
            r,
            i = 1;

        if (!isNaN(your_number)) {
            if (your_number < 0) { p = "-"; } else { p = ""; }

            r = math.rd(math.ab(your_number)).toString();
            f = r.split("").reverse();

            for (i; i <= math.rd(f.length / 4); i++) {
                f.splice((4 * i - 1), 0, ",");
            }
            your_number = p + f.reverse().join("");
        } else {
            your_number = "INPUT ERROR: must be number";
        }
        return your_number;
    },

    //*****************************************
    //[5] Generating Fibonacci sequence
    fibonacci: function (first, second, how_many) {
        "use strict";
        var i = 2,
            result,
            array; //starting numbers

        if (Number(first) !== 0 && Number(second) !== 0 && Number(how_many) !== 0) {
            first = math.rd(first);
            second = math.rd(second);
            how_many = math.rd(how_many);
            array = [first, second];

            for (i = 2; i <= how_many + 1; i++) {
                array.push(array[i - 1] + array[i - 2]);
            }
            result = array.join(", ");
        } else {
            result = "INPUT ERROR: only accepts number and non-zero";
        }
        return result;
    },

    //*****************************************
    //[6] Get the factor of a positive integer
    factorof: function (a, b) {
        "use strict";
        var result,
            i = 1,
            j = 0,
            k = 0,
            array = [],
            left = [],
            right = [],
            a_l,
            divider;

        if (!isNaN(a) && a !== 0) { //check if number and non-zero
            if (a < 0) { //convert it to positive integer and round down
                a = math.ab(math.rd(a));
            }
            for (i; i <= a; i++) {
                if (a % i === 0) {
                    array.push(i);
                }
            }
            
            if (Number(b) === 1) { //flag for displaying multiplication of the factors
                a_l = array.length;

                if (a_l % 2 === 0) { //if the array length is even
                    divider = a_l / 2;

                    for (j; j < divider; j++) {
                        left.push(array[j]);
                        right.push(array[j + divider]);
                    }

                    right.reverse();
                    array = [];

                    for (k; k < left.length; k++) {
                        array.push(left[k] + " * " + right[k]);
                    }
                } else { //for odd array length
                    divider = math.rd(a_l / 2);

                    for (j; j < divider; j++) {
                        left.push(array[j]);
                        right.push(array[j + divider + 1]);
                    }

                    left.push(array[divider]);
                    right.reverse().push(left[left.length - 1]);
                    array = [];

                    for (k; k < left.length; k++) {
                        array.push(left[k] + " * " + right[k]);
                    }
                }
            } else if (Number(b) !== 0 && Number(b) !== 1) {
                array = ["no", "such", "flag!"];
            }
            if (!!array[1].toString().match(/such/gi)) {
                result = array.join(" ");
            }  else {
                result = array.join(", ");
            }
        } else {
            result = "INPUT ERROR: only accepts non-zero integer";
        }
        return result;
    },

    //*****************************************
    //[7] Checking prime number
    prime_check: function (a) {
        "use strict";
        var result,
            i = 2,
            limit;

        //maximum digit length = 21 (999,999,999,999,999,999,999)
        if (a.toString().length < 21) {
            if (!isNaN(a) && a > 1) {
                a = math.rd(a);
                limit = math.rd(math.sqr(a));
                result = "PRIME number";

                for (i; i <= limit; i++) {
                    if (a % i === 0) {
                        result = "Not a prime number";
                        break;
                    }
                }

            } else {
                result = "INPUT ERROR: only positive integer > 1";
            }

        } else {
            result = "INPUT ERROR: digit length <= 21";
        }

        return result;
    },

    //*****************************************
    //[8] Generate prime numbers
    generate_prime: function (start, how_many) {
        "use strict";
        var result,
            primes = [];

        if (Number(start) > 1 && Number(how_many) > 0) {
            start = math.rd(start);
            how_many = math.rd(how_many);

            for (start;  how_many > 0;  start++) {
                if (!math.prime_check(start).match(/not/gi)) {
                    primes.push(start);
                    --how_many;
                }
            }

            result = primes.join(", ");
        } else {
            result = "INPUT ERROR: only positive integer, how_many > 0, start > 1";
        }

        return result;
    }
};
