
import {connect} from "../dbMongo.js"
import { ObjectId } from "mongodb"
const db = await connect()

async function addUser(username,password) {
    console.log(username)
    const user = await db.collection("users").insertOne({username,password,encryptedMessagesCount:0,createdAt:new Date()})
    return user
}

async function updatUserById(id,data={}) {
    const user = await db.collection("users").updateOne({_id: new ObjectId(id)} ,{$set:data})
    return user
}

async function deletUserById() {
    const user = await db.collection("users").deleteOne({name:"avi",age:23,citi:"Bnei Brak"})
    console.log(user)
}

async function isIfUser(user){
    
    
    const users = await db.collection("users").findOne({username:user});
   console.log(users);
   
    
    return users
}
export{
    addUser,
    updatUserById,
    deletUserById,
    isIfUser
}