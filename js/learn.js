'use strict';

function User(name, id) {
      this.name = name;
      this.id = id;
      this.human = true;
      this.hello = function() {
            console.log(`Hello ${this.name}`);
      };
}

User.prototype.exit = function() {
      console.log(`user ${this.name} exited`);
};

const Ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

Ivan.exit();

Ivan.hello();
alex.hello();

console.log(Ivan);
console.log(alex);

