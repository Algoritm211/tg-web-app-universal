import svg from '@neodx/svg/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Need to disable it to work with telegram native entities like
   * MainButton or BackButton without glitch caused additional cycle
   * which strict mode provides
   */
  reactStrictMode: false,
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
