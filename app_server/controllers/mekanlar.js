var express = require('express');
var router = express.Router();
const axios=require("axios");
var apiSecenekleri={
  sunucu:"http://localhost:3000",
  apiYolu:"/api/mekanlar/"
}
var mesafeyiFormatla=function(mesafe){
var yeniMesafe,birim;
if(mesafe>1){
  yeniMesafe =parseFloat( mesafe.toFixed(1));
  birim=" km";
}else{
  yeniMesafe=parseInt(mesafe*100,10);
  birim=" m"
}
return yeniMesafe+birim;
}
var anaSayfaOlustur=function(res,mekanListesi){
var mesaj;
console.log(mekanListesi)
if(!(mekanListesi instanceof Array )){
  mesaj="API  HATASI:Bir şeyler ters gitti ";
  mekanListesi=[];
}else{
if(!mekanListesi.length){
  mesaj="civardaki herhangi bir mekan yok";
}
}
res.render("anasayfa",{
"baslik":"Anasayfa",
"sayfaBaslik":{
  "siteAd":"Mekanbul",
  "slogan":"Mekanları Keşfet"
},
mekanlar:mekanListesi,
mesaj:mesaj
});
}
   const anaSayfa=function(req, res) {
     axios.get(apiSecenekleri.sunucu+apiSecenekleri.apiYolu,{
      params:{
        enlem:req.query.enlem,
        boylam:req.query.boylam
      }
     }).then(function(response){
      var i,mekanlar;
      mekanlar=response.data;
      for(i=0;i<mekanlar.length;i++){
        mekanlar[i].mesafe= mesafeyiFormatla(mekanlar[i].mesafe);

      }
      anaSayfaOlustur(res,mekanlar);

     }).catch(function(hata){
      anaSayfaOlustur(res,hata);
     });  
   }
   var detaySayfasiOlustur=function(res,mekanDetaylari){
    mekanDetaylari.koordinat={
        "enlem":mekanDetaylari.koordinat[0],
        "boylam":mekanDetaylari.koordinat[1]
    }
    res.render('mekanbilgisi',
    {
        mekanBaslik:mekanDetaylari.ad,
        mekanDetay:mekanDetaylari
    });
}
var hataGoster = function(res,hata){
  var mesaj;
  if(hata.response.status==404){
      mesaj="404, Sayfa Bulunamadı";
  }else{
      mesaj=hata.response.status+" hatası";
  }
  res.status(hata.response.status);
  res.render('error',{
  "mesaj":mesaj
  });
};

const mekanBilgisi=function(req,res){
  axios
   .get(apiSecenekleri.sunucu+apiSecenekleri.apiYolu+req.params.mekanid)
   .then(function(response){
       detaySayfasiOlustur(res,response.data);
   })
   .catch(function(hata){
       hataGoster(res,hata);
   });
};

   const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
   }


   
   module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
   }