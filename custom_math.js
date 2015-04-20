var math = {
    check: function (a) {
        var result = 0;
        if (!!a.toString().match(/e\+/g) || !isFinite(a)) {
            result = 1;
        }
        return result;
    },
    
    factorial: function (n) {
        var i = 1, 
            result = 1;
        if (Number(n) >= 0) {
            if (n > 1) {
                for (i; i <= n; i++) {
                    result *= i;
                }
            }
        } else {
            result = "INPUT ERROR: n >= 0";
        }
        if (!!this.check) {
            result = "Result is too LARGE: " + result;
        }
        return result;
    },
    
    combination: function (n, k) {
        var start, 
            numerator = 1, 
            denumerator = 1, 
            i = 1,
            result;
        if (n >= k && Number(n) >= 0 && Number(k) >= 0) {
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
        if (!!this.check) {
            result = "Result is too LARGE: " + result;
        }
        return result;
    },

    permutation: function (n, k) {
        var start, numerator = 1,
            result;
        if (n >= k && Number(n) >= 0 && Number(k) >= 0) {
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
        if (!!this.check) {
            result = "Result is too LARGE: " + result;
        }
        return result;
    }
};
