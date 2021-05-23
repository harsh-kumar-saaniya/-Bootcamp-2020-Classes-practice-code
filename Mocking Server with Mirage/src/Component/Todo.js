import React, { useEffect, useState } from 'react';


let baseURL = "fakeApi"
export const Todos = () => {
    let [data, setData] = useState([]);

    const addTodoHandler = () => {
        fetch(`/${baseURL}/addTodo`, {
            method: "POST",
            body: { id: 1232, text: "text" }
        }).then(res => {
            console.log("success", res)
        }).catch(error => {
            console.log("error addtodo", error)
        })
    }

    const getDataHandler = () => {
        fetch(`/${baseURL}/ `)
            .then(res => res.json())
            .then(data => {
                setData(data.todo)
                console.log("data", data)
            })

    }
    return (
        <div>
            hello from todo
            <button onClick={addTodoHandler}>ADD</button>
            <button onClick={getDataHandler}>GET TODOS</button>
            {
                JSON.stringify(data)
            }
        </div>
    )
}


