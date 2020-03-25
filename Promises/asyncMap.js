const dragonArray = [23, 50, 33, 45, 20, 18, 9, 41];

let resolver = dragonArray.map(async (elem) => {
    console.log("Promise for ", elem)
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(elem);
        }, 2000)
    })
    console.log(elem);
})

console.log(resolver);
resolver.map(data => data.then(result => console.log(result)));

