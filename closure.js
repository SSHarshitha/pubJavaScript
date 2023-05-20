console.log("Hello");
const incArea = function () {
    let increasedvalue = 0;
    let count = 0;
    let l = 10;
    let b = 8;
    return function () {
        count++;
        increasedvalue += 2;
        const area = (l + increasedvalue) * (b + increasedvalue);
        console.log(`Area of the given dimensions after modifying ${count}th time is ${area}`);
    }
}

const areaCalc = incArea();
areaCalc();
areaCalc();
areaCalc();
