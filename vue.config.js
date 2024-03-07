module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://news.cctv.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
  