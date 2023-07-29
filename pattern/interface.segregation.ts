// interface Animal { <--- wrong
//   walk(): void;
//   fly(): void;
//   swim(): void;
// }

interface Walker {
  walk(): void;
}

interface Flyer {
  fly(): void;
}

interface Swimmer {
  swim(): void;
}

class Dog implements Walker {
  walk() {
    console.log('Dog is walking.');
  }
}

class Eagle implements Walker, Flyer {
  walk() {
    console.log('Eagle is walking.');
  }

  fly() {
    console.log('Eagle is flying.');
  }
}

class Penguin implements Walker, Swimmer {
  walk() {
    console.log('Penguin is walking.');
  }

  swim() {
    console.log('Penguin is swimming.');
  }
}

const dog = new Dog();
dog.walk();

const bird = new Eagle();
bird.fly();
