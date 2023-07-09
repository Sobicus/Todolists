import {TextField} from '@mui/material';
import Button from '@mui/material/Button/Button';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import IconButton from "@mui/material/IconButton/IconButton";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        <TextField value={title}
                   variant={'outlined'}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   error={!!error}
                   label={'Type task'}
                   helperText={error}
        />
        <IconButton
            color='primary'
            onClick={addItem}
            size="large">
            <ControlPointIcon/>
        </IconButton>



    </div>
}
