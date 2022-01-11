const replaceClass = (root, pattern, replacement) => {
  if (typeof pattern !== "string") {
    return;
  }

  root.walk(rule => {
    const regex = new RegExp(pattern, "gi");

    if (rule.type === "rule") {
      rule.selector = rule.selector.replace(regex, replacement);
    } else if (rule.type === "atrule") {
      rule.params = rule.params.replace(regex, replacement);
    }
  })
}

module.exports = (opts = {}) => {
  const isObject = typeof opts === "object" && opts instanceof Object;

  if (!isObject) {
    return;
  }

  return {
    postcssPlugin: 'postcss-class-rename',
    Once (root, { result }) {
      // Replace all defined pattern and replacement
      for (let p of Object.keys(opts)) {
        replaceClass(root, p, opts[p]);
      }
    },
  }
}

module.exports.postcss = true
