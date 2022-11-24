import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaClipboard, FaTheRedYeti } from 'react-icons/fa';
import { useForm } from './useForm';
import { getRandomChar, getSpecialChar } from './utils';
import './strgen.css'

function StrGen() {
  const [values, setValues] = useForm({
    length: 6,
    capital: true,
    small: true,
    number: false,
    symbol: false,
    ambgchar:false,
  });


  const [result, setResult] = useState('');

  const fieldsArray = [
    {
      field: values.capital,
      getChar: () => getRandomChar(65, 90),
    },
    {
      field: values.small,
      getChar: () => getRandomChar(97, 122),
    },
    {
      field: values.number,
      getChar: () => getRandomChar(48, 57),
    },
    {
      field: values.symbol,
      getChar: () => getSpecialChar(),
    },
   {
      field:values.amgchar,
   },
  ];

  // console.log(values.amgchar);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let generatedString = '';
    let i = 0 
    // console.log(values.length)
     const checkedFields = fieldsArray.slice(0,4).filter(({ field }) => field);
    // console.log(checkedFields, "hehe")
    while(i<values.length) {
      const index = Math.floor(Math.random() * checkedFields.length);
      let letter = '';
        letter = checkedFields[index]?.getChar();
        console.log(letter, i, index)
      
      if(values.amgchar===true){
          if(generatedString.includes(letter))
            continue
          else{
            generatedString += letter;
            i++;
          }
          console.log(generatedString) 
        }
      else{
          generatedString += letter;
          i++;
      }

    if (generatedString) {
      setResult(generatedString);
    } else {
      toast.error(' Please select at least one option');
    }
  }
  };

  const handleClipboard = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
      toast.success('Copied to your clipboard');
    } else {
      toast.error('No password to copy');
    }
  };

  return (
    <section>
      <div className="container">
        <form id="pg-form" onSubmit={handleOnSubmit}>
          <div className="result">
            <input
              type="text"
              id="result"
              placeholder="Min 6 Char"
              readOnly
              value={result}
            />
            <div className="clipboard" onClick={handleClipboard}>
              <FaClipboard></FaClipboard>
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input
                type="number"
                id="length"
                min={6}
                max={50}
                name="length"
                value={values.length}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="capital">Capital</label>
              <input
                type="checkbox"
                id="capital"
                name="capital"
                checked={values.capital}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="small">Small</label>
              <input
                type="checkbox"
                id="small"
                name="small"
                checked={values.small}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="number">Number</label>
              <input
                type="checkbox"
                id="number"
                name="number"
                checked={values.number}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="symbol">Symbol</label>
              <input
                type="checkbox"
                id="symbol"
                name="symbol"
                checked={values.symbol}
                onChange={setValues}
              />
            </div>
            <div className="field">
              <label htmlFor="symbol">Exclude Ambigous Chracters</label>
              <input
                type="checkbox"
                id="amgchar"
                name="amgchar"
                checked={values.amgchar}
                onChange={setValues}
              />
            </div>
          </div>
          <button type="submit">Generate String</button>
        </form>
      </div>
    </section>
  );
}

export default StrGen;
