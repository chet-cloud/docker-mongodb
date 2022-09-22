var db = connect("mongodb://user:pass@localhost:27017/admin");

db = db.getSiblingDB('new_db'); // we can not use "use" statement here to switch db

db.createUser(
    {
        user: "newUser",
        pwd: "newPass",
        roles: [ { role: "readWrite", db: "new_db"} ],
        passwordDigestor: "server",
    }
)