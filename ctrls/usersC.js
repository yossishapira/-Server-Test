import { isIfUser, addUser} from "../DAL/users.js";
import { ObjectId } from "bson";
const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const isifuser = await isIfUser(username)
        
        if (!isifuser) {
            
            const user = await addUser( username, password);
            console.log(user);
            
            return res.status(201).json({_id: new ObjectId,username});
        }
        else{
return res.json("Username already exists.");
        }
       
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "erroe" })
    }
};

export {
    createUser,
}
