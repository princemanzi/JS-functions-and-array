const companies = [
    {"name":"Company One","category":"Finance","start":1981,"end":2003},
    {"name":"Company Two","category":"Retail","start":1992,"end":2009},
    {"name":"Company Three","category":"Auto","start":1999,"end":2007},
    {"name":"Company Four","category":"Retail","start":1989,"end":2010},
    {"name":"Company Five","category":"Technology","start":2009,"end":2014},
    {"name":"Company Six","category":"Finance","start":1987,"end":2010},
    {"name":"Company Seven","category":"Auto","start":1986,"end":1996},
    {"name":"Company Eight","category":"Retail","start":2011,"end":2016},
    {"name":"Company Nine","category":"Technology","start":1981,"end":1989}
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

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

const retailCompanies = companies.filter(company => company.category ==='Retail')


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


//reduce

