import { useState } from "react/cjs/react.development";

const AddTask = ({createTask}) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const saveClicked = (e) =>{
        console.log(e)
        console.log("IM RUNNING")
        e.preventDefault()

        if(!text){
            alert("Please write a task before saving")
            return 
        }

        let id = Math.floor(Math.random()*9000)
        let newTask = {id, text, day, reminder}

        createTask(newTask)
        setText("")
        setDay("")
        setReminder(false)
    }
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" name="task" placeholder="Add your task" value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="text" name="date" placeholder="Due date" value={day} onChange={(e)=>setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" name="reminder" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save" className="btn btn-block" onClick={(e)=>saveClicked(e)} />
        </form>
    );
};

export default AddTask;
