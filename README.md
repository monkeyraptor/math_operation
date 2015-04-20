# Math Operations
*Some mathematical functions in JavaScript*

This is not overriding built-in Math method, just a custom *module* with different functions combined.

I'll be adding more of them lator.

Meanwhile, it consists of:

1. **Factorial**. Usage: `math.factorial(n)`

   >Example: `math.factorial(3)` will generate output `6`.

2. **Combination**. Usage: `math.combination(n, k)`

   >Example: `math.combination(5, 2)` will generate output `10`.

3. **Permutation**. Usage: `math.permutation(n, k)`
  
   >Example: `math.permutation(5, 2)` will generate output `20`.

   >n is **total number**

   >k is the number of **combination** or **permutation**
   
   >Also, browser only *accomodates* 21 digits without compacting it with the *exponent*. So, that.
   
4. **Adding comma for large integer**.
   
   Usage: `math.addcomma(your_number)`
 
   >`your_number` can be positive or negative. It has to be **number** (**integer**). If it has decimal point, it will be rounded down to nearest integer. Once again, browser only *accomodates* 21 digits before it is **compacted** using exponent.

   >Examples: 
   - `math.addcomma(10000.8)` will generate output `10,000`.
   
   - `math.addcomma(-28900251)` will generate output `-28,900,251`.

   >This *isn't* actually a math operation, more like *structuring-number-so-it-can-be-read*.
   
   >Explanation link: [on Monkey Raptor](http://monkeyraptor.johanpaul.net/2014/06/doodle-formatting-integer-with.html)
   
5. **Generating Fibonacci sequence**.
   
   Usage: `math.fibonacci(1st_number, 2nd_number, how_many)`

  >You have to provide all three arguments. Each has to be **non-zero**. And it will be rounded down to nearest integer if you put number with decimal point.
  
  >Example: `math.fibonacci(-1, 2, 5)` will generate output: `-1, 2, 1, 3, 4, 7, 11`. It started from -1 and 2, then generated 5 additional numbers sequence.
  
  >Demo link: [on CodePen](http://codepen.io/monkeyraptor/pen/mqiuK/)

##How to use it in HTML

Grab the [`custom_math.js`](https://github.com/monkeyraptor/math_operation/blob/master/custom_math.js), you can compress it yourself.

Then:
```
<html>
   <head>
      <!--your head content-->
      <script>
         //custom_math.js goes here. It can be in HTML or external.
         //Make sure you don't have JS variable named math.
         //If you have that, then change the name of this library variable name.
         //It's at the beginning of the script, var math = { ...
         //You can change the keyword of it.
      </script>
   </head>
   
   <body>
      <!--your body content-->
      <script>
         var your_element = document.getElementById("something");
         //for instance, invoking the *combination* function:
         your_element.innerHTML = "Combination(5, 2) is " + math.combination(5, 2);
      </script>
   </body>
</html>
```
