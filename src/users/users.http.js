const {createUser,getAllUsers,getUserById,deletUser,updateUser} = require('./users.controllers')

const getAll = (req, rest)=>{
    const data = getAllUsers()
    rest.status(200).json(data)
}

const getById = (req, res)=>{
    const id = Number(req.params.id)

    if(id){
        const data = getUserById(id)
        if(data.id){
            res.status(200).json(data)
        }else{
            res.status(400).json({message: 'Invalid ID'})   
        }
       
    }else{
        res.status(400).json({message: 'Id is not a number'})
    }
}

const deleteById = (req, res) =>{
  const id = Number(req.params.id)
  if(typeof id === 'number'){
   const deleted = deletUser(id)
   if(deleted){
    res.status(204).json()
   }else{
    res.status(400).json({message : 'Try with another ID'})
   }
    
  }else{
    res.status(400).json({message : 'Invalid Id'})
  }
}

const create =(req, res)=>{
    const data = req.body

    if (data.name && data.age && data.email && data.country && data.phone){
        const response = createUser(data)
        res.status(201).json(response)
    }else{
        res.status(400).json({message : 'Invalid Arguments'})
    }
}

const update = (req,res) => {
    const id= Number(req.params.id)
    const data = req.body
     if (data.name && data.age && data.email && data.country && data.phone){
      const response = updateUser(data, id)
      res.status(201).json({message: "User edited succesfully", data:response})
    }else{
        res.status(400).json({message : 'Invalid Arguments'})
    }
}



module.exports={
    getAll,
    getById,
    deleteById,
    update,
    create 
}