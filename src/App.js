import './App.css';
import { Callback } from './components/useCallback/Callback';
import Child from './components/useCallback/child';
import { Memo } from './components/useMemo/Memo';
import { UseRef } from './components/useRef/UseRef';
function App() {
  return (
    <div className="App">
      <UseRef/>
    </div>
  );
}

export default App;
