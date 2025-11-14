const buttonElement = document.querySelector("#btnSubmit");
const messageField = document.querySelector("#message");

const btnBackgrondColor = buttonElement.style.backgroundColor;

let message = "";
let position = "";

messageField.addEventListener("input", (event) => {
    const value = event.target.value;

    if (value.length > 10) {
        position = 0;
        buttonElement.style.transform = 'translateX(0)';
        buttonElement.style.backgroundColor = "darkgreen";
    } else {
        buttonElement.style.backgroundColor = btnBackgrondColor;
    }
})

buttonElement.addEventListener("click", function (event){
    event.preventDefault();
})