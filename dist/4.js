class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.door = false;
        this.tenants = [];
        this.key = key;
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
            console.log("Я зайшов в будинок.");
        }
        else {
            console.log("Двері зачинені.Зайти неможливо");
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Двері відчинено.");
        }
        else {
            console.log("Ключ не підходить. Двері зачинені.");
        }
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
export {};
//# sourceMappingURL=4.js.map