class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
  ) {}
  display() {
    console.log(
      `ID: ${this.id}, Price: ${this.price}, Description: ${this.description}`,
    );
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public author: string,
    public title: string,
  ) {
    super(id, price, description);
  }
  display(): void {
    super.display();
    console.log(`Author: ${this.author}, Title: ${this.title}`);
  }
}

class Electronic extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public brand: string,
    public model: string,
  ) {
    super(id, price, description);
  }
  display(): void {
    super.display();
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}

let book = new Book("1", 20, "Excellent Book", "John Doe", "John Doe's Book");
book.display();
let phone = new Electronic(
  "1",
  500,
  "A good device",
  "Google",
  "Google Pixel 8 Pro",
);

phone.display();
