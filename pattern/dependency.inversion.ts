class PayPalPayment {
  user: string;

  constructor(user: string) {
    this.user = user;
  }

  specialPayment() {
    console.log('do payment');
  }

  additionalPayment() {
    console.log('do payment');
  }
}

class StripePayment {
  user: string;

  constructor(user: string) {
    this.user = user;
  }

  specialPayment() {
    console.log('do payment');
  }
}

interface DefaultPaymentProccess {
  pay: () => void;
}

class PayPalProcess implements DefaultPaymentProccess {
  private payPalPayment: PayPalPayment;

  constructor(user: string) {
    this.payPalPayment = new PayPalPayment(user);
  }

  pay() {
    this.payPalPayment.specialPayment();
    this.payPalPayment.additionalPayment();
  }
}

class StripePaymentProcess implements DefaultPaymentProccess {
  private stripePayment: StripePayment;

  constructor(user: string) {
    this.stripePayment = new StripePayment(user);
  }

  pay() {
    this.stripePayment.specialPayment();
  }
}

class PaymentProcess {
  private payment: DefaultPaymentProccess;

  constructor(defaultPayment: DefaultPaymentProccess) {
    this.payment = defaultPayment;
  }

  pay() {
    this.payment.pay();
  }
}

const stripePayment = new PaymentProcess(new StripePaymentProcess('Bob'));
const paypalPayment = new PaymentProcess(new PayPalProcess('John'));

stripePayment.pay();
paypalPayment.pay();
