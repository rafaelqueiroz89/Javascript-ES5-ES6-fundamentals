
/////////////////////////////////
// CODING CHALLENGE
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/


    class TownElement {
        constructor(name, buildYear) {
            this.name = name;
            this.buildYear = buildYear;
        }

        static calculateAverage(sum, number) {
            return sum / number;
        }

        static treeDensity(park) {
            return park.numberOfTrees / park.area;
        }
    }

    class Park extends TownElement {
        constructor(name, buildYear, area, numberOfTrees) {
            super(name, buildYear);
            this.area = area;
            this.numberOfTrees = numberOfTrees;
        }
    }

    class Street extends TownElement {
        constructor(name, buildYear, length, size = 'normal') {
            super(name, buildYear);
            this.length = length;
            this.size = size;
        }
    }

let park1 = new Park('Park1', 1998, 200, 1000);
let park2 = new Park('Park2', 2010, 109, 10000);
let park3 = new Park('Park3', 2017, 500, 20000);

let st1 = new Street('Street1', 1920, 50, 200);
let st2 = new Street('Street2', 1990, 20, 122);
let st3 = new Street('Street3', 1950, 30, 144);
let st4 = new Street('Street4', 1951, 40, 60);

const parks = [park1, park2, park3];
const streets = [st1,st2, st3, st4];

let sumOfAllParks = 0;
let sumOfAllAges = 0;
let sumOfAllLengths = 0;
let sumOfAllStreets = 0;
let el = 0;

//1
for (el of parks){
    sumOfAllParks++;
    sumOfAllAges += (new Date()).getFullYear() - el.buildYear;
    console.log(TownElement.treeDensity(el));
}

//2
console.log(TownElement.calculateAverage(sumOfAllAges, sumOfAllParks));

//3
console.log(parks.filter(el => el.numberOfTrees > 1000)); //filter elements

//4 && 5
for (el of streets){
    sumOfAllStreets++;
    sumOfAllLengths += el.length;
}
console.log(`Total length of streets: ${sumOfAllLengths}`);
console.log(`Average length of streets: ${TownElement.calculateAverage(sumOfAllLengths, sumOfAllStreets)}`);

 