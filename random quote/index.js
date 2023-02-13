// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    
quote: "Keep in mind that JavaScript and Java have almost nothing to do with each other.", 
person: "Stanley Hoffman" 
}, {
    quote: '"Technically, web browsers can control what users see, and sites using Javascript can overwrite anything coming from the original authors. Browsers heavily utilize Javascript to create an interactive Internet; sites like YouTube, Facebook, and Gmail could be crippled without it."',
    person: '"Author: Ben Shapiro"'
},{ 
    quote: '"JavaScript is used to create flashy portfolio websites or simple to-do apps;"', 
    person: '"Lawrence Spencer"'
}, {
    quote: '"Java is to JavaScript as ham is to hamster."',
    person: '"Jeremy Keith"'
}, {
    quote: '" All mass movements avail themselves of action as a means of unification. The conflicts a mass movement seeks and incites serve not only to down its enemies but also to strip its followers of their distinct individuality and render them more soluble in the collective medium."', 
    person: '"Eric Hoffer"'
}, { 
    quote: '"You should imagine variables as tentacles, rather than boxes. They do not contain values; they grasp them - two variables can refer to the same value. - Author"',
    person: '"Marijn Haverbeke"'
}, {
    quote: '"The bus scares me. Way too many gross people on the bus. Sixty-five people on the bus and I was the last one on. I felt like calling Unsolved Mysteries. Yeah, I found everybody."', 
    person: '"Kathleen Madigan"'
}, {
    quote: '"Java is to JavaScript what Car is to Carpet. "',
    person: '"Chris Heilmann"'
}, {   
    quote: '"JavaScript derives its syntax from Java, its first-class functions from Scheme, and its prototype-based inheritance from Self."',
     person: '" David Flanagan"'
}, {
    quote: '"Javascript is the duct tape of the Internet."', 
    person: '"Charlie Campbell"'
}, ];


btn.addEventListener('click', function(){

    let random = Math.floor( Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})