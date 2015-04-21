# Math Operations
***Some mathematical functions in JavaScript***

This is not overriding built-in `Math()` method, just a custom *module* with different functions combined.

I'll be adding more of them lator. Feel free to add more or fork or whatever.

Meanwhile, it consists of:

1. **Factorial**. Usage: `math.factorial(n)`

   >Example: `math.factorial(3)` will generate output `6` (number).

2. **Combination**. Usage: `math.combination(n, k)`

   >Example: `math.combination(5, 2)` will generate output `10` (number).

3. **Permutation**. Usage: `math.permutation(n, k)`
  
   >Example: `math.permutation(5, 2)` will generate output `20` (number).

   >n is **total number**

   >k is the number of **combination** or **permutation**
   
   >Also, browser only *accomodates* 21 digits without compacting it with the *exponent*. So, that.
   
4. **Adding comma for large integer**.
   
   Usage: `math.addcomma(your_number)`
 
   >`your_number` can be positive or negative. It has to be **number** (**integer**). If it has decimal point, it will be rounded down to nearest integer. Once again, browser only *accomodates* 21 digits before it is **compacted** using exponent.

   >Examples: 
   >- `math.addcomma(10000.8)` will generate output `10,000`. It is a `string` output.
   >- `math.addcomma(-28900251)` will generate output `-28,900,251` (`string`).

   >This *isn't* actually a math operation, more like *structuring-number-so-it-can-be-read*.
   
   >Explanation link: [on Monkey Raptor](http://monkeyraptor.johanpaul.net/2014/06/doodle-formatting-integer-with.html)
   
5. **Generating Fibonacci sequence**.
   
   Usage: `math.fibonacci(1st_number, 2nd_number, how_many)`

  >You have to provide all three arguments. Each has to be **non-zero**. And it will be rounded down to nearest integer if you put number with decimal point.
  
  >Example: `math.fibonacci(-1, 2, 5)` will generate output: `-1, 2, 1, 3, 4, 7, 11` (`string` output). It started from -1 and 2, then generated 5 additional numbers sequence.
  
  >Demo link: [on CodePen](http://codepen.io/monkeyraptor/pen/mqiuK/)

6. **Get the factors of positive integer**.
   
   Usage: `math.factorof(the_number, flag)`
  
   >It has `flag`. `0` to return only the factors (string). `1` to return list of multiplications of the factors.
   
   >Examples:
   >- `math.factorof(625, 0)` or just `math.factorof(625)` will generate output `1, 5, 25, 125, 625` (string).
   >- `math.factorof(625, 1)` will generate output `1 * 625, 5 * 125, 25 * 25` (string).

7. **Check prime number**.
   
   Usage: `math.prime_check(the_number)`
  
   >The `the_number` has to be greater than 1 and an integer.
   
   >Examples:
   >- `math.prime_check(210000000)` will generate output `Not a prime number` (string).
   >- `math.prime_check(31)` will generate output `PRIME number` (string).

   >Demo with user interface [on PortRaptor](http://portraptor.blogspot.com/2014/04/prime-number-checker.html)

8. **Generate prime numbers**.
   
   Usage: `math.generate_prime(start_from, how_many)`
  
   >The `start_from` has to be greater than 1 and an integer. `how_many` has to be larger than 0.
   
   >Examples:
   >- `math.generate_prime(2, 3)` will generate output `2, 3, 5` (string).
   >- `math.generate_prime(4, 1)` will generate output `5` (string).

   >Demo with user interface [on PortRaptor](http://portraptor.blogspot.com/2014/05/prime-number-generator-by-monkey-raptor.html)

##How to use it in HTML

Grab the [`custom_math.js`](https://github.com/monkeyraptor/math_operation/blob/master/custom_math.js), you can compress it yourself.

Then:
```
<html>

   <head>
   
      <!--your head content-->
      
      <script>
         //*custom_math.js* goes here. It can be in HTML or external.
         //Make sure you don't have global JS variable named *math*.
         //If you have that, then change the name of this library variable name.
         //It's at the beginning of the script, var math = { ...
         //You can change the keyword of it.
      </script>
      
   </head>
   
   <body>
   
      <!--your body content-->
     
      <p>
         So, blabla, something something, as such, we have the total ways of doing that, like:
          <!--For instance, this is the element to be injected with *combination* result-->
         <div id="something"></div>
      </p>
      <script>
         //this is the element with id *something*
         var your_element = document.getElementById("something");
         
         //invoking the *combination* function and injecting the result to that element:
         your_element.innerHTML = "Combination(5, 2) = " + math.combination(5, 2);
      </script>
      
   </body>
   
</html>
```

###Loading externally and asynchronously

For loading the script from *external* storage (not placed in the HTML) and *asynchronous*, read these gists:

1. [`Gist one`](https://gist.github.com/monkeyraptor/532517be33ead64e57f5): using `script` tag with `async` attribute and using timer to detect the *readiness* of the external script.

2. [`Gist two`](https://gist.github.com/monkeyraptor/339905bc5edc703b9f92): inject the `script` element via JS.
