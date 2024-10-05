function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // Accessing the outer function's variable
    }

    return innerFunction;
}

const myClosure = outerFunction(); // outerFunction() returns innerFunction
myClosure(); // Logs 'I am outside!'