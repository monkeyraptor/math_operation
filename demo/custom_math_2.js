/*! READTHIS: https://github.com/monkeyraptor/math_operation 
 *
 *  This has no *this* keyword for inner object function invocation.
 *  They're all using absolute reference.
 *
 *  Change "math" global keyword if it collided with your own JavaScript thingy.
 *
 *  There are "math" and "misc_math" variables (all lowercase).
 * 
 *  For example:
 *  switch "math" and "misc_math" into "goat" and "misc_goat", respectively. ALL OF THEM.
 *  Then to call the *factorial* function: goat.factorial(2).
 */

// GLOBAL VARIABLES
var math, misc_math;

// "math" variable definitions
math = {
    /*****************************************/
    //[1] Factorial
    factorial: function (n) {
        "use strict";
        var i = 1,
            result = 1;

        if (!isNaN(n) && n > -1) {
            n = misc_math.rd(n);
            if (n > 1) {
                while (i <= n) {                    
                    result *= i;
                    i += 1;
                }
            }
        } else {
            result = "INPUT ERROR: n >= 0";
        }
        if (misc_math.check(result) > 0 && !result.toString().match(/error/gi)) {
            result = "Result is too LARGE: " + result;
        }
        return result;
    },

    /*****************************************/
    //[2] Combination
    combination: function (n, k) {
        "use strict";
        var start,
            numerator = 1,
            denumerator = 1,
            i = 1,
            result;

        if (n - k >= 0 && n >= 0 && k >= 0) {
            n = misc_math.rd(n);
            k = misc_math.rd(k);

            if (n === k) {
                result = 1;
            } else if (k === 1) {
                result = n;
            } else {
                start = n - k + 1;

                while (i <= k) {
                    denumerator *= i;
                    i += 1;
                }
                while (start <= n) {
                    numerator *= start;
                    start += 1;
                }
                result = numerator / denumerator;
            }
        } else {
            result = "INPUT ERROR: n >= k, n >= 0, k >= 0";
        }
        if (misc_math.check(result) > 0 && !result.toString().match(/error/gi)) {
            result = "Result is too LARGE: " + result;
        }
        return result;
    },

    /*****************************************/
    //[3] Permutation
    permutation: function (n, k) {
        "use strict";
        var start,
            numerator = 1,
            result;

        if (n - k >= 0 && n >= 0 && k >= 0) {
            n = misc_math.rd(n);
            k = misc_math.rd(k);
            if (n === 0 || k === 0) {
                result = 1;
            } else if (n === k) {
                result = math.factorial(n);
            } else if (k === 1) {
                result = n;
            } else {
                start = n - k + 1;
                while (start <= n) {
                    numerator *= start;
                    start += 1;
                }
                result = numerator;
            }
        } else {
            result = "INPUT ERROR: n >= k, n >= 0, k >= 0";
        }
        if (misc_math.check(result) > 0 && !result.toString().match(/error/gi)) {
            result = "Result is too LARGE: " + result;
        }
        return result;
    },

    /*****************************************/
    //[4] Adding comma to large integer
    addcomma: function (your_number) {
        "use strict";
        var f = [],
            p,
            r,
            i = 1;

        if (!isNaN(your_number)) {
            if (your_number < 0) {
                p = "-";
            } else {
                p = "";
            }

            r = misc_math.ab(misc_math.rd(your_number)).toString();
            f = r.split("").reverse();

            while (i <= misc_math.rd(f.length / 4)) {
                f.splice((4 * i - 1), 0, ",");
                i += 1;
            }
            your_number = p + f.reverse().join("");
        } else {
            your_number = "INPUT ERROR: must be number";
        }
        return your_number;
    },

    /*****************************************/
    //[5] Generating Fibonacci sequence
    fibonacci: function (first, second, how_many) {
        "use strict";
        var i = 2,
            result,
            array; //starting numbers

        if (!isNaN(first) && !isNaN(second) && Number(how_many) > 0) {
            first = misc_math.rd(first);
            second = misc_math.rd(second);
            how_many = misc_math.rd(how_many);
            array = [first, second];

            while (i <= how_many + 1) {
                array.push(array[i - 1] + array[i - 2]);
                i += 1;
            }
            result = array.join(", ");
        } else {
            result = "INPUT ERROR: only accepts integer for 1st and 2nd numbers, and natural number for 3rd number (N*)";
        }
        return result;
    },

    /*****************************************/
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

        if (Number(a) !== 0) { //check if number and non-zero
            if (a < 0) { //convert it to positive integer and round down
                a = misc_math.ab(misc_math.rd(a));
            }
            while (i <= a) {
                if (a % i === 0) {
                    array.push(i);
                }
                i += 1;
            }

            if (Number(b) === 1) { //flag for displaying multiplication of the factors
                a_l = array.length;

                if (a_l % 2 === 0) { //if the array length is even
                    divider = a_l / 2;

                    while (j < divider) {
                        left.push(array[j]);
                        right.push(array[j + divider]);
                        j += 1;
                    }

                    right.reverse();
                    array = [];

                    while (k < left.length) {
                        array.push(left[k] + " * " + right[k]);
                        k += 1;
                    }
                } else { //for odd array length
                    divider = misc_math.rd(a_l / 2);

                    while (j < divider) {
                        left.push(array[j]);
                        right.push(array[j + divider + 1]);
                        j += 1;
                    }

                    left.push(array[divider]);
                    right.reverse().push(left[left.length - 1]);
                    array = [];

                    while (k < left.length) {
                        array.push(left[k] + " * " + right[k]);
                        k += 1;
                    }
                }
            } else if (Number(b) !== 0 && Number(b) !== 1) {
                array = ["no", "such", "flag!"];
            }
            if (!!array[1] && !!array[1].toString().match(/such/gi)) {
                result = array.join(" ");
            } else {
                result = array.join(", ");
            }
        } else {
            result = "INPUT ERROR: only accepts non-zero integer";
        }
        return result;
    },

    /*****************************************/
    //[7] Checking prime number
    prime_check: function (a) {
        "use strict";
        var result,
            i = 2,
            limit;

        //maximum digit length = 21 (999,999,999,999,999,999,999)
        if (a.toString().length < 21) {
            if (!isNaN(a) && a > 1) {
                a = misc_math.rd(a);
                limit = misc_math.rd(misc_math.sqr(a));
                result = "PRIME number";

                while (i <= limit) {
                    if (a % i === 0) {
                        result = "Not a prime number";
                        break;
                    }
                    i += 1;
                }

            } else {
                result = "INPUT ERROR: only positive integer > 1";
            }

        } else {
            result = "INPUT ERROR: digit length <= 21";
        }

        return result;
    },

    /*****************************************/
    //[8] Generate prime numbers
    generate_prime: function (start, how_many) {
        "use strict";
        var result,
            primes = [];

        if (Number(start) > 1 && Number(how_many) > 0) {
            start = misc_math.rd(start);
            how_many = misc_math.rd(how_many);

            while (how_many > 0) {
                if (!math.prime_check(start).match(/not/gi)) {
                    primes.push(start);
                    how_many -= 1;
                }
                start += 1;
            }

            result = primes.join(", ");
        } else {
            result = "INPUT ERROR: only positive integer, how_many > 0, start > 1";
        }

        return result;
    },

    /*****************************************/
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
            a = misc_math.rd(a); //round down

            while (i < a) {
                j = 0;
                array = []; //empty the *array* buffer
                while (j <= i) {
                    array.push(pt(i, j)); //fill it again
                    j += 1;
                }
                result[i] = array; //fill the *result* object with the *array*
                i += 1;
            }
            if (Number(b) === 0) { //only a particular line
                result = result[a - 1].join(", "); //array to string

            } else if (Number(b) === 1) { //show all lines until the limit number given
                while (k < a) {
                    store.push(result[k].join(" ")); //this can be changed to fit your layout.
                    k += 1;
                }

                result = store.join(" | "); //this can be changed to fit your layout.

            } else {
                result = "INPUT ERROR: 0 or 1 for flag";
            }
        } else {
            result = "INPUT ERROR: must be natural number (N*)";
        }

        return result; //string
    },

    /*****************************************/
    //[10] Least common multiple (LCM)
    lcm: function (a, b, c) { //min 2 inputs, max of 3
        "use strict";
        var gcf,
            result,
            t,
            u,
            v = [],
            z = [];

        if (isNaN(c)) { //only 2 inputs provided
            if (a > 0 && b > 0) {
                a = misc_math.rd(a);
                b = misc_math.rd(b);
                v = [a, b];
                z = v.sort(misc_math.sorthl);
                t = z[0] % z[1];

                if (t === 0) {
                    result = z[0];

                } else {
                    gcf = math.gcf(z[0], z[1]); //GCF
                    result = z[0] * z[1] / gcf;
                }
            } else {
                result = "INPUT ERROR: min 2 inputs and natural number (N*)";
            }

        } else { //3rd input is provided
            if (a > 0 && b > 0 && c > 0) {
                a = misc_math.rd(a);
                b = misc_math.rd(b);
                c = misc_math.rd(c);
                v = [a, b, c];
                z = v.sort(misc_math.sorthl);

                if (z[0] % z[2] === 0) {
                    result = math.lcm(z[0], z[1], undefined);

                } else if (z[0] % z[1] === 0) {
                    result = math.lcm(z[0], z[2], undefined);

                } else {
                    t = math.lcm(z[0], z[1], undefined);
                    u = math.lcm(t, z[2], undefined);
                    result = math.lcm(t, u, undefined);
                }
            } else {
                result = "INPUT ERROR: inputs must be natural number (N*)";
            }
        }

        return result; //number
    },

    /*****************************************/
    //[11] Greatest common factor (GCF)
    gcf: function (a, b, c) { //min 2 inputs, max of 3
        "use strict";
        var num_1,
            num_2,
            num_3,
            result;

        if (isNaN(c)) { //3rd input undefined
            if (a > 0 && b > 0) {
                a = misc_math.rd(a);
                b = misc_math.rd(b);

                //get factors - convert string to array
                num_1 = math.factorof(a, 0).split(", ");
                num_2 = math.factorof(b, 0).split(", ");

                //put result
                result = misc_math.c_a(num_1, num_2).same_elements
                        .sort(misc_math.sorthl)[0];
            } else {
                result = "INPUT ERROR: min 2 inputs and natural number (N*)";
            }
        } else if (Number(c) > 0) { //3rd input is provided
            a = misc_math.rd(a);
            b = misc_math.rd(b);
            c = misc_math.rd(c);

            //get factors - convert string to array
            num_1 = math.factorof(a, 0).split(", ");
            num_2 = math.factorof(b, 0).split(", ");
            num_3 = math.factorof(c, 0).split(", ");

            //put result
            result = misc_math.c_a(misc_math.c_a(num_1, num_2).same_elements, num_3)
                    .same_elements.sort(misc_math.sorthl)[0];
        } else {
            result = "INPUT ERROR: inputs must be natural number (N*)";
        }

        return result; //number
    }
};

