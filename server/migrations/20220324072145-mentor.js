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
    "mentor",
    {
      idMentor: {
        type: "int",
        length: 15,
        primaryKey: true,
        autoIncrement: true,
      },
      fullName: "string",
      dayOfBirth: { type: "date" },
      gender: { type: "bit", length: 2 },
      address: "string",
      workplace: "string",
      email: "string",
      postion: "string",
      idDG: {
        type: "int",
        length: 15,
        foreignKey: {
          name: "pk_mentor_dg",
          table: "dg",
          rules: {
            onDelete: "CASCADE",
            onUpdate: "RESTRICT",
          },
          mapping: {
            idDG: "idDG",
          },
        },
      },
    },
    callback
  );
};

exports.down = function (db) {
  db.dropTable("mentor");
  return null;
};

exports._meta = {
  version: 1,
};
