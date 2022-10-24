1. It will print 3. This is because after the last iteration of the for loop, i will increase to 3 and exit the loop since 3 is = prices.length. Since i is declared with var, it will live beyond its block scope from for. thus console.log(i) accesses i and prints its value of 3. 
2. It will print 150. This is because during the last iteration of the for loop at i = 2, prices[i] * (1 - discount) = 300 * 0.5 = 150. Since discountedPrice is declared with var, it will live beyond its block scope from for, thus console.log(discountedPrice) accesses discountedPrice and prints it value of 150
3. It will print 150. During the last iteration of the for loop, finalPrice is updated to value of 150. finalPrice is declared at the top level of the function, so it makes normal programming sense that the console.log in the same block as the declaration of the variable is able to print its value out, being 150.
4. It will return [50, 100, 150]. This is because for every item in prices, it's being multiplied by 0.5 and appended to the discounted array declared at the top and block level of the function. Thus, the returned discounted array is then 100*0.5, 200*0.5, 300*0.5.
5. There will be an error. This is becasue console.log() can't access any variable with name i. The i in the for loop is declared with let, so it only lives within the for loop code block.
6.  There will be an error. This is because conosle.log() can't access any variable with name discountedPrice. The discountedPrice within the for loop is declared with let, so it only lives within the specific iteration of the for loop.
7.  It will print 150. During the last iteration of the for loop, finalPrice is updated to value of 150. finalPrice is declared at the top level of the function, so it makes normal programming sense that the console.log in the same block as the declaration of the variable is able to print its value out, being 150.
8.  It will return [50, 100, 150]. This is because for every item in prices, it's being multiplied by 0.5 and appended to the discounted array declared at the top and block level of the function. Thus, the returned discounted array is then 100*0.5, 200*0.5, 300*0.5.
9.  Ther will be an error. This is becasue console.log() can't access any variable with name i. The i in the for loop is declared with let, so it only lives within the for loop code block.
10. It will print 3. This is because the prices array is a length of 3, which is declared and initialized at line 4. Since console.log is within the same block level as length, length is accessible.
11. It will return [50, 100, 150]. This is because for every item in prices, it's being multiplied by 0.5 and appended to the discounted array declared at the top and block level of the function. Thus, the returned discounted array is then 100*0.5, 200*0.5, 300*0.5. This is not an error because discounted is not reassigned, the object that is assigned is just updated. 
12. Answers below
- A. student.name
- B. student['Grad Year']
- C. student.greeting()
- D. student['Favorite Teacher'].name
- E. student.courseLoad[0]
13. Arithmetic
- A. '32'
  -  if string is present in +, string concat occurs 
- B. 1
  - 3 turned to Number, - only makes sense for numerical
- C. 3
  - null turned to Number form which is 0
- D. '3null'
  - null converted to string, then string concat
- E. 4
  - true to Number is 1
- F. 0
  - false converted to Number 0, null is also 0
- G. '3undefined'
  - undefined turned to string, then string concat
- H. NaN
  - '3' turned to Number, undefined turn to NaN when converted to number
14.  Comparison
- A. true
  - 2 converted to Number
- B. false
  - character '2' is > '1'
- C. true
  - '2' converted to Number
- D. false
  - === only returns true when both operands are of the same type
- E. false
  - true converted to 1, 1 not equal to 2
- F. true
  - Boolean(2) == true
15. == allows for type conversion when comparing, whereas only returns true if they are equal type and equal value.
17. [2, 4, 6]. 
    - This is because there is a for loop that loops through the elements of [1, 2, 3] and applies doSomething() to the individual elements and adds it to the newArr array. since doSomething() doubles the element of the input number, 2, 4, 6 is successivly added to the returned array
19. It will print 1, 4, 3, 2 with each in a new line.
  - It will print 1 first since it doesn't have delay and is the first line of the function. Then console.log(2) is set to print 2 but doesn't finish execution till 1 second later. During that, console.log(3) is set to print 3 with a delay of 0 seconds (atleast) ASYNCHRONOUSLY, but console.log(4), the next line, is triggered SYNCHRONOUSLY before the 0 second delay, so then 4 is printed then 3 the finally 2 since it has the longest delay.