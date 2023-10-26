import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import { AgGridReact } from "ag-grid-react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "./App.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function App() {
  const [todos, setTodos] = useState([]);

  const columnDefs = [
    { field: "description", sortable: true, filter: true },
    { field: "date", sortable: true, filter: true },
    { field: "priority", sortable: true, filter: true },
  ];

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch(
      "https://todolist-4f300-default-rtdb.europe-west1.firebasedatabase.app/items/.json"
    )
      .then((response) => response.json())
      .then((data) => addKeys(data))
      .catch((err) => console.error(err));
  };

  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) => 
    Object.defineProperty(item, 'id', {value: keys[index]}));
    setTodos(valueKeys);
  }

  const addTodo = (newTodo) => {
    fetch(
      "https://todolist-4f300-default-rtdb.europe-west1.firebasedatabase.app/items/.json",
      {
        method: "POST",
        body: JSON.stringify(newTodo),
      }
    )
      .then((response) => {
        if (response.ok) {
          fetchItems();
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">TodoList</Typography>
        </Toolbar>
      </AppBar>
      <br />
      <AddTodo addTodo={addTodo} />
      <div className="ag-theme-material" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={todos} columnDefs={columnDefs} />
      </div>
    </>
  );
}

export default App;
