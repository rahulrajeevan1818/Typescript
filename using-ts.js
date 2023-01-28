var btn = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function Add(input1, input2) {
    return input1 + input1;
}
btn.addEventListener("click", function () {
    console.log(Add(+input1.value, +input1));
});
