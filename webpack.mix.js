const mix = require("laravel-mix");
const path = require("path");

const alias = {
  "@": path.resolve(__dirname, "assets/js/components"),
};

mix
  .vue()
  .setPublicPath("./")
  .alias(alias)
  .ts("assets/js/popup.ts", "dist/js")
  .sass("assets/sass/popup.scss", "dist/css")
  .copy("assets/images/", "dist/images")
  .options({
    processCssUrls: false,
  });

mix.webpackConfig({
  resolve: {
    extensions: [".vue", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_module/,
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
    ],
  },
});
