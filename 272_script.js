// let a="A";

// switch (a) {

//     case "A":
//         let msg="moye moye"
//         console.log(msg);
//         break;

//     case "B":
//         let msg="Happy Happy"  //SyntaxError: Identifier 'msg' has already been declared
//         console.log(msg);
//         break;
// }

// ---------------------------------------------------------------------------------------------


// See Differnce of Code curly base ` { } `

let a="A";
switch (a) {

    case "A":
        {
            let msg="moye moye" 
            console.log(msg);
            break;
        }

    case "B":
        {
            let msg="Happy Happy"  
            console.log(msg);
            break;
        }
}