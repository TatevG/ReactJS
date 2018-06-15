// make a class
// make another class that extends the first class
// call the contructor of the first class from the second class
// add a function to the second class 
// make an object out of first class
// call a function of the object


class Shapes {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        console.log(`Width is ${this.width}, height is ${this.height} => area is ${this.width * this.height}`);
    }
}

class Rectangle extends Shapes{
    constructor(width, height) {
        super(width, height);
    }
    getPerimeter(){
        console.log(`Pertimeter of rectangle is equal to ${2*(this.width + this.height)}`);
    }
}

const rect = new Rectangle(12, 3);
rect.getArea();
rect.getPerimeter();