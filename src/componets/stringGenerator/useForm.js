import { useState, useEffect } from 'react';

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  useEffect(()=>{console.log(values)}, [values])
  return [
    values,
    (e) => {
      console.log(e.target.type);
      setValues({
        ...values,
        [e.target.name]:
          e.target.type === 'checkbox' ? e.target.checked : e.target.value,
      });
    },
  ];
}
