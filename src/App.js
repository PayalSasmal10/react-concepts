import { useCallback, useState } from "react";
import "./App.css";
// import UseStateExample from "./components/useState/useStateExample";
// import UseRefSecondEx from "./components/useRef/useRefSecondEx";
// import { Callback } from './components/useCallback/Callback';
// import Child from './components/useCallback/child';
// import { Memo } from './components/useMemo/Memo';
// import { UseRef } from './components/useRef/UseRef';
// import Parent from './components/context_API/Parent';

// import ParentComponent from "./components/useContext/ParentComponent";
// import { FamilyContext } from "./components/context_API/Context-API";
// import { useAPI } from "./components/useCallback/usingAPI";
import Counter from "./components/reactMemo/Counter";





// const familySecret = {
//   familyName: "Sasmal Family",
//   onlyParentCanSee : () => {
//       return "The sasmals are the best.";
//   },
//   onlyChildrenACanSee : () => {
//       return "Only A can see this";
//   },
//   onlyChildrenBCanSee: () => {
//       return "Only B can see this";
//   },
//   onlyChildrenCCanSee: () => {
//       return "Only C can see this";
//   }, 

// };

function App() {
  // example of useCallback
  // const url = "https://jsonplaceholder.typicode.com/posts?limit=20";
  // const items = useAPI(url);
  // console.log("items", items);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = useCallback(() => {
    setCounter1(counter1 => counter1 + 1);
  }, [counter1]);

  const incrementCounter2 = useCallback(() => {
    setCounter1(counter2 => counter2 + 1);
  }, [counter2]);

  const 

  return (
    <div className="App">
      {/* <FamilyContext.Provider value={familySecret}>
        <Parent/>
      </FamilyContext.Provider> */}
      {/* <UseStateExample/> */}
      
      {/* example of useCallBack {items.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
        </div>
      ))} */} 

      {/* <Counter value={counter1} onClick={incrementCounter1}/>
      <Counter value={counter2} onClick={incrementCounter2}/> */}

    </div>
  );
}

export default App;
