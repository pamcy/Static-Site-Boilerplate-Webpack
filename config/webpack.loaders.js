const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./site.config');

// Define common loader constants
const sourceMap = config.env !== 'production';

// HTML loaders
const html = {
  test: /\.(html)$/,
  use: [
    {
      loader: 'html-loader',
      options: {
        interpolate: true,
      },
    },
  ],
};

// Javascript loaders
const js = {
  test: /\.js(x)?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

// Style loaders
const styleLoader = {
  loader: 'style-loader',
};

const productionMiniCssLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '../', // production (dist); for css image url
  },
}

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap,
  },
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('autoprefixer')(),
    ],
    sourceMap,
  },
};

const sassLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap,
  },
}

const css = {
  test: /\.css$/,
  use: [
    config.env === 'production' ? productionMiniCssLoader : styleLoader,
    cssLoader,
    postcssLoader,
  ],
};

const sass = {
  test: /\.s[c|a]ss$/,
  use: [
    config.env === 'production' ? productionMiniCssLoader : styleLoader,
    cssLoader,
    postcssLoader,
    sassLoader,
  ],
};

const images = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  exclude: /fonts/,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'img',
        limit: false, // limit: 500, // 檔案小於 byte 將包裝為 base64
        fallback: require.resolve('file-loader'),
      },
    },
  ],
};

// Font loaders
const fonts = {
  test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
  exclude: /img/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: '[name].[hash].[ext]',
        outputPath: 'fonts/icons',
        publicPath: '../fonts/icons',
      },
    },
  ],
};

module.exports = [
  html,
  js,
  css,
  sass,
  images,
  fonts,
];
