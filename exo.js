function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}

// Ajouter la méthode bark() au prototype de Dog
Dog.prototype.bark = function() {
    return 'Woof!';
};

// Exemple d'utilisation :
const chien1 = new Dog('Max', 'Labrador', 'male', 3);
console.log(chien1.bark()); // Output: 'Woof!'
