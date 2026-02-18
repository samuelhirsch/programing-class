import pool from "../pool.js"
import express from "express";
var router = express.Router();

/* GET home page. */
router.route("/")
    .get(async function (req, res, next) {
        try {
            const [results] = await pool.execute(
                "SELECT * FROM recipes"
            )
            res.json(results)
        }
        catch (err) {
            return next(err)
        }

    })
    .post(async function (req, res, next) {
        try {
            const [results] = await pool.execute(
                `INSERT INTO recipes (name, picture, ingredients, directions) VALUES(?,?,?,?)`,
                [req.body.name, req.body.picture, req.body.ingredients, req.body.directions]
            )

            res.status(201)
                .location(`/${results.insertId}`)
            res.end();

        }
        catch (err) {
            return next(err)
        }

    })
router.route('/:id')
    .get(async function (req, res, next) {
        try {
            const [results] = await pool.execute(
                "SELECT * FROM recipes WHERE id=?", [req.params.id]
            )
            if (!results.length) {
                res.statusCode = 404
                return res.send(`cant find recipe number ${req.params.id}`)
            }
            res.json(results)
        }
        catch (err) {
            return next(err)
        }

    })
    .put(async function (req, res, next) {
        try {
            const [results] = await pool.execute(
                "UPDATE recipes SET name = ?,picture = ?,ingredients = ?,directions = ? WHERE id = ?",
                [req.body.name, req.body.picture, req.body.ingredients, req.body.directions, req.params.id]
            )
            console.log(results)

            if (!results.affectedRows) {
                res.statusCode = 404
                return res.send(`cant find recipe number ${req.params.id}`)
            }
            res.statusCode = 204
            res.end();
        }
        catch (err) {
            return next(err)
        }

    })
    .delete(async function (req, res, next) {
        try {
            const [results] = await pool.execute(
                "DELETE FROM `recipes` WHERE id = ?",
                [req.params.id]
            )

            if (!results.affectedRows) {
                res.statusCode = 404
                return res.send(`cant find recipe number ${req.params.id}`)
            }
            res.statusCode = 204
            res.end();
        }
        catch (err) {
            return next(err)
        }

    })
export default router;

