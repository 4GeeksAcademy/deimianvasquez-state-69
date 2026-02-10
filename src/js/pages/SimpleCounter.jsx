const SimpleCounter = (props) => {
    const { numberOne, numberTwo, numberThree } = props


    return (
        <div className="container">
            <h1> Number One {Math.floor(numberOne % 10)}</h1>
            <h1> Number Two {Math.floor(numberTwo % 10)}</h1>
            <h1> Number Two {Math.floor(numberThree % 10)}</h1>

        </div>
    )
}

export default SimpleCounter