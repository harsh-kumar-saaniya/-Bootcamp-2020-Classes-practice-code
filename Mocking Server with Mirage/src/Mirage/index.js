import { createServer } from "miragejs"

export default function () {
    let arr = [{ id: "1", text: "hellow" }]
    let users = [{ name: "harish", age: 18 }]
    createServer({
        routes() {
            this.namespace = '/fakeApi'
            this.get("/getTodos", { todos: arr })

            this.get("/getUsers", { todos: users })
            this.post("/addTodo", (_, req) => {
                console.log('req', req);
                arr.push(req.requestBody)
            })


        },
    })
}