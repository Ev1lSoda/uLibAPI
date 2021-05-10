import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 8,
  host: 'localhost',
  user: 'root',
  password: 'abcde',
  database: 'university_library',
  debug: false,
});

const queryList = {
  dbinfo: 'show databases',
  students: `SELECT lu_name, ur_role 
  FROM students`,
  professors: `SELECT lu_name, ur_role 
  FROM professors`,
};

export default class DbQuery {
  // in : {query: -, data: - } 'data' should be an ordered array, ready to insert
  static dbUse(params) {
    return new Promise((resolve, reject) => {
      pool.query(queryList[params['query']], params['data'], (error, results) => {
        if (error) {
          return reject({ error: true, msg: error });
        }
        resolve(results);
      });
    });
  }
}
