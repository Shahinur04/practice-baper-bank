document.getElementById('btn-withdraw').addEventListener('click',function(){
const withdrawTotal =document.getElementById('user-$');
withdrawFieldString=withdrawTotal.value;
const withdrawAmount=parseFloat(withdrawFieldString);
const withdrawTotalElement =document.getElementById('withdraw-total');
const previousWithdrawTotalString=withdrawTotalElement.innerText;
withdraw=withdrawTotalElement.innerText;
const withdrawNew=withdrawAmount+withdraw;
withdrawTotalElement.innerText=withdrawNew;
withdrawFiled.value='';
})
// const withdrawField=document.getElementById('withdraw-total');
// const newWithdrawString=depositField.value;
// const newWithdrawAmount=parseFloat(newWithdrawString);
// const withdrawTotal=document.getElementById('withdraw-total');
// const newWithdrawTotalString=withdrawTotal.innerText;
// const newWithdrawTotal=parseFloat(newWithdrawTotalString);
// const currentWithdraw=newWithdrawAmount+withdrawTotal;
// withdrawTotal.inner= currentWithdraw;