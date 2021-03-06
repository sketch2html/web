'use strict';

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = 'sketch2html.net';

  config.session = {
    key: 'sessionid',
    maxAge: 15 * 24 * 3600 * 1000,
    domain: 'sketch2html.net',
  };

  config.middleware = ['jsConfig', 'report'];

  config.view = {
    defaultViewEngine: 'migi',
    defaultExtension: '.js',
    mapping: {
      '.html': 'nunjucks',
      '.htm': 'nunjucks',
      '.js': 'migi',
    },
  };

  config.sequelize = {
    datasources: [
      {
        dialect: 'mysql',
        host: '',
        port: '3306',
        username: 'root',
        password: '',
        delegate: 'model.layout',
        baseDir: 'model/layout',
        database: 'layout',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
      {
        dialect: 'mysql',
        host: '',
        port: '3306',
        username: 'root',
        password: '',
        delegate: 'model.passport',
        baseDir: 'model/passport',
        database: 'passport',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
      {
        dialect: 'mysql',
        host: '',
        port: '3306',
        username: 'root',
        password: '',
        delegate: 'model.user',
        baseDir: 'model/user',
        database: 'user',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
    ],
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
    time: 60,
    longTime: 600,
  };

  config.aliyun = {
    oss: {
      region: '',
      accessKeyId: '',
      accessKeySecret: '',
      bucket: '',
    },
    sms: {
      accessKeyId: '',
      secretAccessKey: '',
    },
    dm: {
      accessKeyId: '',
      secretAccessKey: '',
    },
  };

  config.host = 'https://sketch2html.net';
  config.hostAssets = 'https://sketch2code.net';
  config.hostPassport = 'https://passport.sketch2html.net';
  config.hostLayout = 'https://layout.sketch2html.net';
  config.hostMy = 'https://my.sketch2html.net';

  return config;
};
