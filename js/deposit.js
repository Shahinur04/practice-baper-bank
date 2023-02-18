document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('user-$$');
    const newDepositAmountString = depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;
    const balanceTotal=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    const currentBalance=newDepositAmount+previousBalanceTotal;
    balanceTotal.innerText=currentBalance;

    depositField.value = '';
})