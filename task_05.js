

class Car {
  constructor({speed = 0, price = 0, maxSpeed = 0, isOn, distance = 0}) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  static getSpecs(car) {
    console.log(`
      Car speed:  ${car.speed};
      Car price:  ${car.price};
      Car max speed:  ${car.maxSpeed};
      Engine is working:  ${car.isOn};
      Distance done:  ${car.distance};`)
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  get price() {
    return this._price;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  } 
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed){
    this.speed += value;}
  }
  decelerate(value) {
    if (this.speed - value >= 0){
    this.speed -= value;}
  }
  drive(hours) {
    if (this.isOn === true) {
    this.distance += hours*this.speed;
    }
  }

}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000













