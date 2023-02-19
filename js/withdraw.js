document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('user-$');
    const withdrawFieldString=withdrawField.value;
    const withdrawFieldAmount=parseFloat(withdrawField)
    console.log('withdrawFieldAmount')
})