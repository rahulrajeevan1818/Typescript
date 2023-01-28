let button = document.querySelector("button");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

function add(num1, num2) {
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        return num1 + num2;
    } 
    else {
        return +num1 + +num2;
    }
}
button.addEventListener("click", () => {
  console.log(add(num1.value, num2.value));
});
