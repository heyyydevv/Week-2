function findMax(a, b, c) {
    if (a >= b && a >= c) {
          return a;
      } else if (b >= a && b >= c) {
          return b;
      } else {
          return c;
      }
  }
  
  console.log(findMax(10, 25, 15)); // Output: 25