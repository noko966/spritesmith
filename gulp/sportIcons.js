var gulp = require("gulp");
var spritesmith = require("gulp.spritesmith");

gulp.task("sportIcons", function() {
  var spriteData = gulp.src("assets/sportIcons/*.png").pipe(
    spritesmith({
      imgName: "sportIcons/sportIcons.png",
      cssName: "sportIcons/sportIcons.css",
      src: ["1.png", "10.png"],
      algorithm: "top-down",
      algorithmOpts: { sort: false },
      cssTemplate: "sportIcons.css.handlebars",
      cssHandlebarsHelpers: {
        math: function(lvalue, operator, rvalue) {
          lvalue = parseFloat(lvalue);
          rvalue = parseFloat(rvalue);
          return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
          }[operator];
        },
        _toInt: function(str, num) {
          return parseInt(str, 10);
        },
        _toIntandMultByNum: function(str, num) {
          return (parseInt(str, 10) - 1) * num;
        }
      }
    })
  );
  return spriteData.pipe(gulp.dest("output"));
});
