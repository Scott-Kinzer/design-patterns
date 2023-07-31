// ServiceB.ts

interface Service {
  doSomething: () => void;
}
class ServiceB implements Service {
  public doSomething(): void {
    console.log('ServiceB is doing something.');
  }
}

class ServiceC implements Service {
  public doSomething(): void {
    console.log('ServiceB is doing something.');
  }
}

// ServiceA.ts
class ServiceA {
  private service: Service;

  constructor(serviceB: ServiceB) {
    this.service = serviceB;
  }

  public doSomething(): void {
    console.log('ServiceA is doing something.');
    this.service.doSomething();
  }
}

const serviceB = new ServiceB();
const serviceC = new ServiceC();

const serviceA = new ServiceA(serviceB);

const serviceD = new ServiceA(serviceC);

serviceA.doSomething();
serviceD.doSomething();
