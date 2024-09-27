import Greeting from "./Greetings.tsx";
import Shouter from "./Shouter.tsx";
import MouseTracker from "./MouseTracker.tsx"

function App() {
  return (
    <>
      <Greeting name="Oli"></Greeting>
      <Shouter/>
      <MouseTracker/>
    </>
  )
}

export default App;
