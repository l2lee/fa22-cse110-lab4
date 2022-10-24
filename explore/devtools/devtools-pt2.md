1. The bug was that num1 and num2 are strings, so that the + operator is doing string concatenation. 
2. I would just cast the num1 and num2 value to numerical numbers in printSum().