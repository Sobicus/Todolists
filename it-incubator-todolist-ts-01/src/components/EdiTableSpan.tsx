import React, {ChangeEvent, useState} from "react";

type EdiTableSpanType = {
    title: string
    callBack: (newTitle: string) => void
}

export const EdiTableSpan = (props: EdiTableSpanType) => {
    let[edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.title)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setNewTitle(value)
        // setError(null)  ---- убрать эрор при новом введении
    }

    const onDoubleClickHandler=()=>{
        setEdit(!edit)
        props.callBack(newTitle)
    }

    return (
        edit
            ? <input value={newTitle} onChange={onNewTitleChangeHandler} onBlur={onDoubleClickHandler} autoFocus/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
}