import React, { useRef, createContext, useMemo } from 'react';
import Toggle from './Toggle';
// import Counter from './Counter'
import useTitleInput from './useTitleInput'

export const UserContext = createContext();

const App = () => {
  // use State Defined parameters
  // const [value, setValue] = useState(initialState);
  // const [name, setName] = useState('');

  // useEffect runs after each render
  // useEffect(() => {
  //   document.title = name;
  // })


  //imported custom hook
  const [name, setName] = useTitleInput('');

  const ref = useRef();
  // console.log("ref", ref.current)

  const reverseWord = (word) => {
    console.log("Fx Called")
    return word.split('').reverse().join('');
  };

  //useMemo should be thought of at "Should function run" in this case, if the variable title change the function runs. Therefore on mount the function will run, however un rerenders during typing in the input box the function does not run.
  // const title = "Sean Glavin"
  // const titleReversed = useMemo(() => reverseWord(title), [title]);



  return (
    // <UserContext.Provider
    //   value={{
    //     user: true
    //   }}>
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add("new-fake-class")}>Sean Glavin</h1>
      <Toggle />
      {/* <Counter /> */}
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name} />
        <button>SUBMIT</button>
      </form>
    </div>
    // </UserContext.Provider>
  );
};

// const formSubmit = (value, setValue) => {
//   console.log(`email sent to ${value}!`);
//   setValue('');
// }
export default App;