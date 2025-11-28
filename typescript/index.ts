interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {}
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

const circle = new Circle(18);
const rectangle = new Rectangle(14, 9);

// Client Code, client doesn't know how implemented function just use it

const areaOfCircle = calculateTotalArea(circle);
const areaOfRectangle = calculateTotalArea(rectangle);
console.log(areaOfCircle, areaOfRectangle);

// real world abstraction
const now = new Date();

const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDate = now.getDate();
console.log(currentYear, currentMonth, currentDate);
