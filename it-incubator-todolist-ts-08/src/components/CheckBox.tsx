import React, {ChangeEvent} from "react";
import {Checkbox} from "@material-ui/core";

type PropsType = {
    checked: boolean
    callBack: (checked:boolean) => void
}

export const CheckBoxMy = (props: PropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.checked)
    }
    return (
        <Checkbox
            checked={props.checked}
            color="primary"
            onChange={onChangeHandler}
        />
    )
}