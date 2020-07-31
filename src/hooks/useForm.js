import { useState } from 'react';

export function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);
    
    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      });
    }
  
    function handleChange(infosDoEvento) {
      // const { getAttribute, value} = infosDoEvento.target; não funcionou
      // setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
      setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
    }
  
    function clearForm(){
      setValues(valoresIniciais);
    };
  
    return {
      handleChange, 
      values,
      clearForm,
    };
  };

  export default useForm;