var fs = require('fs');
var colors = require('colors');

fs.readdir('.', function(err, files) {
    var fileList = files.toString();

    console.log("lista plików w katalogu: ", fileList.yellow);
    
    fs.writeFile('./lista.txt', fileList, function(err) {
        if (err) throw err;
        console.log('zapisano!'.yellow);
    });
});
