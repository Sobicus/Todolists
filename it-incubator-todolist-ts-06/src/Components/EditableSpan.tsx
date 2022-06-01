import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
type EditableSpan ={
    title:string
    callBack:(newTitle:string)=>void
}


const EditableSpan:React.FC<EditableSpan> = (props) => {
    let [newTitle, setNewTitle] = useState(props.title)
    // let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     setError(null);
    //     if (e.key === 'Enter') {
    //         addTask();
    //     }
    // }
    const addTask = () => {
        props.callBack(newTitle)
        // let changeTitle = newTitle.trim();
        // if (newTitle !== "") {
        //     props.callBack(newTitle);
        //     setNewTitle("");
        // } else {
        //     setError("Title is required");
        // }
    }
    const[edit, setEdit]=useState(false)
    const editTrue=()=>{
        setEdit(!edit)
        addTask()
    }

    return (
            edit
                ?<input onBlur={editTrue} onChange={onChangeHandler} autoFocus type="text" value={newTitle}/>
                :<span onDoubleClick={editTrue}>{props.title}</span>
    );
};

export default EditableSpan;