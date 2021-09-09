import Button from "./Button";
import { Currencies } from "../contexts/Currencies";
import { useContext } from "react";

const Left = ({setBill,setButton,setPeople}) => {

    const currency = useContext(Currencies);
    
    return ( 
        <div className = "left">

            <p id = "p-bill">Bill</p>
            <input type="number" id="i-bill" name="bill" onChange={(e) => setBill(parseFloat(e.target.value))}></input>

            <p id="p-buttons">Select Tip %</p>
            <div className = "buttons">
                <Button percentage = {5} setButton={setButton}/>
                <Button percentage = {10} setButton={setButton}/>
                <Button percentage = {15} setButton={setButton}/>
                <Button percentage = {25} setButton={setButton}/>
                <Button percentage = {50} setButton={setButton}/>
                <input type="number" className="button custom" placeholder="Custom" onChange={(e) => setButton(parseFloat(e.target.value))}/>
            </div>

            <p id = "p-people">Number of People</p>
            <input type="number" id="i-people" name="i-people" onChange={(e) => setPeople(parseInt(e.target.value))}></input>

            {currency && currency.rates 
                ? 
                <div className = "usd-to-try">{((1/(currency.rates.USD))*(currency.rates.TRY)).toFixed(2)} ₺</div>
                :
                null
            }

        </div>
    );
}

export default Left;