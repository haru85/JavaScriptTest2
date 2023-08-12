let formula = "";
let number = null;
let operater_input = false; 
let operater_count = 0;
let zero_input = false;
let calc_input = false;
let calc_result = 0;
let result = document.getElementById("result");

function update_formula(letter) {
    formula += letter;
    result.innerHTML = formula;
}

function push_number(number) {
    operater_input = true;
    operater_count = 0;
    zero_input = true;
    calc_input = true;
    update_formula(number);
}

function push_operater(operater) {
    if (operater_input) {
        if (operater_count>=1) {
            formula = formula.slice(0, -1);
        }
        operater_count += 1;
        zero_input = false;
        calc_input = false;
        update_formula(operater);
    }
}

function push_zero(zero) {
    if (zero_input) {
        operater_input = true;
        operater_count = 0;
        update_formula(zero);
        calc_input = true;
    }
}

function push_point() {
    if (operater_input == true && operater_count ==0 ) {
        operater_input = false;
        calc_input = false;
        update_formula(".");
    }
}

function push_clear() {
    formula = "";
    operater_input = false; 
    operater_count = 0;
    zero_input = false;
    calc_input = false;
    result.innerHTML = 0;
}

function calc() {
    if (calc_input) {
        calc_result = Function('return ('+formula+');')();
        formula = calc_result;
        result.innerHTML = calc_result;
    }
}