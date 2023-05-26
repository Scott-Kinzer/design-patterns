interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(data: any): void {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

class ConcreteObserver implements Observer {
  public update(data: any): void {
    console.log('Received new data:', data);
  }
}

const subject = new Subject();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers('New data');
