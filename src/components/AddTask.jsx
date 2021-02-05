import {useState} from 'react';



export function AddTask({onAddTask}) {
    const [text,settext] = useState('');
    const [day, setday] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();
        onAddTask({text,day,reminder});
        settext('');
        setday('');
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input type="text" placeholder="Add Task" className="form-control" value ={text} onChange={(e)=> settext(e.target.value)} required/>
                <div className="valid-feedback">Valid</div>
                <div className="invalid-feedback">Invalid</div>
            </div>
            <div>
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" className="form-control" value ={day} onChange={(e)=> setday(e.target.value)} required/>
            </div>
            <div>
            <input type="checkbox" name="rem" checked={reminder} value ={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
            <label htmlFor="rem" className="p-1">Set Reminder</label>
            </div>
            <input className="btn btn-block btn-dark"type="submit" value="Save Task"/>
        </form>
    )
}

