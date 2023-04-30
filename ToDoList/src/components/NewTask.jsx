// eslint-disable-next-line react/prop-types
function NewTask({ createTask }) {

    let handleCreate = (e) => {
        e.preventDefault();
        console.dir()
        let input = e.target.firstChild.value
        if (input != "") {
            createTask((tasks) => {
                
                const updated = [...tasks, {
                    name: input,
                    id: (tasks.length >= 1) ? (tasks[tasks.length - 1].id + 1) : 0,
                    completed: false
                }]
                

                return updated;

            }
            )

        }


    }
    return (
        <div>
            <h1>Todo List</h1>
            <form className="input" onSubmit={handleCreate}>
                <input type="text" name="task" id="task" />
                <button type="submit"  >Create</button>
            </form>
        </div>
    )
}

export default NewTask;