console.log('was loaded');

const person = confirm('are you man?');
const age = prompt('enter yor age here');

// if(person == true) {
//     if(age > 20){
//         if(age < 40){
//             confirm.log('ok')
//         }
//     }
// }

// if(person && age > 20 && age < 40 {
//     console.log('ok');
// } else {
//     console.log('no ok');
// }

// if(person){
//     if(age < 20){
//         console.log('ok male');

//     }
// } else {
//     if(age > 30){
//         console.log('ok female');
//     }
// }

if(person && age < 20 || (!person && age > 30)){
    console.log('ok');
}