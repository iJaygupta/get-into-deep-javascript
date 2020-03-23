function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise
    .then(function (data) {
        console.log("resolve value in 1st then => ", data);
        return job(false);
    })
    .then(function (data) {
        console.log("resolve value in 2nd then => ", data);
        return job(false);
    })
    .catch(function (error) {
        console.log("error in 1st catch => ", error);
        return 'Error caught';
    })
    .then(function (data) {
        console.log("resolve value in 3rd then =>", data);
        return job(true);
    })
    .then(function (data) {
        console.log("resolve value in 4th then => ", data);
        return job(false);
    })
    .catch(function (error) {
        console.log("error in 2nd catch =>", error);
    });