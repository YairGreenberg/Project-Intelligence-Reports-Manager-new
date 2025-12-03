import { checkIfInDb } from "./saveObject.js";
import { dataBase } from "../db/db_json.js";


export const checkID = (id) => {
    try {
        if (typeof (id) !== 'string' && id === undefined && typeof (id) !== 'number') {
            throw new Error("must enter numbers!")
        }
        return id;
    } catch {
        console.error("Must be numbers in id!")
    }
};

function checkNotNull(obj) {
    return Object.values(obj).every(value => value !== '');
}


export function createObject(id, terroristName = "Muhammad — unknown last name", weapons, text) {
    let object =
    {
        id: checkID(id),
        terroristName: terroristName,
        weapons: [weapons],
        text: text
    }
    if (checkIfInDb(object)) {
        return;
    } else {
        if (checkNotNull(object)) { dataBase.push(object) }
        else{
            console.log('Please enter all the necessary fields')
        }
    }
};