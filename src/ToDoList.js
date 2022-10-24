import React from "react";
import { FaRegCircle, FaRegCheckCircle, FaPenAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TodoList = ({ toDo, markDone, setUpdateData, deleteTask }) => {
    return (
        <>
            {toDo.map((task, index) => {
                return (
                    <React.Fragment key={index}>
                        <div
                            className="todo-list-container"
                            onClick={(e) => markDone(task.id)}>
                            <div
                                className={
                                    task.status
                                        ? "todo-item-container done"
                                        : "todo-item-container"
                                }>
                                {task.status ? (
                                    <FaRegCheckCircle
                                        color="#9a9a9a"
                                        className="item-done-button"
                                    />
                                ) : (
                                    <FaRegCircle
                                        className="item-done-button"
                                        color="#9a9a9a"
                                    />
                                )}

                                <div className="item-title">{task.title}</div>
                                <span
                                    title="Delete"
                                    className="deleteButton"
                                    onClick={() => deleteTask(task.id)}>
                                    <AiFillDelete color="#9a9a9a" />
                                </span>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
        </>
        // <div className="todo-list-container">
        //     <div className="todo-item-container">
        //         <FaRegCircle className="item-done-button" color="#9a9a9a" />
        //         <div className="item-title">Go shopping</div>
        //     </div>
        //     <div className="todo-item-container done">
        // <FaRegCheckCircle
        //     color="#9a9a9a"
        //     className="item-done-button"
        // />
        //         <div className="item-title">House cleaning</div>
        //     </div>
        // </div>
    );
};

export default TodoList;
