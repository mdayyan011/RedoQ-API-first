const mysql = require('mysql2');
const message_obj = require('../config/message.js');
const customer_data = require('../controllers/controllers.js');
const utility_obj = require('../helpers/utility.js');
const pool = require('../config/connection_pool.js');
const constants=require('../config/constant.js');
const db = require('../config/db.js');
const url = require('url');


exports.countData = async function() {
  const sql =`SELECT COUNT(*) AS row_count FROM customer_details`;
  var count = await pool.query(constants.master_database, sql);
  return count[0].row_count;
}
exports.insertCustomerData = async function(customer_details) {
  const sql = `INSERT INTO customer_details SET ?`;
  var content1 = await pool.query(constants.master_database, sql, [customer_details]);
  return true;
}
exports.insertCustomerAddress = async function(customer_address, db_child) {
  const sql = 'INSERT INTO customer_address SET ?';
  var content2 = await pool.query(db_child, sql, [customer_address]);
  return content2;
}


exports.userLogin = async function(mobile) {
  const sql = 'SELECT * FROM customer_details WHERE customer_mobile=?';
  var login_content = await pool.query(constants.master_database, sql, [mobile]);
  let login_response = {
    customer_id: login_content[0].customer_id,
    customer_name: login_content[0].customer_name,
    customer_password: login_content[0].customer_password,
    database_id: login_content[0].database_id
  }
  return login_response;
}
exports.getUserDetails = async function(user_id) {
const sql='SELECT * FROM customer_details WHERE customer_id=?';
var details=await pool.query(constants.master_database,sql,[user_id]);
return details;
}

exports.getUserAddress = async function(user_id,database_child) {
const sql='SELECT * FROM customer_address WHERE customer_id=?'
var details=await pool.query(database_child,sql,[user_id]);
return details;

}

exports.checkUserId = async function(user_id,database_id) {
 const sql = 'SELECT customer_name FROM customer_details WHERE customer_id=? AND database_id=?';
 var details=await pool.query(constants.master_database,sql,[user_id,database_id]);
 return details;
}
