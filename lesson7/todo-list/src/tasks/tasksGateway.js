const baseUrl = "https://62dc66a957ac3c3f3c5aaf2f.mockapi.io/api/v1/todo-list";

export const fetchTasksList = () => {
  return fetch(baseUrl).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    } else return response.json();
  });
};

export const createNewTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  });
};

export const updateTask = (taskId, updatedData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update task");
    }
  });
};
