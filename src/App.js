import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "Buy some groceries" },
    { id: 2, completed: false, title: "Check the mailbox" },
    { id: 3, completed: false, title: "Pay for bills" },
    { id: 4, completed: false, title: "Clean the fridge" },
    { id: 5, completed: false, title: "Take the dog for a walk" },
  ];

  return (
    <div className="wrapper">
      <h1>React Tutorial</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
