import { addMessages} from "../DAL/messages.js";
import { encode } from "../servsess/utils.js";
const creategMessage = async (req, res) => {
    try {
        
        
        const { username, cipher_type,encrypted_text } = req.body;
        const encryptedText = encode(encrypted_text) 
        
        
        const masseg = await addMessages({username,cipher_type,encryptedText});

        return res.status(201).json({"id":masseg.id,"cipher_type":cipher_type,"encryptedText":encryptedText});

    } catch (error) {
        res.status(500).json({ error: "erroe" })
    }
};

export{
    creategMessage
}