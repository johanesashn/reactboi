import { useState } from "react";

function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [menu, setMenu] = useState("home")

    const switchMenu = () => {
        if (menu === "home") {
            setMenu("todo")
        } else {
            setMenu("home")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // setTodos([...todos, "makan"])
        // setTodos([...todos, "minum"])
        // setTodos([...todos, "kelas"])
        setTodos(prevTodos => [...prevTodos, "makan"])
        setTodos(prevTodos => [...prevTodos, "minum"])
        setTodos(prevTodos => [...prevTodos, "kelas"])
        setTodo("")
    }

    return (
        <div>
            <button onClick={switchMenu}>Go to {menu == "home" ? "Todo" : "Home"}</button>
            {
                menu == "home"
                ?
                <div>
                    <h1>Home Page</h1>
                </div>
                :
                <div>
                    <h1>Todo Page</h1>
                    <form onSubmit={handleSubmit}>
                        <input onChange={e => setTodo(e.target.value)} value={todo} placeholder="type your todo here" />
                        <button type="submit">Submit</button>
                    </form>
                    <h2>Todos</h2>
                    {
                        todos.map((todo, index) => (
                            <li key={index}>{todo}</li>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Todo;