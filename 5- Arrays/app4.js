/*
    Suppose you are attempting an assessment of a tech company. 
    In the assessment, they have given you a sequence [2, 3, 0, 1, 4, 6, 7, 7].
    They want you to replace 2 with 200 in the given sequence.
    How would you do that?
*/

let sequence = [2, 3, 0, 1, 4, 6, 7, 7];

for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] == 2) {

        sequence[i] = 200;
    }
    console.log("Result" + " = " + sequence)
}