function ProtectMaMoney(initialDeposit){
    let balance = initialDeposit;
    let txnHstry = []
    function transaction(amount, action){
        if(action === 'withdraw') {
            txnHstry.push(-amount);
            return balance-=amount;
        } else if(action === 'deposit') {
            txnHstry.push(amount);
            return balance+=amount
        }
    }
    return {
        withdraw: function(amount){
            return transaction(amount, 'withdraw')
        },
        deposit: function(amount){
            return transaction(amount, 'deposit')
        },
        checkBalance: function(){
            return balance;
        },
        getHistory: function(){
            return [...txnHstry];
        }
    }
}


const myAccount = ProtectMaMoney(5000);
console.log(myAccount.deposit(300));
console.log(myAccount.checkBalance())
console.log(myAccount.withdraw(700))
console.log(myAccount.getHistory())