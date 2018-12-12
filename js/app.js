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