import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  

  const fetchItems = () => {
    fetch('https://todolist-4f300-default-rtdb.europe-west1.firebasedatabase.app/items/.json')
      .then((response) => response.json())
      .then((data) => {
        setTodos(Object.values(data));
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h1>Todo appp</h1>    
    </>
  );
}
export default App;
