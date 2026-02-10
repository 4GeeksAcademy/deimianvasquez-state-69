import { useEffect, useState } from "react"


const SimpleCounterEffect = () => {
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        let interval = setInterval(() => {
            setCounter(counter + 1)
        }, 100);

        return () => clearInterval(interval)

    }, [counter])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>One {Math.floor((counter / 1) % 10)}</h1>
                    <h1>One {Math.floor((counter / 10) % 10)}</h1>
                </div>
            </div>
        </div>
    )
}

export default SimpleCounterEffect