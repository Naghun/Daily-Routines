export const all_tasks_query = `
{
    allTasks {
        id
        taskName
        description
        completed
      }
}
`

export const specific_tasks = `
query SpecificTasks($username: String!) {
    specificTasks(username: $username) {
        id
        taskName
        description
        completed
    }
}
`
export const create_task = `
mutation CreateTask($taskName: String!, $description: String, $completed: Boolean) {
    updateTask(taskName: $taskName, description: $description, completed: $completed) {
      task {
        id
        taskName
        description
        completed
      }
    }
  }
`
