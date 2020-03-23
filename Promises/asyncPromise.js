var proc = [];

(async () => {

    proc[0] = new Promise((resolve, reject) => {
        console.log("First Promise Started");
        reject("Rejection");
        resolve({ data: "from1" })
    });

    proc[1] = new Promise((resolve, reject) => {
        console.log("second promise started");
        //     reject("interrupt");	
        resolve({ data: "from2" })
    })


    proc[0].then((data) => {

        console.log("result of first promise", data);

        proc[1].catch((err) => {
            console.log("Second Promise Error", err);
        })


    }).catch((error) => {

        console.log("Promise Error ==>", error);
    }).finally(data => {

        console.log("Finally always executed");
    })

})()