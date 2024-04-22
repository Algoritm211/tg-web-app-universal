import svg from '@neodx/svg/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        svg({
          root: 'assets',
          output: 'public',
          metadata: 'src/shared/components/icon/sprite.gen.ts',
          resetColors: {
            replaceUnknown: 'currentColor'
          },
        })
      );
    }
    return config;
  },
};

export default nextConfig;
