//READTHIS: https://github.com/monkeyraptor/math_operation

/*
 * Change this "math" keyword if it collided with your own JavaScript thingy.
 * For example, "goat".
 * Then to call the *factorial* function: goat.factorial(2).
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
        
        if (!isNaN(n) && n > -1) {
            if (n === 0 && n === 1) {
                result = 1;
            } else if (n > 1) {
                n = this.rd(n);
                for (i; i <= n; i++) {
                    result *= i;
                }
            }
        } else {
            result = "INPUT ERROR: n >= 0";
        }
        if (this.check(result) > 0) {
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

        if (n - k >= 0 && n >= 0 && k >= 0) {
            n = this.rd(n);
            k = this.rd(k);

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
        if (this.check(result) > 0) {
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

        if (n - k >= 0 && n >= 0 && k >= 0) {
            n = this.rd(n);
            k = this.rd(k);
            if (n === 0 || k === 0) {
                result = 1;
            } else if (n === k) {
                result = this.factorial(n);
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
        if (this.check(result) > 0) { //updated this (2015-04-21)
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

            r = this.ab(this.rd(your_number)).toString();
            f = r.split("").reverse();

            for (i; i <= this.rd(f.length / 4); i++) {
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

        if (!isNaN(first) && !isNaN(second) && Number(how_many) > 0) { //allows 1st and 2nd numbers to be 0, but not *how_many*
            first = this.rd(first);
            second = this.rd(second);
            how_many = this.rd(how_many);
            array = [first, second];

            for (i = 2; i <= how_many + 1; i++) {
                array.push(array[i - 1] + array[i - 2]);
            }
            result = array.join(", ");
        } else {
            result = "INPUT ERROR: only accepts integer for 1st and 2nd numbers, and natural number for 3rd number (N*)";
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
                a = this.ab(this.rd(a));
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
                    divider = this.rd(a_l / 2);

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
                a = this.rd(a);
                limit = this.rd(this.sqr(a));
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
            start = this.rd(start);
            how_many = this.rd(how_many);

            for (start;  how_many > 0;  start++) {
                if (!this.prime_check(start).match(/not/gi)) {
                    primes.push(start);
                    --how_many;
                }
            }

            result = primes.join(", ");
        } else {
            result = "INPUT ERROR: only positive integer, how_many > 0, start > 1";
        }

        return result;
    },
    
    //*****************************************
    //[9] Generate Pascal's triangle sequence (one particular line or many lines)
    pascal_triangle: function (a, b) {
        "use strict";
        var array = [],
            i = 0,
            j,
            k = 0,
            result = {}, 
            store = [];
            
        //SPLENDID arithmetic method from http://www.ywhmaths.webs.com/Arithmetic/Pascal.html
        function pt(n, r) { //pt as in *Pascal's Triangle*
            var buffer;
            if (n > 1 && r > 0 && r < n) {
                buffer = pt(n - 1, r - 1) + pt(n - 1, r);
            } else {  
                buffer = 1;
            }
            return buffer;                
        }
        
        if (Number(a) > 0) {
            a = this.rd(a); //round down
            
            for (i; i < a; i++) {
                j = 0;
                array = []; //empty the *array* buffer
                for (j; j <= i; j++) {
                    array.push(pt(i, j)); //fill it again
                }
                result[i] = array; //fill the *result* object with the *array*
            }    
            
            if (Number(b) === 0) { //only a particular line                
                result = result[a - 1].join(", "); //array to string
                
            } else if (Number(b) === 1) { //show all lines until the limit number given                
                for (k; k < a; k++) {
                    store.push(result[k].join(" ")); //this can be changed to fit your layout.
                }
                
                result = store.join(" | "); //this can be changed to fit your layout.
                
            } else {                
                result = "INPUT ERROR: 0 or 1 for flag";                
            }            
        } else {            
            result = "INPUT ERROR: must be natural number (N*)";
        }

        return result; //string
    }
};
