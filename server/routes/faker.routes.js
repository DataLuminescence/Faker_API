module.exports = (app) => {

    // const users = [
    //     { firstName: "Reimu",  lastName: "Hakurei"    },
    //     { firstName: "Marisa", lastName: "Kirisame"   },
    //     { firstName: "Sanae",  lastName: "Kochiya"    },
    //     { firstName: "Sakuya", lastName: "Izayoi"     },
    //     { firstName: "Momiji", lastName: "Inubashiri" }
    // ];
    
    // app.get("/api", (req, res) => {
    //     // req: what we recieve
    //     // res: what we send
    //     res.json({message: "Hello World"})
    // })
    
    // // get all (read)
    // app.get("/api/users/new", (req, res) => {
    //     res.json(users)
    // })
    
    // // post (create)
    // app.post("/api/users", (req, res) =>{
    //     users.push(req.body)
    //     res.json({status: "okay"})
    // })
    
    // // get one (read one)
    // app.get("/api/users/:id", (req, res) => {
    //     const id = req.params.id
    //     res.json(users[id])
    // })
    
    // // put (update) - get one + create (find the one using id, update)
    // app.put("/api/users/:id", (req, res) => {
    //     const id = req.params.id
    //     users[id] = req.body
    //     res.json(users[id])
    
    // })
    
    // // delete (delte)
    // app.delete("/api/users/:id", (req, res) => {
    //     const id = req.params.id
    //     users.splice(id, 1)
    //     res.json({status: "okay"})
    // })
}