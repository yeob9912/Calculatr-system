const display = document.getElementById("calc");
const buttons = document.querySelectorAll('.calculator #number');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        switch (value) {
            case "=":
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
                break;

            case "Del":
                display.value = display.value.slice(0, -1); 
                break;

            case "Ac":
                display.value = ""; 
                break;

            case "C":
                display.value = ""; 
                break;

            case "+/-":
                if (display.value) {
                    if (display.value.charAt(0) === '-') {
                        display.value = display.value.slice(1);
                    } else {
                        display.value = '-' + display.value;
                    }
                }
                break;

            default:
                display.value += value;
                break;
        }
    });
});
