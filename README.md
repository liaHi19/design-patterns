## ~~ "A class should have only one reason to change." -- Robert C. Martin

#### This means that a class should only have one responsibility or job. If a class has more than one responsibility, it has more than one reason to change, which can make it more complex and difficult to maintain.

## The Single Responsibility Principle (SRP) is a principle of object-oriented programming that states that a class should only have one reason to change. This principle suggests that a class should only do one thing and do it well. If a class has more than one responsibility, it becomes coupled, and a change to one responsibility can affect the others. This coupling can make the code more difficult to understand, modify, and maintain.

#### The goal is to minimize the impact of change by isolating it. If we have to change something, we should only need to update one class. If a class has too many responsibilities, a change in the requirements of one responsibility might affect the other responsibilities of the class. In TypeScript, as in any other object-oriented programming language, SRP can be applied by breaking down large, complex classes into smaller, more manageable ones. Each of these smaller classes should have a single responsibility.
