//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log("You do not have enough space to fit everyone in this" + this.model + " " + this.make);

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("It ain't got no gas in it");
            return this.started = false;
        }
    }
    checkService() {
        if (this.mileage > 30000) {    
            console.log("Your Vehicle is Due for Maintanence!")        
            this.scheduleService = true
            return this.scheduleService;                       
        } else {
            console.log("you have " + (mileage  - this.mileage) + " until your next required Maintenace")
            this.scheduleService = false
            return this.scheduleService;
        }
    }
}

let fastBoi = new Car('mercury', 'sedan', '1965', 'burgundy', '27965')

fastBoi.loadPassenger()
fastBoi.start()
fastBoi.checkService()







//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
