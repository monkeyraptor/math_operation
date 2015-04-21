//How to use this: https://github.com/monkeyraptor/math_operation

//Change this "math" keyword if it collided with your own JavaScript thingy.
//For example, "goat".
//Then to call the *factorial* function: goat.factorial(2).
var math = {
    //checking above 21 digit length or infinity
    check: function (a) {
        "use strict";
        var result = 0;

        if (a.toString().length > 21 || !isFinite(a)) {
            result = 1;
        }
        return result;
    },

    //rounding down
    rd: function (a) {
        "use strict";
        return Math.floor(a);
    },

    //*****************************************
    //[1] Factorial
    factorial: function (n) {
        "use strict";
        var i = 1,
            result = 1;

        if (Number(n) >= 0) {
            n = this.rd(n);

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
        if (!!this.check(result)) {
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
            n = this.rd(n);
            k = this.rd(k);

            if (n === k || k === 0) {
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
        if (!!this.check(result)) {
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
            n = this.rd(n);
            k = this.rd(k);

            if (n === k || k === 0) {
                result = 1;
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
        if (!!this.check(result)) {
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

            r = this.rd(Math.abs(your_number)).toString();
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

        if (Number(first) !== 0 && Number(second) !== 0 && Number(how_many) !== 0) {
            first = this.rd(first);
            second = this.rd(second);
            how_many = this.rd(how_many);
            array = [first, second];

            for (i = 2; i <= how_many + 1; i++) {
                array.push(array[i - 1] + array[i - 2]);
            }
            result = array.join(", ");
        } else {
            result = "INPUT ERROR: only accepts number and non-zero";
        }
        return result;
    }
};
