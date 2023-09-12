//conectarse a posgret

const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password:'vospodes',
    host: 'localhost',
    port: 5432,
    database:'inso2db'
})
module.exports = pool;
/*

import pg from 'pg'
import { db } from "./config.js";

export const pool = new pg.Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database,
});

pool.on('connect', () => console.log('DB connected'))
*/