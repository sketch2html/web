module.exports = {
  entry: {
    index: './app/view/index.jsx',
    passport_index: './app/view/passport_index.jsx',
    passport_login: './app/view/passport_login.jsx',
    passport_register: './app/view/passport_register.jsx',
    layout_index: './app/view/layout_index.jsx',
    layout_detail: './app/view/layout_detail.jsx',
  },
  output: {
    path: __dirname + '/app/view',
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: ['babel-loader', 'migi-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
  ],
};
