export const Button = (props) => {
    // console.log(props)
    return (
        <button
            className={props.classname}
            onClick={() => props.handleFunction("Juanita de Mancha")}
        >
            {props.text ? props.text : "Click Me"}
        </button>
    )
}

