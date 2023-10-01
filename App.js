// import React, { useState } from 'react';
// import './App.css';

// const Todo = ({ todo, onDelete }) => {
//   return (
//     <div className="todo-item">
//       {todo.text}
//       <button onClick={() => onDelete(todo.id)}>Delete</button>
//     </div>
//   );
// };

// const TodoList = ({ todos, onDelete }) => {
//   return (
//     <div className="todo-list">
//       {todos.map(todo => (
//         <Todo key={todo.id} todo={todo} onDelete={onDelete} />
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   const handleAddTodo = () => {
//     if (input) {
//       const newTodo = {
//         id: Date.now(),
//         text: input,
//       };
//       setTodos([...todos, newTodo]);
//       setInput('');
//     }
//   };

//   const handleDeleteTodo = id => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={e => setInput(e.target.value)}
//         placeholder="Enter your todo..."
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <TodoList todos={todos} onDelete={handleDeleteTodo} />
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button className="delete-button" onClick={() => onDelete(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input) {
      const newTodo = {
        id: Date.now(),
        text: input,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const handleDeleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="todo-form">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter your todo..."
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="todo-button">
          Add Todo
        </button>
      </div>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
