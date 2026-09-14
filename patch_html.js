const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('<body>', '<body>\n<div id="error-log" style="position:fixed;top:0;left:0;z-index:9999;background:red;color:white;padding:10px;display:none;"></div>\n<script>\nwindow.onerror = function(msg, src, line, col, error) {\n  const el = document.getElementById("error-log");\n  el.style.display = "block";\n  el.innerText += msg + "\\n";\n  return false;\n};\n</script>');
fs.writeFileSync('index.html', html);
