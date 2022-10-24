var express = require('express');
var router = express.Router();
const anaSayfa= function(req,res){
    res.render('anasayfa',
    {
        "baslik":"Anasayfa",
        "sayfaBaslik":{
            "siteAd":"MekanBul",
            "slogan": "Civardaki Mekanları Keşfet!"
        },
        "mekanlar":[
            {
                "ad":"Starbucks",
                "puan":"3",
                "adres":"Centrium Garden AVM",
                "imkanlar":["Kahve","Çay","Kek"],
                "mesafe":"10km"
            },
            {
                "ad":"Kahve Dünyası",
                "puan":"4",
                "adres":"iyaş AVM",
                "imkanlar":["Kahve","Tatlı"],
                "mesafe":"1km"
            }
        ]
        
    });
}
const mekanBilgisi= function(req,res){
    res.render('mekanbilgisi',
    {
      "baslik":"Mekan Bilgisi",
      "makanBaslik":"Starbucks",
      "mekanDetay":{
          "ad":"Starbucks",
          "puan":"3",
          "adres":"Centrium Garden",
          "imkanlar"  : ["kahve","çay","kek"], 
          "koordinatlar":{
              "enlem":"37.7",
              "boylam":"30.5"
         },
        "saatler":[
            {
            "gunler":"Pazartesi-Cuma",
            "acilis":"8.00",
            "kapanis":"23.00",
            "kapali": false
            },
            {
            "gunler":"Cumartesi-Pazar",
            "acilis":"9.00",
            "kapanis":"23.00",
            "kapali": false
            } 
    ], 
           
            "yorumlar":[
            {
            "yorumYapan":"Dilek Gül",
            "yorumMetni":"Kahveler Güzel",
            "tarih":"20 Ekim 2022",
            "puan":"3"
                    }
                ]
            }

        
    
    
  } );
}

const yorumEkle= function(req,res,){
    res.render('yorumekle',{"title" :"Yorum Ekle"});
}
module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle,

}