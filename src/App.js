import './App.css';
import Navbar from './componets/Navbar/Navbar';
import Textform from './componets/Sections/Textform';
import StrGen from './componets/stringGenerator/StrGen';

function App() {
  return (
   <>
    <Navbar/>
    <div className='section'>
        <Textform conversionheading="Enter text to perform CONVERSION operations..."/>
        <StrGen/>
    </div>
   
    
   </>
  );
}

export default App;
