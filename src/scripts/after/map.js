// necessary variables HideHrad
var map;
var infoWindow;
// markersData variable stores the information necessary to each marker
var markersData = [
   {
      lat: 48.9494036,
      lng: 17.4591231,
      "name": "Víno Jan Polehňa",
      picture: "<img class='pctr' src='../img/cont/vinopolehna720x540.jpg'>",
      address1:"408",
      postalCode: "696 71 Blatnice pod Svatým Antonínkem",
      phone: "tel: 518 322 828", // don't insert comma in the last item of each marker
      website: "<a class='website' href='http://www.vinopolehna.cz'>vinopolehna.cz</a>"
   },
   {
      lat: 49.0703081,
      lng: 17.392846,
      "name": "Vinařství Jakubík a.s.",
      picture: "<img class='pctr' src='../img/cont/vinarstvijakubik7240x540.jpg'>",
      address1:"Obchod: obchod@vinarstvijakubik.cz",
      postalCode: "687 10 Zlechov",
      phone: "tel: +420 777 980 124 <br>+420 572 551 703", // don't insert comma in the last item of each marker
      website: "<a class='website' href='http://www.vinarstvijakubik.cz'>vinarstvijakubik.cz</a>"
   },
      {
      lat: 48.9756491,
      lng: 17.2641534,
      "name": "Degustační sklep Zámeckého vinařství Bzenec s.r.o.",
      picture: "<img class='pctr' src='../img/cont/zamekbzenec720x540.jpg'>",
      address1:"Zámecká 1508",
      postalCode: "696 81 Bzenec",
      phone: "tel: +420 518 384 123", // don't insert comma in the last item of each marker
      website: "<a class='website' href='https://www.zameckevinarstvi.cz'>zameckevinarstvi.cz</a><br>info@zameckevinarstvi.cz"
   },
           {
      "lat": 48.9741253,
      "lng": 17.2872271,
      "name": "Vinařství Kněží hora",
      "picture": "<img class='pctr' src='../img/cont/knezihora720x540.jpg'>",
      "address1":"Pod Kněží horou 1469",
      "postalCode": "696 81 Bzenec", // don't insert comma in the last item of each marker
      "phone": "tel: 420 608 505 549",
      "website": "<a class='website' href='http://www.vinarstviknezihora.cz'>vinarstviknezihora.cz</a>"
   },   
           {
      "lat": 48.9745049,
      "lng": 17.2692267,
      "name": "Vinum Moravicum a.s.",
      "picture": "<img class='pctr' src='../img/cont/vinummoravicum720x540.jpg'>",
      "address1":"Pod St. hradem 43/15",
      "postalCode": "696 81 Bzenec", // don't insert comma in the last item of each marker
      "phone": "tel: 737 557 040",
      "website": "<a class='website' href='http://www.vinummoravicum.cz'>vinummoravicum.cz</a>"
   },   
           {
      "lat": 48.9759582,
      "lng": 17.2632354,
      "name": "Bzenecké rodinné vinařství s.r.o",
      "picture": "<img class='pctr' src='../img/cont/vinarstvi-bzenec720x540.jpg'>",
      "address1":"Zámecká 17",
      "postalCode": "696 81 Bzenec", // don't insert comma in the last item of each marker
      "phone": "tel: 604 119 984",
      "website": "<a class='website' href='http://www.vinarstvi-bzenec.cz'>vinarstvi-bzenec.cz</a>"
   },   
           {
      "lat": 48.979214,
      "lng": 17.2595171,
      "name": "Vinařství Petr Bunža",
      "picture": "<img class='pctr' src='../img/cont/bunza720x540.jpg'>",
      "address1":"Těmická 1559",
      "postalCode": "696 81 Bzenec", // don't insert comma in the last item of each marker
      "phone": "tel: 420 731 731 445",
      "website": "<a class='website' href='http://www.bunza.cz'>bunza.cz</a>"
   },  
           {
      "lat": 48.9798867,
      "lng": 17.2106051,
      "name": "Vinařství Škarecký",
      "picture": "<img class='pctr' src='../img/cont/vracovskarecky720x540.jpg'>",
      "address1":"Sokolská 703",
      "postalCode": "696 42 Vracov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 725 456 727",
      "website": "<a class='website' href='http://www.vinarstvi-skarecky.cz'>vinarstvi-skarecky.cz</a>"
   },    
           {
      "lat": 49.0182092,
      "lng": 17.2396863,
      "name": "Vinařství Žůrek",
      "picture": "<img class='pctr' src='../img/cont/vinozurek720x540.jpg'>",
      "address1":"čp. 327",
      "postalCode": "696 47 Žeravice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 356 253",
      "website": "<a class='website' href='http://www.vinozurek.cz'>vinozurek.cz</a>"
   },   
      {
      lat: 48.9499234,
      lng: 17.3823637,
      "name": "Víno Hruška",
      picture: "<img class='pctr' src='../img/cont/vinoteka_hruska_veseli.jpg'>",
      address1:" Národních mučedníků 949",
      postalCode: "698 01 Veselí nad Moravou",
      phone: "tel: +420 607 033 036", // don't insert comma in the last item of each marker
      website: "<a class='website' href='http://www.vinohruska.cz'>vinohruska.cz</a>"
   },
      {
      lat: 49.0376075,
      lng: 17.3448325,
      "name": "Penzion Vinařství Vaďura",
      picture: "<img class='pctr' src='../img/cont/vadurapenzion720.jpg'>",
      address1:"Vinařská č.p. 672",
      postalCode: "687 37 Polešovice",
      phone: "tel: 777594105", // don't insert comma in the last item of each marker
      website: "<a class='website' href='http://www.vinovadura.cz'>vinovadura.cz</a>"
   },
      {
      lat: 49.0853874,
      lng: 17.3395046,
      "name": "Ráj Vína",
      picture: "<img class='pctr' src='../img/cont/rajvina720x540.jpg'>",
      address1:"náměstí Svobody 883",
      postalCode: "687 08 Buchlovice",
       phone: "tel: 720 333 777",// don't insert comma in the last item of each marker
       website: "<a class='website' href='http://www.rajvina.cz'>rajvina.cz</a>"
   },
           {
      "lat": 49.0848636,
      "lng": 17.3446497,
      "name": "Vinařství Černý",
      "picture": "<img class='pctr' src='../img/cont/cernybuchlovice720x540.jpg'>",
      "address1":"Tyršova 649",
      "postalCode": "687 08 Buchlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 705 901",
      "website": "<a class='website' href='http://www.vinocerny.cz'>vinocerny.cz</a>"
   },   
         {
      lat: 49.033511,
      lng: 17.3517835,
      "name": "Šlechtitelská stanice vinařská, s.r.o.",
      picture: "<img class='pctr' src='../img/cont/slechtitelská_stanice_polesovice.jpg'>",
      address1:"Polešovice 634/634",
      postalCode: "68737 Polešovice", // don't insert comma in the last item of each marker
      phone: "tel: 572 593 385",
      website: "<a class='website' href='http://http://www.ssvpolesovice.cz/'>http://ssvpolesovice.cz/</a>"
   },  
           {
      "lat": 49.1049627,
      "lng": 17.3991272,
      "name": "Vinný sklep u Křiváků",
      "picture": "<img class='pctr' src='../img/cont/velehradkrivak720x540.JPG'>",
      "address1":"Zahradní 266",
      "postalCode": "Velehrad", // don't insert comma in the last item of each marker
      "phone": "tel: 723 136 126",
      "website": "<a class='website' href='http://www.ukrivaku.cz'>ukrivaku.cz</a>"
   },  
           {
      "lat": 49.1061544,
      "lng": 17.3950263,
      "name": "Klášterní sklepy Stojanov",
      "picture": "<img class='pctr' src='../img/cont/velehradstojanov720x540.jpg'>",
      "address1":"Salašská 62",
      "postalCode": "687 06 Velehrad", // don't insert comma in the last item of each marker
      "phone": "tel: 777 723 847",
      "website": "<a class='website' href='http://www.klasternisklepy.cz'>klasternisklepy.cz</a>"
   },    
   {
      lat: 49.0693384,
      lng: 17.4607912,
      "name": "VINARIUS",
      picture: "<img class='pctr' src='../img/cont/vinarius720x540.jpg'>",
      address1:"Šromova 136",
      postalCode: "686 01 Uherské Hradiště", // don't insert comma in the last item of each marker
      phone: "tel: Telefon: 604 162 032",
      website: "<a class='website' href='http://www.vinarius.cz'>vinarius.cz</a>"
   },  
           {
      "lat": 49.0238253,
      "lng": 17.6513199,
      "name": "Vinotéka u Václava",
      "picture": "<img class='pctr' src='../img/cont/brodub720x540.jpg'>",
      "address1":"Dolní valy 654",
      "postalCode": "688 01 Uherský Brod", // don't insert comma in the last item of each marker
      "phone": "tel: 775 542 808",
      "website": "<a class='website' href='http://www.vinoteka-ub.cz'>vinoteka-ub.cz</a>"
   },   
           {
      "lat": 49.0220692,
      "lng": 17.6497736,
      "name": "Vinařství Juřeník & Žďárský",
      "picture": "<img class='pctr' src='../img/cont/brodjuranek720x540.jpg'>",
      "address1":"Dolní Valy 508",
      "postalCode": "688 01 Uherský Brod", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 663 774",
      "website": "<a class='website' href='http://www.jurenikzdarsky.cz'>jurenikzdarsky.cz</a>"
   },   
           {
      "lat": 49.0215989,
      "lng": 17.6420052,
      "name": "Vinotéka Uherský Brod",
      "picture": "<img class='pctr' src='../img/cont/brodukapl720x540.jpg'>",
      "address1":"Vlčnovská 2514",
      "postalCode": "688 01 Uherský Brod", // don't insert comma in the last item of each marker
      "phone": "tel: 420 725 267 042",
      "website": "<a class='website' href='http://www.vinoteka-ukaplicky.cz/ubrod-kauflnad.html'>vinoteka-ukaplicky.cz</a>"
   },   
   {
      lat: 49.030983,
      lng: 17.205907,
      "name": "Vinné sklepy Skalák",
      picture: "<img class='pctr' src='../img/cont/skalak720x540.jpg'>",
      address1:"Skalka 85",
      postalCode: "696 48 Ježov", // don't insert comma in the last item of each marker
      phone: "tel: 420 778 740 001",
      website: "<a class='website' href='http://www.sklepskalak.cz'>sklepskalak.cz</a>"
   },  
   {
      lat: 48.9326443,
      lng: 17.5400711,
      "name": "Vinařská Společnost Blatnička spol. S R.o.",
      picture: "<img class='pctr' src='../img/cont/vinspol540x720.jpg'>",
      address1:"Blatnička 44",
      postalCode: "696 71 Blatnička", // don't insert comma in the last item of each marker
      phone: "tel: 518 331 530",
      website: "<a class='website' href='http://www.vinspol.cz'>vinspol.cz</a>"
   },  
   {
      lat: 48.8939881,
      lng: 17.3050065,
      "name": "Vitis s.r.o.",
      picture: "<img class='pctr' src='../img/cont/vitis720x540.jpg'>",
      address1:"U Podjezdu 802",
      postalCode: "696 62 Strážnice", // don't insert comma in the last item of each marker
      phone: "tel: 420 777 701 046",
      website: "<a class='website' href='http://www.vino-vitis.cz'>vino-vitis.cz</a>"
   },
           {
      "lat": 49.035102,
      "lng": 17.152734,
      "name": "Vinný sklep Krýsa",
      "picture": "<img class='pctr' src='../img/cont/kosteleckrysa720x540.jpg'>",
      "address1":"Kostelec u Kyjova 343",
      "postalCode": "696 51  Kostelec", // don't insert comma in the last item of each marker
      "phone": "tel: 420 733 763 689",
      "website": "<a class='website' href='http://www.vesklepe.cz'>vesklepe.cz</a>"
   },   
   {
      lat: 49.0091817,
      lng: 17.1275214,
      "name": "Vinotéka/Lidová jizba",
      picture: "<img class='pctr' src='../img/cont/vinoteka-kyjov720x540.jpg'>",
      address1:"tř. Palackého 205/6",
      postalCode: "697 01 Kyjov", // don't insert comma in the last item of each marker
      phone: "tel: 518 307 732",
      website: "<a class='website' href='http://www.vinoteka-kyjov.cz'>vinoteka-kyjov.cz</a>"
   },       
      {
      lat: 48.8977887,
      lng: 17.3084435,
      "name": "Slovácká vinotéka",
      picture: "<img class='pctr' src='../img/cont/slovacka_vinoteka720x540.jpg'>",
      address1:"Masarykova 319",
      postalCode: "696 62 Strážnice", // don't insert comma in the last item of each marker
      phone: "tel: 721 244 934",
      website: "<a class='website' href='http://http://www.vinarstvidobcakovi.cz/'>vinarstvidobcakovi.cz</a>"
   }, 
      {
      lat: 49.010078,
      lng: 17.122386,
      "name": "Slovácká galerie vín",
      picture: "<img class='pctr' src='../img/cont/slovacka_galerievin720x540.jpg'>",
      address1:"Masarykovo náměstí 30/1",
      postalCode: "697 01 Kyjov", // don't insert comma in the last item of each marker
      phone: "tel: 420 518 307 733",
      website: "<a class='website' href='http://www.slovackagalerievin.cz'>slovackagalerievin.cz</a>"
   },
           {
      "lat": 49.0094731,
      "lng": 17.1267897,
      "name": "Vinotéka Na Špici",
      "picture": "<img class='pctr' src='../img/cont/kyjovnaspici720x540.jpg'>",
      "address1":"Masarykovo nám. 63/43",
      "postalCode": "697 01 Kyjov", // don't insert comma in the last item of each marker
      "phone": "tel: 601 380 461",
      "website": "<a class='website' href='http://www.vinotekabucovice.cz'>vinotekabucovice.cz</a>"
   },   
           {
      "lat": 49.0059481,
      "lng": 17.1320581,
      "name": "Vinný sklípek Kyjov",
      "picture": "<img class='pctr' src='../img/cont/vinn-sklep-kyjov720x540.jpg'>",
      "address1":"Palackého 205/6 ",
      "postalCode": "697 01 Kyjov", // don't insert comma in the last item of each marker
      "phone": "tel: 775 700 107",
      "website": "<a class='website' href='http://www.sklipek-kyjov.cz'>sklipek-kyjov.cz</a>"
   },   
           {
      "lat": 48.8979568,
      "lng": 17.3167792,
      "name": "Víno Botur",
      "picture": "<img class='pctr' src='../img/cont/straznicebotur720x540.jpg'>",
      "address1":"Nádražní 1516",
      "postalCode": "696 62 Strážnice", // don't insert comma in the last item of each marker
      "phone": "tel: 728 213 216",
      "website": "<a class='website' href='http://www.vinobotur.cz'>vinobotur.cz</a>"
   },   
           {
      "lat": 48.8985731,
      "lng": 17.3272138,
      "name": "Podniková vinotéka Strážnice",
      "picture": "<img class='pctr' src='../img/cont/straznice_zerotin720x540.jpg'>",
      "address1":"Veselská 1323",
      "postalCode": "696 62 Strážnice", // don't insert comma in the last item of each marker
      "phone": "tel: 725 309 805",
      "website": "<a class='website' href='http://www.vinarstvi-zerotin.cz/prodejna-vina-straznice'>vinarstvi-zerotin.cz</a>"
   },   
           {
      "lat": 48.8983882,
      "lng": 17.3149951,
      "name": "Vinařství Veverka",
      "picture": "<img class='pctr' src='../img/cont/strazniceveverka720x540.jpg'>",
      "address1":"Vinohradská 45/9",
      "postalCode": "696 62 Strážnice", // don't insert comma in the last item of each marker
      "phone": "tel: 607 855 751",
      "website": "<a class='website' href='http://www.vino-veverka.cz'>vino-veverka.cz</a>"
   },   
           {
      "lat": 48.8777453,
      "lng": 17.2679859,
      "name": "Miroslav Svoboda",
      "picture": "<img class='pctr' src='../img/cont/straznicesvoboda720x540.jpg'>",
      "address1":"Petrov 411",
      "postalCode": "696 65 Petrov", // don't insert comma in the last item of each marker
      "phone": "tel: 723 738 978",
      "website": "<a class='website' href='http://www.vinarstvisvoboda.cz'>vinarstvisvoboda.cz</a>"
   },   
           {
      "lat": 48.877932,
      "lng": 17.271838,
      "name": "Vinařství Tomanovský",
      "picture": "<img class='pctr' src='../img/cont/petrovtomanovsky720x540.jpg'>",
      "address1":"Petrov 465",
      "postalCode": "696 65 Petrov", // don't insert comma in the last item of each marker
      "phone": "tel: 602 51 71 91",
      "website": "<a class='website' href='http://www.tomanovsky.cz'>tomanovsky.cz</a>"
   }, 
           {
      "lat": 48.8514362,
      "lng": 17.1301768,
      "name": "Vinotéka Sýkora",
      "picture": "<img class='pctr' src='../img/cont/hodoninsykora720x540.jpg'>",
      "address1":"Měšťanská 929",
      "postalCode": "695 01 Hodonín", // don't insert comma in the last item of each marker
      "phone": "tel: 702 124 680",
      "website": "<a class='website' href='http://www.vinosykora.cz'>vinosykora.cz</a>"
   },   
           {
      "lat": 48.8549784,
      "lng": 17.1248813,
      "name": "Hodonín WinePoint",
      "picture": "<img class='pctr' src='../img/cont/hodonin-winepoint720x540.jpg'>",
      "address1":"Národní třída 50",
      "postalCode": "695 01 Hodonín", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 977 126",
      "website": "<a class='website' href='http://www.vinospolmutenice.cz/vinospol/nase-vinoteky/hodonin-winepoint'>vinospolmutenice.cz</a>"
   },   
           {
      "lat": 48.8515536,
      "lng": 17.1325056,
      "name": "Vinotéka Hodonín",
      "picture": "<img class='pctr' src='../img/cont/hodoninzerotin720x540.jpg'>",
      "address1":"Výstavní 1072/1 ",
      "postalCode": "695 01 Hodonín", // don't insert comma in the last item of each marker
      "phone": "tel: 420 727 984 055",
      "website": "<a class='website' href='http://www.vinoteka-hodonin.cz'>vinoteka-hodonin.cz</a>"
   },   
           {
      "lat": 48.855295,
      "lng": 17.1376741,
      "name": "Vinárna U Houslí",
      "picture": "<img class='pctr' src='../img/cont/hodoninuhousli720x540.jpg'>",
      "address1":"Jižní 4008",
      "postalCode": "695 01 Hodonín", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 831 002",
      "website": "<a class='website' href='http://www.vinarnauhousli.cz'>vinarnauhousli.cz</a>"
   }, 
           {
      "lat": 48.8624037,
      "lng": 17.0210874,
      "name": "Vinárna U Konšelů",
      "picture": "<img class='pctr' src='../img/cont/bojanovice720x540.jpg'>",
      "address1":"Hlavní 419",
      "postalCode": "696 17 Dolní Bojanovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 951 225",
      "website": "<a class='website' href='http://www.ukonselu.unas.cz'>ukonselu.unas.cz</a>"
   },   
           {
      "lat": 48.874496,
      "lng": 16.989992,
      "name": "Krásná hora s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/podvorovkrasnahora720x540.jpg'>",
      "address1":"Starý Poddvorov 360",
      "postalCode": "696 16 Starý Poddvorov", // don't insert comma in the last item of each marker
      "phone": "tel: 607 234 048",
      "website": "<a class='website' href='http://www.krasnahora.com'>krasnahora.com</a>"
   },   
           {
      "lat": 48.8812249,
      "lng": 16.9877784,
      "name": "Vinný sklep Na Vyšicku",
      "picture": "<img class='pctr' src='../img/cont/poddvorovsvoboda720x540.jpg'>",
      "address1":"Starý Poddvorov 301",
      "postalCode": "696 16  Starý Poddvorov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 931 529",
      "website": "<a class='website' href='http://www.vinny-sklep.com'>vinny-sklep.com</a>"
   },   
           {
      "lat": 48.8344604,
      "lng": 16.9352493,
      "name": "Vinařství Maděřič",
      "picture": "<img class='pctr' src='../img/cont/zizkovmaderic720x540.jpg'>",
      "address1":"Moravský Žižkov 90",
      "postalCode": "691 01 Moravský Žižkov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 605 284 266",
      "website": "<a class='website' href='http://www.vinarstvimaderic.cz'>vinarstvimaderic.cz</a>"
   },   
           {
      "lat": 48.8263982,
      "lng": 16.9842166,
      "name": "Vinařství Melchrt",
      "picture": "<img class='pctr' src='../img/cont/prusankymelchrt720x540.jpg'>",
      "address1":"Příční 693",
      "postalCode": "696 21 Prušánky", // don't insert comma in the last item of each marker
      "phone": "tel: 775 952 030",
      "website": "<a class='website' href='http://www.vinarstvimelchrt.cz'>vinarstvimelchrt.cz</a>"
   },   
           {
      "lat": 48.8451488,
      "lng": 16.9809312,
      "name": "Vinařství U sv. Kříže",
      "picture": "<img class='pctr' src='../img/cont/nechorykriz720x540.jpg'>",
      "address1":"Zahradní 675",
      "postalCode": "696 21 Prušánky", // don't insert comma in the last item of each marker
      "phone": "tel: 420 603 260 148",
      "website": "<a class='website' href='http://www.vinarstviusvkrize.cz'>vinarstviusvkrize.cz</a>"
   },   
           {
      "lat": 48.843096,
      "lng": 16.987411,
      "name": "Vinařství Nechory",
      "picture": "<img class='pctr' src='../img/cont/nechoryvin720x540.jpg'>",
      "address1":"Nechory 218",
      "postalCode": "696 21 Prušánky", // don't insert comma in the last item of each marker
      "phone": "tel: 420 728 376 839",
      "website": "<a class='website' href='http://www.vinarstvinechory.cz'>vinarstvinechory.cz</a>"
   },   
           {
      "lat": 48.839486,
      "lng": 16.9861861,
      "name": "Vinařství Milan Vašíček",
      "picture": "<img class='pctr' src='../img/cont/vasiceknechory720x540.jpg'>",
      "address1":"Nechory 345",
      "postalCode": "696 21 Prušánky", // don't insert comma in the last item of each marker
      "phone": "tel: 420 776 11 66 93",
      "website": "<a class='website' href='http://www.vinovasicek.cz'>vinovasicek.cz</a>"
   },     
           {
      "lat": 48.917603,
      "lng": 17.1002927,
      "name": "Vinařský dům KOBERN s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/dubnanykopecek720x540.jpg'>",
      "address1":"Hodonínská 306",
      "postalCode": "696 03 Dubňany", // don't insert comma in the last item of each marker
      "phone": "tel: 518 364 145",
      "website": "<a class='website' href='http://www.vinarskydum.cz'>vinarskydum.cz</a>"
   },   
           {
      "lat": 48.9149185,
      "lng": 17.0878896,
      "name": "Vinařství Hlavinka",
      "picture": "<img class='pctr' src='../img/cont/dubnanyhlavinka720x540.jpg'>",
      "address1":"U studánky 1238",
      "postalCode": "696 03 Dubňany", // don't insert comma in the last item of each marker
      "phone": "tel: 420 739 040 964",
      "website": "<a class='website' href='http://www.vinarstvihlavinka.cz'>vinarstvihlavinka.cz</a>"
   }, 
           {
      "lat": 48.9464556,
      "lng": 17.1161222,
      "name": "Vinný sklep U Spěváků",
      "picture": "<img class='pctr' src='../img/cont/dubnanymilotice720x540.jpg'>",
      "address1":"Šidleny - číslo sklepu 202",
      "postalCode": "696 05 Milotice", // don't insert comma in the last item of each marker
      "phone": "tel: 777 009 677",
      "website": "<a class='website' href='http://www.uspevaku.cz'>uspevaku.cz</a>"
   },   
           {
      "lat": 48.9236061,
      "lng": 17.1113777,
      "name": "Vinný sklep U Chytilů",
      "picture": "<img class='pctr' src='../img/cont/miloticechytil720x540.jpg'>",
      "address1":"Šidleny 191",
      "postalCode": "696 05 Milotice", // don't insert comma in the last item of each marker
      "phone": "tel: 602 523 87",
      "website": "<a class='website' href='http://www.vinnysklepuchytilu.cz'>vinnysklepuchytilu.cz</a>"
   },  
           {
      "lat": 48.9563537,
      "lng": 17.1395746,
      "name": "Vinařství Krist s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/miloticekrist720x540.jpg'>",
      "address1":"Zámecká 123",
      "postalCode": "696 05 Milotice", // don't insert comma in the last item of each marker
      "phone": "tel: 608 646 606",
      "website": "<a class='website' href='http://www.vinarstvikrist.cz'>vinarstvikrist.cz</a>"
   },           {
      "lat": 48.945579,
      "lng": 17.168467,
      "name": "Vinařství Broda",
      "picture": "<img class='pctr' src='../img/cont/vacenovicebroda720x540.JPG'>",
      "address1":"Žlébky",
      "postalCode": "696 06 Vacenovice", // don't insert comma in the last item of each marker
      "phone": "tel: 775 383 056",
      "website": "<a class='website' href='http://www.vinarstvibroda.cz'>vinarstvibroda.cz</a>"
   },           {
      "lat": 48.8785203,
      "lng": 17.1860317,
      "name": "Vinný sklep Kovárna",
      "picture": "<img class='pctr' src='../img/cont/rohateckovarna720x540.jpg'>",
      "address1":"Baráky 125/1",
      "postalCode": "696 01 Rohatec", // don't insert comma in the last item of each marker
      "phone": "tel: 721 732 563",
      "website": "<a class='website' href='http://www.vinnysklep.penzion.com/8232/vinny-sklep'>vinnysklep.penzion.com</a>"
   },           {
      "lat": 48.8632232,
      "lng": 17.2584437,
      "name": "Vinařství Toman",
      "picture": "<img class='pctr' src='../img/cont/sudomericetoman720x540.jpg'>",
      "address1":"Starý potok 16",
      "postalCode": "696 66 Sudoměřice", // don't insert comma in the last item of each marker
      "phone": "tel: 605 298 052",
      "website": "<a class='website' href='http://www.vinotoman.cz'>vinotoman.cz</a>"
   },                 
           {
      "lat": 48.8303401,
      "lng": 16.9662014,
      "name": "Morávia Víno, spol. s r. o.",
      "picture": "<img class='pctr' src='../img/cont/prusankyvinomorava720x540.jpg'>",
      "address1":"Prušánky 777",
      "postalCode": "696 21 Prušánky", // don't insert comma in the last item of each marker
      "phone": "tel: 602 518 145",
      "website": "<a class='website' href='http://www.vinomorava.net'>vinomorava.net</a>"
   },   
           {
      "lat": 48.8011644,
      "lng": 17.0178116,
      "name": "Rodinné vinařství Košut s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/prusankykosut720x540.jpg'>",
      "address1":"Hlavní 89",
      "postalCode": "691 55 Moravská Nová Ves", // don't insert comma in the last item of each marker
      "phone": "tel: 728 676 326",
      "website": "<a class='website' href='http://www.kosut.net'>kosut.net</a>"
   },   
      {
      lat: 48.9552978,
      lng: 16.9654924,
      "name": "Vinařství na Čejči",
      picture: "<img class='pctr' src='../img/cont/cejcsklep720x540.jpg'>",
      address1:"Pod bůdama 78,, Čejč",
      postalCode: "696 14 Čejč", // don't insert comma in the last item of each marker
      phone: "tel: 605 878 855",
      website: "<a class='website' href='http://www.sklep-cejc.cz'>sklep-cejc.cz</a>"
   },   
      {
      lat: 48.952295,
      lng: 16.969596,
      "name": "Vinný sklep U Hroznu",
      picture: "<img class='pctr' src='../img/cont/cejcuhroznu.720x540.jpg'>",
      address1:"Areál vinných sklepů Pod Búdama",
      postalCode: "696 14 Čejč", // don't insert comma in the last item of each marker
      phone: "tel: 724 744 118",
      website: "<a class='website' href='http://www.vinny-sklipek.cz/'>vinny-sklipek.cz</a>"
   },
           {
      "lat": 48.9505419,
      "lng": 16.9689499,
      "name": "Rodinné vinařství Melkusovi",
      "picture": "<img class='pctr' src='../img/cont/cejcmelk720x540.jpg'>",
      "address1":"Čejč 14",
      "postalCode": "696 14 Čejč", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 267 722",
      "website": "<a class='website' href='http://www.vinarstvimelkusovi.cz'>vinarstvimelkusovi.cz</a>"
   },   
           {
      "lat": 48.9530015,
      "lng": 16.9480886,
      "name": "Penzion a sklep u Tomčalů",
      "picture": "<img class='pctr' src='../img/cont/cejcutomca720x540.jpg'>",
      "address1":"Čejč 398",
      "postalCode": "696 14 Čejč", // don't insert comma in the last item of each marker
      "phone": "tel: 731 461 555",
      "website": "<a class='website' href='http://www.penziontomcala.cz'>penziontomcala.cz</a>"
   },    
           {
      "lat": 48.9427393,
      "lng": 16.9663488,
      "name": "Horákova farma",
      "picture": "<img class='pctr' src='../img/cont/cejchorakova720x540.jpg'>",
      "address1":" Čejč 1",
      "postalCode": "696 14 Čejč", // don't insert comma in the last item of each marker
      "phone": "tel: 420 518 361 201",
      "website": "<a class='website' href='http://www.cshorak.cz'>cshorak.cz</a>"
   },   
           {
      "lat": 48.95241,
      "lng": 16.9412471,
      "name": "Vinařství Esterka",
      "picture": "<img class='pctr' src='../img/cont/terezinesterka720x540.jpg'>",
      "address1":"Pod sklepy 164",
      "postalCode": "696 14 Terezín", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 778 155",
      "website": "<a class='website' href='http://www.vinarstvi-esterka.cz'>vinarstvi-esterka.cz</a>"
   },   
           {
      "lat": 48.9709337,
      "lng": 17.084579,
      "name": "Vinařství U Šťastných",
      "picture": "<img class='pctr' src='../img/cont/kyjovustastnych720x540.jpg'>",
      "address1":"Vyhnálov 673/7",
      "postalCode": "696 04 Svatobořice-Mistřín", // don't insert comma in the last item of each marker
      "phone": "tel: 728 921 227",
      "website": "<a class='website' href='http://www.ustastnych.cz'>ustastnych.cz</a>"
   },   
           {
      "lat": 48.9868795,
      "lng": 17.1001347,
      "name": "Vinařství DUFEK",
      "picture": "<img class='pctr' src='../img/cont/kyjovvinarstvi-dufek720x540.jpg'>",
      "address1":"Pod Sokolovnou 1185/17",
      "postalCode": "696 04 Svatobořice-Mistřín", // don't insert comma in the last item of each marker
      "phone": "tel: 420 721 254 983",
      "website": "<a class='website' href='http://www.vinarstvi-dufek.cz'>vinarstvi-dufek.cz</a>"
   },   
           {
      "lat": 49.004269,
      "lng": 17.163453,
      "name": "Vinný sklep u Štipčáků",
      "picture": "<img class='pctr' src='../img/cont/kyjovstipcak720x540.jpg'>",
      "address1":"Vlkošské búdy",
      "postalCode": "696 41 Vlkoš", // don't insert comma in the last item of each marker
      "phone": "tel: 420 776 062 459",
      "website": "<a class='website' href='http://www.vinnysklepsubytovanim.cz'>vinnysklepsubytovanim.cz</a>"
   },   
           {
      "lat": 49.013564,
      "lng": 17.192892,
      "name": "Vinařství Štěpán Maňák",
      "picture": "<img class='pctr' src='../img/cont/zadovicemanak720x540.jpg'>",
      "address1":"Žádovice 276",
      "postalCode": "696 49 Žádovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 603 275 122",
      "website": "<a class='website' href='http://www.vinarstvi-manak.cz'>vinarstvi-manak.cz</a>"
   },   
      {
      lat: 48.9595852,
      lng: 17.0330994,
      "name": "Vinařství Nešporovi",
      picture: "<img class='pctr' src='../img/cont/sardice720x540.jpg'>",
      address1:"Hlavní 429",
      postalCode: "696 13 Šardice", // don't insert comma in the last item of each marker
      phone: "tel: 603 903 789",
      website: "<a class='website' href='http://www.vinarstvinesporovi.cz'>vinarstvinesporovi.cz</a>"
   },   
      {
      lat: 48.9612226,
      lng: 17.0374449,
      "name": "Vinařství Foretník",
      picture: "<img class='pctr' src='../img/cont/foretnik720x540.png'>",
      address1:"Hlavní 303",
      postalCode: "696 13 Šardice", // don't insert comma in the last item of each marker
      phone: "tel: 602 146 935",
      website: "<a class='website' href='http://www.vinoforetnik.cz'>vinoforetnik.cz</a>"
   },   
      {
      lat: 48.906905,
      lng: 17.035018,
      "name": "Vinospol, spol. s r.o.",
      picture: "<img class='pctr' src='../img/cont/vinospol720x540.jpg'>",
      address1:"Údolní 1076",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 602 100 107",
      website: "<a class='website' href='http://www.vinospolmutenice.cz'>vinospolmutenice.cz</a>"
   },         
      {
      lat: 48.906074,
      lng: 17.0376939,
      "name": "Vinařství Mutěnice, s.r.o.",
      picture: "<img class='pctr' src='../img/cont/mutenice720x540.jpg'>",
      address1:"Údolní 1174",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 723 185 314",
      website: "<a class='website' href='http://www.vinarstvimutenice.cz'>vinarstvimutenice.cz</a>"
   },   
         {
      lat: 48.9132388,
      lng: 17.0194476,
      "name": "Vinařství Turzík",
      picture: "<img class='pctr' src='../img/cont/turzik720x540.jpg'>",
      address1:"Vinařská 424",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 776 558 457",
      website: "<a class='website' href='http://www.turzik.cz'>turzik.cz</a>"
   },   
      {
      lat: 48.9111894,
      lng: 17.0309425,
      "name": "Modré Vinařství",
      picture: "<img class='pctr' src='../img/cont/modre720x540.JPG'>",
      address1:"Šlechtitelská",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 776 560 134",
      website: "<a class='website' href='http://www.modrevinarstvi.cz'>modrevinarstvi.cz</a>"
   },   
         {
      lat: 48.9140553,
      lng: 17.0255698,
      "name": "Vinný sklep Josef Vítek",
      picture: "<img class='pctr' src='../img/cont/vitekmutenice720x540.jpg'>",
      address1:"Nedělní 1029",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 420 723 936 594",
      website: "<a class='website' href='http://www.vinarstvi-mutenice.cz'>vinarstvi-mutenice.cz</a>"
   },   
         {
      lat: 48.913482,
      lng: 17.0264,
      "name": "Vinařství a vinný sklep Zimolka",
      picture: "<img class='pctr' src='../img/cont/zimolka720x540.jpg'>",
      address1:"U Kapličky 1111",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 777 736 600",
      website: "<a class='website' href='http://www.vinozimolka.cz'>vinozimolka.cz</a>"
   },   
         {
      lat: 48.9147237,
      lng: 17.0247197,
      "name": "Vinařství  Vrba",
      picture: "<img class='pctr' src='../img/cont/mutenicevrba720x540.jpg'>",
      address1:"460, Horská",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 420 776 287 868",
      website: "<a class='website' href='http://www.vinarstvivrba.cz'>vinarstvivrba.cz</a>"
   },   
         {
      lat: 48.9132505,
      lng: 17.0245737,
      "name": "Sklep u Štěpánků",
      picture: "<img class='pctr' src='../img/cont/muteniceustepanku720x540.jpg'>",
      address1:"Rovná 319 (lokalita-Bůdy)",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 420 723 426 729",
      website: "<a class='website' href='http://www.sklepustepanku.cz'>sklepustepanku.cz</a>"
   }, 
           {
      lat: 48.9141376,
      lng: 17.0285726,
      "name": "Vinný sklep Zlatá morava",
      picture: "<img class='pctr' src='../img/cont/zlatysklep720x540.jpeg'>",
      address1:"Uzavřená 75",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 606 913 717",
      website: "<a class='website' href='http://www.zlata-morava.cz'>zlata-morava.cz</a>"
   },   
           {
      lat: 48.9072937,
      lng: 17.0373334,
      "name": "Vinařství Štěpánek s.r.o.",
      picture: "<img class='pctr' src='../img/cont/mutenicestepanek720x540.jpg'>",
      address1:" Zahradní 773",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 420 608 963 846",
      website: "<a class='website' href='http://www.vinarstvistepanek.eu'>vinarstvistepanek.eu</a>"
   },   
           {
      lat: 48.914382,
      lng: 17.0299591,
      "name": "Dlúhé Grefty",
      picture: "<img class='pctr' src='../img/cont/dluhegrefty720x540.jpg'>",
      address1:"Uzavřená",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 420 773 527 687",
      website: "<a class='website' href='http://www.dluhegrefty.cz'>dluhegrefty.cz</a>"
   },   
           {
      lat: 48.9158721,
      lng: 17.0211831,
      "name": "Vinařství Petr Bíza & Sklep u Zdeny",
      picture: "<img class='pctr' src='../img/cont/mutenicebiza720x540.jpg'>",
      address1:"Pod Búdama",
      postalCode: "696 11 Mutěnice", // don't insert comma in the last item of each marker
      phone: "tel: 602 715 942",
      website: "<a class='website' href='http://www.sklepuzdeny.cz'>sklepuzdeny.cz</a>"
   },   
           {
      lat: 48.9030254,
      lng: 17.3175502,
      "name": "Zámecké sklepy Strážnice",
      picture: "<img class='pctr' src='../img/cont/straznicesklp720x540.jpg'>",
      address1:"Boženy Hrejsové 1201",
      postalCode: "696 62 Strážnice", // don't insert comma in the last item of each marker
      phone: "tel: 602 670 051",
      website: "<a class='website' href='http://www.zameckesklepy.cz'>zameckesklepy.cz </a>"
   },   
        {
      lat: 49.0516217,
      lng: 17.4822374,
      "name": "Vinařství Medek",
      picture: "<img class='pctr' src='../img/cont/hradmedek720x540.jpg'>",
      address1:"Na Kopci 68",
      postalCode: "686 01 Uherské Hradiště", // don't insert comma in the last item of each marker
      phone: "tel: 420 773 580 566",
      website: "<a class='website' href='http://www.vinarstvimedek.cz'>vinarstvimedek.cz</a>"
   },   
        {
      lat: 49.067575,
      lng: 17.459196,
      "name": "Galerie slováckých vín",
      picture: "<img class='pctr' src='../img/cont/hradgalerieslov720x540.jpg'>",
      address1:"Masarykovo nám. 21",
      postalCode: "686 01 Uherské Hradiště", // don't insert comma in the last item of each marker
      phone: "tel: 420 572 541 884",
      website: "<a class='website' href='http://www.jezuitske-sklepy.cz'>jezuitske-sklepy.cz</a>"
   },   
           {
      lat: 49.0713576,
      lng: 17.4591579,
      "name": "VÍNO HRUŠKA - Vinotéka a vinný bar",
      picture: "<img class='pctr' src='../img/cont/hradhruska720x540.jpg'>",
      address1:"Vodní 110",
      postalCode: "686 01 Uherské Hradiště", // don't insert comma in the last item of each marker
      phone: "tel: 420 775 785 061",
      website: "<a class='website' href='http://www.vinokterechutna.cz/kontakty/detail/14'>vinokterechutna.cz</a>"
   },   
           {
      lat: 49.0698742,
      lng: 17.4591884,
      "name": "Slovácká vinotéka",
      picture: "<img class='pctr' src='../img/cont/hradslovackateka720x540.jpg'>",
      address1:"Mariánské náměstí 44",
      postalCode: "686 01 Uherské Hradiště", // don't insert comma in the last item of each marker
      phone: "tel: 420 774 087 654",
      website: "<a class='website' href='http://www.rajvina.cz/vinoteky'>rajvina.cz</a>"
   }, 
           {
      "lat": 49.0701595,
      "lng": 17.470429,
      "name": "Malokarpatská vinotéka",
      "picture": "<img class='pctr' src='../img/cont/hradkarp720x540.jpg'>",
      "address1":"Verbířská 1286",
      "postalCode": "686 01 Uherské Hradiště", // don't insert comma in the last item of each marker
      "phone": "tel: 420 731 912 082",
      "website": "<a class='website' href='http://www.vino-mkv.sk/#Uhersk%C3%A9%20Hradi%C5%A1t%C4%9B'>vino-mkv.sk</a>"
   },   
           {
      "lat": 48.9510829,
      "lng": 17.4611767,
      "name": "Vinařství Vyskočil",
      "picture": "<img class='pctr' src='../img/cont/blatnicevyskocil720x5401.jpg'>",
      "address1":"Blatnice 775",
      "postalCode": "696 71 Blatnice pod Svatým Antonínkem", // don't insert comma in the last item of each marker
      "phone": "tel: 608 861 146",
      "website": "<a class='website' href='http://www.vinovyskocil.cz'>vinovyskocil.cz</a>"
   },   
           {
      "lat": 48.9425892,
      "lng": 17.4624131,
      "name": "Víno Bílek",
      "picture": "<img class='pctr' src='../img/cont/blatnicebilek720x540.jpg'>",
      "address1":"č.p. 692",
      "postalCode": "696 71 Blatnice pod Svatým Antonínkem", // don't insert comma in the last item of each marker
      "phone": "tel: 604 948 415",
      "website": "<a class='website' href='http://www.vinobilek.cz'>vinobilek.cz</a>"
   },   
           {
      "lat": 48.9417553,
      "lng": 17.4665451,
      "name": "Vinařský dům PETRATUR",
      "picture": "<img class='pctr' src='../img/cont/blatnicepetratour720x540.jpg'>",
      "address1":"Blatnice 661",
      "postalCode": "696 71 Blatnice pod Svatým Antonínkem", // don't insert comma in the last item of each marker
      "phone": "tel: 420 724 286 367",
      "website": "<a class='website' href='http://www.vinarstvipetratur.cz'>vinarstvipetratur.cz</a>"
   },  
           {
      "lat": 48.9460653,
      "lng": 17.4590787,
      "name": "Vinařství Pavel Hruška",
      "picture": "<img class='pctr' src='../img/cont/blatnicehruska720x540.jpg'>",
      "address1":"č.p. 705",
      "postalCode": "696 71 Blatnice pod Svatým Antonínkem", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 706 872",
      "website": "<a class='website' href='http://www.vinarstvi-blatnice.cz'>vinarstvi-blatnice.cz</a>"
   }, 
           {
      "lat": 48.9530257,
      "lng": 17.4562807,
      "name": "VÍNO BLATEL",
      "picture": "<img class='pctr' src='../img/cont/blatniceblatel720x540.jpg'>",
      "address1":"Blatnice 855",
      "postalCode": "696 71 Blatnice pod Svatým Antonínkem", // don't insert comma in the last item of each marker
      "phone": "tel: 420 775 707 224",
      "website": "<a class='website' href='http://www.vinoblatel.cz'>vinoblatel.cz</a>"
   },   
           {
      "lat": 48.946948,
      "lng": 17.4676391,
      "name": "Mladé Vinařství",
      "picture": "<img class='pctr' src='../img/cont/blatnicemlade720x540.jpg'>",
      "address1":"Blatnice 104",
      "postalCode": "696 71 Blatnice pod Svatým Antonínkem", // don't insert comma in the last item of each marker
      "phone": "tel: 420 731 826 999",
      "website": "<a class='website' href='http://www.mladevinarstvi.cz'>mladevinarstvi.cz</a>"
   },   
           {
      "lat": 48.9489512,
      "lng": 17.4666636,
      "name": "Vinařství rodiny Cíchovy",
      "picture": "<img class='pctr' src='../img/cont/blatnicecicha720x540.jpg'>",
      "address1":"Blatnice 490",
      "postalCode": "Blatnice pod Svatým Antonínkem", // don't insert comma in the last item of each marker
      "phone": "tel: 608 010 566",
      "website": "<a class='website' href='http://www.cicha.cz'>cicha.cz</a>"
   },  
           {
      "lat": 48.9372766,
      "lng": 17.5290739,
      "name": "Sklep Antonín Mičulka",
      "picture": "<img class='pctr' src='../img/cont/blatnickamiculka720x540.jpg'>",
      "address1":"Blatnička 188",
      "postalCode": "696 71 Blatnička", // don't insert comma in the last item of each marker
      "phone": "tel: 420 608 782 228",
      "website": "<a class='website' href='http://www.sklepmiculka.cz'>sklepmiculka.cz</a>"
   },   
           {
      "lat": 48.9348583,
      "lng": 17.527417,
      "name": "Vinotéka VÍNO HRUŠKA",
      "picture": "<img class='pctr' src='../img/cont/blatnickahruska720x540.jpg'>",
      "address1":"Blatnička č. 143",
      "postalCode": "696 71 Blatnička", // don't insert comma in the last item of each marker
      "phone": "tel: 420 776 682 147",
      "website": "<a class='website' href='http://www.vinokterechutna.cz'>vinokterechutna.cz</a>"
   },    
           {
      "lat": 48.935394,
      "lng": 17.5242103,
      "name": "Vinný sklep Minařík",
      "picture": "<img class='pctr' src='../img/cont/blatnickaminarik720x540.jpg'>",
      "address1":"Blatnička 41",
      "postalCode": "696 71 Blatnička", // don't insert comma in the last item of each marker
      "phone": "tel: 774 331 619",
      "website": "<a class='website' href='http://www.vino-minarik.cz'>vino-minarik.cz</a>"
   },         
           {
      lat: 49.0853874,
      lng: 17.3395046,
      "name": "Ráj Vína - Buchlovice",
      picture: "<img class='pctr' src='../img/cont/buchlovice-vinot720x540.jpg'>",
      address1:"Náměstí Svobody 883",
      postalCode: "Buchlovice 687 08", // don't insert comma in the last item of each marker
      phone: "tel: 420 606 353 515",
      website: "<a class='website' href='http://www.rajvina.cz/raj-vina-buchlovice'>rajvina.cz</a>"
   },   
           {
      lat: 49.068053,
      lng: 17.460723,
      "name": "Liquormania",
      picture: "<img class='pctr' src='../img/cont/liqueromania720x540.jpg'>",
      address1:"Masarykovo náměstí 17",
      postalCode: "686 01 Uherské Hradiště", // don't insert comma in the last item of each marker
      phone: "tel: 420 725 709 873",
      website: "<a class='website' href='http://www.liquormania.cz'>liquormania.cz</a>"
   },     
           {
      "lat": 49.0058247,
      "lng": 17.4351707,
      "name": "Vinotéka U svatého Vavřinca",
      "picture": "<img class='pctr' src='../img/cont/uvavrinca720x540.jpg'>",
      "address1":"Dědina 40",
      "postalCode": "687 22 Ostrožská Nová Ves", // don't insert comma in the last item of each marker
      "phone": "tel: 731 507 231",
      "website": "<a class='website' href='http://www.karbula.cz/cz/55-vinoteky/56-ostrozska-nova-ves.html'>karbula.cz</a>"
   },
           {
      "lat": 48.7660058,
      "lng": 16.8907839,
      "name": "Vinotéka Moravský sommelier",
      "picture": "<img class='pctr' src='../img/cont/breclavsomelier720x540.jpg'>",
      "address1":"Kpt. Jaroše 3 ,areál bývalých kasáren",
      "postalCode": "690 02 Břeclav", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 202 595",
      "website": "<a class='website' href='http://www.moravskysommelier.cz'>moravskysommelier.cz</a>"
   },   
           {
      "lat": 48.7637234,
      "lng": 16.8871468,
      "name": "Vinotéka Brumovín",
      "picture": "<img class='pctr' src='../img/cont/breclavbrumovin720x540.jpg'>",
      "address1":"Nár. hrdinů 607/22",
      "postalCode": "690 02 Břeclav", // don't insert comma in the last item of each marker
      "phone": "tel: 777 756 115",
      "website": "<a class='website' href='http://www.brumovin.cz'>brumovin.cz</a>"
   },   
           {
      "lat": 48.7747918,
      "lng": 16.8875811,
      "name": "Vinařství Josef Mráz",
      "picture": "<img class='pctr' src='../img/cont/breclavmraz720x540.jpg'>",
      "address1":"Gen. Šimka 67",
      "postalCode": "690 02 Břeclav", // don't insert comma in the last item of each marker
      "phone": "tel: 777 264 587",
      "website": "<a class='website' href='http://www.vinarstvimraz.cz'>vinarstvimraz.cz</a>"
   },   
           {
      "lat": 48.7604148,
      "lng": 16.8766872,
      "name": "Zámecká vinárna ROTUNDA",
      "picture": "<img class='pctr' src='../img/cont/breclavrotunda720x540.jpg'>",
      "address1":"Zámecké nám. 5/1",
      "postalCode": "690 02 Břeclav", // don't insert comma in the last item of each marker
      "phone": "tel: 420 608 327 770",
      "website": "<a class='website' href='http://www.rotunda.cz'>rotunda.cz</a>"
   },  
           {
      "lat": 48.7996487,
      "lng": 17.0166168,
      "name": "Vinařství Tomanovi",
      "picture": "<img class='pctr' src='../img/cont/morvestoman720x540.jpg'>",
      "address1":"Polní 31",
      "postalCode": "691 55 Moravská Nová Ves", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 561 535",
      "website": "<a class='website' href='http://www.vinarstvi-tomanovi.cz'>vinarstvi-tomanovi.cz</a>"
   },   
           {
      "lat": 48.8015891,
      "lng": 17.0227602,
      "name": "Vinařství Glosovi",
      "picture": "<img class='pctr' src='../img/cont/morvesglosovi720x540.jpg'>",
      "address1":"Na Výsluní 841",
      "postalCode": "691 55 Moravská Nová Ves", // don't insert comma in the last item of each marker
      "phone": "tel: 420 607 180 237",
      "website": "<a class='website' href='http://www.vinarstvi-glosovi.cz'>vinarstvi-glosovi.cz</a>"
   },   
           {
      "lat": 48.799228,
      "lng": 17.025425,
      "name": "Vinařství Frýdek",
      "picture": "<img class='pctr' src='../img/cont/morvesfrydek720x540.jpg'>",
      "address1":"U Sokolovny 868",
      "postalCode": "691 55 Moravská Nová Ves", // don't insert comma in the last item of each marker
      "phone": "tel: 721 684 571 ",
      "website": "<a class='website' href='http://www.frydek.com'>frydek.com</a>"
   },   
           {
      "lat": 48.8115583,
      "lng": 17.0087582,
      "name": "U Terezy a Jakuba",
      "picture": "<img class='pctr' src='../img/cont/morvesterez720x540.jpg'>",
      "address1":"Hliník",
      "postalCode": "691 55 Moravská Nová Ves", // don't insert comma in the last item of each marker
      "phone": "tel: 721 732 563",
      "website": "<a class='website' href='http://www.vinnysklep.penzion.com'>vinnysklep.penzion.com</a>"
   },    
           {
      "lat": 48.7925106,
      "lng": 16.9721376,
      "name": "Vinařství Nešpor",
      "picture": "<img class='pctr' src='../img/cont/hruskynespor720x540.jpg'>",
      "address1":"Na rynku 165",
      "postalCode": "691 56 Hrušky", // don't insert comma in the last item of each marker
      "phone": "tel: 420 723 340 071",
      "website": "<a class='website' href='http://www.vinarstvinespor.cz'>vinarstvinespor.cz</a>"
   },   
           {
      "lat": 48.7903598,
      "lng": 16.9738716,
      "name": "Marcel Klimeš",
      "picture": "<img class='pctr' src='../img/cont/hruskyklimes720x540.jpg'>",
      "address1":"Hlavní 54",
      "postalCode": "691 56 Hrušky", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 427 632",
      "website": "<a class='website' href='http://www.vinoklimes.cz'>vinoklimes.cz</a>"
   },   
           {
      "lat": 48.7938282,
      "lng": 16.9632888,
      "name": "Vinařství u Nešporů",
      "picture": "<img class='pctr' src='../img/cont/hruskyunespora720x540.jpg'>",
      "address1":"U hřiště 251",
      "postalCode": "691 56 Hrušky", // don't insert comma in the last item of each marker
      "phone": "tel: 420 608 636 041",
      "website": "<a class='website' href='http://www.vinarstvi-u-nesporu.cz'>vinarstvi-u-nesporu.cz</a>"
   },   
           {
      "lat": 48.7958181,
      "lng": 16.9694191,
      "name": "Rodinné vinařství Beneš",
      "picture": "<img class='pctr' src='../img/cont/hruskybenes720x540.jpg'>",
      "address1":"Na Kanadě 377",
      "postalCode": "691 56 Hrušky", // don't insert comma in the last item of each marker
      "phone": "tel: 607 829 755",
      "website": "<a class='website' href='http://www.vinobenes.cz'>vinobenes.cz</a>"
   },   
           {
      "lat": 48.955464,
      "lng": 16.9975204,
      "name": "GRMOLEC rodinné vinařství",
      "picture": "<img class='pctr' src='../img/cont/hovoranygrmolec720x540.jpg'>",
      "address1":"Hovorany 243",
      "postalCode": "696 12 Hovorany", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 117 172",
      "website": "<a class='website' href='http://www.grmolec.cz'>grmolec.cz</a>"
   },   
           {
      "lat": 48.9331246,
      "lng": 16.8821046,
      "name": "Vinařství Herzánovi",
      "picture": "<img class='pctr' src='../img/cont/kobyliherzanovi720x540.jpg'>",
      "address1":"Kobylí 562",
      "postalCode": "691 10 Kobylí", // don't insert comma in the last item of each marker
      "phone": "tel: 728 089 396",
      "website": "<a class='website' href='http://www.vinarstviherzanovi.eu'>vinarstviherzanovi.eu</a>"
   },   
           {
      "lat": 48.9289305,
      "lng": 16.8989018,
      "name": "Vinařství Lanžhotský",
      "picture": "<img class='pctr' src='../img/cont/kobylilanzhotsky720x540.jpg'>",
      "address1":"Kobylí 861",
      "postalCode": "691 10 Kobylí", // don't insert comma in the last item of each marker
      "phone": "tel: 420 604 15 17 37",
      "website": "<a class='website' href='http://www.vinarstvilanzhotsky.cz'>vinarstvilanzhotsky.cz</a>"
   },   
           {
      "lat": 48.9340315,
      "lng": 16.8849792,
      "name": "Vinařství Bukovský",
      "picture": "<img class='pctr' src='../img/cont/kobylibukovsky720x540.jpg'>",
      "address1":"Kobylí 231",
      "postalCode": "691 10 Kobylí", // don't insert comma in the last item of each marker
      "phone": "tel: 777 134 616",
      "website": "<a class='website' href='http://www.vinarstvibukovsky.cz'></a>"
   },   
           {
      "lat": 48.9335073,
      "lng": 16.8851376,
      "name": "Vinařství Vajbar",
      "picture": "<img class='pctr' src='../img/cont/kobylivajbar720x540.jpg'>",
      "address1":"Kobylí 509",
      "postalCode": "691 10 Kobylí", // don't insert comma in the last item of each marker
      "phone": "tel: 604 235 048",
      "website": "<a class='website' href='http://www.vajbar.cz'>vajbar.cz</a>"
   },   
           {
      "lat": 48.9141447,
      "lng": 16.8977395,
      "name": "Vinařství Bočko",
      "picture": "<img class='pctr' src='../img/cont/vrbovicebocko720x540.jpg'>",
      "address1":"Vrbice 237",
      "postalCode": "691 09 Vrbice", // don't insert comma in the last item of each marker
      "phone": "tel: 724 238 391",
      "website": "<a class='website' href='http://www.vinarstvibocko.cz'>vinarstvibocko.cz</a>"
   },   
           {
      "lat": 48.916831,
      "lng": 16.8995771,
      "name": "Rodinné vinařství Bařina",
      "picture": "<img class='pctr' src='../img/cont/vrbicebarina720x540.jpg'>",
      "address1":"Vrbice 98",
      "postalCode": "691 09 Vrbice", // don't insert comma in the last item of each marker
      "phone": "tel: 777 685 499",
      "website": "<a class='website' href='http://www.vinobarina.cz'>vinobarina.cz</a>"
   },   
           {
      "lat": 48.918806,
      "lng": 16.899121,
      "name": "Vinařství Zálešák",
      "picture": "<img class='pctr' src='../img/cont/vrbicezalesak720x540.jpg'>",
      "address1":"Vrbice 409",
      "postalCode": "691 09 Vrbice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 7331 482 87",
      "website": "<a class='website' href='http://www.vinarstvi-zalesak.cz'>vinarstvi-zalesak.cz</a>"
   },    
           {
      "lat": 48.9179648,
      "lng": 16.8997313,
      "name": "Vinařství Fridrichovi a Trtkovi",
      "picture": "<img class='pctr' src='../img/cont/vrbovicefridrich720x540.jpg'>",
      "address1":"Vrbice",
      "postalCode": "691 09 Vrbice", // don't insert comma in the last item of each marker
      "phone": "tel: 605763351",
      "website": "<a class='website' href='http://www.fridrichovi.cz'>fridrichovi.cz</a>"
   },  
           {
      "lat": 48.76639,
      "lng": 16.9905639,
      "name": "Vinařství Kosík",
      "picture": "<img class='pctr' src='../img/cont/tvrdonicekosik720x540.jpg'>",
      "address1":"Kostická 122/26",
      "postalCode": "Tvrdonice 691 53", // don't insert comma in the last item of each marker
      "phone": "tel: 420 728 750 209",
      "website": "<a class='website' href='http://www.ukosiku.cz'>ukosiku.cz</a>"
   },   
           {
      "lat": 48.7246687,
      "lng": 16.9636387,
      "name": "Vinařství Josef Uher",
      "picture": "<img class='pctr' src='../img/cont/lanzhotuher720x540.jpg'>",
      "address1":"Hrnčířská 1260/7",
      "postalCode": "691 51 Lanžhot", // don't insert comma in the last item of each marker
      "phone": "tel: 607 603 325",
      "website": "<a class='website' href='http://www.vinarstvi-uher.cz'>vinarstvi-uher.cz</a>"
   },   
           {
      "lat": 48.748364,
      "lng": 16.982416,
      "name": "Rodinné vinařství Blažek",
      "picture": "<img class='pctr' src='../img/cont/kosticeblazek720x540.jpg'>",
      "address1":"Tvrdonská 5",
      "postalCode": "691 52 Kostice", // don't insert comma in the last item of each marker
      "phone": "tel: 721 683 008",
      "website": "<a class='website' href='http://www.vinarstviblazek.cz'>vinarstviblazek.cz</a>"
   },   
           {
      "lat": 48.8186338,
      "lng": 17.0520293,
      "name": "Rodinné vinařství Bartoníkovi",
      "picture": "<img class='pctr' src='../img/cont/mikulcicebartonikovi720x540.jpg'>",
      "address1":"Mikulčice 236",
      "postalCode": "696 19 Mikulčice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 731 159 010",
      "website": "<a class='website' href='http://www.vinobartonik.cz'>vinobartonik.cz</a>"
   },   
           {
      "lat": 48.8970057,
      "lng": 16.9408924,
      "name": "Vinařství Michna",
      "picture": "<img class='pctr' src='../img/cont/cejkovicemichna720x540.jpg'>",
      "address1":"U Kapličky 593",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 420 608 531 377",
      "website": "<a class='website' href='http://www.vinarstvimichna.cz'>vinarstvimichna.cz</a>"
   },   
           {
      "lat": 48.902544,
      "lng": 16.949885,
      "name": "Víno Škrobák",
      "picture": "<img class='pctr' src='../img/cont/cejkoviceskrobak720x540.jpg'>",
      "address1":"Příhon 942",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 420 773 993 905",
      "website": "<a class='website' href='http://www.vinoskrobak.cz'>vinoskrobak.cz</a>"
   },   
           {
      "lat": 48.9033438,
      "lng": 16.9482682,
      "name": "Víno Sýkora s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/cejkovicevinosykora720x540.jpg'>",
      "address1":"Čejkovice Příhon 1",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 725 835 659",
      "website": "<a class='website' href='http://www.vinosykora.cz'>vinosykora.cz</a>"
   },   
           {
      "lat": 48.9032005,
      "lng": 16.9414946,
      "name": "Vinařství Libor Veverka",
      "picture": "<img class='pctr' src='../img/cont/cejkoviceveverka720x540.jpg'>",
      "address1":"Městečko 145",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 723 446 526",
      "website": "<a class='website' href='http://www.vinoveverka.cz'>vinoveverka.cz</a>"
   },   
           {
      "lat": 48.9034195,
      "lng": 16.9457024,
      "name": "Templářské sklepy Čejkovice",
      "picture": "<img class='pctr' src='../img/cont/cejkovicetemplar720x540.jpg'>",
      "address1":"Na Bařině 945",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 746 430",
      "website": "<a class='website' href='http://www.templarske-sklepy.cz'>templarske-sklepy.cz</a>"
   },   
           {
      "lat": 48.9037989,
      "lng": 16.9459159,
      "name": "Sklep U Templářských rytířů",
      "picture": "<img class='pctr' src='../img/cont/cejkovicetemplarsklep720x540.jpg'>",
      "address1":"Na Bařině",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 777 566 770",
      "website": "<a class='website' href='http://www.vinarnacejkovice.cz'>vinarnacejkovice.cz</a>"
   },   
           {
      "lat": 48.9028392,
      "lng": 16.9361886,
      "name": "Vinařství Otto Ilčík",
      "picture": "<img class='pctr' src='../img/cont/cejkoviceilcik720x540.gif'>",
      "address1":"Zahradní 761",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 518 362 752",
      "website": "<a class='website' href='http://www.vino-ilcik.cz'>vino-ilcik.cz</a>"
   },   
           {
      "lat": 48.9072755,
      "lng": 16.9424398,
      "name": "Vinařství Jaroslav Pavka",
      "picture": "<img class='pctr' src='../img/cont/cejkovicepavka720x540.jpg'>",
      "address1":"Peckova 29",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 420 604 435 069",
      "website": "<a class='website' href='http://www.vinopavka.cz'>vinopavka.cz</a>"
   },      
           {
      "lat": 48.9018341,
      "lng": 16.94989,
      "name": "Vinařství Hřiba",
      "picture": "<img class='pctr' src='../img/cont/cejkovicehriba720x540.jpg'>",
      "address1":"Příhon 937",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 420 728 020 800",
      "website": "<a class='website' href='http://www.vinohriba.cz'>vinohriba.cz</a>"
   },   
           {
      "lat": 48.9079596,
      "lng": 16.9419395,
      "name": "Vinařství Petr Bíza",
      "picture": "<img class='pctr' src='../img/cont/cejkovicebiza720x540.jpg'>",
      "address1":"Peckova 68",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 420 776 120 439",
      "website": "<a class='website' href='http://www.bizavino.cz'>bizavino.cz</a>"
   },   
           {
      "lat": 48.904886,
      "lng": 16.940341,
      "name": "Vinařství Lukáš Hlinecký",
      "picture": "<img class='pctr' src='../img/cont/cejkovicehlinecky720x540.jpg'>",
      "address1":"Vinařská ulice, sklep č. 4",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 420 728 428 997",
      "website": "<a class='website' href='http://www.vinohlinecky.cz'>vinohlinecky.cz</a>"
   },   
           {
      "lat": 48.9014009,
      "lng": 16.9369579,
      "name": "Vinařství Kočařík",
      "picture": "<img class='pctr' src='../img/cont/cejkovicekocarik720x540.jpg'>",
      "address1":"Zahradní 345",
      "postalCode": "Čejkovice 696 15", // don't insert comma in the last item of each marker
      "phone": "tel: 608 838 502",
      "website": "<a class='website' href='http://www.kocarik.cz'>kocarik.cz</a>"
   },  
           {
      "lat": 48.8444678,
      "lng": 16.6447241,
      "name": "Vinařství Zdeněk Peřina",
      "picture": "<img class='pctr' src='../img/cont/klentniceperina720x540.jpg'>",
      "address1":"Klentnice 194",
      "postalCode": "692 01 Klentnice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 739 349 579",
      "website": "<a class='website' href='http://www.vinoperina.cz'>vinoperina.cz</a>"
   },   
           {
      "lat": 48.8449286,
      "lng": 16.6463548,
      "name": "Vinařství pod Hradem",
      "picture": "<img class='pctr' src='../img/cont/klentnicehrad720x540.jpg'>",
      "address1":"Klentnice 188",
      "postalCode": "692 01 Klentnice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 142 028",
      "website": "<a class='website' href='http://www.vinarstvipodhradem.cz'>vinarstvipodhradem.cz</a>"
   },   
           {
      "lat": 48.8529074,
      "lng": 16.6276756,
      "name": "Vinařství Pergen",
      "picture": "<img class='pctr' src='../img/cont/pernapergen720x540.jpg'>",
      "address1":"Perná 176",
      "postalCode": "691 86 Perná", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 776 105",
      "website": "<a class='website' href='http://www.http://pergen.cz'>http://pergen.cz</a>"
   },   
           {
      "lat": 48.8522845,
      "lng": 16.6284779,
      "name": "Vinařství Milan Kosík",
      "picture": "<img class='pctr' src='../img/cont/pernakosik720x540.jpg'>",
      "address1":"Perná 212",
      "postalCode": "691 86 Perná", // don't insert comma in the last item of each marker
      "phone": "tel: 724 795 964",
      "website": "<a class='website' href='http://www.vino-palava.cz'>vino-palava.cz</a>"
   },   
           {
      "lat": 48.8758301,
      "lng": 16.6240835,
      "name": "Vinařství Červinka",
      "picture": "<img class='pctr' src='../img/cont/vestonicecervinka720x540.jpg'>",
      "address1":"Hlavní 25",
      "postalCode": "691 81 Horní Věstonice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 787 478",
      "website": "<a class='website' href='http://www.vinarstvi-cervinka.cz'>vinarstvi-cervinka.cz</a>"
   },   
           {
      "lat": 48.8736403,
      "lng": 16.6246915,
      "name": "Moravčíkova Vína",
      "picture": "<img class='pctr' src='../img/cont/vestonicemoravcikova720x540.jpg'>",
      "address1":"Věstonice 161",
      "postalCode": "691 81 Horní Věstonice", // don't insert comma in the last item of each marker
      "phone": "tel: 607 115 282",
      "website": "<a class='website' href='http://www.moravcikovavina.cz'>moravcikovavina.cz</a>"
   },   
           {
      "lat": 48.8871039,
      "lng": 16.6542882,
      "name": "Vinárna U Langrů",
      "picture": "<img class='pctr' src='../img/cont/vestonicelangr720x540.jpg'>",
      "address1":"Věstonice 123",
      "postalCode": "691 29 Dolní Věstonice", // don't insert comma in the last item of each marker
      "phone": "tel: 721 123 705",
      "website": "<a class='website' href='http://www.ulangru.cz'>ulangru.cz</a>"
   },   
           {
      "lat": 48.8328215,
      "lng": 16.7435104,
      "name": "Vinařství Nad Sklepy",
      "picture": "<img class='pctr' src='../img/cont/bulharynadsklepy720x540.jpg'>",
      "address1":"Bulhary č.p.210",
      "postalCode": "Bulhary 691 89", // don't insert comma in the last item of each marker
      "phone": "tel: 777 172 297",
      "website": "<a class='website' href='http://www.nadsklepy.cz'>nadsklepy.cz</a>"
   },   
           {
      "lat": 48.8294868,
      "lng": 16.7530698,
      "name": "Vinařství Fuzgrunty",
      "picture": "<img class='pctr' src='../img/cont/bulharyfuzgrunty720x540.jpg'>",
      "address1":"Bulhary 118",
      "postalCode": "691 89 Bulhary", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 542 326",
      "website": "<a class='website' href='http://www.penzionfuzgrunty.cz'>penzionfuzgrunty.cz</a>"
   },   
           {
      "lat": 48.8555561,
      "lng": 16.7729984,
      "name": "Vinařství Přítluky",
      "picture": "<img class='pctr' src='../img/cont/pritlukyvinarstvi720x540.jpg'>",
      "address1":"Horní 114",
      "postalCode": "691 04 Přítluky", // don't insert comma in the last item of each marker
      "phone": "tel: 420 605 366 215",
      "website": "<a class='website' href='http://www.vinarstvipritluky.cz'>vinarstvipritluky.cz</a>"
   },   
           {
      "lat": 48.7745103,
      "lng": 16.7668574,
      "name": "Vinařství Pod Mezů",
      "picture": "<img class='pctr' src='../img/cont/hlohovecmez720x540.jpg'>",
      "address1":"U Sadů",
      "postalCode": "691 43 Hlohovec", // don't insert comma in the last item of each marker
      "phone": "tel: 777 001 628",
      "website": "<a class='website' href='http://www.pod-mezu.business.site'>pod-mezu.business.site</a>"
   },   
           {
      "lat": 48.772773,
      "lng": 16.765698,
      "name": "Vinařství Jaroslav Šlichta",
      "picture": "<img class='pctr' src='../img/cont/hlohovecslichta720x540.jpg'>",
      "address1":"Dědina 439",
      "postalCode": "Hlohovec 691 43", // don't insert comma in the last item of each marker
      "phone": "tel: 723 157 475",
      "website": "<a class='website' href='http://www.vinarstvislichta.cz'>vinarstvislichta.cz</a>"
   },   
           {
      "lat": 48.8730939,
      "lng": 16.6677344,
      "name": "Vinařství Vilém Topolanský",
      "picture": "<img class='pctr' src='../img/cont/pavlovtopolansky720x540.jpg'>",
      "address1":"ul.Česká E79",
      "postalCode": "692 01 Pavlov", // don't insert comma in the last item of each marker
      "phone": "tel: 724 263 561",
      "website": "<a class='website' href='http://www.vinarstvitopolansky.cz'>vinarstvitopolansky.cz</a>"
   },  
        {
      "lat": 48.8062229,
      "lng": 16.6383637,
      "name": "Vinařské centrum Mikulov",
      "picture": "<img class='pctr' src='../img/cont/mikulovcentrum720x540.jpg'>",
      "address1":"Náměstí 199",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 922 600",
      "website": "<a class='website' href='http://www.vinotekamikulov.cz'>vinotekamikulov.cz</a>"
   },   
           {
      "lat": 48.8079355,
      "lng": 16.6384513,
      "name": "Vinotéka Vinařství Volařík",
      "picture": "<img class='pctr' src='../img/cont/mikulovvolarik720x540.jpg'>",
      "address1":"Kostelní náměstí 155/8",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 739 732 705",
      "website": "<a class='website' href='http://www.mhmikulov.cz/cs/vinoteka'>mhmikulov.cz</a>"
   },   
           {
      "lat": 48.8010381,
      "lng": 16.6455067,
      "name": "WINBERG Mikulov s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/mikulovwinberg720x540.jpg'>",
      "address1":"Valtická 841/11",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 722 004 061",
      "website": "<a class='website' href='http://www.winberg.cz'>winberg.cz</a>"
   },   
           {
      "lat": 48.8097373,
      "lng": 16.6346982,
      "name": "Vinařství rodu Pazderků",
      "picture": "<img class='pctr' src='../img/cont/mikulovpazderku720x540.jpg'>",
      "address1":"Brněnská 26",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 567 640",
      "website": "<a class='website' href='http://www.dionysos.breclavsko.com'>dionysos.breclavsko.com</a>"
   },   
           {
      "lat": 48.8139161,
      "lng": 16.6381362,
      "name": "Vinařství Turold Mikulov",
      "picture": "<img class='pctr' src='../img/cont/turoldmikulov720x540.jpg'>",
      "address1":"Gagarinova 83/39",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 777 134 245",
      "website": "<a class='website' href='http://www.turold-mikulov.cz'>turold-mikulov.cz</a>"
   },   
           {
      "lat": 48.8145311,
      "lng": 16.6514019,
      "name": "Víno Lípa Mikulov s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/mikulovlipa720x540.jpg'>",
      "address1":"Žižkova 27",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 608 83 03 55",
      "website": "<a class='website' href='http://www.vinolipa.cz'>vinolipa.cz</a>"
   },   
           {
      "lat": 48.8069713,
      "lng": 16.6414257,
      "name": "Vinárna U Hroznu",
      "picture": "<img class='pctr' src='../img/cont/mikulovuhroznu720x540.jpg'>",
      "address1":"Kamenný řádek 775/3",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 737 857 603",
      "website": "<a class='website' href='http://www.vinarna-uhroznu.wz.cz'>vinarna-uhroznu.wz.cz</a>"
   },   
           {
      "lat": 48.8011703,
      "lng": 16.642819,
      "name": "Vinařství Kosek",
      "picture": "<img class='pctr' src='../img/cont/mikulovkosek720x540.jpg'>",
      "address1":"Vídeňská 43",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 824 298",
      "website": "<a class='website' href='http://www.vinarstvikosek.cz'>vinarstvikosek.cz</a>"
   },   
           {
      "lat": 48.8097619,
      "lng": 16.6370348,
      "name": "Vinařství Solařík",
      "picture": "<img class='pctr' src='../img/cont/mikulovsolarik720x540.jpg'>",
      "address1":"Kozí hrádek 1510/2",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 773 910 062",
      "website": "<a class='website' href='http://www.podkozimhradkem.cz'>podkozimhradkem.cz</a>"
   },   
           {
      "lat": 48.810054,
      "lng": 16.638587,
      "name": "Vinný sklep u Čermáka",
      "picture": "<img class='pctr' src='../img/cont/mikulovcermak720x540.jpg'>",
      "address1":"Kozí Hrádek 768E",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 774 491 232",
      "website": "<a class='website' href='http://www.sklipekmikulov.cz'>sklipekmikulov.cz/</a>"
   },   
           {
      "lat": 48.8122767,
      "lng": 16.6505081,
      "name": "Vinný sklep U Konšelů",
      "picture": "<img class='pctr' src='../img/cont/mikulovukonselu720x540.jpg'>",
      "address1":"Bezručova 543",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 607 537 784",
      "website": "<a class='website' href='http://www.ukonselu.cz'>ukonselu.cz</a>"
   },   
           {
      "lat": 48.8077644,
      "lng": 16.6408885,
      "name": "Vinárna  Galant",
      "picture": "<img class='pctr' src='../img/cont/mikulovgalant720x540.jpg'>",
      "address1":"Mlýnská 2",
      "postalCode": "692 01 Mikulov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 725 422 219",
      "website": "<a class='website' href='http://www.galant.cz'>galant.cz</a>"
   }, 
           {
      "lat": 48.8562803,
      "lng": 16.5909966,
      "name": "Vinařský dvůr U Mlýnků",
      "picture": "<img class='pctr' src='../img/cont/dunaumlynku720x540.jpg'>",
      "address1":"Hlavní 555",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 607 005 060",
      "website": "<a class='website' href='http://www.umlynku.cz'>umlynku.cz</a>"
   },   
           {
      "lat": 48.854411,
      "lng": 16.583103,
      "name": "Vinařství Baláž",
      "picture": "<img class='pctr' src='../img/cont/dunabalaz720x540.jpg'>",
      "address1":"č. p. 654",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 725 043 567",
      "website": "<a class='website' href='http://www.vinarstvibalaz.cz'>vinarstvibalaz.cz</a>"
   },   
           {
      "lat": 48.8573313,
      "lng": 16.5907259,
      "name": "Víno Jarmila",
      "picture": "<img class='pctr' src='../img/cont/dunajarmila720x540.jpg'>",
      "address1":"Kostelní 621",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 775 127 730",
      "website": "<a class='website' href='http://www.vinojarmila.cz'>vinojarmila.cz</a>"
   },   
           {
      "lat": 48.8473574,
      "lng": 16.590701,
      "name": "Vinotéka Dolní Dunajovice",
      "picture": "<img class='pctr' src='../img/cont/dunateka720x540.jpg'>",
      "address1":"Rudé Armády 533",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 725 818 588",
      "website": "<a class='website' href='http://www.marianbester.wixsite.com'>marianbester.wixsite.com</a>"
   },   
           {
      "lat": 48.847085,
      "lng": 16.58993,
      "name": "Vinařství Šoman",
      "picture": "<img class='pctr' src='../img/cont/dunasoman720x540.jpg'>",
      "address1":"Sklepní 321",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 603 285 848",
      "website": "<a class='website' href='http://www.vinarstvisoman.cz'>vinarstvisoman.cz</a>"
   },   
           {
      "lat": 48.8482892,
      "lng": 16.5905664,
      "name": "Vinařství Zámečník",
      "picture": "<img class='pctr' src='../img/cont/dunazamecnik720x540.jpg'>",
      "address1":"Polní 636",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 732 176 690",
      "website": "<a class='website' href='http://www.vinozamecnik.cz'>vinozamecnik.cz</a>"
   },   
           {
      "lat": 48.8500536,
      "lng": 16.5891742,
      "name": "Vinařství Tichý",
      "picture": "<img class='pctr' src='../img/cont/dunatichy720x540.jpg'>",
      "address1":"Sklepní 330",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 723 085 279",
      "website": "<a class='website' href='http://www.vinarstvitichy.cz'>vinarstvitichy.cz</a>"
   },   
           {
      "lat": 48.8573626,
      "lng": 16.5848553,
      "name": "Vinařství Zimní Vrch",
      "picture": "<img class='pctr' src='../img/cont/dunazima720x540.jpg'>",
      "address1":"Hlavní 131",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 720 455 148",
      "website": "<a class='website' href='http://www.zimnivrch.cz'>zimnivrch.cz</a>"
   },   
           {
      "lat": 48.8479212,
      "lng": 16.5908709,
      "name": "Rodinné vinařství Matula",
      "picture": "<img class='pctr' src='../img/cont/dunamatula720x540.jpg'>",
      "address1":"ul. Rudé Armády",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 226 368",
      "website": "<a class='website' href='http://www.vino-matula.cz'>vino-matula.cz</a>"
   },   
           {
      "lat": 48.8479264,
      "lng": 16.5802053,
      "name": "Vinařství Mikrosvín Mikulov",
      "picture": "<img class='pctr' src='../img/cont/dunamikrosovin720x540.jpg'>",
      "address1":"Sklepní 657",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 777 454 900",
      "website": "<a class='website' href='http://www.mikrosvin.cz'>mikrosvin.cz</a>"
   },   
           {
      "lat": 48.8500937,
      "lng": 16.5896511,
      "name": "Vinařství Holec",
      "picture": "<img class='pctr' src='../img/cont/dunaholec720x540.jpg'>",
      "address1":"Sklepní 581",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 733 196 952",
      "website": "<a class='website' href='http://www.vinoholec.cz'>vinoholec.cz</a>"
   },   
           {
      "lat": 48.8570207,
      "lng": 16.5866439,
      "name": "Sklípek u Kozlíků",
      "picture": "<img class='pctr' src='../img/cont/dunakozel720x540.jpg'>",
      "address1":"U Pekárny 680",
      "postalCode": "691 85 Dolní Dunajovice", // don't insert comma in the last item of each marker
      "phone": "tel: 724 669 492",
      "website": "<a class='website' href='http://www.sklipekukozliku.cz'>sklipekukozliku.cz</a>"
   }, 
           {
      "lat": 48.8178584,
      "lng": 16.5671239,
      "name": "Vinařství Vavříček",
      "picture": "<img class='pctr' src='../img/cont/brezivavricek720x540.jpg'>",
      "address1":"U hřiště 604",
      "postalCode": "691 81 Březí u Mikulova", // don't insert comma in the last item of each marker
      "phone": "tel: 731 463 930",
      "website": "<a class='website' href='http://www.vavricek.eu'>vavricek.eu</a>"
   },   
           {
      "lat": 48.82103,
      "lng": 16.5682141,
      "name": "Vinařský dům SH Březí",
      "picture": "<img class='pctr' src='../img/cont/brezish720x540.jpg'>",
      "address1":"Na Štěrkách 548",
      "postalCode": "691 81 Březí u Mikulova", // don't insert comma in the last item of each marker
      "phone": "tel: 420 737 429 991",
      "website": "<a class='website' href='http://www.vinarsky-dum-sh.cz'>vinarsky-dum-sh.cz</a>"
   },   
           {
      "lat": 48.8192683,
      "lng": 16.5605227,
      "name": "VÍNO D.K.S. spol. s r.o.",
      "picture": "<img class='pctr' src='../img/cont/brezikern720x540.jpg'>",
      "address1":"Sklepní 546",
      "postalCode": "691 81 Březí u Mikulova", // don't insert comma in the last item of each marker
      "phone": "tel: 736 624 086",
      "website": "<a class='website' href='http://www.vinarstvikern.cz'>vinarstvikern.cz</a>"
   },   
           {
      "lat": 48.81982,
      "lng": 16.5615083,
      "name": "Vinařství Kňourek",
      "picture": "<img class='pctr' src='../img/cont/breziknourek720x540.jpg'>",
      "address1":"Sklepní 562",
      "postalCode": "691 81 Březí u Mikulova", // don't insert comma in the last item of each marker
      "phone": "tel: 420 721 744 231",
      "website": "<a class='website' href='http://www.vinarstvi-knourek.cz'>vinarstvi-knourek.cz</a>"
   },     
           {
      "lat": 48.8334546,
      "lng": 16.6203462,
      "name": "Vinařství Tanzberg",
      "picture": "<img class='pctr' src='../img/cont/bavorytanzberg720x540.jpg'>",
      "address1":"Bavory 132",
      "postalCode": "692 01 Bavory", // don't insert comma in the last item of each marker
      "phone": "tel: 606 294 910",
      "website": "<a class='website' href='http://www.tanzberg.cz'>tanzberg.cz</a>"
   },   
           {
      "lat": 48.8336598,
      "lng": 16.6210317,
      "name": "Degustarium Bavory",
      "picture": "<img class='pctr' src='../img/cont/bavorydegustarium720x540.jpg'>",
      "address1":"Bavory č.p. 94",
      "postalCode": "692 01 Bavory", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 677 644",
      "website": "<a class='website' href='http://www.degustarium.cz'>degustarium.cz</a>"
   },   
           {
      "lat": 48.835377,
      "lng": 16.624101,
      "name": "Gala Vinařství",
      "picture": "<img class='pctr' src='../img/cont/bavorygala720x540.jpg'>",
      "address1":"Bavory 158",
      "postalCode": "692 01 Bavory", // don't insert comma in the last item of each marker
      "phone": "tel: 603 570 013",
      "website": "<a class='website' href='http://www.galavinarstvi.cz'>galavinarstvi.cz</a>"
   },   
           {
      "lat": 48.8365484,
      "lng": 16.6239326,
      "name": "Vinařství Kořenek",
      "picture": "<img class='pctr' src='../img/cont/bavorykorenek720x540.jpg'>",
      "address1":"Bavory 57",
      "postalCode": "692 01 Bavory", // don't insert comma in the last item of each marker
      "phone": "tel: 602 567 611",
      "website": "<a class='website' href='http://www.vinarstvikorenek.cz'>vinarstvikorenek.cz</a>"
   }, 
           {
      "lat": 48.8354006,
      "lng": 16.6232215,
      "name": "Vinařství Drmola",
      "picture": "<img class='pctr' src='../img/cont/bavorydrmola720x540.jpg'>",
      "address1":"Bavory 46",
      "postalCode": "692 01 Bavory", // don't insert comma in the last item of each marker
      "phone": "tel: 420 736 487 749",
      "website": "<a class='website' href='http://www.vinarstvidrmola.cz'>vinarstvidrmola.cz</a>"
   },   
           {
      "lat": 48.8334023,
      "lng": 16.6223522,
      "name": "Apartmány Bavory",
      "picture": "<img class='pctr' src='../img/cont/bavorypardof720x540.jpg'>",
      "address1":"Bavory 138",
      "postalCode": "692 01 Bavory", // don't insert comma in the last item of each marker
      "phone": "tel: 737 246 500",
      "website": "<a class='website' href='http://www.degustacni-salon.cz'>degustacni-salon.cz</a>"
   },   
           {
      "lat": 48.7992916,
      "lng": 16.685212,
      "name": "Vinařství Vican",
      "picture": "<img class='pctr' src='../img/cont/mikulovvican720x540.jpg'>",
      "address1":"Mušlov 30",
      "postalCode": "Mikulov 692 01", // don't insert comma in the last item of each marker
      "phone": "tel: 420 724 306 029",
      "website": "<a class='website' href='http://www.vican.wine'>vican.wine</a>"
   },   
           {
      "lat": 48.7442284,
      "lng": 16.7025788,
      "name": "Vinařství Ing. Valentová",
      "picture": "<img class='pctr' src='../img/cont/uvalydaniela720x540.jpg'>",
      "address1":"Úvaly 77",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 774 111 776",
      "website": "<a class='website' href='http://www.sklepuvaly.cz'>sklepuvaly.cz</a>"
   },  
           {
      "lat": 48.7802454,
      "lng": 16.6870252,
      "name": "Víno Filip",
      "picture": "<img class='pctr' src='../img/cont/sedlecfilip720x540.jpg'>",
      "address1":"Sedlec 66",
      "postalCode": "69121 Sedlec u Mikulova", // don't insert comma in the last item of each marker
      "phone": "tel: 420 775 014 124",
      "website": "<a class='website' href='http://www.vinofilip.cz'>vinofilip.cz</a>"
   },   
           {
      "lat": 48.7808299,
      "lng": 16.7054529,
      "name": "ZD Sedlec u Mikulova",
      "picture": "<img class='pctr' src='../img/cont/sedlecvina720x540.jpg'>",
      "address1":"Sedlec 308",
      "postalCode": "69121 Sedlec u Mikulova", // don't insert comma in the last item of each marker
      "phone": "tel: 777 719 117",
      "website": "<a class='website' href='http://www.sedleckavina.cz'>sedleckavina.cz</a>"
   },   
           {
      "lat": 48.7811272,
      "lng": 16.6978794,
      "name": "Vinařský dům Sedlec",
      "picture": "<img class='pctr' src='../img/cont/sedlecdum720x540.jpg'>",
      "address1":"Sedlec 162",
      "postalCode": "69121 Sedlec u Mikulova", // don't insert comma in the last item of each marker
      "phone": "tel: 420 724 210 502",
      "website": "<a class='website' href='http://www.vinarskydumsedlec.cz'>vinarskydumsedlec.cz</a>"
   },   
           {
      "lat": 48.780592,
      "lng": 16.694991,
      "name": "Penzion Nad sklepem",
      "picture": "<img class='pctr' src='../img/cont/sedlenadsklepem720x540.jpg'>",
      "address1":"Sedlec 319",
      "postalCode": "69121 Sedlec u Mikulova", // don't insert comma in the last item of each marker
      "phone": "tel: 420 605 211 299",
      "website": "<a class='website' href='http://www.nadsklepem.cz'>nadsklepem.cz</a>"
   },        
           {
      "lat": 48.8735336,
      "lng": 16.6679401,
      "name": "Vinařství Antoš",
      "picture": "<img class='pctr' src='../img/cont/pavlovantos720x540.jpg'>",
      "address1":"Česká 91",
      "postalCode": "692 01 Pavlov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 739 429 431",
      "website": "<a class='website' href='http://www.vinarstviantos.cz'>vinarstviantos.cz</a>"
   },   
           {
      "lat": 48.8728729,
      "lng": 16.6669798,
      "name": "Vinařství Garčic",
      "picture": "<img class='pctr' src='../img/cont/pavlovgarcic720x540.jpg'>",
      "address1":"Vinařská 237",
      "postalCode": "692 01 Pavlov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 728 746 500",
      "website": "<a class='website' href='http://www.vinarstvigarcic.cz'>vinarstvigarcic.cz</a>"
   },   
           {
      "lat": 48.8713662,
      "lng": 16.6663138,
      "name": "Vinařství Jiří Šilinek",
      "picture": "<img class='pctr' src='../img/cont/silinkovi720x540.jpg'>",
      "address1":"Rudolfa Gajdoše 192",
      "postalCode": "692 01 Pavlov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 790 784",
      "website": "<a class='website' href='http://www.silinek.eu'>silinek.eu</a>"
   },   
           {
      "lat": 48.868701,
      "lng": 16.667082,
      "name": "Vinařství Reisten",
      "picture": "<img class='pctr' src='../img/cont/pavlovreisten720x540.jpg'>",
      "address1":"Zahradní 288",
      "postalCode": "692 01 Pavlov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 727 963 406 ",
      "website": "<a class='website' href='http://www.reisten.net'>reisten.net</a>"
   },   
           {
      "lat": 48.8743759,
      "lng": 16.6688446,
      "name": "Vinařství NEPRAŠ & Co.",
      "picture": "<img class='pctr' src='../img/cont/pavlovnepras720x540.jpg'>",
      "address1":"Česká 187",
      "postalCode": "692 01 Pavlov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 775 605 783",
      "website": "<a class='website' href='http://www.vinarstvinepras.cz'>vinarstvinepras.cz</a>"
   },  
           {
      "lat": 48.8753922,
      "lng": 16.6671744,
      "name": "Vinařství Paulus",
      "picture": "<img class='pctr' src='../img/cont/pavlovpaulus720x540.jpg'>",
      "address1":"Na Cimbuří 159",
      "postalCode": "692 01 Pavlov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 775 26 20 08",
      "website": "<a class='website' href='http://www.vinarstvipaulus.cz'>vinarstvipaulus.cz</a>"
   },   
           {
      "lat": 48.875577,
      "lng": 16.6688481,
      "name": "Pálavská galerie vín U Venuše",
      "picture": "<img class='pctr' src='../img/cont/pavlovuvenuse720x540.jpg'>",
      "address1":"Česká ulice 252",
      "postalCode": "692 01 Pavlov", // don't insert comma in the last item of each marker
      "phone": "tel: 420 733 644 183",
      "website": "<a class='website' href='http://www.palavskagalerievin.cz'>palavskagalerievin.cz</a>"
   },    
           {
      "lat": 48.8293031,
      "lng": 16.8459845,
      "name": "Vinotéka U soudku",
      "picture": "<img class='pctr' src='../img/cont/podivinusoudku720x540.jpg'>",
      "address1":" Kopce 869/10",
      "postalCode": "691 45 Podivín", // don't insert comma in the last item of each marker
      "phone": "tel: 420 731 780 187",
      "website": "<a class='website' href='http://www.vinotekapodivin.cz'>vinotekapodivin.cz</a>"
   }, 
           {
      "lat": 48.8274863,
      "lng": 16.8466701,
      "name": "Vinařství Radim Mildner",
      "picture": "<img class='pctr' src='../img/cont/podivinmildner720x540.jpg'>",
      "address1":"Dolní Valy 204/1",
      "postalCode": "691 45 Podivín", // don't insert comma in the last item of each marker
      "phone": "tel: 603 343 139",
      "website": "<a class='website' href='http://www.vinomildner.cz'>vinomildner.cz</a>"
   },   
           {
      "lat": 48.8274705,
      "lng": 16.8472281,
      "name": "Sklepní vinárna U Františka",
      "picture": "<img class='pctr' src='../img/cont/podivinufrantiska720x540.jpg'>",
      "address1":"Komenského 264/20",
      "postalCode": "691 45 Podivín", // don't insert comma in the last item of each marker
      "phone": "tel: 606 796 979",
      "website": "<a class='website' href='http://www.ufrantiska.cz'>ufrantiska.cz</a>"
   },   
           {
      "lat": 48.8364211,
      "lng": 16.8566844,
      "name": "Vinařství Hřebačka",
      "picture": "<img class='pctr' src='../img/cont/podivinhrebacka720x540.jpg'>",
      "address1":"Za Drahou",
      "postalCode": "691 45 Podivín", // don't insert comma in the last item of each marker
      "phone": "tel: 602 595 930",
      "website": "<a class='website' href='http://www.vinarstvihrebacka.cz'>vinarstvihrebacka.cz</a>"
   }, 
           {
      "lat": 48.8584415,
      "lng": 16.8085998,
      "name": "Vinařství Lukeš",
      "picture": "<img class='pctr' src='../img/cont/rakvicelukes720x540.jpg'>",
      "address1":"Krátká 159",
      "postalCode": "691 03 Rakvice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 608 625 063",
      "website": "<a class='website' href='http://www.vinarstvilukes.cz'>vinarstvilukes.cz</a>"
   },   
           {
      "lat": 48.8549095,
      "lng": 16.809426,
      "name": "Vinotéka Rakvice",
      "picture": "<img class='pctr' src='../img/cont/rakvicemichlovsky720x540.jpg'>",
      "address1":"Luční 858",
      "postalCode": "691 03 Rakvice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 569 602",
      "website": "<a class='website' href='http://www.michlovsky.com'>michlovsky.com</a>"
   },   
           {
      "lat": 48.8561651,
      "lng": 16.8140702,
      "name": "Réva Rakvice",
      "picture": "<img class='pctr' src='../img/cont/rakvicereva720x540.jpg'>",
      "address1":"Družstevní 854",
      "postalCode": "691 03 Rakvice", // don't insert comma in the last item of each marker
      "phone": "tel: 519 349 216",
      "website": "<a class='website' href='http://www.revarakvice.cz'>revarakvice.cz</a>"
   },   
           {
      "lat": 48.865202,
      "lng": 16.8157259,
      "name": "Vinařský dům Dominant",
      "picture": "<img class='pctr' src='../img/cont/rakvicevino720x540.jpg'>",
      "address1":"Na Kopcech 912",
      "postalCode": "691 03 Rakvice", // don't insert comma in the last item of each marker
      "phone": "tel: 733 710 708",
      "website": "<a class='website' href='http://www.vinarsky-dum-dominant.cz'>vinarsky-dum-dominant.cz</a>"
   }, 
           {
      "lat": 48.8579412,
      "lng": 16.8083918,
      "name": "Vinařství Nečas",
      "picture": "<img class='pctr' src='../img/cont/rakvicenecas720x540.jpg'>",
      "address1":"Nádražní 409",
      "postalCode": "691 03 Rakvice", // don't insert comma in the last item of each marker
      "phone": "tel: 607 809 264",
      "website": "<a class='website' href='http://www.vinarstvinecas.cz'>vinarstvinecas.cz</a>"
   },   
           {
      "lat": 48.851633,
      "lng": 16.8218547,
      "name": "Vinařství Pfeffer",
      "picture": "<img class='pctr' src='../img/cont/rakvicepffer720x540.jpg'>",
      "address1":"Dolní 922",
      "postalCode": "691 03 Rakvice", // don't insert comma in the last item of each marker
      "phone": "tel: 774 161 078",
      "website": "<a class='website' href='http://www.vinarstvi-pfeffer.cz'>vinarstvi-pfeffer.cz</a>"
   },   
           {
      "lat": 48.8584017,
      "lng": 16.8063933,
      "name": "Vinařství Horáček",
      "picture": "<img class='pctr' src='../img/cont/rakvicehoracek720x540.jpg'>",
      "address1":"ul. Horní sklep č.17",
      "postalCode": "691 03 Rakvice", // don't insert comma in the last item of each marker
      "phone": "tel:  737 309 893",
      "website": "<a class='website' href='http://www.vinarstvihoracek.cz'>vinarstvihoracek.cz</a>"
   },   
           {
      "lat": 48.8576214,
      "lng": 16.8228991,
      "name": "Rodinné vinařství Gréger",
      "picture": "<img class='pctr' src='../img/cont/rakvicegregr720x540.jpg'>",
      "address1":"Nová 710",
      "postalCode": "691 03 Rakvice", // don't insert comma in the last item of each marker
      "phone": "tel: 607 533 167",
      "website": "<a class='website' href='http://www.vinarstvigreger.cz'>vinarstvigreger.cz</a>"
   },       
           {
      "lat": 48.737275,
      "lng": 16.74897,
      "name": "Vinařství Dwořáček Valtice",
      "picture": "<img class='pctr' src='../img/cont/valticedvoracek720x540.jpg'>",
      "address1":"Růžová 1155",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 663 873",
      "website": "<a class='website' href='http://www.dworacek.cz'>dworacek.cz</a>"
   },   
           {
      "lat": 48.7391876,
      "lng": 16.749984,
      "name": "Vinařská stodola CHÂTEAU VALTICE",
      "picture": "<img class='pctr' src='../img/cont/valticestodola720x540.JPG'>",
      "address1":"Vinařská 407",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 309 959",
      "website": "<a class='website' href='http://www.vsvaltice.cz/Vinarska-stodola'>vsvaltice.cz</a>"
   },   
           {
      "lat": 48.739748,
      "lng": 16.750182,
      "name": "Valtické podzemí",
      "picture": "<img class='pctr' src='../img/cont/valtickepodzemi720x540.jpg'>",
      "address1":"Vinařská č.ev. 47",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 723 600 423",
      "website": "<a class='website' href='http://www.valtickepodzemi.cz'>valtickepodzemi.cz</a>"
   },   
           {
      "lat": 48.7396201,
      "lng": 16.7554235,
      "name": "Národní vinařské centrum",
      "picture": "<img class='pctr' src='../img/cont/valticesalon720x540.jpg'>",
      "address1":"Zámek 1",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 606 028 574",
      "website": "<a class='website' href='http://www.http://www.vinarskecentrum.cz/salon-vin/oteviraci-doba-programy/'>vinarskecentrum.cz</a>"
   },   
           {
      "lat": 48.7424177,
      "lng": 16.7592056,
      "name": "Vinařství pod Zámkem Valtice",
      "picture": "<img class='pctr' src='../img/cont/valticepodzamek720x540.jpg'>",
      "address1":"Břeclavská 1100",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 725 990 329",
      "website": "<a class='website' href='http://www.vinarstvipodzamkem.cz'>vinarstvipodzamkem.cz</a>"
   },   
           {
      "lat": 48.7419893,
      "lng": 16.756386,
      "name": "Vinotéka U Sommeliera",
      "picture": "<img class='pctr' src='../img/cont/valticesommeliera720x540.jpg'>",
      "address1":"nám. Svobody 14",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 777 075 606",
      "website": "<a class='website' href='http://www.vinazvaltic.cz'>vinazvaltic.cz</a>"
   },   
           {
      "lat": 48.7419055,
      "lng": 16.7560033,
      "name": "Vinařský dům Valtice",
      "picture": "<img class='pctr' src='../img/cont/valticebonum720x540.jpg'>",
      "address1":"nám. Svobody 16",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 777 743 492",
      "website": "<a class='website' href='http://www.vinumbonum.cz'>vinumbonum.cz</a>"
   },   
           {
      "lat": 48.7401151,
      "lng": 16.7509385,
      "name": "Školní vinotéka Rolnička",
      "picture": "<img class='pctr' src='../img/cont/valticerolnicka720x540.jpg'>",
      "address1":"Sobotní 221",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 777 101 842",
      "website": "<a class='website' href='http://www.svisv.cz/skolni-prodejna'>svisv.cz</a>"
   },
             {
      "lat": 48.7397076,
      "lng": 16.7498097,
      "name": "Vinný sklep U Kazíků",
      "picture": "<img class='pctr' src='../img/cont/valticeukaziku720x540.jpg'>",
      "address1":"Vinařská 79",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 728 082 007",
      "website": "<a class='website' href='http://www.sklep.ukaziku.cz'>sklep.ukaziku.cz</a>"
   },   
           {
      "lat": 48.742198,
      "lng": 16.765313,
      "name": "Vinný Sklípek Martin Štěpánek",
      "picture": "<img class='pctr' src='../img/cont/valticestepan720x540.jpg'>",
      "address1":"Josefská 122",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 607 618 783",
      "website": "<a class='website' href='http://www.sklipekvaltice.cz'>sklipekvaltice.cz</a>"
   },   
           {
      "lat": 48.7427358,
      "lng": 16.7692665,
      "name": "Vinotéka Bilkovič",
      "picture": "<img class='pctr' src='../img/cont/valticenikovic720x540.JPG'>",
      "address1":"Za Tesárnou 779",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 607 769 159",
      "website": "<a class='website' href='http://www.penzion-sklep.webnode.cz/vinny-sklep'>penzion-sklep.webnode.cz</a>"
   },   
           {
      "lat": 48.7412034,
      "lng": 16.7551406,
      "name": "Valtická vinárna",
      "picture": "<img class='pctr' src='../img/cont/valticevinarna720x540.jpg'>",
      "address1":"Náměstí Svobody 22",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 724 484 069",
      "website": "<a class='website' href='http://www.vinnysklep-valtice.cz'>vinnysklep-valtice.cz</a>"
   },   
           {
      "lat": 48.7421797,
      "lng": 16.7568335,
      "name": "Vinotéka Procházka Valtice",
      "picture": "<img class='pctr' src='../img/cont/valticeprochazka720x540.jpg'>",
      "address1":"nám. Svobody 1111",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 731 134 443",
      "website": "<a class='website' href='http://www.valtickavina.cz'>valtickavina.cz</a>"
   },   
           {
      "lat": 48.7497649,
      "lng": 16.7433412,
      "name": "MORAVÍNO s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/valticemoravino720x540.jpg'>",
      "address1":"Mikulovská 176",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 505 207",
      "website": "<a class='website' href='http://www.moravino.cz'>moravino.cz</a>"
   },   
           {
      "lat": 48.7421515,
      "lng": 16.7520297,
      "name": "Vinařství ČERNÝ Valtice s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/valticecerny720x540.jpg'>",
      "address1":"Střelecká 061",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 580 059",
      "website": "<a class='website' href='http://www.vinarstvicerny.cz'>vinarstvicerny.cz</a>"
   },   
           {
      "lat": 48.738188,
      "lng": 16.7513172,
      "name": "Vinný sklep René Kolář",
      "picture": "<img class='pctr' src='../img/cont/valticekolar720x540.jpg'>",
      "address1":"Pod Parkem 13",
      "postalCode": "691 42 Valtice", // don't insert comma in the last item of each marker
      "phone": "tel: 777 072 879",
      "website": "<a class='website' href='http://www.vinnysklep.cz24.cz'>vinnysklep.cz24.cz</a>"
   },  
           {
      "lat": 48.9034981,
      "lng": 16.8160268,
      "name": "Vinařství V & M Zborovský",
      "picture": "<img class='pctr' src='../img/cont/pavlovicezborovsky720x540.jpg'>",
      "address1":"Dlouhá 2",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 731 141 878",
      "website": "<a class='website' href='http://www.vinarstvizborovsky.cz'>vinarstvizborovsky.cz</a>"
   },   
           {
      "lat": 48.8975388,
      "lng": 16.8206774,
      "name": "Vinium a.s.",
      "picture": "<img class='pctr' src='../img/cont/pavlovicevinium720x540.jpg'>",
      "address1":"Hlavní 666",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 519 403 111",
      "website": "<a class='website' href='http://www.vinium.cz'>vinium.cz</a>"
   }, 
           {
      "lat": 48.9147182,
      "lng": 16.8560201,
      "name": "Vinařství SPRINGER",
      "picture": "<img class='pctr' src='../img/cont/boreticespringer720x540.jpg'>",
      "address1":"Bořetice 402",
      "postalCode": "691 08 Bořetice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 702 971",
      "website": "<a class='website' href='http://www.springer.cz'>springer.cz</a>"
   },   
           {
      "lat": 48.9194405,
      "lng": 16.8453944,
      "name": "Rodinné vinařství Jedlička",
      "picture": "<img class='pctr' src='../img/cont/boreticejedlicka720x540.jpg'>",
      "address1":"Bořetice 511",
      "postalCode": "691 08 Bořetice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 519 430 107",
      "website": "<a class='website' href='http://www.vinoboretice.cz'>vinoboretice.cz</a>"
   },   
           {
      "lat": 48.920014,
      "lng": 16.8476,
      "name": "Rodinné vinařství Pod horou",
      "picture": "<img class='pctr' src='../img/cont/boreticepodhorou720x540.jpg'>",
      "address1":"Kraví hora 533",
      "postalCode": "691 08 Bořetice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 721 375 999",
      "website": "<a class='website' href='http://www.vinozboretic.cz'>vinozboretic.cz</a>"
   },   
           {
      "lat": 48.920836,
      "lng": 16.849428,
      "name": "Vinařství Baraque",
      "picture": "<img class='pctr' src='../img/cont/boreticebaraque720x540.jpg'>",
      "address1":"Kraví hora ev.č.175",
      "postalCode": "691 08 Bořetice", // don't insert comma in the last item of each marker
      "phone": "tel: 776 823 694",
      "website": "<a class='website' href='http://www.vinarstvibaraque.cz'>vinarstvibaraque.cz</a>"
   },   
           {
      "lat": 48.9206134,
      "lng": 16.84858,
      "name": "AB Vinný sklípek",
      "picture": "<img class='pctr' src='../img/cont/boreticeab720x540.jpg'>",
      "address1":"Kraví hora sklep č.56",
      "postalCode": "691 08 Bořetice", // don't insert comma in the last item of each marker
      "phone": "tel: 608 129 062",
      "website": "<a class='website' href='http://www.absklipek.cz'>absklipek.cz</a>"
   },   
           {
      "lat": 48.9206972,
      "lng": 16.8491248,
      "name": "Vinný sklep U Surmanů",
      "picture": "<img class='pctr' src='../img/cont/boreticesurmamaovi720x540.jpg'>",
      "address1":"Kraví hora č.ev 189",
      "postalCode": "691 08 Bořetice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 690 699",
      "website": "<a class='website' href='http://www.surmanovi.cz'>surmanovi.cz</a>"
   },   
           {
      "lat": 48.9123273,
      "lng": 16.855974,
      "name": "Vinařství Chrástek",
      "picture": "<img class='pctr' src='../img/cont/boreticechrastek720x540.jpg'>",
      "address1":"Bořetice 476",
      "postalCode": "691 08 Bořetice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 720 448 139",
      "website": "<a class='website' href='http://www.vinochrastek.cz'>vinochrastek.cz</a>"
   },   
           {
      "lat": 48.9155986,
      "lng": 16.8503844,
      "name": "Vinařství Habřina",
      "picture": "<img class='pctr' src='../img/cont/boreticehabrina720x540.jpg'>",
      "address1":"Bořetice 161",
      "postalCode": "691 08 Bořetice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 724 110 863",
      "website": "<a class='website' href='http://www.vino-habrina.cz'>vino-habrina.cz</a>"
   },     
           {
      "lat": 48.8973322,
      "lng": 16.8184691,
      "name": "Vinařství Baloun",
      "picture": "<img class='pctr' src='../img/cont/pavlovicebaloun720x540.jpg'>",
      "address1":"Nádražní 1170/4",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 519 428 236",
      "website": "<a class='website' href='http://www.baloun.cz'>baloun.cz</a>"
   },   
           {
      "lat": 48.896246,
      "lng": 16.819993,
      "name": "Vinné sklepy Františka Lotrinského",
      "picture": "<img class='pctr' src='../img/cont/pavlovicelotrin720x540.jpg'>",
      "address1":"Nádražní 1/1",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 736 401",
      "website": "<a class='website' href='http://www.lotrinskesklepy.cz'>lotrinskesklepy.cz</a>"
   },   
           {
      "lat": 48.9059907,
      "lng": 16.8195397,
      "name": "Vinařství Mikulica",
      "picture": "<img class='pctr' src='../img/cont/pavlovicemikulica720x540.jpg'>",
      "address1":"Hlavní 141/116",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 721 779 571",
      "website": "<a class='website' href='http://www.vinarstvimikulica.cz'>vinarstvimikulica.cz</a>"
   },   
           {
      "lat": 48.9058578,
      "lng": 16.8138422,
      "name": "Vinařství Buchtovi",
      "picture": "<img class='pctr' src='../img/cont/pavlovicebuchtovi720x540.jpg'>",
      "address1":"Ořechová 218/23",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 605 242 291",
      "website": "<a class='website' href='http://www.vinobuchtovi.cz'>vinobuchtovi.cz</a>"
   },   
           {
      "lat": 48.9060272,
      "lng": 16.8126899,
      "name": "Vinařství Michna",
      "picture": "<img class='pctr' src='../img/cont/pavlovicemichna720x540.jpg'>",
      "address1":"Ořechová 30",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 724 060 138",
      "website": "<a class='website' href='http://www.michna.cz'>michna.cz</a>"
   },   
           {
      "lat": 48.9058982,
      "lng": 16.8107874,
      "name": "Vinařství Valovi",
      "picture": "<img class='pctr' src='../img/cont/pavlovicevala720x540.jpg'>",
      "address1":"Zelnice 69",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 731 934 141",
      "website": "<a class='website' href='http://www.vinarstvi-valovi.cz'>vinarstvi-valovi.cz</a>"
   },   
           {
      "lat": 48.907606,
      "lng": 16.81477,
      "name": "Vinařství Lacina",
      "picture": "<img class='pctr' src='../img/cont/pavlovicelacina720x540.jpg'>",
      "address1":"V Údolí 154",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel:  774 066 650",
      "website": "<a class='website' href='http://www.vinarstvilacina.cz'>vinarstvilacina.cz</a>"
   },   
           {
      "lat": 48.9069199,
      "lng": 16.8164903,
      "name": "Vinařství Fůkalovi",
      "picture": "<img class='pctr' src='../img/cont/pavlovicefukalovi720x540.jpg'>",
      "address1":"Tábor 7",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 607 102 545",
      "website": "<a class='website' href='http://www.vinarstvifukalovi.cz'>vinarstvifukalovi.cz</a>"
   },   
           {
      "lat": 48.909579,
      "lng": 16.8158519,
      "name": "Vinařství Michal Kosík ",
      "picture": "<img class='pctr' src='../img/cont/pavlovicekosik720x540.jpg'>",
      "address1":"Pod břehy 46 ",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 604 431 651",
      "website": "<a class='website' href='http://www.vinokosik.euweb.cz'>vinokosik.euweb.cz</a>"
   },   
           {
      "lat": 48.907891,
      "lng": 16.8231579,
      "name": "Penzión André",
      "picture": "<img class='pctr' src='../img/cont/pavloviceslechtitel720x540.jpg'>",
      "address1":"Pod Břehy 565/54",
      "postalCode": "691 06 Velké Pavlovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 777 468 894",
      "website": "<a class='website' href='http://www.slechtitelka.cz'>slechtitelka.cz</a>"
   },   
           {
      "lat": 48.8478503,
      "lng": 16.8982709,
      "name": "Vinařství Kubík",
      "picture": "<img class='pctr' src='../img/cont/bilovicekubik720x540.jpg'>",
      "address1":"Ve Dvoře 671",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 608 830 416",
      "website": "<a class='website' href='http://www.vinarstvikubik.cz'>vinarstvikubik.cz</a>"
   },   
           {
      "lat": 48.858493,
      "lng": 16.898964,
      "name": "Milan Nestarec",
      "picture": "<img class='pctr' src='../img/cont/bilovicenestarec720x540.jpg'>",
      "address1":"Pod Předníma 350",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 775 072 624",
      "website": "<a class='website' href='http://www.nestarec.cz'>nestarec.cz</a>"
   },   
           {
      "lat": 48.857437,
      "lng": 16.902181,
      "name": "Osička spol. s r.o.",
      "picture": "<img class='pctr' src='../img/cont/biloviceosicka720x540.jpg'>",
      "address1":"Simering 388",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 608 654 609",
      "website": "<a class='website' href='http://www.vinarstviosicka.cz'>vinarstviosicka.cz</a>"
   },   
           {
      "lat": 48.85824,
      "lng": 16.90392,
      "name": "Rodinné vinařství Spěvák s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/bilovicespevak720x540.jpg'>",
      "address1":"U Křástelky 658",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 608 608 228",
      "website": "<a class='website' href='http://www.vinarstvi-spevak.cz'>vinarstvi-spevak.cz</a>"
   },   
           {
      "lat": 48.8572247,
      "lng": 16.8993615,
      "name": "Vinařství VINOVIT",
      "picture": "<img class='pctr' src='../img/cont/bilovicevinovit720x540.jpg'>",
      "address1":"Pod předníma 330",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 775 158 129",
      "website": "<a class='website' href='http://www.vinovit.cz'>vinovit.cz</a>"
   },   
           {
      "lat": 48.857617,
      "lng": 16.899554,
      "name": "Vinařství Zapletal",
      "picture": "<img class='pctr' src='../img/cont/bilovicezapletal720x540.jpg'>",
      "address1":"Pod předníma 334",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 595 979",
      "website": "<a class='website' href='http://www.vinarstvizapletal.cz'>vinarstvizapletal.cz</a>"
   },   
           {
      "lat": 48.858014,
      "lng": 16.900932,
      "name": "Vinařství Zbyněk Osička",
      "picture": "<img class='pctr' src='../img/cont/biloviceosickaml720x540.jpg'>",
      "address1":"Simering 633",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 723 107 802",
      "website": "<a class='website' href='http://www.osicka.com'>osicka.com</a>"
   },   
           {
      "lat": 48.8588947,
      "lng": 16.8983519,
      "name": "Vinařství David Osička",
      "picture": "<img class='pctr' src='../img/cont/biloviceosckadavid720x540.jpg'>",
      "address1":"Čejkovská 548",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 606 179 265",
      "website": "<a class='website' href='http://www.davidosicka.cz'>davidosicka.cz</a>"
   },
           {
      "lat": 48.862413,
      "lng": 16.8917098,
      "name": "Vinařství Púrynky",
      "picture": "<img class='pctr' src='../img/cont/bilovicepurynky720x540.jpg'>",
      "address1":"Púrynky 562",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 665 119",
      "website": "<a class='website' href='http://www.vinarstvipurynky.cz'>vinarstvipurynky.cz</a>"
   },   
           {
      "lat": 48.86388,
      "lng": 16.89369,
      "name": "Vinný sklípek Na Vyhlídce",
      "picture": "<img class='pctr' src='../img/cont/bilovicehromek720x540.jpg'>",
      "address1":"Na Vyhlídce 545",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 732 793 089",
      "website": "<a class='website' href='http://www.sklipekmorava.cz'>sklipekmorava.cz</a>"
   },   
           {
      "lat": 48.8582164,
      "lng": 16.9074836,
      "name": "Lanžhotský Erik",
      "picture": "<img class='pctr' src='../img/cont/bilovicelanzhotsky720x540.jpg'>",
      "address1":"Portugalová 139",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 776 683 567",
      "website": "<a class='website' href='http://www.vinolanzhotsky.cz'>vinolanzhotsky.cz</a>"
   },   
           {
      "lat": 48.8579947,
      "lng": 16.9081831,
      "name": "Vinařství na Špičáku",
      "picture": "<img class='pctr' src='../img/cont/biloviceuspicaku720x540.jpg'>",
      "address1":"ke Špičáku 842",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 608 889 056",
      "website": "<a class='website' href='http://www.vinarstvinaspicaku.cz'>vinarstvinaspicaku.cz</a>"
   },   
           {
      "lat": 48.8588895,
      "lng": 16.9084997,
      "name": "Vinařství Bauman",
      "picture": "<img class='pctr' src='../img/cont/bilovicebauman720x540.jpg'>",
      "address1":"Růžová 354",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 775 365 523",
      "website": "<a class='website' href='http://www.vinarstvibauman.cz'>vinarstvibauman.cz</a>"
   },   
           {
      "lat": 48.856937,
      "lng": 16.9070689,
      "name": "Vinařství Káfuněk",
      "picture": "<img class='pctr' src='../img/cont/bilovicekafunek720x540.jpg'>",
      "address1":"Hlavní ev. č. 25",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 388 589",
      "website": "<a class='website' href='http://www.vinarstvikafunek.cz'>vinarstvikafunek.cz</a>"
   },   
           {
      "lat": 48.857751,
      "lng": 16.9069578,
      "name": "ELWINE Velké Bílovice s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/biloviceelwine720x540.jpg'>",
      "address1":"Muškátová 125",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 603 720 960",
      "website": "<a class='website' href='http://www.elwine.cz'>elwine.cz</a>"
   },   
           {
      "lat": 48.8571403,
      "lng": 16.9066242,
      "name": "Rodinné vinařství Otáhalovi",
      "picture": "<img class='pctr' src='../img/cont/biloviceotahalovi720x540.jpg'>",
      "address1":"Cabernetová 102",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 739 234 530",
      "website": "<a class='website' href='http://www.vinootahalovi.cz'>vinootahalovi.cz</a>"
   },  
           {
      "lat": 48.8565678,
      "lng": 16.9059035,
      "name": "Vinařství Velké Bílovice",
      "picture": "<img class='pctr' src='../img/cont/bilovicevelke720x540.jpg'>",
      "address1":"Čejkovská 772",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 686 404",
      "website": "<a class='website' href='http://www.vinarstvivelkebilovice.cz'>vinarstvivelkebilovice.cz</a>"
   }, 
              {
      "lat": 48.8562849,
      "lng": 16.9088983,
      "name": "Rodinné vinařství Bílkovi",
      "picture": "<img class='pctr' src='../img/cont/bilovicebilkovi720x540.jpg'>",
      "address1":"Sadová 663",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 608 347 222",
      "website": "<a class='website' href='http://www.vinarstvibilkovi.cz'>vinarstvibilkovi.cz</a>"
   }, 
              {
      "lat": 48.856009,
      "lng": 16.908201,
      "name": "Vinařství Stanislav Mádl",
      "picture": "<img class='pctr' src='../img/cont/bilovicemadl720x540.jpg'>",
      "address1":"sklepní ulice Sadová",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 725 950 970",
      "website": "<a class='website' href='http://www.vasvinar.cz'>vasvinar.cz</a>"
   }, 
              {
      "lat": 48.855574,
      "lng": 16.90916,
      "name": "Vinařství Petr Skoupil",
      "picture": "<img class='pctr' src='../img/cont/biloviceskoupil720x540.jpg'>",
      "address1":"Sadová 1399",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 732 963 669",
      "website": "<a class='website' href='http://www.skoupil.com'>skoupil.com</a>"
   }, 
              {
      "lat": 48.8558062,
      "lng": 16.9084967,
      "name": "Vinný sklep u Osičků",
      "picture": "<img class='pctr' src='../img/cont/biloviceuosicku720x540.jpg'>",
      "address1":"Sadová 605",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 608 770 712",
      "website": "<a class='website' href='http://www.sklepuosicku.cz'>sklepuosicku.cz</a>"
   }, 
              {
      "lat": 48.8605186,
      "lng": 16.8971652,
      "name": "Vinařství Zdenek Polach",
      "picture": "<img class='pctr' src='../img/cont/bilovicepolach720x540.jpg'>",
      "address1":"Pod Předníma 380",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 606 765 130",
      "website": "<a class='website' href='http://www.vinopolach.cz'>vinopolach.cz</a>"
   }, 
              {
      "lat": 48.8523163,
      "lng": 16.8823016,
      "name": "Vinařství Hrdina & dcera",
      "picture": "<img class='pctr' src='../img/cont/bilovicehrdina720x540.jpg'>",
      "address1":"Záhumní 1375",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 731 820 888",
      "website": "<a class='website' href='http://www.hrdinaadcera.cz'>hrdinaadcera.cz</a>"
   }, 
              {
      "lat": 48.8420934,
      "lng": 16.9026357,
      "name": "Vinařství Sing Wine s.r.o.",
      "picture": "<img class='pctr' src='../img/cont/bilovicesingwine720x540.jpg'>",
      "address1":"Žižkovská 1365",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 775 595 561",
      "website": "<a class='website' href='http://www.singwine.cz'>singwine.cz</a>"
   },  
           {
      "lat": 48.8548889,
      "lng": 16.8836944,
      "name": "Rodinné vinařství Sedlák",
      "picture": "<img class='pctr' src='../img/cont/bilovicesedlak720x540.jpg'>",
      "address1":"Fabián 1494",
      "postalCode": "691 02 Velké Bílovice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 774 944 214",
      "website": "<a class='website' href='http://www.vinarstvisedlak.cz'>vinarstvisedlak.cz</a>"
   },            
           {
      "lat": 48.8018398,
      "lng": 16.802103,
      "name": "Vinařství Chateau Lednice",
      "picture": "<img class='pctr' src='../img/cont/lednicechateao720x540.jpg'>",
      "address1":"21. dubna",
      "postalCode": "691 44 Lednice", // don't insert comma in the last item of each marker
      "phone": "tel: 736 430 575",
      "website": "<a class='website' href='http://www.chateau-lednice.cz'>chateau-lednice.cz</a>"
   },   
           {
      "lat": 48.8004922,
      "lng": 16.8038959,
      "name": "Moravský sommelier® - Lednice",
      "picture": "<img class='pctr' src='../img/cont/lednicesommelier720x540.jpg'>",
      "address1":"Zámecké náměstí 69",
      "postalCode": "691 44 Lednice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 153 300",
      "website": "<a class='website' href='http://www.moravskysommelier.cz/vinoteky/#lednice'>moravskysommelier.cz</a>"
   },   
           {
      "lat": 48.7999292,
      "lng": 16.7907412,
      "name": "Galerie vín ONYX Lednice",
      "picture": "<img class='pctr' src='../img/cont/lednicegalerie720x540.jpg'>",
      "address1":"Nejdecká 176",
      "postalCode": "691 44 Lednice", // don't insert comma in the last item of each marker
      "phone": "tel: 608 600 553",
      "website": "<a class='website' href='http://www.onyxlednice.cz'>onyxlednice.cz</a>"
   },   
           {
      "lat": 48.8732608,
      "lng": 16.7563736,
      "name": "Vinařství Vajbar",
      "picture": "<img class='pctr' src='../img/cont/zajecivajbar720x540.jpg'>",
      "address1":"U Vily 480",
      "postalCode": "691 05 Zaječí", // don't insert comma in the last item of each marker
      "phone": "tel: 721 657 475",
      "website": "<a class='website' href='http://www.vinarstvivajbar.cz'>vinarstvivajbar.cz</a>"
   },   
           {
      "lat": 48.8729242,
      "lng": 16.7610194,
      "name": "Vinařství Nosreti",
      "picture": "<img class='pctr' src='../img/cont/zajecinosreti720x540.jpg'>",
      "address1":"Vinařská 479",
      "postalCode": "691 05 Zaječí", // don't insert comma in the last item of each marker
      "phone": "tel: 420 725 936 624",
      "website": "<a class='website' href='http://www.vinarstvinosreti.cz'>vinarstvinosreti.cz</a>"
   },   
           {
      "lat": 48.8599964,
      "lng": 16.7614246,
      "name": "Vinařství Šabata",
      "picture": "<img class='pctr' src='../img/cont/zajecisabata720x540.jpg'>",
      "address1":"Zaječí 506",
      "postalCode": "691 05 Zaječí", // don't insert comma in the last item of each marker
      "phone": "tel: 420 724 105 148",
      "website": "<a class='website' href='http://www.vinarstvisabata.cz'>vinarstvisabata.cz</a>"
   },   
           {
      "lat": 48.871289,
      "lng": 16.766833,
      "name": "Vinařství Herůfek",
      "picture": "<img class='pctr' src='../img/cont/zajeciherufek720x540.jpg'>",
      "address1":"Dolní",
      "postalCode": "691 05 Zaječí", // don't insert comma in the last item of each marker
      "phone": "tel: 420 602 73 10 90",
      "website": "<a class='website' href='http://www.vinarstviherufek.cz'>vinarstviherufek.cz</a>"
   },   
           {
      "lat": 48.870303,
      "lng": 16.751489,
      "name": "Vinařství U Kapličky",
      "picture": "<img class='pctr' src='../img/cont/zajeciukaplicky740x540.jpg'>",
      "address1":"Vinařská 484",
      "postalCode": "691 05 Zaječí", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 766 147",
      "website": "<a class='website' href='http://www.vinarstviukaplicky.cz'>vinarstviukaplicky.cz</a>"
   },   
           {
      "lat": 48.8710337,
      "lng": 16.7645633,
      "name": "Pura Vida",
      "picture": "<img class='pctr' src='../img/cont/zajecipuravida720x540.jpg'>",
      "address1":"Hlavní 501",
      "postalCode": "691 05 Zaječí", // don't insert comma in the last item of each marker
      "phone": "tel: 420 728 186 103",
      "website": "<a class='website' href='http://www.penzionzajeci.cz'>penzionzajeci.cz</a>"
   },   
           {
      "lat": 48.8711415,
      "lng": 16.7658322,
      "name": "Vinný sklep U Krčků",
      "picture": "<img class='pctr' src='../img/cont/zajeciukrcku720x540.jpg'>",
      "address1":"Dolní 192",
      "postalCode": "691 05 Zaječí", // don't insert comma in the last item of each marker
      "phone": "tel: 420 770 122 010",
      "website": "<a class='website' href='http://www.ubytovaniukrcku.cz'>ubytovaniukrcku.cz</a>"
   },   
           {
      "lat": 48.8726857,
      "lng": 16.7705519,
      "name": "Hycl Josef Ing.",
      "picture": "<img class='pctr' src='../img/cont/zajecihycl720x540.jpg'>",
      "address1":"Školní 141",
      "postalCode": "691 05 Zaječí", // don't insert comma in the last item of each marker
      "phone": "tel: 420 606 829 465",
      "website": "<a class='website' href='http://www.vinarnazdena.eu'>vinarnazdena.eu</a>"
   },   
           {
      "lat": 48.7984768,
      "lng": 16.8004561,
      "name": "Vinný sklep U Čapků",
      "picture": "<img class='pctr' src='../img/cont/ledniceucapku720x540.jpg'>",
      "address1":"ulice Cihlářská",
      "postalCode": "691 44 Lednice", // don't insert comma in the last item of each marker
      "phone": "tel: 420 724 516 900",
      "website": "<a class='website' href='http://www.ucapku.cz'>ucapku.cz</a>"
   },           
   {
      lat: 49.0708289,
      lng: 17.4810167,
      "name": "Vinný Sklep U Lisu",
      picture: "<img class='pctr' src='../img/cont/ulisu720x540.jpg'>",
      address1:"Vinohradská 247",
      postalCode: "686 05 Uherské Hradiště",// don't insert comma in the last item of each marker
      phone: "tel: 607 554 013",
      website: "<a class='website' href='http://www.ulisu.uh.cz'>ulisu.uh.cz</a>"
   } // don't insert comma in the last item
];


function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(49.0308605,17.3423464),
      zoom: 9,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   // a new Info Window is created
   infoWindow = new google.maps.InfoWindow();

   // Event that closes the Info Window with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);


// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

   // this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();
   
   // for loop traverses markersData array calling createMarker function for each marker 
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var picture = markersData[i].picture;
      var address1 = markersData[i].address1;
      var postalCode = markersData[i].postalCode;
      var phone = markersData[i].phone;
      var website = markersData[i].website;
      createMarker(latlng, name, picture, address1, postalCode, phone, website);

      // marker position is added to bounds variable
      bounds.extend(latlng);  
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(latlng, name, picture, address1, postalCode, phone, website){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      icon:'marker_blue50x50.png',
        title: name
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(13);
  map.setCenter(marker.getPosition());
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div class="iw_content">' + picture + '<div class="iw_title">' + name + '</div>' +
      '<div class="adrss">' + address1 + '</div><div class="pstl">' +
          postalCode + '</div>' +
        '<div class="telphn">' + phone + '</div>' + '<div class="lnk">'+ website + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}