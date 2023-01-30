// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process


// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest


// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.


// a) Create a test with an expect statement using the variable provided.


const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
 ]
 // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
 
 
 // Write a test
  describe("arraySentence", () => {
    it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
      const people = [
        { name: "ford prefect", occupation: "a hitchhiker" },
        { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
        { name: "arthur dent", occupation: "a radio employee" }
      ]
      // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
      expect(arraySentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    })
  })
 // See a good fail
  // FAIL  ./code-challenges.test.js
  // arraySentence
  //   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
 
 
  // ● arraySentence › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
 
 
  //   ReferenceError: arraySentence is not defined
 
 
 // b) Create the function that makes the test pass.
  // PSEUDOCODE
  // input: array of objects
  // output: a new array of objects that access the values and capitalizes the first letter if necessary
  // Process:
  // Create a function called "arraySentence"
  // Pass in "array into the parameters in order access the array inside of the method"
  // Use the .map method to iterate through the array and access each value inside of the object
  // Create a variable called "capName" that will access the name in the object and split all of the letters to give each letter its separate index.
  // Create a variable called "firstName" and "lastname" that will capital the first letter of the word
  // Then I returned a new sentence created using string interpolation to access the new variables created.
 
 
    // Write the code
    const arraySentence = (array) => {
      return array.map((value) => {
        let capName = value.name.split(" ")
        let firstName = capName[0][0].toUpperCase() + capName[0].slice(1)
        let lastName = capName[1][0].toUpperCase() + capName[1].slice(1)
        return `${firstName} ${lastName} is ${value.occupation}.`
      })
    }
 console.log(arraySentence(people)) 
    // See a pass
      // PASS  ./code-challenges.test.js
      // arraySentence
      //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
 
 
 // --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
 
 
 // a) Create a test with an expect statement using the variables provided.
 
 
 const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
 // Expected output: [ 2, 0, -1, 0 ]
 const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
 // Expected output: [ 2, 1, -1 ]
 
 
 // Write a test
  describe("onlyRemainders", () => {
    it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
      const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
      // Expected output: [ 2, 0, -1, 0 ]
      const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      // Expected output: [ 2, 1, -1 ]
      expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
    })
  })
  // See a good fail
    // FAIL  ./code-challenges.test.js
    // arraySentence
    //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
    // onlyRemainders
    //   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
 
 
    // ● onlyRemainders › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
 
 
    //   ReferenceError: onlyRemainders is not defined
 
 
 // b) Create the function that makes the test pass.
  // PSEUDOCODE
  // input: a mixed data array
  // output: an array of only the remainders of the numbers when divided by 3
    // Create a function called "onlyRemainders"
    // Pass in "array" into the parameters in order access the array inside of the method
    // Use the .filter method to iterate through the array and return a new array with just the numbers of the original by using the typeof method.
    // Then I will return the numbers into the new array and use the map method to access each number at each index and use the modulo operator to get the remainder of the number divided by 3.
 
 
    // Write the code
      const onlyRemainders = (array) => {
        let onlyNums = array.filter((value) => typeof(value) === "number")
        return onlyNums.map((value) => value % 3)
      }
 console.log(onlyRemainders(hodgepodge1))
 console.log(onlyRemainders(hodgepodge2))
      // See a pass
        //  PASS  ./code-challenges.test.js
            // arraySentence
            //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
            // onlyRemainders
            //   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
 
 
 // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
 
 
 // a) Create a test with an expect statement using the variables provided.
 
 
 const cubeAndSum1 = [2, 3, 4]
 // Expected output: 99
 const cubeAndSum2 = [0, 5, 10]
 // Expected output: 1125
 
 
 // Write a test
  describe("arrayCubed", () => {
    it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
      const cubeAndSum1 = [2, 3, 4]
      // Expected output: 99
      const cubeAndSum2 = [0, 5, 10]
      // Expected output: 1125
      expect(arrayCubed(cubeAndSum1)).toEqual(99)
      expect(arrayCubed(cubeAndSum2)).toEqual(1125)
    })
  })
  // See a good fail
    // FAIL  ./code-challenges.test.js
    // arraySentence
    //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
    // onlyRemainders
    //   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
    // arrayCubed
    //   ✕ takes in an array of numbers and returns the sum of all the numbers cubed.
 
 
    // ● arrayCubed › takes in an array of numbers and returns the sum of all the numbers cubed.
 
 
 // b) Create the function that makes the test pass.
  // PSEUDOCODE
  // input: an array of numbers
  // output: returns a number that represents the sum of all the numbers cubed
  // Process:
    // Create a function called "arrayCubed"
    // Pass in "array" into the parameters in order access the array inside of the method
    // Then I will create a variable called 'total' set equal to 0 in order to add the values to.
    // Use the .map method to iterate through the array and access each value inside of the object
    // Then I will  add the value to the sum after raising the number to the third exponent.
    // Then return the entire value.
 
 
    // Write a code
      const arrayCubed = (array) => {
        let total = 0
        array.map(value => total += value**3);
        return total
      }
 console.log(arrayCubed(cubeAndSum1))
 console.log(arrayCubed(cubeAndSum2))
      // See a pass
        // PASS  ./code-challenges.test.js
        // arraySentence
        //   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
        // onlyRemainders
        //   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
        // arrayCubed
        //   ✓ takes in an array of numbers and returns the sum of all the numbers cubed.
 