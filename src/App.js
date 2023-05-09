import './App.css';
import { Callback } from './components/useCallback/Callback';
import Child from './components/useCallback/child';
import { Memo } from './components/useMemo/Memo';
function App() {
  return (
    <div className="App">
      <Callback/>
    </div>
  );
}

export default App;
