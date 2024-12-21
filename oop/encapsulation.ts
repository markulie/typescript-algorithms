class BankAccount {
  // Private properties to restrict direct access
  private accountNumber: string
  private accountHolderName: string
  private balance: number

  constructor(
    accountNumber: string,
    accountHolderName: string,
    balance: number,
  ) {
    this.accountNumber = accountNumber
    this.accountHolderName = accountHolderName
    this.balance = balance
  }

  // Method to display account details
  public showAccountDetails(): void {
    console.log(`Account Number: ${this.accountNumber}`)
    console.log(`Account Holder Name: ${this.accountHolderName}`)
    console.log(`Balance: ${this.balance}`)
  }

  // Method to deposit amount
  public deposit(amount: number): void {
    if (amount <= 0) {
      console.log('Deposit amount must be positive.')

      return
    }
    this.balance += amount
    console.log(`Deposited ${amount}. New balance: ${this.balance}`)
  }

  // Method to withdraw amount
  public withdraw(amount: number): void {
    if (amount <= 0) {
      console.log('Withdrawal amount must be positive.')

      return
    }
    if (this.balance < amount) {
      console.log('Insufficient Balance')

      return
    }
    this.balance -= amount
    console.log(`Withdrew ${amount}. New balance: ${this.balance}`)
  }

  // Getter for balance (if needed)
  public getBalance(): number {
    return this.balance
  }
}

// Usage example
const myBankAccount = new BankAccount('123456', 'John Doe', 1000)
myBankAccount.deposit(500)
myBankAccount.showAccountDetails()
myBankAccount.withdraw(2000)
