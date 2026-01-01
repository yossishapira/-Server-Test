import { addMessages,getMessages} from "../DAL/messages.js";
import { encode } from "../servsess/utils.js";
const creategMessage = async (req, res) => {
    try {
        
        
        const { username, cipher_type,encrypted_text } = req.body;
        const encryptedText = encode(encrypted_text) 
        
        addMessages({username,cipher_type,encryptedText});
        const masseg = await getMessages()
        console.log(masseg);
        return res.status(201).json(masseg);

    } catch (error) {
        res.status(500).json({ error: "erroe" })
    }
};

export{
    creategMessage
}