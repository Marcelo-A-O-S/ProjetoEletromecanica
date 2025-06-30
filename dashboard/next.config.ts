import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images:{
      remotePatterns: [{
        protocol: "https",
        hostname: "media.tenor.com",
        pathname: "/**",
      },{
        protocol: "https",
        hostname: "media1.tenor.com",
        pathname: "/**",
      }],
    }
  };

export default withNextVideo(nextConfig);