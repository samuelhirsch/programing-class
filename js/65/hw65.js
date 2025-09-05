'use strict';
const homework65 = (function () {
    function newBankAccount1() {
        return {
            ballance: 100,
            performTransaction: function (amount) {
                console.log(this.ballance += amount);
            }
        };
    };
    const myBankAccount1 = newBankAccount1();
    const myBankAccount2 = newBankAccount1();

    myBankAccount1.performTransaction(100);
    myBankAccount2.performTransaction( 50);
    //hw step 2
    function transaction(amount) {
        console.log(this.ballance += amount);
    };
    function newBankAccount2() {
        return {
            ballance: 0,
        };
    };
    const myBankAccount3 = newBankAccount2();
    const myBankAccount4 = newBankAccount2();
    transaction.call(myBankAccount3, 150);
    transaction.call(myBankAccount3, 25);
    transaction.call(myBankAccount4, 25);
    //hw step 3
    const depositFiftyinSavings = transaction.bind(myBankAccount3, 50);
    depositFiftyinSavings();

}());