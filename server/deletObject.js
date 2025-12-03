import { dataBase } from "../db/db_json.js";



export function deletObbject(inputID) {
    for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].id === inputID) {
            delete dataBase[i]
            console.log('successfully deleted');

            break;
        }
        else {
            throw new Error("this object undefined!")
        }
    }

}
