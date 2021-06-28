// 1. Write a JavaScript program to list the properties of a JavaScript object. 
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(student.name);
console.log(student.sclass);
console.log(student.rollno);

// 2. Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property. 
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log("Object student before deleting rollno. :", student);
delete student.rollno;
console.log("Object student after deleting rollno. :", student);

// 3. Write a JavaScript program to get the length of a JavaScript object.  
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log("Length of student object : ",Object.keys(student).length);

// 4. Write a JavaScript program to display the reading status 
// (i.e. display book name, author name and reading status) of the following books. 
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false 
}]; 
library.forEach((item)=> {
    console.log(item.author, item.title , item.readingStatus);
   });

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 

const cylinder = {
    radius: 23.2,
    height: 34.5,
    volume: function () {
      var x = 3.14 * this.radius * this.radius * this.height;
      console.log("The volume is:",x.toFixed(4)) ;
    },
   };
   cylinder.volume()
   console.log("\n");

// 6. Write a JavaScript program to sort an array of JavaScript objects.
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
library.sort((a, b) => (a.libraryID > b.libraryID) ? -1 : 1);
for(let item in library){
 console.log(library[item].title+" "+library[item].author+" "+library[item].libraryID);
 console.log("\n");
}

