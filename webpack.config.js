const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
    // Webpack v5 버그(Live Reload 문제) 해결
    target: 'web',

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


    entry: './src/main.js',
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
        
    
    // 빌드 프로세스 정의 (번들 소스 맵 생성 방법)
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
        rules: [
            {
                test: /\.css$/,
                // 여러개의 로더를 동시에 사용할때에는 use: 를 이용한다.
                // 뒤에서 부터 적용되어 css-loader를 먼저 처리하고 
                // 처리된 결과물을 babel-loader로 한번 더 처리한다.
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.tsx', '.ts', '.js', '.html', '.css'],
    },

    // 웹팩 실행 및 빌드 후 결과물의 파일 경로
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
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
        // Webpack v5 버그(Live Reload 문제) 해결
        client: {
            overlay: {
                errors: true,
                warnings: false,
              },
            progress: true,
        },
        open: true,
        static: { directory: path.resolve(__dirname) },
        compress: true, // 모든 항목에 대해 gzip압축 사용
        hot: true,      // HRM(새로 고침 안해도 변경된 모듈 자동으로 적용)

        // 히스토리 API를 사용하는 SPA 개발시 설정. 
        // 404가 발생하면 index.html로 리다이렉트한다.
        historyApiFallback: true,
        port: 8000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};