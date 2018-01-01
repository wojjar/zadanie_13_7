var fs = require('fs');
    fs.readdir('./', 'utf-8', function(err, data) {
        console.log(data);
        fs.writeFile('filesList.txt',data , (err) => {
            if (err) throw err;
            console.log('The file filesList.txt has been saved!');
          });
    });

   
