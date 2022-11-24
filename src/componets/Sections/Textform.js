import React , {useState} from 'react'
import './textform.css'
import Button from 'react-bootstrap/Button';

export default function Textform(props)  {
  const handleUpClick =() =>{
    console.log("Uppercase was clicked");
    // setText("You have clicked on handleUpClick")
    let newText = text.toUpperCase();
    setText(newText);
  
  }
  const handleLowClick =() =>{
    console.log("Uppercase was clicked");
    // setText("You have clicked on handleUpClick")
    let newText = text.toLowerCase();
    setText(newText);
  
  }
  const handlerandomgenClick =() =>{
    let usrinput = prompt("Enter Length of String:")
    if(usrinput>50){
      alert("Input the length less than 50..")
      let result = ""
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( let i = 0; i < usrinput; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));

       }
       return result;
    }
  }

  const handleOnChange =(event) =>{
    console.log("On change");
    setText(event.target.value);
  }
  const [text,setText] = useState('Enter text here...');
  return (
    <>
    <section>
      <div className="textform"> 
          <h1>{props.conversionheading}</h1>
          <textarea id="w3review" value={text}  onChange={handleOnChange} rows="4" cols="50" >{handlerandomgenClick}</textarea>
          <div className="btn">
            <Button variant="primary" onClick={handleUpClick} >UpperCase</Button>
            <Button variant="primary" onClick={handleLowClick}>LowerCase</Button>              
          </div>
      </div>
    </section>    
    </>
  )
}
