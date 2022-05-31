const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
const path = require('path');

// SPA : Single Page Application 
// module.exports = {
//     entry: './src/index.js'
//   }

// MPA : Multi Page Application
//   module.exports = {
//     entry: {
//     login: './src/LoginView.js',
//     main: './src/MainView.js'
//   }
module.exports = {

    // webpack4 이상부터 개발자모드 development, 
    // 상품모드 production두가지모드를 지원한다.
    // webpack.config.js로 설정하던지, package.json 파일 내 run script 내 --mode설정을 넣어 모드를 선택할 수 있다.
    // package.json 내 
    // script : {
    //      "start": "webpack serve --mode development"
    // }
    mode: 'development',

    // 최초 경로 entry 
    // webpack@4 or webpack@5 맞춰서 경로 지정이 다를 수 있다.
    // 혹시 경로상에 문제( 파일을 못 읽는 경우 ) 경로 앞에 / 이나 ./ 을 넣어보자.
    entry: {
        // 세번째 시도
        // index: {
        //     import: path.resolve(__dirname, 'src/index.html'),
        // },
        // main: {
        //     import: path.resolve(__dirname, 'src/main.js'),
        // },

        // 두번째 시도
        // index: path.resolve(__dirname, 'src', 'index.html'),
        // main: path.resolve(__dirname, 'src', 'main.js')

        // 첫번째 시도
        main : './src/main.js',
        // test : './src/index.html',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                // use: 'ts-loader',
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.html'],
    },

    // 웹팩 실행 및 빌드 후 결과물의 파일 경로
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    devServer: {
        // static: {
        //     directory: path.join(__dirname, "public")
        // },
        devMiddleware: { publicPath: './dist' },
        static: { directory: path.resolve(__dirname) },
        compress: true, // 모든 항목에 대해 gzip압축 사용
        hot: true,      // HRM(새로 고침 안해도 변경된 모듈 자동으로 적용)
        
        // 히스토리 API를 사용하는 SPA 개발시 설정. 
        // 404가 발생하면 index.html로 리다이렉트한다.
        historyApiFallback: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
};