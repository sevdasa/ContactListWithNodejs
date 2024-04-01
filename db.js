import pg from 'pg';
const pool = new pg.Pool({
    database: 'postgress',
    user: 'sevda',
    password: 'admin'
})
export function query(text, params) {
    return pool.query(text, params);
}