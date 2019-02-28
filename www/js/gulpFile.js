var replace = require('replace');
var replaceFiles = ['./www/js/app.js'];

gulp.task('add-proxy', function() {
  return replace({
    regex: "https://padawan-finance.herokuapp.com/transactions",
    replacement: "http://localhost:8200/services/cadastroMovimentosService.js",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})

gulp.task('remove-proxy', function() {
  return replace({
    regex: "http://localhost:8200/services/cadastroMovimentosService.js",
    replacement: "",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})
