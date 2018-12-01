const path=require ('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports=(env)=>{
  const plugins=[
    new ExtractTextPlugin('css/[name].[hash].css')
  ]

  if (env.NODE_ENV==='production'){
    plugins.push(
      new CleanWebpackPlugin(['dist'],{root:__dirname})
    )
  }
  return{
  mode:'production',
  entry:{
    'home':path.resolve(__dirname,'src/entries/home.js')
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/[name].js',
    publicPath:path.resolve(__dirname,'dist')+'/',
    chunkFilename:'js/[id].[chunckhash].js'
  },
  devServer:{
    port:9000
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env','@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
          use:[
            {
              loader:'css-loader',
              options:{
                minimize:true
              }
            }
          ]
        })
      },
      {
        test:/\.(jpg|png|gif|svg)$/,
        use:{
          loader:'url-loader',
          options:{
            limit:1000,
            fallback:'file-loader',
            name:'img/[name].[hash].[ext]'
          }
        }
      }
    ]
  }
}
}