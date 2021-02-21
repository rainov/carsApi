const db = require('../database');

const carowner = {
  get: function(callback) {
    return db.query('select * from carowner order by idcarowner desc', callback);
  },
  getCars: function(callback) {
      return db.query(`select owner.idowner, firstname, lastname, group_concat(brand," ", model) as "Cars of the person"  from owner inner join
      carowner on owner.idowner=carowner.idowner inner join car on car.idcar=carowner.idcar group by owner.idowner;`, callback ) ;
  },
  getById: function(id, callback) {
    return db.query('select * from carowner where idcarowner=?', [id], callback);
  },
  add: function(carowner, callback) {
    return db.query(
      'insert into carowner (idcar, idowner) values(?,?)',
      [carowner.idcar, carowner.idowner],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from carowner where idcarowner=?', [id], callback);
  },
  update: function(id, carowner, callback) {
    return db.query(
      'update carowner set idcar=?, idowner=? where idcarowner=?',
      [carowner.idcar, carowner.idowner, id],
      callback
    );
  }
};
module.exports = carowner;