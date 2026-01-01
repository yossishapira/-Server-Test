import supabase from "../dbSupabase.js"




async function addMessages(obj = {}) {


    try {
        const { data, error } = await supabase
            .from('messages')
            .insert(obj)
            .select()
        if (error){

            return error
        }
        else{
            return data[0]
        }
      
    } catch (error) {
        return error

    }
}

export {
    addMessages,
    
}