/***************************************************************************/
// "misc_math" variable definitions
misc_math = {
    //compare two arrays
    c_a: function (a, b) { //https://github.com/monkeyraptor/compare_2_arrays
        "use strict";
        var c,
            d,
            l_0,
            l_1,
            obj = {};
        function trim(a) {
            var i = 0,
                l = a.length,
                buffer = [];
            while (i < l) {
                if (!a[i].toString().match("(deleted)")) {
                    buffer.push(a[i]);
                }
                i += 1;
            }
            return buffer;
        }
        function splice_it(k, l, m, n) {
            var i = 0,
                j,
                buffer = [];
            while (i < m) {
                j = 0;
                while (j < n) {
                    if (l[j] === k[i]) {
                        buffer.push(l[j]);
                        l.splice(j, 1, l[j] + " (deleted)");
                        k.splice(i, 1, l[i] + " (deleted)");
                    }
                    j += 1;
                }
                i += 1;
            }
            return {
                "difference": trim(k).concat(trim(l)),
                "same_elements": buffer
            };
        }
        if (typeof a === "object" && typeof b === "object") {
            c = a.slice();
            d = b.slice();
            l_0 = c.length;
            l_1 = d.length;
            if (c.length >= d.length) {
                obj = splice_it(c, d, l_0, l_1);
            } else {
                obj = splice_it(d, c, l_1, l_0);
            }
        } else {
            obj = {
                "difference": [],
                "same_elements": []
            };
        }
        return obj;
    },

    //checking equal or above 21 digit length or infinity
    check: function (a) {
        "use strict";
        var result = 0;
        if (a.toString().length >= 21 || !isFinite(a) || a.toString().match(/./g)) {
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

    //HIGH to low (numeral) sorter
    sorthl: function (a, b) {
        "use strict";
        return parseInt(b, 10) - parseInt(a, 10);
    },

    //LOW to high (numeral) sorter
    sortlh: function (a, b) {
        "use strict";
        return parseInt(a, 10) - parseInt(b, 10);
    }
};
