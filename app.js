function TodoApp() {
    const [tasks, setTasks] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");
  
    const addTask = () => {
      if (inputValue.trim()) {
        setTasks([...tasks, { text: inputValue, completed: false }]); // Add a completed status
        setInputValue("");
      }
    };
  
    const removeTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };
  
    const toggleTaskCompletion = (index) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed; // Toggle the completed status
      setTasks(newTasks);
    };
  
    return (
      <div className="container">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task..."
        />
        <button className="add-button" onClick={addTask}>Add</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)} // Toggle task completion on checkbox change
              />
              <span className={task.completed ? "completed" : ""}>{task.text}</span> {/* Apply strikethrough if completed */}
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  ReactDOM.render(<TodoApp />, document.getElementById('root'));