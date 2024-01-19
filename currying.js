// function EmailSendto(to){
//     return function(subject){
//         return function(body){
//             console.log(`Sending email to ${to} with subject ${subject} and body is ${body}`);
//         }
//     }
// }

const EmailSendto = (to)=>(subject)=>(body)=> `Sending email to ${to} with subject ${subject} and body is ${body}`

// let step1 = EmailSendto("soniabhay797@gmail.com");
// let step2 = step1("sending resume...");
// step2("my name is abhay soni, i am from jabalpur");

let step1 = EmailSendto("soniabhay797@gmail.com");
let step2 = step1("sending resume...");
console.log(step2("my name is abhay soni, i am from jabalpur"));



// currying in js
