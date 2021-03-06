'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  return app.model.layout.define('junior', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    data: {
      type: Sequelize.JSON,
      allowNull: false,
    },
    row: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
    },
    col: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
    },
    direction: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      comment: '0行；1列',
    },
    area: {
      type: Sequelize.JSON,
      allowNull: false,
    },
    directions: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      comment: '0行；1列',
    },
    classify: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      comment: '0不可划分；1可划分',
    },
    create_time: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    update_time: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  }, {
    indexes: [
      {
        name: 'classify',
        fields: ['classify'],
      },
    ],
    comment: '初级布局数据',
  });
};
