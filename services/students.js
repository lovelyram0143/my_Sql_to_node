const db = require('./db');
// const helper = require('../helper');
const config = require('../config');

async function getMultiple(){
  
  const rows = await db.query(
    `SELECT * from students`
  );

  const status='true'

  const data = rows;
  

  return {
    status,
    data,
    // rows
    // meta
  }
}

module.exports = {
  getMultiple
}