import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
                protocol: 'https'
            },
            {
                protocol: "https",
                hostname: "utfs.io",
                port: "",
            },
        ]
    },
};

module.exports = {
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
}

export default nextConfig;
