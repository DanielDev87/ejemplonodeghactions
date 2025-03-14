const userService = require("./userService")

const getusers = (req,res)=> {
    res.json(userService.getUsers())
}

module.exports = { getusers }