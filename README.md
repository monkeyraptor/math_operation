# Math Operations
*Some mathematical functions in JavaScript*

This is not overriding built-in Math method, just a custom function.

Meanwhile, it consists of:

1. Factorial. Usage: `math.factorial(n)`

2. Combination. Usage: `math.combination(n, k)`

3. Permutation. Usage: `math.permutation(n, k)`

   >n is **total number**

   >k is the number of **combination** or **permutation**
   
   >As in `C(5, 2) = 10` or `P(5, 2) = 20`
   
   >Also, browser only *accomodates* 21 digits without compacting it with the *exponent*. So, that.
   
4. Adding comma for large integer. Usage: `math.addcomma(your_number)`
 
   >`your_number` can be positive or negative. It has to be **number**.

   >This isn't actually a math operation, more like *structuring-number-so-it-can-be-read*.
   
5. Generating Fibonacci sequence. Usage: `math.fibonacci(1st_number, 2nd_number, how_many)`

  >You have to provide all three arguments. Each has to be **non-zero**.
  
  >Example: `math.fibonacci(-1, 2, 5)` will generate output: `-1, 2, 1, 3, 4, 7, 11`. It started from -1 and 2, then generated 5 additional numbers sequence.
