import { dataBase } from "../db/db_json.js";



function deletObbject(dataBase,inputID)
{
     for( let i=0; i<dataBase.length;i++)
    {
        if(dataBase[i].id === inputID){
             delete dataBase[i]
             break;
        }else{
            throw new Error("this object undefined!")
        }
           
    }
}
console.log(dataBase);
deletObbject(dataBase,"934")
console.log(dataBase);
