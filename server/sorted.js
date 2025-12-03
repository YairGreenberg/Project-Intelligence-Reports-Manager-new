import { dataBase } from "../db/db_json.js";



function sortById(dataBase)
{
    let sort = dataBase.sort((ID1,ID2)=>ID1.id-ID2.id)
    return sort;
}

console.log(sortById(dataBase));




function sortFiels(dataBase,inputField)
{
    if(inputField==="weapons")
    {
        let sort_field = dataBase.sort((weapons1,weapons2)=>weapons1[inputField].length-weapons2[inputField].length)
        return sort_field
    }else {
        let sort_field = dataBase.sort((field1,field2)=>field1[inputField]-field2[inputField])
        return sort_field
    }
    
}
console.log(sortFiels(dataBase,"weapons" ));




function serchObject(dataBase,inputID)
{
    for( let object of dataBase)
    {
        if(object.id === inputID){
             return object
        }else{
            throw new Error("this object undefined!")
        }
           
    }
}

console.log(serchObject(dataBase,"123"));







