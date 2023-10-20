const db = require('../config');
const User = {};

User.create = (email, password,name,role,created_at) => {
    return db.query(`INSERT into users(email, password,name,role_id,created_at)` + `VALUES($1,$2,$3,$4,$5)`, [email, password,name,role,created_at]);
};
User.update = (email, password,name,role,id) => {
    return db.query(`UPDATE users SET email = $1, password = $2, name = $3, role_id = $4  WHERE id = $5`,
        [email, password,name,role,id]);
};
User.findEmail = (email) => {
    return db.query(`SELECT * FROM users where email='${email}'`);
};
User.findId = (id) => {
    return db.query(`SELECT * FROM users where id='${id}'`);
};
User.getUsers = (offset,limit) => {
    return db.query(`SELECT u.id,email,name,role,r.id as role_id FROM users u left join roles r on r.id=u.role_id 
                      ORDER BY u.id DESC limit '${limit}' OFFSET '${offset}'`);
};
User.getCount = () => {
    return db.query(`SELECT count( * ) FROM users`);
};
User.getRoles = () => {
    return db.query(`SELECT * FROM roles`);
};
User.setHistory = (user_id,event,created_at) => {
    return db.query(`INSERT into history(user_id, event,created_at)` + `VALUES($1,$2,$3)`, [user_id,event,created_at]);
};
module.exports = User;