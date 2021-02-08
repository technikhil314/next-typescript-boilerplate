const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  pageExtensions: ["page.tsx"],
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
      })
    );
    return config;
  },
};
