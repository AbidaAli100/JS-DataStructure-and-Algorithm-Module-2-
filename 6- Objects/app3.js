/*
    Suppose you have an array of objects:

 you need to print the name and topics separately, how would you do that?
 */

let books = [{
        name: "The Lean Startup",
        topics: ["entrepreneurship", "startups"],
    },
    {
        name: "War and Peace",
        topics: ["peace", "politics"],
    }
];
for (i = 0; i < books.length; i++)

{
    console.log(books[i].name + " : " + books[i].topics);
}

//expected output 

/*
The Lean Startup : entrepreneurship,startups
War and Peace : peace,politics
*/