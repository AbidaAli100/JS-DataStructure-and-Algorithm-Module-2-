/*
    You are given an array of pet animals
     like [‘cat’, ‘rabbit’, ‘pigeon’, ‘parrot’, ‘goldfish’].
     You need to loop over it and then if you encounter the name of rabbit,
      print out ‘this is rabbit’. When you don’t get
       the name of a rabbit, print ‘this is not a rabbit’.
 */

petAnimals = ["cat", "rabbit", "pigeon", "parrot", "goldfish"];

for (i = 0; i < petAnimals.length; i++) {
    if (petAnimals[i] === "rabbit") {
        console.log(petAnimals[i] + ":" + " is a rabbit");
    }
    else {
        console.log(petAnimals[i] + ":" + "is not a rabbit");
    }

}