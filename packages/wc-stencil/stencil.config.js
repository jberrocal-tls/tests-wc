exports.config = {
  namespace: 'wc-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        { src: 'index.html' }
      ]
    }
  ],
  testing: {
    browserHeadless: "new",
  },
};
