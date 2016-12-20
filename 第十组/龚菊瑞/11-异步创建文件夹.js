var fs = require('fs');

function makeDir (path){
    var paths = path.split('\\');
    for(var i = 0; i<paths.length;i++){
       var dir = paths.slice(0,i+1).join('/');
       console.log(dir)
       var flag = fs.exists(dir);
       if(!flag){
           fs.mkdir(dir,function(err){
                if(err) console.log(err);
           })
       }
    }
}
makeDir('aa\\bb\\cc');
