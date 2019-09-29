import React from 'react';
import Toggle from './Toggle';
import useTitleInput from './useTitleInput'

const App = () => {
  // use State Defined parameters
  // const [value, setValue] = useState(initialState);
  // const [name, setName] = useState('');

  // useEffect runs after each render
  // useEffect(() => {
  //   document.title = name;
  // })


  //imported custom hook
  const [name, setName] = useTitleInput('')

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
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
  );
};

// const formSubmit = (value, setValue) => {
//   console.log(`email sent to ${value}!`);
//   setValue('');
// }
export default App;