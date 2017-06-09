//The overall array of selected arrays. By default, they all exist.
var regionArraySelected = [0,1,2,3,4,5,6];

//Below are all of the arrays of possible Pokemon names.
var kantoArrayFull = ["Abra","Aerodactyl","Alakazam","Arbok","Arcanine","Articuno","Beedrill","Bellsprout","Blastoise","Bulbasaur","Butterfree","Caterpie","Chansey","Charizard","Charmander","Charmeleon","Clefable","Clefairy","Cloyster","Cubone","Dewgong","Diglett","Ditto","Dodrio","Doduo","Dragonair","Dragonite","Dratini","Drowzee","Dugtrio","Eevee","Ekans","Electabuzz","Electrode","Exeggcute","Exeggutor","Farfetch'd","Fearow","Flareon","Gastly","Gengar","Geodude","Gloom","Golbat","Goldeen","Golduck","Golem","Graveler","Grimer","Growlithe","Gyarados","Haunter","Hitmonchan","Hitmonlee","Horsea","Hypno","Ivysaur","Jigglypuff","Jolteon","Jynx","Kabuto","Kabutops","Kadabra","Kakuna","Kangaskhan","Kingler","Koffing","Krabby","Lapras","Lickitung","Machamp","Machoke","Machop","Magikarp","Magmar","MissingNo.","Magnemite","Magneton","Mankey","Marowak","Meowth","Metapod","Mew","Mewtwo","Moltres","Mr. Mime","Muk","Nidoking","Nidoqueen","Nidoran♂️","Nidoran♀️","Nidorina","Nidorino","Ninetales","Oddish","Omanyte","Omastar","Onix","Paras","Parasect","Persian","Pidgeot","Pidgeotto","Pidgey","Pikachu","Pinsir","Poliwag","Poliwhirl","Poliwrath","Ponyta","Porygon","Primeape","Psyduck","Raichu","Rapidash","Raticate","Rattata","Rhydon","Rhyhorn","Sandshrew","Sandslash","Scyther","Seadra","Seaking","Seel","Shellder","Slowbro","Slowpoke","Snorlax","Spearow","Squirtle","Starmie","Staryu","Tangela","Tauros","Tentacool","Tentacruel","Vaporeon","Venomoth","Venonat","Venusaur","Victreebel","Vileplume","Voltorb","Vulpix","Wartortle","Weedle","Weepinbell","Weezing","Wigglytuff","Zapdos","Zubat"];


var johtoArrayFull= ["Aipom","Ampharos","Ariados","Azumarill","Bayleef","Bellossom","Blissey","Celebi","Chikorita","Chinchou","Cleffa","Corsola","Crobat","Croconaw","Cyndaquil","Delibird","Donphan","Dunsparce","Elekid","Entei","Espeon","Feraligatr","Flaaffy","Forretress","Furret","Girafarig","Gligar","Granbull","Heracross","Hitmontop","Ho-Oh","Hoothoot","Hoppip","Houndoom","Houndour","Igglybuff","Jumpluff","Kingdra","Lanturn","Larvitar","Ledian","Ledyba","Lugia","Magby","Magcargo","Mantine","Mareep","Marill","Meganium","Miltank","Misdreavus","Murkrow","Natu","Noctowl","Octillery","Phanpy","Pichu","Piloswine","Pineco","Politoed","Porygon2","Pupitar","Quagsire","Quilava","Qwilfish","Raikou","Remoraid","Scizor","Sentret","Shuckle","Skarmory","Skiploom","Slowking","Slugma","Smeargle","Smoochum","Sneasel","Snubbull","Spinarak","Stantler","Steelix","Sudowoodo","Suicune","Sunflora","Sunkern","Pikablu","Swinub","Teddiursa","Togepi","Togetic","Totodile","Typhlosion","Tyranitar","Tyrogue","Umbreon","Unown","Ursaring","Wobbuffet","Wooper","Xatu","Yanma"];

