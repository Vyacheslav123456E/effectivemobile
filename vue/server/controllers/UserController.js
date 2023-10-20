const Crypto  =  require( "../utils/crypto");
const User = require('../models/User.js');


module.exports = {
    async Login(req, res) {
        const {email, password, event} = req.body;
        const findEmail = await User.findEmail(email);
        if (findEmail.rows.length === 0) {
            res.status(201).json({success: false, msg: 'Указанный email не существует'})
        } else {
            let hashPassword = await Crypto.decryptPass(findEmail.rows[0].password)
            if (hashPassword === '"' + password + '"') {
                let response = await Crypto.encryptPass(JSON.stringify({email: findEmail.rows[0].email}))

                res.status(201).json({success: true, msg: response})
                //Создание события
                await History(findEmail.rows[0].id, event)
            } else {
                res.status(201).json({success: false, msg: 'Неверный пароль'})
            }
        }
    },
    async Registration(req, res) {
        const {email, password, name, role,event} = req.body;
        let hashPassword = null;
        const findEmail = await User.findEmail(email)
        if (findEmail.rows.length === 0) {
            if (password !== null) {
                hashPassword = await Crypto.encryptPass(JSON.stringify(password))
            }else {
                hashPassword = null
            }

            let response = await Crypto.encryptPass(JSON.stringify({email: email,name: name,role: role}))
            let created_at = new Date()
            User.create(email, hashPassword, name, role,created_at)
                .then(() => res.status(201).json({success: true, msg: response}))
                .catch(err => res.status(400).json({err}));

            const findEmail = await User.findEmail(email)
            //Создание события
            await History(findEmail.rows[0].id, event)
        } else {
            res.status(201).json({success: false, msg: 'Пользователь уже существует'})
        }
    },
    async Users(req,res){
        const {page, limit} = req.body;
        const count = await User.getCount();
         await User.getUsers(page,limit)
            .then((response) => res.status(201).json({success: true, msg: response.rows, count: count.rows[0].count}))
            .catch(err => res.status(400).json({err}));
    },
    async Roles(req,res){
        await User.getRoles()
            .then((response) => res.status(201).json({success: true, msg: response.rows}))
            .catch(err => res.status(400).json({err}));
    },
    async Update(req, res) {
        const {email, password, name, role, id,event} = req.body;
        let hashPassword = null;
        const findId = await User.findId(id)
        if (password !== null) {
            hashPassword = await Crypto.encryptPass(JSON.stringify(password))
        }else {
            hashPassword = findId.rows[0].password
        }
        let response = await Crypto.encryptPass(JSON.stringify({email: email,name: name,role: role}))

        User.update(email, hashPassword, name, role, id)
            .then(() => res.status(201).json({success: true, msg: response}))
            .catch(err => res.status(400).json({err}));

        //Создание события
        await History(id, event)
    },
}
async function History(user_id,event){
    let created_at = new Date()
    await User.setHistory(user_id,event,created_at)
        .then(() => ({success: true, msg: 'ok'}))
        .catch(err => console.log(err));
}