import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Assignment-2 Counter Application</h1>
      </header>
      <div className="ROW">
        <FunctionComponent />
        <ClassComponent />
      </div>
    </>
  );
}

export default App;
