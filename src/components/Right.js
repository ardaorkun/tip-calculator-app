import BillSplitter from "./BillSplitter";

const Right = ({result, setBill, setButton, setPeople, setResult}) => {
    return ( 
        <div className = "right">
        <BillSplitter text = "Tip Amount" id = "tip" icon = "$" val={(result.tipPerPerson)}/>
        <BillSplitter text = "Total" id = "total" icon = "$" val={(result.totalPerPerson)}/>
        <BillSplitter text = "Tip Amount" id = "tip" icon = "₺" val={(result.tipPerPersonTL)}/>
        <BillSplitter text = "Total" id = "total" icon = "₺" val={(result.totalPerPersonTL)}/>
        <button type="reset" id="reset" onClick={() => {
            setBill(null)
            setButton(null)
            setPeople(null)
            setResult({})
        }}>RESET</button>
        </div>
    );
}
 
export default Right;