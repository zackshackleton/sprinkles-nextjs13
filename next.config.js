const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const withVanillaExtract = createVanillaExtractPlugin({
    identifiers: "short",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    }
}

module.exports = withVanillaExtract(nextConfig);
