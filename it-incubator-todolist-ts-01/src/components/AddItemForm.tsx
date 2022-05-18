import React, {ChangeEvent, useState} from "react";
import {Button, TextField} from "@mui/material";


type AddItemFormPropsType = {
    callBack: (newTitle: string) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {
    let [newTaskTitle, setNewTaskTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (newTaskTitle.trim() !== "") {
            props.callBack(newTaskTitle.trim());
            setNewTaskTitle("");
        } else {
            setError("Title is required")
        }
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter") {
            addItem();
            // if(e.charCode === 13){
            // addItem();
            // }  // - тот же ентер через чарКод
        }
    }

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setNewTaskTitle(value)
        // setError(null)  //---- убрать эрор при новом введении
    }

    return (

        <div>
            <TextField
                id="outlined-basic"
                // label="Write your task"
                label={!error? "Write your task": "Title is required"}

                variant="outlined"
                value={newTaskTitle}
                onChange={onNewTitleChangeHandler}
                onKeyPress={onKeyPressHandler} size={"small"}
            />

            {/*<input*/}
            {/*    placeholder="Write your task"*/}
            {/*    value={newTaskTitle}*/}
            {/*    onChange={onNewTitleChangeHandler}*/}
            {/*    onKeyPress={onKeyPressHandler}*/}
            {/*    className={error ? "error" : ""}*/}
            {/*/>*/}
            <Button variant="contained" onClick={addItem} style={{
                maxWidth: '30px',
                maxHeight: '38px',
                minWidth: '30px',
                minHeight: '30px',
                backgroundColor: 'black'
            }}>+</Button>
            {error && <div className="error-message">{error}</div>}
        </div>

    )
}