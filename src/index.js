import { greeting } from "./componente"
import { printMe } from "./print.js"

greeting("luis", 25);
printMe(() => { console.log('I get called from print.js!'); })