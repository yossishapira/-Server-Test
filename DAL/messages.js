import supabase from "../dbSupabase.js"




async function addMessages(obj = {}) {


    try {
        const { error } = await supabase
            .from('messages')
            .insert(obj)
            .select()
        if (error){

            return error
        }
        
      
    } catch (error) {
        return error

    }
}


async function getMessages() {
    try {
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .single()
        if (error) throw error
        return data[0]
    } catch (error) {
        return error

    }
}

export {
    addMessages,
    getMessages
}
