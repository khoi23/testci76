import React from "react";

const Form = ({ newTask, setNewTask, addTask,  language}) => {
    return (
        <form className="form">
            <input
                type="text"
                placeholder="Enter task ..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>{language ==='vn' && 'Gửi đi'}{language ==='en' && 'Submit'}</button>
        </form>
    );
};

export default Form;
