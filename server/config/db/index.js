const FileSync = require('lowdb/adapters/FileSync')
const low = require('lowdb');
const path = require('path')

const adapter = new FileSync('db.json')

const DB = low(adapter);


module.exports = {DB};