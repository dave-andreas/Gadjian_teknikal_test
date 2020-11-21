const {mysqldb} = require('../connection')
const db = mysqldb
const reverse = require('../helper/reverse')
const combination = require('../helper/combination')
const fibonacci = require('../helper/fibonacci')

module.exports = {
    getAll: (req,res) => {
        var sql = `select * from employees`
        db.query(sql, (err,result) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    },
    getById: (req,res) => {
        const {id} = req.params
        var sql = `select * from employees where id=${id};`
        db.query(sql, (err,result) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    },
    create: (req,res) => {
        const {name,phone_number,jobtitle} = req.body
        var sql = `INSERT INTO employees (name, phone_number, jobtitle) VALUES ('${name}', '${phone_number}', '${jobtitle}');`
        db.query(sql, (err,result) => {
            if (err) return res.status(500).send(err)
            sql = `select * from employees where id=${result.insertId};`
            db.query(sql, (err2,result2) => {
                if (err2) return res.status(500).send(err2)
                return res.status(201).send(result2)
            })
        })
    },
    update: (req,res) => {
        const {id} = req.params
        const {name,phone_number,jobtitle} = req.body
        var sql = `UPDATE employees SET name = '${name}', phone_number = '${phone_number}', jobtitle = '${jobtitle}' WHERE (id = '${id}');`
        db.query(sql, (err,result) => {
            if (err) return res.status(500).send(err)
            sql = `select * from employees where id=${id};`
            db.query(sql, (err2,result2) => {
                if (err2) return res.status(500).send(err2)
                return res.status(200).send(result2)
            })
        })
    },
    delete: (req,res) => {
        const {id} = req.params
        var sql = `DELETE FROM employees WHERE (id = '${id}');`
        db.query(sql, (err,result) => {
            if (err) return res.status(500).send(err)
            return res.status(204).send(result)
        })
    },
    revs: (req,res) => {
        const {character} = req.body
        var output = {
            result:reverse(character)
        }
        return res.status(200).send(output)
    },
    fibonacci: (req,res) => {
        const {n} = req.body
        var output = {
            result:fibonacci(parseInt(n))
        }
        return res.status(200).send(output)
    },
    combination: (req,res) => {
        const {n,r} = req.body
        var output = {
            result:combination(parseInt(n),parseInt(r))
        }
        return res.status(200).send(output)
    }
}