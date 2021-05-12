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
    .then((rez) => res.status(200).json({ students: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addStudent', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ students: rez }))
    .catch((e) => res.status(200).json(e));
});

app.post('/api/delUser', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updUser', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.name, req.body.oldName] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/professors', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ professors: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addProfessor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ Professor: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/workers', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ Workers: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addWorker', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ Worker: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/bookAuthors', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ bookAuthors: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addBookAuthor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ created: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/delBookAuthor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updBookAuthor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.name, req.body.oldName] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/bookAuthors', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ bookAuthors: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addBookAuthor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ created: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/delBookAuthor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updBookAuthor', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.name, req.body.oldName] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.get('/api/bookPublishers', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ bookPublishers: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/addBookPublisher', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ created: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/delBookPublisher', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: req.body.name })
    .then((rez) => res.status(200).json({ deleted: rez }))
    .catch((e) => res.status(200).json(e));
});
app.post('/api/updBookPublisher', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: [req.body.name, req.body.oldName] })
    .then((rez) => res.status(200).json({ updated: rez }))
    .catch((e) => res.status(200).json(e));
});

app.listen(4488);

function getQuery(url) {
  let query = url.replace('/api/', '');
  query = query.replace(/\/\d+$/, '');
  return query;
}
