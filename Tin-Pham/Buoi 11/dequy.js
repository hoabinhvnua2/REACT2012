function pow(a,b) {
    let kp = 1;
    for (let index = 0; index < b; index++) {
        kp *= a;
    }
    return kp;
}

console.log(pow(2,3));

function somu (a,b) {
    if (b == 1) {
        return a;
    }

    if (b == 0) {
        return 1;
    }

    return a*somu(a, b-1);
}

console.log(somu(2,3));