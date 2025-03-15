const request = require("supertest")
const app = require("../server")
const userService = require("../userService")

test ("Debe obtener los usuarios(integracion)", async () => {
    userService.addUser("Pepito Perez")
    const res = await request(app).get("/api/users")

    expect(res.status).toBe(200)
    expect(res.body.length).toBe(1)
    expect(res.body[0].name).toBe("Pepito Perez")
})