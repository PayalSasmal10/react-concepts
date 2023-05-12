import './App.css';
// import { Callback } from './components/useCallback/Callback';
// import Child from './components/useCallback/child';
// import { Memo } from './components/useMemo/Memo';
// import { UseRef } from './components/useRef/UseRef';
// import { Parent } from './components/context_API/Parent';

import ParentComponent from "./components/useContext/ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent/>
    </div>
  );
}

export default App;
