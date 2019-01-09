//Your code

let Rectangle = {
    length: 4,
    width: 10,

    perimeter: function(){
        let p = 2*this.lenght + 2*this.width;
        return p;
    },
    
    area: function(){
        let a = this.length * this.width;
        return a;
    }
}


let Square = {
    sideLenght: 6,

    perimeter: function(){
        let p = 4 * this.sideLenght;
        return p;
    },
    area: function(){
        let a = this.sideLenght * this.sideLenght;
        return a;
    },
}

let Circle = {
    radius: 2,

    circumference: function(){
        let c = 2 * this.radius * Math.PI;
        return c;
    },

    area: function(){
        let  a = (this.radius * this.radius) * Math.PI;
        return a;
    }
}

//Dont forget about box and sphere

let cube = {
    length: 5,
    width: 2,
    height: 4,

    volume: function(){
        let v = this.length * this.width * this.height;
        return v;
    },
}



//------------------------------------------------
//copy paste test code when you finish under here
