// Balance - hidden -encapsulated

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  //   user does not have a direct access to the balance, cannot modify it
  public get balance() {
    return this._balance;
  }

  public deposit(amount: number) {
    if (amount < 0) {
      console.log("Invalid deposit account");
      return;
    }

    this._balance += amount;
  }

  public withdraw(amount: number) {
    if (amount < 0) {
      console.log("Invalid withdrawal account");
      return;
    }

    if (this._balance - amount < 0) {
      console.log("Insufficient Funds");
      return;
    }

    this._balance -= amount;
  }
}

const myAccount = new BankAccount(150);
myAccount.deposit(80);
myAccount.withdraw(100);
console.log(myAccount.balance);