var hoennArrayFull= ["Absol","Aggron","Altaria","Anorith","Armaldo","Aron","Azurill","Bagon","Baltoy","Banette","Barboach","Beautifly","Beldum","Blaziken","Breloom","Cacnea","Cacturne","Camerupt","Carvanha","Cascoon","Castform","Chimecho","Clamperl","Claydol","Combusken","Corphish","Cradily","Crawdaunt","Delcatty","Deoxys","Dusclops","Duskull","Dustox","Electrike","Exploud","Feebas","Flygon","Gardevoir","Glalie","Gorebyss","Groudon","Grovyle","Grumpig","Gulpin","Hariyama","Huntail","Illumise","Jirachi","Kecleon","Kirlia","Kyogre","Lairon","Latias","Latios","Lileep","Linoone","Lombre","Lotad","Loudred","Ludicolo","Lunatone","Luvdisc","Makuhita","Manectric","Marshtomp","Masquerain","Mawile","Medicham","Meditite","Metagross","Metang","Mightyena","Milotic","Minun","Mudkip","Nincada","Ninjask","Nosepass","Numel","Nuzleaf","Pelipper","Plusle","Poochyena","Ralts","Rayquaza","Regice","Regirock","Registeel","Relicanth","Roselia","Sableye","Salamence","Sceptile","Sealeo","Seedot","Seviper","Sharpedo","Shedinja","Shelgon","Shiftry","Shroomish","Shuppet","Silcoon","Skitty","Slaking","Slakoth","Snorunt","Solrock","Spheal","Spinda","Spoink","Surskit","Swablu","Swalot","Swampert","Swellow","Taillow","Torchic","Torkoal","Trapinch","Treecko","Tropius","Vibrava","Vigoroth","Volbeat","Wailmer","Wailord","Walrein","Whiscash","Whismur","Wingull","Wurmple","Wynaut","Zangoose","Zigzagoon"];

var sinnohArrayFull= ["Abomasnow","Ambipom","Arceus","Azelf","Bastiodon","Bibarel","Bidoof","Bonsly","Bronzong","Bronzor","Budew","Buizel","Buneary","Burmy","Carnivine","Chatot","Cherrim","Cherubi","Chimchar","Chingling","Combee","Cranidos","Cresselia","Croagunk","Darkrai","Dialga","Drapion","Drifblim","Drifloon","Dusknoir","Electivire","Empoleon","Finneon","Floatzel","Froslass","Gabite","Gallade","Garchomp","Gastrodon","Gible","Giratina","Glaceon","Glameow","Gliscor","Grotle","Happiny","Heatran","Hippopotas","Hippowdon","Honchkrow","Infernape","Kricketot","Kricketune","Leafeon","Lickilicky","Lopunny","Lucario","Lumineon","Luxio","Luxray","Magmortar","Magnezone","Mamoswine","Manaphy","Mantyke","Mesprit","Mime Jr.","Mismagius","Monferno","Mothim","Munchlax","Pachirisu","Palkia","Phione","Piplup","Porygon-Z","Prinplup","Probopass","Purugly","Rampardos","Regigigas","Rhyperior","Riolu","Roserade","Rotom","Shaymin","Shellos","Shieldon","Shinx","Skorupi","Skuntank","Snover","Spiritomb","Staraptor","Staravia","Starly","Stunky","Tangrowth","Togekiss","Torterra","Toxicroak","Turtwig","Uxie","Vespiquen","Weavile","Wormadam","Yanmega"];

