import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const src = path.join(__dirname, './src');
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const METADATA = {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: true
};

export default {
  debug: true,
  noInfo: false,
  metadata: METADATA,
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(src, 'app.js'),
    ]
  },
  target: 'web',

  vue: {
    loaders: {
      sass: 'vue-style-loader!css-loader!sass?indentedSyntax'
    }
  },

  devtool: 'cheap-module-eval-source-map',

  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task ``npm run build
    publicPath: `http://0.0.0.0:8080/`,
    pathinfo: true,
    filename: '[name].js'
  },

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    contentBase: './src',
    publicPath: '/',
    quiet: false,
    hot: true,
    inline: true,
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    // display only errors to reduce the amount of output
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    },
    noInfo: false,
  },

  postcss: {
    defaults: [ autoprefixer({ browsers: [ 'last 2 version' ] }) ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'HMR': METADATA.HMR,
      'process.env': {
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
      }
    }),
  ],

  module: {
    noParse: [
      /\.DS_Store$/,
    ],
    preloaders: [
      { test: /\.(js|vue)$/, loader: 'eslint' }
    ],
    loaders: [
      { test: /\.sass$/, loader: ExtractTextPlugin.extract('css?minimize!postcss!sass?indentedSyntax') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?minimize!postcss!sass') },
      { test: /\.css$/, exclude: [ /dist/ ], loader: ExtractTextPlugin.extract('css?minimize') },
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: [ 'babel?cacheDirectory=true', 'angular2-template' ] },
      { test: /\.vue$/, include: path.join(__dirname, 'src'), loader: 'vue' },
      { test: /\.(png|jpg|gif)$/, loader: 'file?name=[path][name].[ext]?[hash]' },
      { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'file?name=fonts/[name].[ext]?[hash]?limit=100000' },
      { test: /\.html$/, loader: 'html' }
    ]
  }
};
