/** @type {import('next').NextConfig} */

const nextConfig = {
    async headers() {
        return [
          {
            source: "/favicon.ico",
            headers: [
              {
                key: "Cache-Control",
                value: "public, max-age=86400",
              },
            ],
          },
        ];
      },
    //   images: {
    //     remotePatters: [
    //       {
    //         protocol: "https",
    //         hostname: "card.rpmspeedcode.com",
    //         post: "",
    //         pathname: "/public/**",
    //       },
    //     ],
    //   },
}

module.exports = nextConfig
