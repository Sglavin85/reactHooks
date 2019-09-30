import React, { useRef, useEffect, useState } from 'react';
import Toggle from './Toggle';
// import Counter from './Counter'
import useTitleInput from './hooks/useTitleInput'

const App = () => {
  //imported custom hook
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
    );
    const data = await res.json();
    setDishes(data)
  }

  //using an empty array as the second parameter makes use effect only run on mount effectively turning it into componentDidMount -- ** HOWEVER ** React DOCS stress not to use it like this
  useEffect(() => {
    fetchDishes();
  }, [])

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add("new-fake-class")}>Sean Glavin</h1>
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
      {dishes.map(dish => (
        <article className="dish-card dish-card--withImage" >
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div class="ingredients">
            {dish.ingredients.map(ingredient => (
              <span>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
export default App;