const companies = [
    { "name": "Company One", "category": "Finance", "start": 1981, "end": 2003 },
    { "name": "Company Two", "category": "Retail", "start": 1992, "end": 2009 },
    { "name": "Company Three", "category": "Auto", "start": 1999, "end": 2007 },
    { "name": "Company Four", "category": "Retail", "start": 1989, "end": 2010 },
    { "name": "Company Five", "category": "Technology", "start": 2009, "end": 2014 },
    { "name": "Company Six", "category": "Finance", "start": 1987, "end": 2010 },
    { "name": "Company Seven", "category": "Auto", "start": 1986, "end": 1996 },
    { "name": "Company Eight", "category": "Retail", "start": 2011, "end": 2016 },
    { "name": "Company Nine", "category": "Technology", "start": 1981, "end": 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

//forEach

// companies.forEach(function(company) {
//     console.log(company.name);
// });


//filter
// get 21 and older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });

// const canDrink = ages.filter(age => 21);  // ES6
// console.log(canDrink);

//Filter retail companies
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });                                // ES5

const retailCompanies = companies.filter(company => company.category === 'Retail')


// get 80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

//get companies that lasted ten years or more
// const lastedTenYears = companies.filter(company =>(company.end - company.start >= 10));

// console.log(lastedTenYears);


//map

// create array of company names
// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name}
//     [${company.start} - ${company.end}]`);

// const ageSquare = ages.map(age => Math.sqrt(age))
// const agesTimesTwo = ages.map(age => age * 2);

// constageMap = ages 
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
// console.log(agesMap);

//sort

//sort companies by start year

// const sortedCompanies = companies.sort(function (c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }

// });
// console.log(sortedCompanies);

// simple 1 line code of writing this 

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// sort ages 
// sort ages by ascending order

// const sortAges = ages.sort((a, b) => a - b); // sorting by descending (b - a);
// console.log(sortAges); 

//reduce

// The reduce method reduces an array to a single value (e.g., sum, product, etc.).

// Example (Sum of all ages):

// get total of all ages

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);


// get total years of all companies

// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0); // we add the zero parameter in order to get  the total if not so we should get something irrerevant

// to do that in a shorter way using arror function

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);


// combined methods

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b, 0);
console.log(combined);

