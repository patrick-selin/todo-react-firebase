import { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";

import './App.css';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function App() {
  const [todos, setTodos] = useState([]);

  const columnDefs = [
    { field: 'description', sortable: true, filter: true},
    { field: 'date', sortable: true, filter: true},
    { field: 'priority', sortable: true, filter: true},
  ]

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch(
      "https://todolist-4f300-default-rtdb.europe-west1.firebasedatabase.app/items/.json"
    )
    .then(response => response.json())
    .then(data => setTodos(Object.values(data)))
    .catch(err => console.error(err))
  };

  return (
    <div className="ag-theme-material" 
    style={{ height: 400, width: 600 }}>
      <AgGridReact 
        rowData={todos}
        columnDefs={columnDefs}
      />
    </div>
  );
}

export default App;
