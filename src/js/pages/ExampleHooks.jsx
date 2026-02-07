import { useState } from "react"
import "../../styles/pages/exampleHooks.css"

export const ExampleHooks = () => {

    const [count, setCount] = useState(0)
    const [ligth, setLigth] = useState(false)


    function increment() {
        setCount(count + 1)
    }

    function audioClick() {
        console.log("click")
    }

    function handleLigth() {
        setLigth(!ligth)
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 border border-danger mt-5">
                    <h1
                        className={`${count % 2 == 0 ? "bg-danger" : "bg-success"}`}
                    >{count}</h1>

                    <button
                        className="m-3"
                        onClick={() => (increment(), audioClick())}
                    >Incrementar</button>

                    <button
                        onClick={() => setCount(count - 1)}
                    >Decrementar</button>
                </div>

                <div className="col-12">
                    <div 
                        className={`light ${ligth ? "on" : "off"}`}
                        
                        >
                        {ligth ? "On" : "Off"}
                    </div>
                    <button
                        onClick={handleLigth}
                    >
                        {ligth ? "On" : "Off"}
                    </button>
                </div>
            </div>
        </div>
    )
}