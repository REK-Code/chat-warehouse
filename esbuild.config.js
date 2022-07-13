const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.js'],
  outdir: './dist',
  bundle: true,
  minify: true,
  sourcemap: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  minifyWhitespace: true,
  platform: 'node',
});
