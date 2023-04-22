import { useState } from "react"

export default function(){
    const [errorEmail, setErrorEmail] = useState('');
    const [errorname, setErrorName] = useState('');


    

    function regValidation(val,){
        const regexVal = /.+@[^@]+\.[^@]{2,}$/
        const regexname = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
    

        if(!regexVal.test(val) && val != ''){
          setErrorEmail('red')
        }else if(val == ''){
          setErrorEmail('#feaf39')
        }else if(regexVal.test(val)){
          setErrorEmail('green')
        }
        if(!regexname.test(val) && val != ''){
          setErrorName('red')
        }else if(val == ''){
          setErrorEmail('feaf39')
        }else if(regexname.test(val)){
          setErrorName('green')
        }



      }
      return{
      item:{
        func:regValidation,
        email:errorEmail,
        names:errorname,
      }}
      
}