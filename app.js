/*
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];
*/
  

  /*
Exercise 1: Array.prototype.filter()

Filter the array of inventors into a new array containing only the inventors 
born in the 1500's.

- You have an array of inventors, each with a birth year listed by the property 
  'year'.
- Use the Array.prototype.filter() method to create a new array.
- The new array, 'veryOldInventors', should only include inventors born between 
  the years 1500 and 1599.
*/

//let veryOldInventors = [inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)];

// Complete the exercise in the space below:

// Check your work:
//console.log('Exercise 1 my result: ', veryOldInventors);
//console.log('Exercise 1 correct result: ', [
//  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//]);



/*
Exercise 2: Array.prototype.map()

Map the array of inventors into a new array. This new array should only contain
objects with the inventors' first and last names.

- For each inventor, return an object in this format: 
  { first: "First Name", last: "Last Name" }.
- The new array should be a collection of these objects, each representing an 
  inventor with only their first and last names.

Hint: Return a new object literal from the callback that looks like:
      { first: "First Name", last: "Last Name" }
*/

/*
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];


let inventorNames = [inventors.map(inventor => ({
 first: inventor.first,
 last: inventor.last
  }))];

// Complete the exercise in the space below:

// Check your work:
console.log('Exercise 2 my result: ', inventorNames);
console.log('Exercise 2 correct result: ', [
  { first: 'Albert', last: 'Einstein' },
  { first: 'Isaac', last: 'Newton' },
  { first: 'Galileo', last: 'Galilei' },
  { first: 'Marie', last: 'Curie' },
  { first: 'Johannes', last: 'Kepler' },
  { first: 'Nicolaus', last: 'Copernicus' },
  { first: 'Max', last: 'Planck' },
  { first: 'Katherine', last: 'Blodgett' },
  { first: 'Ada', last: 'Lovelace' },
  { first: 'Sarah E.', last: 'Goode' },
  { first: 'Lise', last: 'Meitner' },
  { first: 'Hanna', last: 'Hammarström' },
]);
*/


/*
Exercise 3: Array.prototype.sort()

Sort the inventors by birth date in ascending order (from those born furthest in
the past to those born most recently).
*/
/*
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];

let sortedByBirthYear = [inventors.sort((a, b) => a.year - b.year)];

// Complete the exercise in the space below:

// Check your work:
console.log('Exercise 3 my result: ', sortedByBirthYear);
console.log('Exercise 3 correct result: ', [
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
]);
*/



/* 
Exercise 4: Array.prototype.find()

Use Array.prototype.find() to identify the inventor with the first name 'Ada' 
from an array of inventor objects

- You have an array of objects, each representing an inventor with various 
  properties including their first name.
- Utilize the Array.prototype.find() method to locate the object for the 
  inventor with the first name 'Ada'.
- Assign the found inventor object to the variable inventorNamedAda
*/



const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];


let inventorNamedAda = inventors.find(inventor => inventor.first === 'Ada');

// Complete the exercise in the space below:

// Check your work:
console.log('Exercise 4 my result: ', inventorNamedAda);
console.log('Exercise 4 correct result: ', {
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852,
});

