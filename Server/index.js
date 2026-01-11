/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import pg from 'pg'
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'taskflow',
    password: process.env.DB_PASSWORD,
    port: 5432,
});

app.get('/test-db', async (req, res) => {
    try{
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).json({error: 'Database connection failed'})
    }
})

app.get('/todos', async (req, res) => {
    try{
        const allTodos = await pool.query(
            `SELECT * FROM todos ORDER BY created_at DESC`
        );

        res.json(allTodos.rows);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

app.post('/todos', async (req, res) => {
    try{
        const {title, description, category} = req.body;

        const user_id = 1;

        const newTodo = await pool.query(
            'insert into todos (title, description, category, user_id) values ($1, $2, $3, $4) returning *', [title, description, category, user_id]
        )

        res.json(newTodo.rows[0]);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})










app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})

