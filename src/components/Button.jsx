import { useContext } from "react";
import {CalcContext} from "../context/CalcContext";

const getStyleName=(btn)=>{
  const className={
    '=':'equals',
    '*':'opt',
    '/':'opt',
    '+':'opt',
    '-':'opt',
  }
  return className[btn]
}


const Button = ({value}) => {
 
  const{calc,setCalc}=useContext(CalcContext);
  const{curr,sign,res}=calc;
  console.log(curr,sign,res);
//handle dot
const dotClick=()=>{
  setCalc({
    ...calc,
    curr:!calc.curr.toString().includes('.')?calc.curr+value:calc.curr
  })
  }
  //handle clear
  const resetClick=()=>{
    setCalc({sign:'',curr:0,res:0})
  }
  //handle button click
  const handleClickButton=()=>{
    const numberString=value.toString();
    let numbervalue;
    if(numberString==='0'&&calc.curr==0){
      numbervalue='0';
    }
    else{
      numbervalue=Number(calc.curr+numberString);
    }
    setCalc({...calc,curr:numbervalue})
  }
  const opClick=()=>{
    setCalc({
      sign:value,
      res:!calc.res&&calc.curr?calc.curr:calc.res,
      curr:0
    })
  }
  const equalClick = () => {
    if (calc.res && calc.curr) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "*": (a, b) => a * b,
          "/": (a, b) => a / b
        };
        return result[sign](a, b); // Return the result of the operation
      };
      setCalc({
        res: math(calc.res, calc.curr, calc.sign),
        sign: "",
        curr: 0
      });
    }
  };
  
  const perClick=()=>{
    setCalc({
      curr:(calc.curr/100),
      res:(calc.res/100),
      sign:""
    })
  }
  const invertClick=()=>{
    setCalc({
      curr:calc.curr?calc.curr*-1:0,
      res:calc.res?calc.res*-1:0,
      sign:''
    })
  }
  const handleBtnClick=()=>{
    //console.log("button clicked")
    const result={
      ".":dotClick,
      "C":resetClick,
      "/":opClick,
      "+":opClick,
      "-":opClick,
      "*":opClick,
      "=":equalClick,
      "%":perClick,
      "+-":invertClick
  
    }
    if(result[value]){
      //console.log(result[value]);
      return result[value]();
    }
    else{
      return handleClickButton();
    }
    
  }
  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button