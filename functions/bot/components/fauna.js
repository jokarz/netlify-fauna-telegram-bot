const faunadb = require('faunadb')

const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET_KEY });
const q = faunadb.query;

exports.newUser = (id) => {
  return new Promise((res, rej) => {
    client.query(
      q.Create(
        q.Collection('user'),
        { data: { userId: id } },
      )
    ).then(ret => {
      res(true)
    }).catch(err => {
      rej(false)
    });
  })
}
