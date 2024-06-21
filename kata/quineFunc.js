// Quine is a nonempty program that prints itself. Your task is bit different than that. Write a function that takes no parameters and returns your program as a string instead of printing it.

function quine(){ return `${quine}`; }

const quine = () => { return "const quine = "+''+ quine }