/**
 * Created by christophereaton on 10/29/15.
 */

num1 = null;
num2 = null;
op = null;
var i = 0;
var num_array = [''];

$(document).ready(function () {
    $(".number_pad").on('click', 'button', function () {
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
});

function input_digit(numString) {
    num_array[i] += numString;
    console.log(num_array[i]);
    $("#display_area").text(num_array[i]);
}

function input_operator(op) {
    i++
    num_array[i] = op;
    i++;
    num_array[i] = '';
    //do operator stuff here
    //function operatorSwitch(num1, op, num2) {
    //    switch (op) {
    //        case '+':
    //            total = Number(num1) + Number(num2);
    //            break;
    //        case '-':
    //            total = Number(num1) - Number(num2);
    //            break;
    //        case '*':
    //            total = Number(num1) * Number(num2);
    //            break;
    //        case '/':
    //            if (num2 === 0) {
    //                alert("need more input");
    //                return;
    //            } else {
    //                total = Number(num1) / Number(num2);
    //            }
    //            break;
    //    }
    //}

    $(".equals").on("click", 'button', function () {
        //operatorSwitch();
        calculate(num1, op, num2);
        console.log("total")
    });
    function calculate(num1, op, num2) {
        num1 = null;
        num2 = null;
        op = null;
        var i = 0;
        var num_array = [''];
        for (i = 0; i < num_array.length; i++) {
            if (!isNaN(num_array[i])) {
                //is a number
                if (num1 === null) {
                    num1 = num_array[i];
                    console.log("num1 = i")
                } else {
                    num2 = num_array[i];
                }
            } else {
                // is an op
                op = num_array[i];
            }
        }
    }
}





