import React, { useEffect } from "react";
import { connect } from "react-redux";
import CreateTaskInput from "./CreateTaskInput.jsx";
import Task from "./Task.jsx";
import { tasksListSelector } from "../tasks.selectors.js";
import * as actions from "../tasks.actions.js";
import PropTypes from "prop-types";

const TasksList = ({
  tasks,
  getTasksList,
  createTask,
  deleteTask,
  updateTask,
}) => {
  useEffect(() => {
    getTasksList();
  }, []);

  const sortedTaskList = tasks.slice().sort((a, b) => a.done - b.done);

  return (
    <main className="todo-list">
      <CreateTaskInput addTask={createTask}></CreateTaskInput>
      <ul className="list">
        {sortedTaskList.map((task) => (
          <Task
            key={task.id}
            {...task}
            onCheckboxChange={updateTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </main>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
  getTasksList: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

const mapState = (state) => {
  return {
    tasks: tasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: actions.getTasksList,
  createTask: actions.createTask,
  deleteTask: actions.deleteTask,
  updateTask: actions.updateTask,
};

export default connect(mapState, mapDispatch)(TasksList);
