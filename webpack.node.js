module.exports = {
  entry: {
    index: './app/view/index.jsx',
    passport_index: './app/view/passport_index.jsx',
    passport_login: './app/view/passport_login.jsx',
    passport_register: './app/view/passport_register.jsx',
    layout_index: './app/view/layout_index.jsx',
    layout_basic: './app/view/layout_basic.jsx',
    layout_junior: './app/view/layout_junior.jsx',
    layout_senior: './app/view/layout_senior.jsx',
    layout_view: './app/view/layout_view.jsx',
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
