// // Arithmetic operators
// let a = 2;
// let b = 3;
// console.log(" a = ", a, " b = ", b);
// // console.log("a + b = " , a+b);
// // console.log("a - b = ", a -b);

// // console.log("a ^ b=" ,a ** b); //8
// a *= 3;
// console.log(" a = ", a); //

// let gamnum = 25;
// let usernum = prompt("Enter the number : Guess number:" );

// while (usernum != gamnum)
// {
//     usernum = prompt("Wrong number , Guess again:");

// }

// console.log ("Your guess was accurate, the number you selected is all right");

// str = "       Dapind  er     ";
// str1 = "Parneet";
// str2 = " Sukhdeep";
// n = str.length;

// let obj = {
//     name : "pen",
//     price : 10,
// }

// let output = `The price of the ${obj.name} is ${obj.price} dollars . `
// console.log(output);
// let op2 = `The price of the ${obj.name} in indian rupees will be ${obj.price *61} rupees `;
// console.log(op2);
 
// str = str.trim();
// console.log(str);
// str = str.toUpperCase()

// str = str.replaceAll("D", "R");
// str1 = str1.toLowerCase();
// console.log(str);
// console.log(str1);



// for of loop
// for (rk of marks)
// {
//     i = 0;
//     console.log(rk);
//     i += rk;
    
// }

// avg = i / marks.length;
// console.log(`the average of the array comes to : ${avg}`);

/*items = [250, 645, 300, 900, 50];
for ( i = 0; i < items.length; i++)
{
    items[i] = items[i] - (10/100 * items[i]);
}
 
for ( i of items)
{
    console.log();
}

heroes = ["thor", "spiderman", "superman", "krish", "shaktimaan"];
heroes.unshift("avengers");
console.log(heroes);


function myFunction (){
    console.log("My name is Dapinder Kaur")
};

myFunction();*/

 // arrow function
 /*const fu = (a,b ) => {
    return a+b;
}

let nu = fu(2,3);
console.log(nu);

 let sl = '';
 let count = 0 ;
 function vowel(str){
    str = str.toLowerCase();
    for (i = 0; i< str.length; i++){
        if(str[i] == 'a'|| str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i ]== 'u')
       {
            
           sl = sl + "  " + str[i]; 
           count++;
         }
         
   }
   console.log(sl , " \n Number of vowels = ", count );
 }

vowel("beautiful");

arr = [1,2,3,4,5];
arr. forEach(element =>
{
    console.log(element*element);
}
)


arr = [45,87, 98, 96, 94, 67];

 let newArr = arr.filter( (val) => {
    return val>90;
 }
 );
 console.log (newArr);

 let n = prompt("enter the number please : ");

arr = []; 
 console.log(arr);
for (i = 0; i<n ; i++){
    arr[i] = i+1;
}

let sum = arr.reduce( function fn(prev, curr) 
{
    return prev+curr;
});
 console.log("sum = ", sum);
let pro = arr.reduce((prev, curr) =>
{
    return prev*curr;
}

);
console.log("product = ",pro);
*/


// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";

// let bd = document.querySelector("body");
// bd.prepend(newbtn);


// let btn = document.querySelector(".mode");
// let mod = "light";
// let body = document.querySelector("body");


// btn.addEventListener("click", () => {
//    if (mod == "light"){
//     mod = "dark";
//     console.log(mod);
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
    
    
//    }
//    else{
//     mod = "light";
//     console.log(mod);
//     body.style.backgroundColor = "white";
//     body.style.color = "black";    
  
   
//    }
// });

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");


const compChoice = () => {

    options = ["rock", "paper", "scissor"];
    let compch = Math.random()*3;
    compch = Math.floor(compch);
    return options[compch];
}

let msg = document.querySelector("#msg");

const WinOp = () =>{
    msg.innerText = "you win ";
   userScore++;
   let us = document.querySelector("#user");
   us.innerText = userScore;
   msg.style.backgroundColor = "green";

}

const loseOp = () =>{
    msg.innerText= "You lose";
    compScore++;
    let co = document.querySelector("#comp");
    co.innerText = compScore;
    msg.style.backgroundColor = "red";

}

const draw = () =>{
    msg.innerText = "The game is draw ";
    msg.style.backgroundColor = "bisque";

}
const playgame = (chid) => {
     console.log("Hi you chose : ", chid)
     let cc = compChoice();
    console.log("computers choice",cc);
    
    if (chid  == cc)
    {
        console.log("Match is draw");
        draw();

    }
    else{
        if(chid == "rock" && cc == "scissor"){
              console.log("You win");
              WinOp();

        }
        if(chid == "rock" && cc == "paper")
        {
            console.log("you lose");
            loseOp();

        }
        if (chid == "paper" && cc == "rock")
        {
            console.log("you win");
            WinOp();

        }
         
        if (chid == "paper" && cc == "scissor")
            {
                 console.log("you lose");
                 loseOp();


            }
        if (chid == "scissor" && cc == "rock")
        {
            console.log("you lose");
            loseOp();

        }
        if (chid == "scissor" && cc == "paper")
        {
            console.log("you win");
            WinOp();

        }
    }
}


choices.forEach((choice) => 
{
    
    choice.addEventListener("click",()=>{
        console.log("choice was clicked")
        const chid = choice.getAttribute("id");
       playgame(chid);
       

})// it is very important to write the statements after the event as a fuction as a callback function because in this way it becomes the function of the event 
});
