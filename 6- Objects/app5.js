/*
    Suppose you have an array of objects:

   delete one of the objects that represent a book
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

//deleting from the start
for (let i = 0; i < books.length; i++) {
    books[i] = books[i + 1];
}
books.length = books.length - 1;
console.log(books);

//expected output

/*
    [ { name: 'War and Peace', topics: [ 'peace', 'politics' ] } ]
*/