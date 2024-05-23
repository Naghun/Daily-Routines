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
