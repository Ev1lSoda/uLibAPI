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
  students: `SELECT lu_name
              FROM students`,
  addStudent: `INSERT INTO lib_users(lu_name, lu_role_id) VALUES(?, 1)`,
  professors: `SELECT lu_name
                FROM professors`,
  addWorker: `INSERT INTO lib_users(lu_name, lu_role_id) VALUES(?, 3)`,
  workers: `SELECT lu_name
            FROM lib_users
            WHERE lu_role_id=3`,
  addProfessor: `INSERT INTO lib_users(lu_name, lu_role_id) VALUES(?, 2)`,
  delUser: `DELETE FROM lib_users
                WHERE lu_name = ?`,
  updUser: `UPDATE lib_users
                SET lu_name = ?
                WHERE lu_name=?`,
  bookAuthors: `SELECT ba_name
             FROM book_authors`,
  addBookAuthor: `INSERT INTO book_authors(ba_name) VALUES(?)`,
  delBookAuthor: `DELETE FROM book_authors
                WHERE ba_name = ?`,
  updBookAuthor: `UPDATE book_authors
                SET ba_name = ?
                WHERE ba_name =?`,
  bookPublishers: `SELECT bp_name
             FROM book_publishers`,
  addBookPublisher: `INSERT INTO book_publishers(bp_name) VALUES(?)`,
  delBookPublisher: `DELETE FROM book_publishers
                WHERE bp_name = ?`,
  updBookPublisher: `UPDATE book_publishers
                SET bp_name = ?
                WHERE bp_name =?`,
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
// 0	17	20:03:53	DELETE FROM lib_users
//  WHERE lu_name = 'Vasya'	Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column
//  To disable safe mode, toggle the option in Preferences -> SQL Queries and reconnect.	0.000 sec
