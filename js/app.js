for (let i = 1; i <= 20; i++) {
    console.log(i);
};

for (let i = 1; i <= 200; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
};

let cat = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
for (let k = 1; k < 20; k++) {
    if (k % 2 == 0) {
        let randomCat = cat[Math.floor(Math.random() * cat.length)];
        console.log(randomCat);
    }
}

for (let i = 0; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
   }

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad[0] = 'Gameboy';
daniel[1] = (daniel[1] + 1);
ryan[2] = 'Gotham City';
reuben.pop();
reuben.push('Chicago');
jim.pop();
jim.push('Austin', 'Edinburgh', 'London');
jim.splice(3, 2);


const ninjas = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (let i = 0; i < ninjas.length; i++) {
    console.log(ninjas[i].toUpperCase());
}


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

/* remove kristins shoe and save to new var
use var to add shoe to thoms accessories*/

let shoe = kristynsCloset.shift();
//console.log(shoe);
thomsCloset[2].push(shoe);
//console.log(thomsCloset);

const kristynsOutfits = kristynsCloset[Math.floor(Math.random()*kristynsCloset.length)];
const thomsOutfits = thomsCloset[Math.floor(Math.random() * thomsCloset.length)];
for (let i = 1; i < 4; i++) {
    console.log('Outfit ' + i + ' is ' + kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]);
}
for (let i = 1; i < 4; i++) {
    console.log('Outfit ' + i + ' is ' + thomsOutfits[Math.floor(Math.random() * thomsCloset.length)]);
}

// unsure if this is the correct way to solve the above question


for (let i = 0; i < kristynsCloset.length; i++) {
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}

for (let i = 0; i < thomsCloset.length; i++){
    console.log(thomsCloset[i]);
}
let sum = 0;
for (let i = 1; i < 1001; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
} 
console.log(sum);