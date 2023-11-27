function sumOfNumbers(...numbers) {
    const validNumbers = numbers.filter(num => typeof num === 'number');
  
    if (validNumbers.length === 0) {
      console.log('Please provide only numbers.');
    } else {
      const sum = validNumbers.reduce((acc, num) => acc + num, 0);
      console.log('Sum of numbers:', sum);
    }
  }
  
  sumOfNumbers(1, 2, 3, 4); 
  sumOfNumbers('hello', true, [1, 2, 3]); 
  sumOfNumbers();