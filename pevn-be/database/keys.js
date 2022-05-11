import {Pool} from 'pg';

const pool = new Pool({
    host: 'ec2-54-164-40-66.compute-1.amazonaws.com',
    port: '5432',
    user: 'zgkqofjqtgnrsi',
    password: 'f1e71084889cdf0a4276ba221f7075d064e966f03470361165cdc52130f32119',
    database: 'd3i2cfoh9ce702',
    ssl: {
        rejectUnauthorized: false,
    },
});



module.exports = pool;


/*

 host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'ferrari1947',
    database: 'pevn'

*/
