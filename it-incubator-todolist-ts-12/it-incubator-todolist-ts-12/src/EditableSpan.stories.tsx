import {EditableSpan} from "./EditableSpan";
import {action} from "@storybook/addon-actions";

export default {
    title: 'EditableSpan Component',
    component: EditableSpan
}
const changeCallback=action('Value changed')
export const EditableSpaneBaseExample = () => {
    return <EditableSpan value={'start value'} onChange={changeCallback}/>
}