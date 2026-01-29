import { useState } from "react"

const Hooks = () => {
    const [idade, setIdade] = useState(20)
    const incrementarIdade = () => {
        setIdade(idade + 1)
        console.log(idade)
    }

    return (
        <div>
            <h1>Hooks {idade} anos</h1>
            <button onClick={incrementarIdade}>Incrementar Idade</button>
        </div>
    )   
}