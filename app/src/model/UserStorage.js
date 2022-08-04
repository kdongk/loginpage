"use strict";

class UserStorage {
    static #users = {
        id: ["ldh5081", "kdk", "wj"],
        psword: ["ehdgus771", ";lkj", "123"],
        name: ['우리밋', '유리', '김동'],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;