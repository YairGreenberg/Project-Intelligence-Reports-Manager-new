import { dataBase } from "../db/db_json.js";



export function sortById() {
    let sort = dataBase.sort((ID1, ID2) => ID1.id - ID2.id)
    return sort;
}


function sortFiels(dataBase, inputField) {
    if (inputField === "id") {
        let sort_field = dataBase.sort((weapons1, weapons2) => weapons1[inputField].length - weapons2[inputField].length)
        return sort_field
    } else {
        let sort_field = dataBase.sort((field1, field2) => field1[inputField] - field2[inputField])
        return sort_field
    }

}

export function serchObject(inputID) {
    try {
        for (let object of dataBase) {

            if (object.id === inputID) {
                return object
            }
        }
    }
    catch {
        throw new Error("this object undefined!")
    }
}








