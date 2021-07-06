/*
    Suppose you have an array of objects:

    add a book of your choice to it with the same properties.
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

function addAtTheEnd(name) {
    books.length = books.length + 1;
    books[books.length - 1] = {
        name: " Anthology of short stories",
        topics: ["The King and Queen", "Happy Prince"],
    }
}
addAtTheEnd(books);
console.log(books);