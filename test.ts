function test() {
    console.log(2);
    return new Promise(resolve => {
        console.log(3);
        resolve(1);
    });
}

console.log(5);
test().then(() => { console.log(1) });
console.log(4);

class A {
    a = () => {
        console.log(1);
        return this;
    }

    b(): A {
        console.log(2);
        return this;
    }
}

const a = new A;
a
    .a()
    .b();


