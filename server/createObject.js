// import { nuw_object } from "../client/app.js";

//console.log(nuw_object);


// function createObject(nuw_object)
// {
//     const check_prametr = (nuw_object)=>nuw_object.map((element)=>{
//         if("id" in nuw_object && "terroristName" in nuw_object && "weapons" in nuw_object && "text" in nuw_object)
//         {
//             return nuw_object
//         }
//         else if(){

//         }
//     })
// }

const checkID = (id)=>{
    try{
    if(typeof(id)!=='string' && id === undefined && typeof(id)!== 'number'){
        throw new Error ("must enter numbers!")
    }
    return id;
}catch{
    console.error("Must be numbers in id!")
}
};


 export  function createObject(id,terroristName = "Muhammad — unknown last name",weapons ,text)
{
    let object = 
    {
        id:checkID(id),
        terroristName : terroristName,
        weapons : weapons,
        text: text
    }
    return object;
};
console.log(createObject(undefined,undefined,['f','f'],"ghikj"));
export const nuw_object =createObject("5454",undefined,['f','f'],"ghikj")