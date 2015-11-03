/**
 * Created by christophereaton on 10/29/15.
 */

num1 = null;
num2 = null;
op = null;
var i = 0;
var num_array = [''];

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
    $("#allClear").on('click', function() {
        console.log("allClear clicked");
        allClear();
    })

});


function input_digit(numString) {
    num_array[i] += numString;
    console.log(num_array[i]);
    $("#display_area").text(num_array[i]);
}

function input_operator(op) {
    i++;
    num_array[i] = op;
    i++;
    num_array[i] = '';
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
                num1 = null;
                num2 = null;
                op = null;
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
    num_array=[''];
    num1=null;
    num2=null;
    op=null;
    i=0;
    updateDisplay(num_array)
}

//clear/ac button
//multiple decimals
//operation repeat
//successive multi operation
//partial operand
//missing operation
//missing operand