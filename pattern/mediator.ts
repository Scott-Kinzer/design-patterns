// Mediator interface
interface Mediator {
  notify(sender: Colleague, event: string): void;
}

// Concrete Mediator
class ConcreteMediator implements Mediator {
  private colleagues: Colleague[] = [];

  register(colleague: Colleague): void {
    this.colleagues.push(colleague);
    colleague.setMediator(this);
  }

  notify(sender: Colleague, event: string): void {
    this.colleagues.forEach((colleague) => {
      if (colleague !== sender) {
        colleague.receive(event);
      }
    });
  }
}

// Colleague interface
interface Colleague {
  setMediator(mediator: Mediator): void;
  send(event: string): void;
  receive(event: string): void;
}

// Concrete Colleague
class ConcreteColleague implements Colleague {
  private mediator!: Mediator;

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  send(event: string): void {
    console.log(`Sending event: ${event}`);
    this.mediator.notify(this, event);
  }

  receive(event: string): void {
    console.log(`Received event: ${event}`);
  }
}

const mediator = new ConcreteMediator();

const colleague1 = new ConcreteColleague();
const colleague2 = new ConcreteColleague();

mediator.register(colleague1);
mediator.register(colleague2);

colleague1.send('Hello from colleague 1');
colleague2.send('Greetings from colleague 2');
