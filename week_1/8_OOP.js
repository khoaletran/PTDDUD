//Coding Challenge 1
//1
function Car(make,speed){
    this.make = make;
    this.speed = speed;
}

//2
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} accelerate ${this.speed}`);
}

//3
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} brake ${this.speed}`);
}

const BWM = new Car('BWM',120);
console.log(BWM);
BWM.accelerate();
BWM.brake();

const Mercedes = new Car('Mercedes',95);
console.log(Mercedes);
Mercedes.accelerate();
Mercedes.brake();

//Coding Challenge 2
console.log("----------");
//1
class CarCl{
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerate ${this.speed}`);
    }
    brake(){
    this.speed -= 5;
    console.log(`${this.make} brake ${this.speed}`);
    }
    get speedUS(){
        return this.speed/1.6;
    }
    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}

const Ford = new CarCl("Ford",120);
console.log(Ford);
Ford.accelerate();
Ford.brake();
console.log(Ford.speedUS);

//Coding Challenge 3
console.log("----------");
//1
class EV extends Car{
    constructor(make,speed,charge){
        super(make,speed);
        this.charge = charge;
    };
};
//2
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make}' battery: ${this.charge}`);
};

//3
EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} accelerate ${this.speed} and battery ${this.charge}`);
}

const Tesla = new EV("Tesla",120,23);
console.log(Tesla);
Tesla.accelerate();
Tesla.chargeBattery(90);
console.log(Tesla);


//Coding Challenge 4
console.log("----------");
//1
class EVCL extends CarCl{
    #charge
    constructor(make,speed,charge){
        super(make,speed);
        this.#charge=charge;
    };
    accelerate(){
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} accelerate ${this.speed} and battery ${this.charge}`);
    }
    chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make}' battery: ${this.charge}`);
    }
}

const Rivian = new EVCL("Rivian",120,23);
console.log(Rivian);
Rivian.accelerate();
Rivian.chargeBattery(90);