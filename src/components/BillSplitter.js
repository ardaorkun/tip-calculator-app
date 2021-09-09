const BillSplitter = (props) => {

    const {text, id, icon, val} = props;

    return ( 
        <div className = "bill-splitter">
            <h2>
                {text} <br />
                <span>/ person</span>
            </h2>
            <h1 id = {id}>{icon}{val ? val.toFixed(2) : 0.00}</h1>
        </div>
    );
    
}
 
export default BillSplitter;