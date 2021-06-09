var rootFolder = Folder("~/Desktop");

var files = rootFolder.getFiles();

for(var i = 0; i < files.length; i++) {
    if(files[i] instanceof File) {
        $.writeln(files[i].name.replace(/%20/g, " ") + " is a file!");
        } else if(files[i] instanceof Folder) {
        $.writeln(files[i].name.replace(/%20/g, " ") + " is a folder!"); 
            }
    }