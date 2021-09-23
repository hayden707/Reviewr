'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate(models) {
      Album.hasMany(models.Review, {
        foreignKey: 'album_id',
        as: 'review'
      })
    }
  }
  Album.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      artist: DataTypes.STRING,
      deezer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'Album',
      tableName: 'albums'
    }
  )
  return Album
}
