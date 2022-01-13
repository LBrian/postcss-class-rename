# postcss-class-rename

[PostCSS][PostCSS] plugin to replace class name by giving key-value mapping in options.

forked

---

## Installation

```
npm install postcss-class-rename-postcss8 --save-dev
```

## Usage

### rollup

```
postcss({
    plugins: [
      require('autoprefixer'),
      require('postcss-class-rename-postcss8')({
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
const rename = require('postcss-class-rename-postcss8');

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

[postcss]: https://github.com/postcss/postcss
