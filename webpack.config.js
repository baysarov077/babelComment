//задаем переменную для элемента "path"
const path = require('path')
//подключаем плагин Html
const HtmlWebpackPlugin = require('html-webpack-plugin')
//сразу экспортируем элементы
module.exports = {
//задаем параметры для лайв сервера 
    devServer: {
        static: {
//параметры доступа(наверное)
            directory: path.join(__dirname, 'publick'),
        },
//назначаем порт для локалхоста
        port: 3000,
    },
//настройка для расширения файлов
    resolve: {
        extensions: ['.js', '.json', 'css']
    },
//указываем путь к файлу скриптов
    context: path.resolve(__dirname, 'src'),
    entry: './script.js',
//указываем режим разработчика
    mode: 'development',
//задем выходной путь
    output: {
//создаем новую папку
        path: path.resolve(__dirname, 'dist'),
//даем название папке
        filename: './bundle.js',
    },
//добавление плагинов
    plugins: [new HtmlWebpackPlugin({
//указываем путь к файлу html
        path: path.resolve(__dirname, 'src'),
        template: './index.html',
    })],
//объект с модулями
    module: {
//задаем необходимые настройки
        rules: [
            {
//настройка обработки стилей
                test: /\.css$/,
//используемые лоадеры
                use: ['style-loader', 'css-loader']
            },
            {
//настройка обработки фотографий(в формате png)
                test: /\.png$/,
//используемый лоадер
                use: 'file-loader'
            },
            {
//настройки транспайлера babel
                test: /\.m?js$/,
                exclude: /node_modules/,
//используемые файлы 
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ],
       
    }

}