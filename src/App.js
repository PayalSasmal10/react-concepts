import "./App.css";
import UseStateExample from "./components/useState/useStateExample";
import UseRefSecondEx from "./components/useRef/useRefSecondEx";
// import { Callback } from './components/useCallback/Callback';
// import Child from './components/useCallback/child';
// import { Memo } from './components/useMemo/Memo';
// import { UseRef } from './components/useRef/UseRef';
import Parent from './components/context_API/Parent';

// import ParentComponent from "./components/useContext/ParentComponent";
import { FamilyContext } from "./components/context_API/Context-API";




const familySecret = {
  familyName: "Sasmal Family",
  onlyParentCanSee : () => {
      return "The sasmals are the best.";
  },
  onlyChildrenACanSee : () => {
      return "Only A can see this";
  },
  onlyChildrenBCanSee: () => {
      return "Only B can see this";
  },
  onlyChildrenCCanSee: () => {
      return "Only C can see this";
  }, 

};

function App() {
  return (
    <div className="App">
      <FamilyContext.Provider value={familySecret}>
        <Parent/>
      </FamilyContext.Provider>

    </div>
  );
}

export default App;
