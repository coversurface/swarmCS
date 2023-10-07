let mix = require("laravel-mix");
const path = require("path");

const alias = {
  "@": path.resolve(__dirname, "assets/js/components"),
};

mix
  .vue()
  .setPublicPath("dist")
  .alias(alias)
  .js("assets/js/popup.ts", "dist/js")
  .js("assets/js/dashboard.ts", "dist/js")
  .sass("assets/sass/popup.scss", "dist/css")
  .sass("assets/sass/dashboard.scss", "dist/css")
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
