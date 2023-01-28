const button = document.querySelector("button");
const input0 = document.getElementById("num1")! as HTMLInputElement;
const input1 = document.getElementById("num2")! as HTMLInputElement;

function Add(input1:number, input2:number) {
        return input1 + input1;
}
button.addEventListener("click", () => {
  console.log(Add(+input0.value, +input1.value));
});
