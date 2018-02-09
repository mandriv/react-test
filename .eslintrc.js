module.exports = {
    extends: "airbnb",
    plugins: ["jest"],
    parser: "babel-eslint",
    rules: {
      "padded-blocks": ["error", {
        "classes": "always",
        "switches": "never",
        "blocks": "never",
       }],
      "object-curly-newline": ["error", { "multiline": true }],
      "react/jsx-filename-extension": 0,
      "react/forbid-prop-types": 0,
      "react/prefer-stateless-function": 0,
    },
    globals: {
      fetch: false,
    },
    "env": {
      "jest/globals": true,
      "browser": true,
    }
};
