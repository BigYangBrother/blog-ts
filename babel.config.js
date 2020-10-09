const plugins = []
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}
plugins.push([
  'import',
  { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
])
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
