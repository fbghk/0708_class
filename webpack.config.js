//entry
//output

const path = require('path');
const { Extension } = require('typescript');

let name = "app"

module.exports = {
  //* mode: "webpack --mode=development",
  entry: `./src/${name}.tsx`,
  output: {
    filename: `${name}.bundle.js`,
    path: path.resolve(__dirname, "dist")
  },
  module:{
    rules:[
      {
        test: /\.css$/, //타스인지 확인하는 로더
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js|ts|jsx|tsx$/, //타스인지 확인하는 로더
        use: "babel-loader", 
        exclude: "/node_modules/",
      },
      {
        test: /\.(ts|tsx)$/, //타스인지 확인하는 로더
        use: "ts-loader", 
        exclude: "/node_modules/",
      }
    ],
  },
  resolve: {
    extensions:[".ts",".js", ".tsx", ".jsx", ".css"]
  },  
}