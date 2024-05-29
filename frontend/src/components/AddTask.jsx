import React, { useState } from "react";
import useCsrfToken from "../utils/UseCsrfToken"
import { create_task } from "../utils/Queries"

function AddTask() {
    const csrfToken = useCsrfToken();
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = 'Naghun';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            credentials: 'include',
            body: JSON.stringify({
                query: create_task,
                variables: {
                    taskName,
                    description,
                    completed,
                    username,
                },
            }),
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/graphql/', options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Task created:', data.data.updateTask.task);
            setTaskName('');
            setDescription('');
            setCompleted(false);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <label>
                Completed:
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                />
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
