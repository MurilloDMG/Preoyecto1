const userDB = [
  
    {
        id: 1,
        name: "",
        age: 20,
        email: "",
        country: "",
        phone: ""
    }
]

/*
    {
        id: 1,
        name: "",
        age: 20,
        email: "",
        country: "",
        phone: ""
    }
*/

const getAllUsers = () => {
    return userDB
}

const getUserById = (id) => {
    const filteredDB = userDB.filter((user) => user.id === id)
    return filteredDB[0]
}

const createUser = (userObj) => {
    if (userDB.length === 0) {
        const newUser = {
            id: 1,
            name: userObj.name,
            age: userObj.age,
            email: userObj.email,
            country: userObj.country,
            phone: userObj.phone
        }
        userDB.push(newUser)
        return newUser
    }
    const newUser = {
        id: userDB[userDB.length - 1].id + 1,
        name: userObj.name,
        age: userObj.age,
        email: userObj.email,
        country: userObj.country,
        phone: userObj.phone
    }
    userDB.push(newUser)
    return newUser
}

const deletUser = (id) => {
    const userId = userDB.filter(user => user.id === id);
    if (userId !== -1) {
        userDB.splice(userId, 1);
        return true;
    } else {
        return false;
    }

}

const updateUser = (data, id) => {
    const user = userDB.findIndex((index) => index.id === id)

    if (user !== -1) {
        userDB[user] = data
        return userDB[user]
    }else{
        createUser(data);
         return userDB.at(-1);
    }
   
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deletUser,
    updateUser
}

