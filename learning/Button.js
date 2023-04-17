import {react} from "react"

export default function MyButton({count, onClick}) {

    return (
        <button onClick={onClick}>
            I'm a {count}
        </button>
    );
}