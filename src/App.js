import Left from "./components/Left";
import Right from "./components/Right";
import {useEffect,useState} from "react";
import {Currencies} from "./contexts/Currencies";

function App() {

  const [currencies, setCurrencies] = useState(null);
  const [bill, setBill] = useState(null);
  const [button, setButton] = useState(null);
  const [people, setPeople] = useState(null);

  const [result, setResult] = useState({});
  
  useEffect(() => {
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=06d6c49153965a5dd2bff9ce18f67d89")
      .then(responseObject => {
        return responseObject.json();
      })
      .then(data => {
        setCurrencies(data);
      })
      .catch(error => {
        console.log(error.message);
      });
  },[])

  useEffect(() => {    
    if(bill && button && people){

      const result = {};
      result.tip = (bill * (button / 100));
      result.tipPerPerson = (result.tip / people);
      result.totalPerPerson = ((bill + result.tip) / people);
      result.tipPerPersonTL = (result.tipPerPerson * ((1/(currencies.rates.USD))*(currencies.rates.TRY)));
      result.totalPerPersonTL = (result.totalPerPerson * ((1/(currencies.rates.USD))*(currencies.rates.TRY)));
      setResult(result);

    }
  }, [bill,button,people])

  return (
  
    <Currencies.Provider value = {currencies}>
      <div className="container">

        <h2 className="container-header">Calculator App</h2>

        <div className="calculator">
          <Left setBill={setBill} setButton={setButton} setPeople={setPeople}/>
          <Right result={result} setResult={setResult} setBill={setBill} setButton={setButton} setPeople={setPeople}/>
        </div>

      </div>
    </Currencies.Provider>
    
  );
}

export default App;