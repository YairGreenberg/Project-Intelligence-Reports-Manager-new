import { dataBase } from "../db/db_json.js";


function check_prametrs(nuw_object)
{
    for(const key of Object.keys(nuw_object))
    {
        if(key !== "id" && key !== "terroristName" && key !== "weapons" && key !== "text" )
        {
            throw new Error("not have all prametrs!")
        }
    }return `You have successfully entered all the parameters!`

}

export function checkIfInDb(nuw_object)
{
    try{
        for(const keyID of dataBase)
        {
            if(nuw_object.id === keyID.id)
            {
                throw new Error("This ID already exists!")
            }
        }
        return false;

    }catch{
        console.error("This ID already exists!");
        
    }

}
