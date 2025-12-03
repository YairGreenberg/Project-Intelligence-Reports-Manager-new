import { dataBase } from "../db/db_json.js";
import { createObject } from "../server/createObject.js";
import { sortById, serchObject } from "../server/sorted.js";
import { deletObbject } from "../server/deletObject.js";
import { upDates, chek_before_upDates } from "../server/upDates.js";
import readlineSync from 'readline-sync'


function menu() {
    console.log(`please chooce an option:
                1. Add a new intelligence report\n
                2. Show all reports\n
                "3. Search report by ID\n"
                "4. Delete report by ID\n"
                "5. Edit report by ID\n"
                "0. Exit"`);

}



export function main() {
    var chooce = '';

    while (chooce !== '0') {
        menu();
        chooce = readlineSync.question("please enter one number: ");
        if (chooce === "1") {
            var field_id = readlineSync.question('please enter a field_id:');
            var field_terroristName = readlineSync.question('please enter a field_terroristName:');
            var field_weapons = readlineSync.question('please enter a field_weapons:');
            var field_text = readlineSync.question('please enter a field_text:');
            createObject(field_id, field_terroristName, field_weapons, field_text);

        }
        if (chooce === '2') {
            console.log(sortById())


        }
        if (chooce === '3') {
            const serchId = readlineSync.question('please enter a field_id:');
            console.log(serchObject(serchId));

        }
        if (chooce === '4') {
            const serchId = readlineSync.question('please enter a field_id:');
            deletObbject(serchId)
        }
        if (chooce === '5') {
            let id = readlineSync.question('enter your ID\n')
            if (chek_before_upDates(id)) {
                let field = readlineSync.question(`please chooce an option to update:
                1. update terroristName\n
                2. update weapons\n
                "3. update text\n"
                `);
                let updatedValue = readlineSync.question('enter value to update\n')
                switch (field) {
                    case '1':
                        upDates('terroristName', updatedValue, id)
                        break;
                    case '2':
                        upDates('weapons', updatedValue, id)
                        break;
                    case '3':
                        upDates('text', updatedValue, id)
                        break

                    default:
                        break;
                }
            }
        }
    }

}


main()
