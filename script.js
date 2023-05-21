document.querySelector("#inputText").addEventListener("change", (it) => {
    outputText.value = (it.target.value * 9 / 5) + 32;
    if(inputText.value.length == 0){
        outputText.value = "";
    }
});
document.querySelector("#outputText").addEventListener("change", (ot) => {
    inputText.value = (ot.target.value - 32) * 5 / 9;
    if(outputText.value.length == 0){
        inputText.value = "";
    }
});