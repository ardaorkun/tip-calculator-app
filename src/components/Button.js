const Button = (props) => {

    const {percentage,setButton} = props;

    return ( 
        <button className="button "type="button" onClick={() => {setButton(percentage)}}>{percentage}%</button>
     );
}
 
export default Button;