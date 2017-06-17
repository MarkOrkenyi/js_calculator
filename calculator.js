var currentButton = "C";
var equationList = []
var equation = ""
function main() {
    $('span').click(function () {
        currentButton = $(this).text();
        if (currentButton === "=") {
            evaluate();
        } else if (currentButton === "C") {
            equationList = [];
            displayEquation();
        } else {
            equationList.push(currentButton);
            displayEquation();
        }
    });
};
function displayEquation() {
    equation = equationList.join("");
    equation = equation.replace(/x/g, "*");
    $('#display').text(equation);
};
function evaluate() {
    result = eval(equation);
    equationList = [];
    $('#display').text(result);
};
$(document).ready(function () {
    main();
});
