export const checkRole = (reqRole) => async(req, res, next) => {
    try {
            const user = req.user
    const roleByUser = user.role
    const checkValueRole = reqRole.some((rolesingle) => roleByUser.includes(rolesingle))
    if(!checkValueRole){
        return res.status(403).json({error:"NOT_PERMISSION"})
    }

    next()

    }
    catch(error){
        res.status(500).json({message: error.message})
    }

}