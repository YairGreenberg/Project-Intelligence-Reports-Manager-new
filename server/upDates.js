import { dataBase } from "../db/db_json.js";

export function chek_before_upDates(ID) {
    for (const element of dataBase) {
        if (element.id === ID) {
            return true;
        }

    };
    return false
}

export function upDates(field, value, id) {
    for (const element of dataBase) {
        if (element.id === id) {
            if (field != 'weapons') {
                element[field] = value

            }
            else {
                element[field].push(value)
            }

        }
    }
}

