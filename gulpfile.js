const { series } = require('gulp');
const del = require('del');

// deletes files and folder to have a clean build
function clean() {
  return del(
    [
      'build',
      'src/main.css',
      'src/index.css',
      'public/sitemap.xml',
    ]
  )
}

function build() {
  
}

exports.clean = clean;
exports.default = series(clean, build);