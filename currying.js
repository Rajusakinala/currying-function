function sum (a){
    console.log(a);
    return function (b) {
        console.log(b);
        console.log(a+b);
        return function (c) {
            console.log(c);
            console.log(a+b+c);
        }
    }
};

sum(3)(4)(5)