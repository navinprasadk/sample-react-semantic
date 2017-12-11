module.exports = {
   entry: __dirname+'/main.js',

   output: {
      path:__dirname+'/',
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
      port: 8989
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react','env']
            }
         },
         {
           test: /\.css$/,
           loader: 'style-loader!css-loader'
         },
         {
        test: /\.(jpeg|jpg|gif|png)$/,
        loader: "file-loader?emitFile=false&name=./client/assets/images/[name].[ext]"
      }
      ]
   }
}
