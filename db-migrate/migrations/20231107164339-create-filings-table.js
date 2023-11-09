'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('public.fact_filings', {
    id: { type: 'identity', primaryKey: true, autoIncrement: true  },
    filingId: { type: 'int', notNull: true },
    timestamp: { type: 'timestamp' },
    jurisdictionCode: { type: 'string', length: 50, notNull: true  },
    locationCode: { type: 'string', length: 50, notNull: true  },
    businesId: { type: 'int', notNull: true  },
    sales: 'float'
  }, function(err) {
	if (err) return callback(err);
	console.log('Table fact_fillings created');
	callback()
  });
};

exports.down = function(db, callback) {
  db.dropTable('fact_filings', function(err) {
	if (err) return callback(err);
	console.log('Table fact_fillings dropped');
	callback();
  })
};

exports._meta = {
  "version": 1
};
