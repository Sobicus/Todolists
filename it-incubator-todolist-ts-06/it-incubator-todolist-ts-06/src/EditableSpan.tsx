import React, {useState} from "react";

type EditableSpanPropsType = {
    title: string
    editMode:boolean
}
export const EditableSpan = (props: EditableSpanPropsType) => {
    return props.editMode ? <span>{props.title}</span> : <input/>
}