///1step add event handler in the withdraw button

//step2  get the withdraw amount into value

//step3  convert strung to parsefloat number and check

//step4  take the value in the withdraw section

//step4 calculate total withdraw

//step5 balance id deke - koro

//step6 set the value


//step7 clear withdraw field













document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);
    
    const withdrawTotal=document.getElementById('withdraw-total');
    const withdrawTotalString=withdrawTotal.innerText;
    const newWithdrawTotalAmount=parseFloat(withdrawTotalString);
    const withdrawTotalSum=newWithdrawTotalAmount+newWithdrawAmount;
    withdrawTotal.innerText=withdrawTotalSum;

const totalBalance=document.getElementById('balance-total');
const balanceTotalString=totalBalance.innerText;
const newTotalBalance=parseFloat(balanceTotalString);
const balanceSum=newTotalBalance-withdrawTotalSum;
totalBalance.innerText=balanceSum;

if (btn-withdraw=>0) {
    
}




    withdrawField.value=''
})