# postcss-class-rename
[PostCSS] plugin to replace class name by giving key-value mapping in options.

---
[postcss]: https://github.com/postcss/postcss

## Installation
```
npm install postcss-class-rename --save-dev
```

## Usage
### rollup
```
postcss({
    plugins: [
      require('autoprefixer'),
      require('postcss-class-rename')({
        // replace 'button-' in class name to 'btn-'
        button-: 'btn-',
        // All options are treated as replacement mapping
        ...
      })
    ]
  }),

```

### postcss.config.js
```
const rename = require('postcss-class-rename');

module.exports = ({ env }) => {
  plugins: [
    rename({
      // All options are treated as replacement mapping
      button-: 'btn-',
      ...
    })
  ]
}
```
