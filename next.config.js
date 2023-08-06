const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA({
  dest: "public"
}
)(nextConfig);
