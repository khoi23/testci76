import TodoList from "./ToDoList";
import TodoListHeader from "./ToDoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

const Home = () => {
    const [toDo, setToDo] = useState([]);

    const [valueFilterStatus, setValueFilterStatus] = "ALL";

    const [newTask, setNewTask] = useState("");
    const [updateData, setUpdateData] = useState("");

    const [statusUpdate, setStatusUpdate] = useState(false);

    const [language, setLanguage] = useState('en')

    const saveDataLocal = () => {
        const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
        if (newTask === "" && language === 'vn') {
            alert("Add New Task");
        } else {
            const dateUp = new Date().toISOString().slice(0,10);
            const num = todoList.length + 1;
            const newEntry = {
                id: num,
                title: newTask,
                status: false,
                date: dateUp,
            };
            todoList.push(newEntry);
            localStorage.setItem("todoList", JSON.stringify(todoList));
            setToDo(todoList);
            console.log(toDo);
        }
    };

    const addTask = (e) => {
        saveDataLocal();
        setStatusUpdate(!statusUpdate);
        e.preventDefault();
    };

    const handleFilter = (e) => {
        const filterValue = e.target.value;

        if (filterValue === "all") {
            setStatusUpdate(!statusUpdate);
        } else {
            const todoList = JSON.parse(localStorage.getItem("todoList"));
            const filterdProduct = todoList.filter(
                (item) => item.status === !!filterValue
            );
            setToDo(filterdProduct);
        }
    };

    const markDone = (id) => {
        const todoList = JSON.parse(localStorage.getItem("todoList"));
        const newTask = todoList.map((task) => {
            if (task.id === id) {
                return { ...task, status: !task.status };
            }
            return task;
        });
        localStorage.setItem("todoList", JSON.stringify(newTask));
        setToDo(todoList);
        setStatusUpdate(!statusUpdate);
    };

    const deleteTask = (id) => {
        const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
        let newTasks = todoList
            .filter((task) => task.id !== id)
            .sort((a, b) => (a.id > b.id ? 1 : -1));

        localStorage.setItem("todoList", JSON.stringify(newTasks));
        setToDo(todoList);
    };

    const sortTodo = (e) => {
        const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
        const sortTerm = e.target.value;

        console.log(sortTerm);
        if (sortTerm === "all") {
            const filterdList = todoList.sort((a, b) => a.id - b.id);            
            localStorage.setItem("todoList", JSON.stringify(filterdList));  
            setStatusUpdate(!statusUpdate);
        }
        if (sortTerm === "ascending") {
            const filterdList = todoList.sort((a, b) => a.id - b.id);
            localStorage.setItem("todoList", JSON.stringify(filterdList));        
            setStatusUpdate(!statusUpdate);
        }
        if (sortTerm === "descending") {
            const filterdList = todoList.sort((a, b) => b.id - a.id);
            localStorage.setItem("todoList", JSON.stringify(filterdList));       
             setStatusUpdate(!statusUpdate);
        }
    };

    

    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
        setToDo(todoList);
    }, [statusUpdate]);
    return (
        <div className="App">
            <div className="container">
                <TodoListHeader
                    toDo={toDo}
                    handleFilter={handleFilter}
                    sortTodo={sortTodo}
                    language={language}
                />
                <TodoList
                    toDo={toDo}
                    markDone={markDone}
                    deleteTask={deleteTask}
                />
                <Form
                    addTask={addTask}
                    setNewTask={setNewTask}
                    newTask={newTask} 
                    language={language}
                />
            </div>
            <Footer language={language} setLanguage={setLanguage}/>
        </div>
    );
};

export default App;
