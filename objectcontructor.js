// File objectcontructor.js
// 

/*-----------Note--------------*/
// 1. The this keyword refers to the entity itself
// 2. To create an instance we use the syntax var <nameinstance> = new <nameobject> (attribute 1, attribute 2, ... )
// 3. Use prototype to create class attribute or methods

function Duck(height, name, eye) {
    this.height=height;
    this.name=name;
    this.eye=eye;
    this.showname= function() {
        return this.name;
    }
}

var duck1= new Duck(2,'Mato','Green')

console.log(duck1.eye);
console.log(duck1.showname());

Duck.prototype.color='white'
Duck.prototype.getcolor=function() {
    return this.color
}

var duck2=new Duck(3,'Hami','Blue');
var duck3= new Duck(2.4,'Miha','Green');

console.log(duck2.color);
console.log(duck3.color);

console.log(duck2.getcolor());
console.log(duck3.getcolor())




