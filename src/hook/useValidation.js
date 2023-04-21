import { useState } from "react"

export default function(){
    const [errorEmail, setErrorEmail] = useState('');
    const [errorname, setErrorName] = useState('');


    

    function regValidation(val, type,){
        const regexVal = /.+@[^@]+\.[^@]{2,}$/
        const regexname = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
    

        if(!regexVal.test(val) && val != '' && type == 'email'){
          setErrorEmail('errorr mail ')
        }else if(val == '' && type == 'email'){
          setErrorEmail('Fill the line')
        }else if(regexVal.test(val) && type == 'email'){
          setErrorEmail('')
        }

        if(!regexname.test(val) && val != ''){
          setErrorName('error Name')
        }else if(val == ''){
          setErrorEmail('Fill the line')
        }else if(regexname.test(val)){
          setErrorName('')
        }



      }

      return{
      item:{
        func:regValidation,
        email:errorEmail,
        name:errorname,
      }}
      
}