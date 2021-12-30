import { StrictMode } from "react"
import ReactDOM from "react-dom"
import Metronome from "./Metronome"

const rootElement = document.getElementById("root")
ReactDOM.render(
  <StrictMode>
    <Metronome />
  </StrictMode>,
  rootElement
)
