const getLengthOfObject = (obj) => {
    // The program must take an object as an argument
    // and return the number of properties in it
    return Object.keys(obj).length;
}
const addCoolProperty = (obj) => {
    // The program must take an object as an argument
    // add "cool" property to it
    // assign value 123 to "cool" property
    // return modified obj
    obj.cool = "123";
    return obj;
}
const arrayIntoObject = (arr) => {
    // The program must take an array of numbers as an argument
    // it should create an object with 2 properties (moreThan10, lessThan10)
    // moreThan10 is an array of values of "arr", which values are more than 10
    // lessThan10 is an array of values of "arr", which values are less than 10
    // return that object with 2 properties
    let obj = {
        moreThan: [],
        lessThan10: [],
    }
    for (const i in arr) {
        if (i > 10) {
            moreThan10.push(i);  
        }else{
            lessThan10.push(i);
        }
    }
    return obj;
}