import React, { useRef, createContext } from 'react';
import Toggle from './Toggle';
import Counter from './Counter'
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
  console.log("ref", ref.current)

  return (
    // <UserContext.Provider
    //   value={{
    //     user: true
    //   }}>
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add("new-fake-class")}>Level Up Dishes</h1>
      <Toggle />
      <Counter />
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