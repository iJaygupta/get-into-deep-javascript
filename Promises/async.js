const async = require("async");


async.map(['asyncJS.js', 70, 9, 7], function (elem) {
    if (elem) {
        console.log(typeof elem);
    }
})

const prepareParam = (callback) => {
    const param = {
        key: 'task 1 and task 2'
    }
    setTimeout(() => {
        console.log(param);
        callback(null, param)
    }, 3000)
}

const processParam = (callback) => {
    (async () => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Param Processed');
                callback(false, 'Param Processed')
            }, 4000)
        })
    })()
}


const resolveParam = (callback) => {
    console.log('All Done !!');
    callback(null, 'All Done !!')
}

const callbacksArray = [prepareParam, processParam, resolveParam];


async.parallel(callbacksArray, function (error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    }
})


async.waterfall([
    function (callback) {
        console.log("1st Started");
        setTimeout(() => {
            console.log('resolving 1st');
            callback(null, 'Task 1', 'Task 2');
        }, 4000)
    },
    function (arg1, arg2, callback) {
        // arg1 now equals 'Task 1' and arg2 now equals 'Task 2'
        console.log("2nd Started");
        let arg3 = arg1 + ' , ' + arg2 + ' , ' + 'Task3';
        callback(null, arg3, " and");
    },
    function (arg1, arg2, callback) {
        // arg1 now equals 'Task1 and Task2'
        console.log("3rd Started");
        arg1 = arg1 + arg2;
        let result1 = ' are ready to execute'
        callback(null, arg1, result1);
    }
], function (err, result, result1) {
    // result now equals to 'Task1 and Task2 completed'
    result = result + ' Task 4' + result1
    console.log(result);
});
