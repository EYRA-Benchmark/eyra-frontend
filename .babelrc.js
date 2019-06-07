module.exports = {
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  plugins: [
    ["module-resolver", {
      "root": ["."],
      "alias": {
        "src": "./src",
      }
    }]
  ]
}