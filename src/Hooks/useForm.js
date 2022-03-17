import { useState } from 'react'

export default function useForm() {
    const [value, setValue] = useState('');

    function onChange({target}){
        setValue(target.value)
    }

  return {
      value,
      setValue,
      onChange
  }
}
