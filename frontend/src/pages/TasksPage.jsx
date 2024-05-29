import React from "react";
import '../scss/pages/tasks_page.scss'
import { specific_tasks } from "../utils/Queries";
import useCsrfToken from "../utils/UseCsrfToken";
import UseGraphQL from "../utils/UseGraphQL";
import { useState } from "react";
import AddTask from "../components/AddTask";

function TasksPage() {
	const username_id = 1
	const username = 'Naghun'
	const csrfToken = useCsrfToken()
	const query = specific_tasks
	const tasks = UseGraphQL(csrfToken, query, { username });
	const [selectedTask, setSelectedTask] = useState(null);
	const [isOverlayed, setIsOverlayed] = useState(false)
	const [isVisible, setIsVisible] = useState(false)

    const handleTaskClick = (task) => {
        setSelectedTask(task)
		setIsOverlayed(true)
		setIsVisible(true)
    };

	if (!tasks) {
        return <div>Loading...</div>
    }
	
	const open_add_task = () => {
		console.log('opened')
	}
	return (
		<div className="container tasks-page-starter">
			<div className='row tasks-row'>
				<div className="col-12 tasks-starter">
					<div className={`tasks-container col-10 ${isOverlayed ? 'overlayed' : ''} `}>
						<h1 className="tasks-header col-12">Tasks</h1>
						<ul className="tasks-details col-12">
							{tasks.map(task => (
                                <li key={task.id} className="task-item col-10" onClick={() => handleTaskClick(task)}>
                                    <a href="#" className="col-7 name">{task.taskName}</a>
                                    <span className="col-2 edit">Edit</span>
                                    <span className="col-2 delete">Delete</span>
                                </li>
                            ))}	
						</ul>
						<div className="col-12 tasks-create">
							<button className="create-button btn col-4" onClick={open_add_task}>Create New Task</button>
						</div>
					</div>
					{selectedTask && (
						<div className={`task-details ${isVisible ? 'show-task' : 'hide-task'}`}>
							<h2 className="task-header">{selectedTask.taskName}</h2>
							<p className="description">Description: {selectedTask.description}</p>
							<button className="close-task-button btn col-8"
							onClick={() => {setTimeout(() => {
								setSelectedTask(null)
							}, 500); setIsOverlayed(false); setIsVisible(false)}}>Close Task</button>
						</div>
					)}
					<AddTask />
				</div>
			</div>
		</div>
	)
}

export default TasksPage;