var unovaArrayFull= ["Accelgor","Alomomola","Amoonguss","Archen","Archeops","Audino","Axew","Basculin","Beartic","Beheeyem","Bisharp","Blitzle","Boldore","Bouffalant","Braviary","Carracosta","Chandelure","Cinccino","Cobalion","Cofagrigus","Conkeldurr","Cottonee","Crustle","Cryogonal","Cubchoo","Darmanitan","Darumaka","Deerling","Deino","Dewott","Drilbur","Druddigon","Ducklett","Duosion","Durant","Dwebble","Eelektrik","Eelektross","Elgyem","Emboar","Emolga","Escavalier","Excadrill","Ferroseed","Ferrothorn","Foongus","Fraxure","Frillish","Galvantula","Garbodor","Genesect","Gigalith","Golett","Golurk","Gothita","Gothitelle","Gothorita","Gurdurr","Haxorus","Heatmor","Herdier","Hydreigon","Jellicent","Joltik","Karrablast","Keldeo","Klang","Klink","Klinklang","Krokorok","Krookodile","Kyurem","Lampent","Landorus","Larvesta","Leavanny","Liepard","Lilligant","Lillipup","Litwick","Mandibuzz","Maractus","Meloetta","Mienfoo","Mienshao","Minccino","Munna","Musharna","Oshawott","Palpitoad","Panpour","Pansage","Pansear","Patrat","Pawniard","Petilil","Pidove","Pignite","Purrloin","Reshiram","Reuniclus","Roggenrola","Rufflet","Samurott","Sandile","Sawk","Sawsbuck","Scolipede","Scrafty","Scraggy","Seismitoad","Serperior","Servine","Sewaddle","Shelmet","Sigilyph","Simipour","Simisage","Simisear","Snivy","Solosis","Stoutland","Stunfisk","Swadloon","Swanna","Swoobat","Tepig","Terrakion","Throh","Thundurus","Timburr","Tirtouga","Tornadus","Tranquill","Trubbish","Tympole","Tynamo","Unfezant","Vanillish","Vanillite","Vanilluxe","Venipede","Victini","Virizion","Volcarona","Vullaby","Watchog","Whimsicott","Whirlipede","Woobat","Yamask","Zebstrika","Zekrom","Zoroark","Zorua","Zweilous"];

var kalosArrayFull= ["Aegislash","Amaura","Aromatisse","Aurorus","Avalugg","Barbaracle","Bergmite","Binacle","Braixen","Bunnelby","Carbink","Chesnaught","Chespin","Clauncher","Clawitzer","Dedenne","Delphox","Diancie","Diggersby","Doublade","Dragalge","Espurr","Fennekin","Flabébé","Fletchinder","Fletchling","Floette","Florges","Froakie","Frogadier","Furfrou","Gogoat","Goodra","Goomy","Gourgeist","Greninja","Hawlucha","Heliolisk","Helioptile","Honedge","Hoopa","Inkay","Klefki","Litleo","Malamar","Meowstic","Noibat","Noivern","Pancham","Pangoro","Phantump","Pumpkaboo","Pyroar","Quilladin","Scatterbug","Skiddo","Skrelp","Sliggoo","Slurpuff","Spewpa","Spritzee","Swirlix","Sylveon","Talonflame","Trevenant","Tyrantrum","Tyrunt","Vivillon","Volcanion","Xerneas","Yveltal","Zygarde"];

var alohaArrayFull= ["Araquanid","Bewear","Bounsweet","Brionne","Bruxish","Buzzwole","Celesteela","Charjabug","Comfey","Cosmoem","Cosmog","Crabominable","Crabrawler","Cutiefly","Dartrix","Decidueye","Dewpider","Dhelmise","Drampa","Fomantis","Golisopod","Grubbin","Gumshoos","Guzzlord","Hakamo-o","Incineroar","Jangmo-o","Kartana","Komala","Kommo-o","Litten","Lunala","Lurantis","Lycanroc","Magearna","Mareanie","Marshadow","Mimikyu","Minior","Morelull","Mudbray","Mudsdale","Necrozma","Nihilego","Oranguru","Oricorio","Palossand","Passimian","Pheromosa","Pikipek","Popplio","Primarina","Pyukumuku","Ribombee","Rockruff","Rowlet","Salandit","Salazzle","Sandygast","Shiinotic","Silvally","Solgaleo","Steenee","Stufful","Tapu Bulu","Tapu Fini","Tapu Koko","Tapu Lele","Togedemaru","Torracat","Toucannon","Toxapex","Trumbeak","Tsareena","Turtonator","Type: Null","Vikavolt","Wimpod","Wishiwashi","Xurkitree","Yungoos"]


//Below are all of the event handler functions to add/remove the Regions. They give the main Region array a number as well as change the CSS.
//The "kantoOn" checks could be removed and it could just check if the array contains that value.
function getKanto(){
    if(kantoOn === false){
    Kanto.style.backgroundColor="rgb(125, 0, 0)";
    var index = regionArraySelected.indexOf(0);  //Checks if this number exists in the overall array
    if (index > -1) {
      regionArraySelected.splice(index, 1); //If so, remove it.
  }
      kantoOn=true;
  } else  {
    Kanto.style.backgroundColor="#bad455";
    regionArraySelected.push(0); //If not, add it in.
    kantoOn = false;
    }
  }

