var mongoose = require("mongoose");
require("./mekansema"); 
var dbURI ='mongodb+srv://mekan32:mekan32@mekanbul.mgmzcuo.mongodb.net/mekanbul?retryWrites=true&w=majority'; 
mongoose.connect(dbURI); 
function kapat(msg , callback){
    mongoose.log.close(function(){
        console.log(msg);
        callback();
    }
        );
}
process.on("SIGINT",function(){
    kapat("uygulama kapatıldı!",function(){
        process.exit(0);
    });
});
mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresteki veri tabanına bağlandı");
}

);
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+"adresteki veri tabanına bağlantısı koptu");

}

);
mongoose.connection.on("error",function(){
    console.log("bağlantı hatası");

    
}

);