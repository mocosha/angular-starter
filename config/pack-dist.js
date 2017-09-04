// require modules
var fs = require('fs');
var archiver = require('archiver');
var outputFile = __dirname + '/../build.archived.zip';

if(fs.existsSync(outputFile)){
    fs.unlinkSync(outputFile);
}

// create a file to stream archive data to.
var output = fs.createWriteStream(outputFile);
var archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

// listen for all archive data to be written
output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
});

// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
        console.log(err);
        // log warning
    } else {
        // throw error
        throw err;
    }
});

// good practice to catch this error explicitly
archive.on('error', function (err) {
    throw err;
});

// pipe archive data to the file
archive.pipe(output);

// append files from a sub-directory, putting its contents at the root of archive
archive.directory(__dirname + '/../dist/', false);

// finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize();
