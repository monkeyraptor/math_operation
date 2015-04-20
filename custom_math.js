var math = {
    combination: function (n, k) {
        var start, numerator = 1, denumerator = 1, i = 1,
            result;
        if (n >= k && Number(n) >= 0 && Number(k) >= 0) {
            if (n === k || k === 0) {
                result = 1;
            } else if (k === 1) {
                result = n;
            } else {
                start = n - k + 1;
                for (i; i <= k; i += 1) {
                    denumerator *= i;
                }
                for (start; start <= n; start += 1) {
                    numerator *= start;
                }
                result = numerator / denumerator;
            }
        } else {
            result = "INPUT ERROR: n >= k, n >= 0, k >= 0";
        }
        if (!!result.toString().match(/e\+/g)) {
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
                for (start; start <= n; start += 1) {
                    numerator *= start;
                }
                result = numerator;
            }
        } else {
            result = "INPUT ERROR: n >= k, n >= 0, k >= 0";
        }
        if (!!result.toString().match(/e\+/g)) {
            result = "Result is too LARGE: " + result;
        }
        return result;
    }
};
