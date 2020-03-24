
// Assigning Promise to a variable
let promiseToCleanTheRoom = new Promise((resolve, reject) => {
    let isClean = true;
    if (isClean) {
        resolve('Clean');
    } else {
        reject('Not Clean');
    }
});

promiseToCleanTheRoom.then((data) => {
    console.log('The Room is', data);
}).catch((error) => {
    console.log('The Room is', error);
})

// Function which returns Promise
let cleanRoom = function () {
    return new Promise((resolve, reject) => {
        resolve('Cleaned the room');
    })
}

let removeGarbage = function () {
    return new Promise((resolve, reject) => {
        reject('Remove Garbage');
    })
}

let winIceCream = function () {
    return new Promise((resolve, reject) => {
        resolve('Won Ice Cream')
    })
}

cleanRoom().then((data) => {
    console.log(data, "1st ")
    return removeGarbage()
}).then((data) => {
    console.log(data, "2nd");
    return winIceCream()
}).then((data) => {
    console.log(data, "3rd")
}).catch((error) => {
    console.log(error, "4th")
})