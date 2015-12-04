/**
 * Created by christopher eaton on 10/29/15.
 */

num1 = null;
num2 = null;
op = null;
var i = 0;
var num_array = [''];
var can_add_decimal = true;

$(document).ready(function () {
    $(".number_pad").on('click', 'button:not(#equals)', function () {
        console.log('number clicked');
        //console.log($(this).text());
        var button = $(this).text();
        input_digit(button);
    });
    $(".side_column_operators").on('click', 'button', function () {
        console.log('operator clicked');
        //console.log("op:", $(this).text());
        var button = $(this).text();
        input_operator(button);
    });
    $("#equals").on("click", function () {
        math(num1, op, num2);
            console.log("total");
    });
    $("#clear").on("click", function () {
        console.log("clear clicked");
        clear();
    });
    $("#allClear").on('click', function () {
        console.log("allClear clicked");
        allClear();
    });
});

function input_digit(numString) {
    switch (numString) {
        case "." :
            if (can_add_decimal === true) {
                num_array[i] += numString;
                can_add_decimal = false;
            }
            break;
        default:
            // looks at array, makes it a number then checks if it is a number
            if (isNaN(parseInt(num_array[i]))) {
                //if not a number, replaces it with the number
                num_array[i] = numString;
                console.log("num_array", num_array);
            } else {
                //if number, add to array
                num_array[i] += numString;
                console.log("stef says it must");
            }
            console.log(" after default");

        //num_array[i] = numString;
    }
    console.log(num_array[i]);
    $("#display_area").text(num_array[i]);
}

function input_operator(op) {
    i++;
    num_array[i] = op;
    i++;
    num_array[i] = '';
    can_add_decimal = true;
}

//do operator stuff here
function opSwitch(num1, op, num2) {
    switch (op) {
        case '+':
            total = Number(num1) + Number(num2);
            break;
        case '-':
            total = Number(num1) - Number(num2);
            break;
        case '*':
            total = Number(num1) * Number(num2);
            break;
        case '/':
            if (num2 === '0') {
                //alert("need more input");
                return "error";
            } else {
                total = Number(num1) / Number(num2);
            }
            break;

    }
    return total;
}

function math() {
    var num1 = null, num2 = null, op = null, result = null;

    for (i = 0; num_array.length > 1 && i < num_array.length; i++) {
        if (!isNaN(num_array[i])) {
            //is a number
            if (num1 === null) {
                num1 = num_array[i];
                console.log("num1 in array");
            } else {
                //have enough at this point to do math (num1 and operator)
                num2 = num_array[i];
                console.log("num2 in array");
                result = opSwitch(num1, op, num2);
                num_array[0] = result;

                    num_array.splice(i - 1, 2);
                i = -1;
            }
        } else {
            // is an op
            op = num_array[i];
        }
    }
    updateDisplay(result);
}

function updateDisplay(display_val) {
    $("#display_area").text(display_val);
}

function allClear() {
    num_array = [''];
    num1 = null;
    num2 = null;
    op = null;
    i = 0;
    updateDisplay(num_array);
}

function clear() {
    num_array.pop();
    updateDisplay(num_array);
}

//operation repeat
//check for num1, op, and num2
// check for multiple clicks of equals button
//everytime equals button clicked
//successive multi operation
//partial operand
//missing operation
//missing operand
//keypress