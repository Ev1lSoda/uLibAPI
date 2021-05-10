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
app.get('/api/professors', (req, res) => {
  DbQuery.dbUse({ query: getQuery(req.url), data: null })
    .then((rez) => res.status(200).json({ professors: rez }))
    .catch((e) => res.status(200).json(e));
});

app.listen(4488);

function getQuery(url) {
  let query = url.replace('/api/', '');
  query = query.replace(/\/\d+$/, '');
  return query;
}
