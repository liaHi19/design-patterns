abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }

  public calculateArea(): number {
    return this.height * this.width;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }
  public calculateArea(): number {
    return this.side * this.side;
  }
}

// ----> Client code
function area(shape: Shape) {
  return shape.calculateArea();
}

const rectangle = new Rectangle(10, 5);
const square = new Square(5);

area(rectangle);
area(square);

// --> Shape is Type, Rectangle and Square are subtypes

// Payment Processor
// Credit Card
// Debit Card
// Paypal

abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Credit card amount - ${amount}`);
  }
}

class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Debit card amount - ${amount}`);
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Paypal amount - ${amount}`);
  }
}

function executePayment(
  paymentProcessor: PaymentProcessor,
  amount: number,
): void {
  paymentProcessor.processPayment(amount);
}
