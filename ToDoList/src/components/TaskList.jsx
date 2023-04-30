export default function TaskList({ taskArray, setComplete, handleDelete }) {
    let placeholder = {
        name: "No Tasks to do",
        complete: true,
        empty: true,
        id: 0
    }
    return (
        <div className="taskList">
            {
                taskArray.length == 0 ?
                    <Task task={placeholder} />
                    : [...taskArray].map((task) => <Task task={task} setComplete={setComplete} handleDelete={handleDelete} key={task.id} />)
            }
        </div>

    )
}


// eslint-disable-next-line react/prop-types
function Task({ task, setComplete, handleDelete }) {
    return (
        <div className="task" style={
            {
                display: task.empty && "block"
            }
        }>
            <p className="name" >{task.name}</p>

            {!task.complete ? (
                <div className="buttons">
                    <button onClick={() => setComplete(task.id)} >Complete</button>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
            ) : ""}


        </div>
    )
}