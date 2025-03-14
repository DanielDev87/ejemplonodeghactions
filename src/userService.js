const users = []

const addUser = (name) =>{
    const user = { id: users.length + 1, name }
    users.push(user)
    return user
}

const getUsers = () => users

module.exports = { addUser, getUsers }