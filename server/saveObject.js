import { dataBase } from "../db/db_json.js";
import { nuw_object } from "./createObject.js";

console.log(dataBase);

console.log(nuw_object);


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

console.log(check_prametrs(nuw_object));

function checkIfInDb(nuw_object)
{
    try{
        for(const keyID of dataBase)
        {
            if(nuw_object.id === keyID.id)
            {
                throw new Error("This ID already exists!")
            }
        }
        dataBase.push(nuw_object)
        return nuw_object;

    }catch{
        console.error("This ID already exists!");
        
    }

}
console.log(checkIfInDb(nuw_object));


console.log(dataBase);/////////////////////////////////////////
