//1. Implementation Using a For Loop

let fibonacci = () => {
    let prev1 = 0;
    let prev2 = 1;

    console.log(prev1);
    console.log(prev1);

    for (let fibo = 1; fibo <= 18; fibo++){
        let newFibo = prev1 + prev2;
        console.log(newFibo);
        prev1 = prev2;
        prev2 = newFibo;
    }
}
fibonacci();

//2. Implementation Using Recursion

let count = 2;

let fivonacci = (prev1, prev2) => {
    if (count <= 19) {
        let newFibo = prev1 + prev2;
        console.log(newFibo);
        prev2 = prev1;
        prev1 = newFibo;
        count++;
        fivonacci(prev1, prev2);
    } else {
        return
    }
}
fivonacci(1,0);

//Classes Implementation Using a For Loop

class Fibonacci {
    fibonacci() {
        let prev1 = 0;
        let prev2 = 1;

        console.log(prev1);
        console.log(prev1);

        for (let fibo = 1; fibo <= 18; fibo++) {
            let newFibo = prev1 + prev2;
            console.log(newFibo);
            prev1 = prev2;
            prev2 = newFibo;
        }
    }
}

console.log(new Fibonacci().fibonacci());

//Classes Implementation Using Recursion


class Fibonacci {
    let count = 2;

    fibonacci() {
        if (count <= 19) {
            let newFibo = prev1 + prev2;
            console.log(newFibo);
            prev2 = prev1;
            prev1 = newFibo;
            count++;
            fivonacci(prev1, prev2);
        }else {
            return
        }
        
    }
}

console.log(new Fibonacci().fibonacci(1,0));