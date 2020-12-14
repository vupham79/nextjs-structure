/* eslint-disable no-undef */
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  vi: 'vi',
  en: 'en',
}

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {}
}

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
      webpack: config => config,
      rewrites: async () => nextI18NextRewrites(localeSubpaths),
      publicRuntimeConfig: {
        localeSubpaths,
      },
    })
  ),
})