function getJohto(){
    if(johtoOn === false){
    Johto.style.backgroundColor="rgb(125, 0, 0)";
    var index = regionArraySelected.indexOf(1);
    if (index > -1) {
      regionArraySelected.splice(index, 1);
  }
    johtoOn=true;
  } else  {
    Johto.style.backgroundColor="#bad455";
        regionArraySelected.push(1);
    johtoOn = false;
    }
  }

function getHoenn(){
    if(hoennOn === false){
    Hoenn.style.backgroundColor="rgb(125, 0, 0)";
    var index = regionArraySelected.indexOf(2);
    if (index > -1) {
      regionArraySelected.splice(index, 1);
  }
    hoennOn=true;
  } else  {
    Hoenn.style.backgroundColor="#bad455";
        regionArraySelected.push(2);
    hoennOn = false;
    }
  }

function getSinnoh(){
    if(sinnohOn === false){
    Sinnoh.style.backgroundColor="rgb(125, 0, 0)";
    var index = regionArraySelected.indexOf(3);
    if (index > -1) {
      regionArraySelected.splice(index, 1);
  }
    sinnohOn=true;
  } else  {
    Sinnoh.style.backgroundColor="#bad455";
        regionArraySelected.push(3);
    sinnohOn = false;
    }
  }

function getUnova(){
    if(unovaOn === false){
    Unova.style.backgroundColor="rgb(125, 0, 0)";
    var index = regionArraySelected.indexOf(4);
    if (index > -1) {
      regionArraySelected.splice(index, 1);
  }
    unovaOn=true;
  } else  {
    Unova.style.backgroundColor="#bad455";
        regionArraySelected.push(4);
    unovaOn = false;
    }
  }

function getKalos(){
    if(kalosOn === false){
    Kalos.style.backgroundColor="rgb(125, 0, 0)";
    var index = regionArraySelected.indexOf(5);
    if (index > -1) {
      regionArraySelected.splice(index, 1);
  }
    kalosOn=true;
  } else  {
    Kalos.style.backgroundColor="#bad455";
        regionArraySelected.push(5);
    kalosOn = false;
    }
  }

function getAloha(){
    if(alohaOn === false){
    Aloha.style.backgroundColor="rgb(125, 0, 0)";
    var index = regionArraySelected.indexOf(6);
    if (index > -6) {
    regionArraySelected.splice(index, 6);
}
    alohaOn=true;
  } else  {
    Aloha.style.backgroundColor="#bad455";
        regionArraySelected.push(6);
    alohaOn = false;
    }
  }


//This function picks a random number (a region) and then picks a random Pokemon from the region, returning it to the function that called it. If the Region does not exist, it calls this function again.
function getPokemonName(){
  randomNum = Math.floor(Math.random() * 7);

  if (regionArraySelected.includes(randomNum)){
    switch(randomNum){
      case 0:
          randomPokemon =  kantoArrayFull[Math.floor(Math.random()*kantoArrayFull.length)];
          break;
      case 1:
          randomPokemon =  johtoArrayFull[Math.floor(Math.random()*johtoArrayFull.length)];
          break;
      case 2:
          randomPokemon =  hoennArrayFull[Math.floor(Math.random()*hoennArrayFull.length)];
          break;
      case 3:
          randomPokemon =  sinnohArrayFull[Math.floor(Math.random()*sinnohArrayFull.length)];
          break;
      case 4:
          randomPokemon =  unovaArrayFull[Math.floor(Math.random()*unovaArrayFull.length)];
          break;
      case 5:
          randomPokemon =  kalosArrayFull[Math.floor(Math.random()*kalosArrayFull.length)];
          break;
      case 6:
          randomPokemon =  alohaArrayFull[Math.floor(Math.random()*alohaArrayFull.length)];
          break;
        }
    } else {
      getPokemonName();
    }
    if (regionArraySelected.length=== 0){ //If they don't select anything, which someone could do if they wanted, the name is just the program title.
      randomPokemon = "Pokédoodle";
    }
      return randomPokemon;
}
