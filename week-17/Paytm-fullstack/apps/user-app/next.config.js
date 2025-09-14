/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

const path = require("path");

module.exports = {
    webpack: (config) => {
    config.resolve.alias["@repo/store"] = path.resolve(__dirname, "packages/store/src");
    config.resolve.alias["@repo/db"] = path.resolve(__dirname, "packages/db");
    return config;
}}
