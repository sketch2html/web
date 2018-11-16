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
    classify: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      comment: '0非行列；1普行；2普列；3普行列；4组行；5组列；6组行列',
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
