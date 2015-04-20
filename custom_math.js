//How to use this: https://github.com/monkeyraptor/math_operation

var math = {
    check: function (a) {
        var result = 0;
        
        if (a.toString().length > 21 || !isFinite(a)) {
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
        if (!!this.check(result)) {
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
        if (!!this.check(result)) {
            result = "Result is too LARGE: " + result;
        }
        
        return result;
    },

    permutation: function (n, k) {
        var start, 
            numerator = 1,
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
        if (!!this.check(result)) {
            result = "Result is too LARGE: " + result;
        }
        
        return result;
    },
    
    addcomma: function (your_number) {
        var f = [],
            p, 
            r, 
            i = 1;            
          
        if (!isNaN(your_number)){
            if (your_number < 0) { p = "-"; }
            else { p = ""; }   
        
            r = Math.floor(Math.abs(your_number)).toString();
            f = r.split("").reverse();
        
            for (i; i<= Math.floor(f.length/4); i++) {
                f.splice((4 * i - 1), 0, ",");
            }
            your_number = p + f.reverse().join("");
        } else {
            your_number = "INPUT ERROR: must be number";
        }       
      
      return your_number;
    },
    
    fibonacci: function(first, second, how_many) {
        var i = 2,            
            result,            
            array; //starting numbers
        
        if (Number(first) !== 0 && Number(second) !== 0 && Number(how_many) !== 0) {
            first = Math.floor(first);
            second = Math.floor(second);
            how_many = Math.floor(how_many);
            array = [first, second];
            
            for (i = 2; i <= how_many + 1; i++) {
                array.push(array[i - 1] + array[i - 2]);
            }
            result = array.join(", ");
        } else {
          result = "ERROR input: only accepts number and non-zero";
        }        
        
        return result;
    }
};
