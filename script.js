// function adder(num){
//     function add(b){
//         console.log(num+b);

//     }

//     return add;
// }

// const add5 = adder(5);

// add5(3);

const btn = document.getElementById('btn');
let myname = document.getElementById('h1');

function makechangeSize(size){
    function changeSize(){
        myname.style.fontSize = `${size}px`
    }


    return changeSize;
}

const size51 = makechangeSize(100);


btn.addEventListener("click",size51);

