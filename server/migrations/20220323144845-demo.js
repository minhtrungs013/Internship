"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    "product",
    {
      id: { type: "int", primaryKey: true },
      username: "string",
      password: "string",
      address: "string",
      idSe: {
        type: "int",
        length: 15,
        FOREIGNKEY: {
          name: "mentorid_fk",
          table: "inse",
          mapping: {
            idSe: "id",
          },
        },
      },
    },
    callback
  );
  db.createTable("inse", {
    idSe: { type: "int", primaryKey: true, autoIncrement: true },
    fullName: "string",
  });
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  version: 1,
};
