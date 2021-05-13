import express, { query } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import DbQuery from './db-query.js';

const app = express();
app.use(cors());
app.use(bodyParser.json('application/*+json'));

app.get('/api/dbinfo', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ dbinfo: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/students', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ list: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addStudent', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ student: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/delStudent', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.id })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updStudent', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.name, req.body.id] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/professors', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ list: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addProfessor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ professor: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/delProfessor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.id })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updProfessor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.name, req.body.id] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/workers', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ list: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addWorker', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ Worker: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/delWorker', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.id })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updWorker', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.name, req.body.id] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/bookAuthors', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ list: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addBookAuthor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ created: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/delBookAuthor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.id })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updBookAuthor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.name, req.body.id] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/bookPublishers', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ list: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addBookPublisher', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ created: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/delBookPublisher', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.id })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updBookPublisher', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.name, req.body.id] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/books', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ list: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addBook', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.title, req.body.authId, req.body.pubId] })
    .then((rez) => res.status(200).json({ created: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/delBook', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.id })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updBook', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.title, req.body.authId, req.body.pubId, req.body.id] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/studentCards', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ list: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addStudentCard', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.bookId, req.body.userId] })
    .then((rez) => res.status(200).json({ created: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/delStudentCard', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.id })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updStudentCard', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.bookId, req.body.userId, req.body.returned, req.body.id] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/professorCards', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ list: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addProfessorCard', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.bookId, req.body.userId] })
    .then((rez) => res.status(200).json({ created: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/delProfessorCard', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.id })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updProfessorCard', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.bookId, req.body.userId, req.body.returned, req.body.id] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.listen(4488);

function getQuery(url) {
  let query = url.replace('/api/', '');
  query = query.replace(/\/\d+$/, '');
  return query;
}
