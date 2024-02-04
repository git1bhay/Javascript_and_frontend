// const promisOne = new Promise(function(resolve,reject){
//     setTimeout(()=>{console.log('asyn task'); resolve()},1000);
// })

// promisOne.then(()=>{console.log('resolve');})


//2

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{console.log('asyn2 task');
//     resolve()
// })
// }).then(()=>{console.log('2 promise resolve');})

//3 

// const promises3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('data');
//         resolve({username:'ABhay',age:22})
//     },1000)
// })


// promises3.then((user)=>{
//     console.log(user);
// })

//4

const promises4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({data:'abhay'});
        }
        else{
            reject('error for fetching data')
        }
    },1000)
})

promises4.then((user)=>{
    return user.data;
})
.then((userdata)=>{console.log(userdata);})
.catch((error)=>{console.log(error);})
.finally(()=>{console.log('promises is resolve or reject');})

//5

