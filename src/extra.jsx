import { useState } from 'react'
import './style.css'
///everything is fine just that this code does not follow bodmass rule evalutes from left to right 


const arr=["C","+-","del","/","7","8","9","%","4","5","6","-","1","2","3","+","0",".","=","*"];

function App() {
 const [count, setCount] = useState(0);
 const[current,setCurrent]=useState("");
const [string,setString]=useState("");
const[ currentOp,setCurrentOp]=useState("");
console.log(count,"count");
console.log(current,"current");
console.log(currentOp,"op");

//function to know if it is operator or not
  function isOperator(ele){
    return ele === "+" || ele === "-" || ele === "*" || ele === "/"||ele==="%";
  }
//function to handle click
  function handleClick(ele){
     if(ele==="C"){
        setString("");
        setCount(0);
        setCurrent("");
        return;
    }
    else if(ele==="="){
      setString("");
      setCurrent("");
      handleCalculateAmount(current,"=");
    }
    else if(ele==="del"){
      if(string.length>0){
      const newString=string.slice(0,string.length-1);
      const newcurrent=current.slice(0,current.length-1);
      console.log("newstring",newString);
      setString(newString);
      setCurrent(newcurrent);
      }else{
        setString("");
        setCurrent("");
      }
    }
   else {
    setString((prev)=>prev+ele);
    const ifoperator=isOperator(ele);
    if(ifoperator){
    handleCalculateAmount(current,ele);
     setCurrent("");
   }
    else{
      setCurrent(prev=>prev+ele)
   }}}
   //function to calculate
  function handleCalculateAmount(ele,op){
    console.log(currentOp,"op");
    console.log("element",ele);
    let amount=count;
   if(currentOp=="+"){
      amount=Number(amount)+Number(ele);
  }
    else if(currentOp=="-"){
      amount=Number(amount)-Number(ele);
    }
    else if(currentOp==="%"){
      amount=Number(amount)%(ele);
    }
    else if (currentOp==="*"){
      amount=Number(amount)*Number(ele);
      }
    else if(currentOp==="/"&&ele!==0){
      amount=Number(amount)/Number(ele);
      }
      else{
       if(count===0){
          setCount(current);
          setCurrent("");
          setCurrentOp(op);
          return;
        }
      }
            setCount(amount);
            setCurrentOp(op);
  }

  return (
    <>
    <div className='main'>
    <div className='screen'>
        {string.length>0?string:count}
      </div>
     <div className='calculator'>
      <div className='wrapper'>
  {arr.map((ele) => (
    <div key={ele}onClick={()=>handleClick(ele)} 
    className={isOperator(ele) ? "element operator" : ele === "=" ? "element equal" : "element"}>
      {ele}
    </div>
  ))}
</div>
 </div>
     </div>
    </>
  )
}
export default App

// import { useState } from 'react';
// import './style.css';
//using javascripts eval() function

// const arr = ["C", "+-", "del", "/", "7", "8", "9", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "=", "*"];

// function App() {
//   const [count, setCount] = useState(0);
//   const [string, setString] = useState("");
//   //const [currentOp, setCurrentOp] = useState("");
  
//   function isOperator(ele) {
//     return ele === "+" || ele === "-" || ele === "*" || ele === "/" || ele === "%";
//   }

//   function handleClick(ele) {
//     if (ele === "C") {
//       setString("");
//       setCount(0);
//     } else if (ele === "=") {
//       handleCalculateAmount();
//     } else if (ele === "del") {
//       setString(prev => prev.slice(0, -1));
//     } else {
//       setString(prev => prev + ele);
//     }
//   }

//   function handleCalculateAmount() {
//     const result = eval(string);
//     console.log(result);
//     setCount(result);
//     setString(result.toString());
//   }

//   return (
//     <div className='main'>
//       <div className='screen'>
//         {string || count}
//       </div>
//       <div className='calculator'>
//         <div className='wrapper'>
//           {arr.map((ele) => (
//             <div key={ele} onClick={() => handleClick(ele)} className={isOperator(ele) ? "element operator" : ele === "=" ? "element equal" : "element"}>
//               {ele}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



