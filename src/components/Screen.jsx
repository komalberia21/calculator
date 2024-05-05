import { useContext } from "react"
import {CalcContext} from "../context/CalcContext"
//import { Textfit } from "react-textfit";

const Screen = () => {
  const{calc}=useContext(CalcContext);

  return (
    // <Textfit className="screen" max={70} mode="single">{calc.curr?calc.curr:calc.res}</Textfit>
    <div className="screen">{calc.curr?calc.curr:calc.res}</div>
  )
}

export default Screen