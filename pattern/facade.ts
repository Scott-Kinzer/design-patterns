class Subsystem1 {
  operation1(): void {
    console.log('Subsystem 1 operation');
  }
}

class Subsystem2 {
  operation2(): void {
    console.log('Subsystem 2 operation');
  }
}

class Facade {
  private subsystem1: Subsystem1;
  private subsystem2: Subsystem2;

  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
  }

  operation(): void {
    this.subsystem1.operation1();
    this.subsystem2.operation2();
  }
}

const facade = new Facade();
facade.operation();
