const userService = require("../userService")

test("Debe agregar un usuario", () => {
    const user = userService.addUser("Fulanito de tal")
    expect(user.name).toBe("Fulanito de tal")
    expect(userService.getUsers().length).toBe(1)
})