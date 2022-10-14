var express = require('express');
var router = express.Router();
const anaSayfa= function(req,res,next){
    res.render('anasayfa',{ title :'Anasayfa'});
}
const mekanBilgisi= function(req,res){
    res.render('mekanbilgisi',{ "title" :"Mekan Bilgisi"});
}

const yorumEkle= function(req,res,){
    res.render('yorumekle',{"title" :"Yorum Ekle"});
}
module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle,

}