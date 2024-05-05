import Wrapper from "./components/Wrapper.jsx";
import Screen from "./components/Screen.jsx";
import Buttonbox from "./components/Buttonbox.jsx";
import Button from "./components/Button";
import "./App.css";
import CalcProvider from "./context/CalcContext"

const btnvalue = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
]

const App = () => {
 

  return (
 <CalcProvider>
      <Wrapper>
        <Screen />
        <Buttonbox>
          {
            btnvalue.flat().map((btn, i) => {
              return (
                <Button value={btn} key={i} />
              )
            })
          }
        </Buttonbox>
      </Wrapper>
    </CalcProvider>

  )
}

export default App