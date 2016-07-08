
module.exports = {
    devtool: 'source-map',
    module:  {
        preLoaders: [
            {
                test:   /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    }
};
