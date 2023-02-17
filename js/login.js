//step1 add click event handler in yhe submit button
document.getElementById('btn-submit').addEventListener('click',function(){
   const emailInputFiled=document.getElementById('user-email');
   const emailInputValue=emailInputFiled.value;
   
   const passwordInputFiled=document.getElementById('user-password');
   const  passwordInputFiledValue=passwordInputFiled.value;

   if(emailInputValue=='baperbank@gmail.com'&&passwordInputFiledValue==12345){
    window.location.href='bank.html'
   }
   else{
    alert ('alert !!! invalid user')
   }
})
//step2 get the email address inside the input email field
//always remember to use. value to get text into email field

