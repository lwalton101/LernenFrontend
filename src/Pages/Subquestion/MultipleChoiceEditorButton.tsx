import {ChangeEvent} from "react";

type ChangeFunction = (e: ChangeEvent<HTMLInputElement>) => void;
interface MultipleChoiceEditorButtonProps {
    onChange: ChangeFunction;
    onChecked: ChangeFunction;
}

export function MultipleChoiceEditorButton(props: MultipleChoiceEditorButtonProps) {
    return (
        <button className={"bg-primary_dark p-2"}>
            <input className={"bg-primary_mid"} onChange={props.onChange}/>
            <input type={"checkbox"} onChange={props.onChecked}/>
        </button>
    );
}
