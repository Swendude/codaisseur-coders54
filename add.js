function add(x ,y) {
    return x + y
}

function addn(x) {
    const adder = (y) => {
        return x + y
    }
    return adder
}

function addn(5) {
    const adder = (y) => {
        return 5 + y
    }
    return adder
}

const add5 = addn(5);
console.log(add5(8));

