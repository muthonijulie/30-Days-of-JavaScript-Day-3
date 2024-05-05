//objects in javascript
// const person={//property
//     firstname:"liz",
//     lastname:"muthoni",
//     age:"20",
//     isCampus:true,
//     sayHello: function(){
//         console.log("Hello liz");
//     },
// };
// //console.log(person.sayHello);//declare objects in js

// function isOlder(){
//     if (person.age>=18){
//         console.log("can go to club");
//     }
//     else{
//         throw new Error("cannot go to club")
//     }
// }
// isOlder(person);
//equality
//console.log(6=="6");
//strict equality
//console.log(6==="6");

 const expect = function(val){//anonymous function
    return{
        toBe:function(x){
            if(val===x){
                return true;

            }
            else{
                throw new Error("Not equal");
            }

        },
        notToBe:function(x){
            if(val!==x){
                return true;

        }
        else{
            throw new Error("Equal");
        }
    },

 };
};
// console.log(expect(5).toBe(5));
// console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));
