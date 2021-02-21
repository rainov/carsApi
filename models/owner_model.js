const db = require('../database');

const owner = {
  get: function(callback) {
    return db.query('select * from owner order by idowner desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from owner where idowner=?', [id], callback);
  },
  add: function(owner, callback) {
    return db.query(
      'insert into owner (firstname, lastname, streetaddress) values(?,?,?)',
      [owner.firstname, owner.lastname, owner.streetaddress],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from owner where idowner=?', [id], callback);
  },
  update: function(id, owner, callback) {
    return db.query(
      'update car set firstname=?, lastname=?, streetaddress=? where idowner=?',
      [owner.firstname, owner.lastname, owner.streetaddress, id],
      callback
    );
  }
};
module.exports = owner;