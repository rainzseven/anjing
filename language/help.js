/*
——————————
≈ Create By @RIY
≈ Base Ori @DikaArdnt
≈ Kalau Mau Nambahin Fitur » chika.js
≈ Kalau Mau Nambahin/Ubah List Menu » language » help.js
——————————
∞ BACA BANG ∞
≈ Seseorang bisa menjual barang yang bukan miliknya apabila telah mendapatkan ijin dari pemilik barang.
≈ Rasullullah saw bersabda : “Janganlah engkau menjual barang yang bukan milikmu.”
——————————
*/

//—————「 Menu 」—————//
exports.menu = (botname, pushname, salam) => {
	return`Selamat ${salam} kak ${pushname}

Saya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaiki🙏`
}

//—————「 List 」—————//
exports.list = (pushname) => {
	return`Halo kak ${pushname}, silahkan dipilih list menu dibawah ini`
}

//—————「 All Menu 」—————//
exports.allmenu = (prefix, pushname, botname, time, salam) => {
return`  _Selamat ${salam} kak ${pushname}_

  *⏰ Time Server : ${time}*
  *📚 List Menu : ${botname}*

  *GROUP MENU*
  *≻* ${prefix}linkgroup
  *≻* ${prefix}ephemeral [option]
  *≻* ${prefix}setppgc
  *≻* ${prefix}setname 
  *≻* ${prefix}setdesc 
  *≻* ${prefix}group [option]
  *≻* ${prefix}editinfo [option]
  *≻* ${prefix}add @user
  *≻* ${prefix}kick @user
  *≻* ${prefix}hidetag 
  *≻* ${prefix}tagall 
  *≻* ${prefix}antilink [on/off]
  *≻* ${prefix}mute [on/off]
  *≻* ${prefix}promote @user
  *≻* ${prefix}demote @user
  *≻* ${prefix}vote 
  *≻* ${prefix}devote
  *≻* ${prefix}upvote
  *≻* ${prefix}cekvote
  *≻* ${prefix}hapusvote
  
  *DOWNLOADER MENU*
  *≻* ${prefix}tiktoknowm 
  *≻* ${prefix}tiktokwm 
  *≻* ${prefix}tiktokmp3 
  *≻* ${prefix}instagram 
  *≻* ${prefix}twitter 
  *≻* ${prefix}twittermp3 
  *≻* ${prefix}facebook 
  *≻* ${prefix}pinterestdl 
  *≻* ${prefix}ytmp3 
  *≻* ${prefix}ytmp4 
  *≻* ${prefix}getmusic 
  *≻* ${prefix}getvideo 
  *≻* ${prefix}umma 
  *≻* ${prefix}joox 
  *≻* ${prefix}soundcloud 
  
  *SEARCH MENU*
  *≻* ${prefix}play 
  *≻* ${prefix}yts 
  *≻* ${prefix}google 
  *≻* ${prefix}gimage 
  *≻* ${prefix}pinterest 
  *≻* ${prefix}wikimedia 
  *≻* ${prefix}ytsearch 
  *≻* ${prefix}ringtone 
  *≻* ${prefix}stalk [option] 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  *≻* ${prefix}animesearch 
  *≻* ${prefix}character 
  *≻* ${prefix}manga 
  *≻* ${prefix}playstore 
  *≻* ${prefix}gsmarena 
  *≻* ${prefix}jadwalbioskop 
  *≻* ${prefix}nowplayingbioskop 
  *≻* ${prefix}aminio 
  *≻* ${prefix}wattpad 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  
  *RANDOM MENU*
  *≻* ${prefix}coffe
  *≻* ${prefix}quotesanime
  *≻* ${prefix}couple
  
  *RANDOM ANIME MENU*
  *≻* ${prefix}loli
  *≻* ${prefix}neko
  *≻* ${prefix}waifu
  *≻* ${prefix}shinobu
  *≻* ${prefix}megumin
  *≻* ${prefix}bully
  *≻* ${prefix}cuddle
  *≻* ${prefix}cry
  *≻* ${prefix}hug
  *≻* ${prefix}awoo
  *≻* ${prefix}kiss
  *≻* ${prefix}lick
  *≻* ${prefix}pat
  *≻* ${prefix}smug
  *≻* ${prefix}bonk
  *≻* ${prefix}yeet
  *≻* ${prefix}blush
  *≻* ${prefix}smile
  *≻* ${prefix}wave
  *≻* ${prefix}highfive
  *≻* ${prefix}handhold
  *≻* ${prefix}nom
  *≻* ${prefix}bite
  *≻* ${prefix}glomp
  *≻* ${prefix}slap
  *≻* ${prefix}kill
  *≻* ${prefix}happy
  *≻* ${prefix}wink
  *≻* ${prefix}poke
  *≻* ${prefix}dance
  *≻* ${prefix}cringe
  *≻* ${prefix}anime
  *≻* ${prefix}waifu
  *≻* ${prefix}husbu
  *≻* ${prefix}neko
  *≻* ${prefix}shinobu
  *≻* ${prefix}waifus 
  *≻* ${prefix}nekos 
  *≻* ${prefix}trap 
  *≻* ${prefix}blowjob 
  
  *TEXT PRO MENU*
  *≻* ${prefix}3dchristmas
  *≻* ${prefix}3ddeepsea
  *≻* ${prefix}americanflag
  *≻* ${prefix}3dscifi
  *≻* ${prefix}3drainbow
  *≻* ${prefix}3dwaterpipe
  *≻* ${prefix}halloweenskeleton
  *≻* ${prefix}sketch
  *≻* ${prefix}bluecircuit
  *≻* ${prefix}space
  *≻* ${prefix}metallic
  *≻* ${prefix}fiction
  *≻* ${prefix}greenhorror
  *≻* ${prefix}transformer
  *≻* ${prefix}berry
  *≻* ${prefix}thunder
  *≻* ${prefix}magma
  *≻* ${prefix}3dcrackedstone
  *≻* ${prefix}3dneonlight
  *≻* ${prefix}impressiveglitch
  *≻* ${prefix}naturalleaves
  *≻* ${prefix}fireworksparkle
  *≻* ${prefix}matrix
  *≻* ${prefix}dropwater
  *≻* ${prefix}harrypotter
  *≻* ${prefix}foggywindow
  *≻* ${prefix}neondevils
  *≻* ${prefix}christmasholiday
  *≻* ${prefix}3dgradient
  *≻* ${prefix}blackpink
  *≻* ${prefix}gluetext
  
  *PHOTO OXY MENU*
  *≻* ${prefix}shadow
  *≻* ${prefix}romantic
  *≻* ${prefix}smoke
  *≻* ${prefix}burnpapper
  *≻* ${prefix}naruto
  *≻* ${prefix}lovemsg
  *≻* ${prefix}grassmsg
  *≻* ${prefix}lovetext
  *≻* ${prefix}coffecup
  *≻* ${prefix}butterfly
  *≻* ${prefix}harrypotter
  *≻* ${prefix}retrolol
  
  *EPHOTO MENU*
  *≻* ${prefix}ffcover
  *≻* ${prefix}crossfire
  *≻* ${prefix}galaxy
  *≻* ${prefix}glass
  *≻* ${prefix}neon
  *≻* ${prefix}beach
  *≻* ${prefix}blackpink
  *≻* ${prefix}igcertificate
  *≻* ${prefix}ytcertificate
  
  *GAME & FUN MENU*
  *≻* ${prefix}simih
  *≻* ${prefix}bagaimanakah
  *≻* ${prefix}kapankah
  *≻* ${prefix}apakah
  *≻* ${prefix}bisakah
  *≻* ${prefix}rate
  *≻* ${prefix}wangy
  *≻* ${prefix}gantengcek
  *≻* ${prefix}cekganteng
  *≻* ${prefix}cantikcek
  *≻* ${prefix}cekcantik
  *≻* ${prefix}sangecek
  *≻* ${prefix}ceksange
  *≻* ${prefix}gaycek
  *≻* ${prefix}cekgay
  *≻* ${prefix}lesbicek
  *≻* ${prefix}halah
  *≻* ${prefix}hilih
  *≻* ${prefix}huluh
  *≻* ${prefix}heleh
  *≻* ${prefix}holoh
  *≻* ${prefix}jadian
  *≻* ${prefix}jodohku
  *≻* ${prefix}tictactoe
  *≻* ${prefix}delttt
  *≻* ${prefix}family100
  *≻* ${prefix}tebak [option]
  *≻* ${prefix}math [mode]
  *≻* ${prefix}suitpvp [@tag]
  
  *PRIMBON MENU*
  *≻* ${prefix}nomorhoki
  *≻* ${prefix}artimimpi
  *≻* ${prefix}artinama
  *≻* ${prefix}ramaljodoh
  *≻* ${prefix}ramaljodohbali
  *≻* ${prefix}suamiistri
  *≻* ${prefix}ramalcinta
  *≻* ${prefix}cocoknama
  *≻* ${prefix}pasangan
  *≻* ${prefix}jadiannikah
  *≻* ${prefix}sifatusaha
  *≻* ${prefix}rezeki
  *≻* ${prefix}pekerjaan
  *≻* ${prefix}nasib
  *≻* ${prefix}penyakit
  *≻* ${prefix}tarot
  *≻* ${prefix}fengshui
  *≻* ${prefix}haribaik
  *≻* ${prefix}harisangar
  *≻* ${prefix}harisial
  *≻* ${prefix}nagahari
  *≻* ${prefix}arahrezeki
  *≻* ${prefix}peruntungan
  *≻* ${prefix}weton
  *≻* ${prefix}karakter
  *≻* ${prefix}keberuntungan
  *≻* ${prefix}memancing
  *≻* ${prefix}masasubur
  *≻* ${prefix}zodiak
  *≻* ${prefix}shio
  
  *CONVERT MENU*
  *≻* ${prefix}toimage
  *≻* ${prefix}removebg
  *≻* ${prefix}sticker
  *≻* ${prefix}emojimix
  *≻* ${prefix}tovideo
  *≻* ${prefix}togif
  *≻* ${prefix}tourl
  *≻* ${prefix}tovn
  *≻* ${prefix}tomp3
  *≻* ${prefix}toaudio
  *≻* ${prefix}ebinary
  *≻* ${prefix}dbinary
  *≻* ${prefix}styletext
  *≻* ${prefix}smeme
  
  *MAIN MENU*
  *≻* ${prefix}script
  *≻* ${prefix}ping
  *≻* ${prefix}owner
  *≻* ${prefix}menu
  *≻* ${prefix}delete
  *≻* ${prefix}infochat
  *≻* ${prefix}quoted
  *≻* ${prefix}listpc
  *≻* ${prefix}listgc
  *≻* ${prefix}listonline
  
  *DATABASE MENU*
  *≻* ${prefix}setcmd
  *≻* ${prefix}listcmd
  *≻* ${prefix}delcmd
  *≻* ${prefix}lockcmd
  *≻* ${prefix}addmsg
  *≻* ${prefix}listmsg
  *≻* ${prefix}getmsg
  *≻* ${prefix}delmsg
  
  *ANONYMOUS MENU*
  *≻* ${prefix}anonymous
  *≻* ${prefix}start
  *≻* ${prefix}next
  *≻* ${prefix}keluar
  *≻* ${prefix}sendkontak
  
  *ISLAMIC MENU*
  *≻* ${prefix}iqra
  *≻* ${prefix}hadist
  *≻* ${prefix}alquran
  *≻* ${prefix}juzamma
  *≻* ${prefix}tafsirsurah
  
  *VOICE CHANGER*
  *≻* ${prefix}bass
  *≻* ${prefix}blown
  *≻* ${prefix}deep
  *≻* ${prefix}earrape
  *≻* ${prefix}fast
  *≻* ${prefix}fat
  *≻* ${prefix}nightcore
  *≻* ${prefix}reverse
  *≻* ${prefix}robot
  *≻* ${prefix}slow
  *≻* ${prefix}tupai
  
  *OWNER MENU*
  *≻* ${prefix}react [emoji]
  *≻* ${prefix}chat [option]
  *≻* ${prefix}join [link]
  *≻* ${prefix}leave
  *≻* ${prefix}block @user
  *≻* ${prefix}unblock @user
  *≻* ${prefix}bcgroup 
  *≻* ${prefix}bcall 
  *≻* ${prefix}setppbot  
  *≻* ${prefix}setexif
  *≻* ${prefix}setmenu
  *≻* ${prefix}setallmenu
  
  *THANKS TO*
  *≻* DikaArdnt
  *≻* FatihArridho
  *≻* ZeeoneOfc
  *≻* Yoga
  *≻* Riy
  *≻* Sanzy
  *≻* Nekel
  `
}

//—————「 Welcome 」—————//
exports.welcome = () => {
	return`Welcome
`
}

//—————「 Leave 」—————//
exports.leave = () => {
	return`Byeee
`
}

//—————「 Donasi 」—————//
exports.donasi  = (ownernomer) => {
	return`
—————「 *DONATE* 」—————

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti 👍

Thanks!

—————「 *SEWA | RUN BOT* 」—————

  *_SEWA BOT_* 
  *≻* Sewa Bot 15k (1 minggu)
  *≻* Sewa Bot 20k (1 bulan)
  *≻* Sewa Bot 25k (Permanen)

  *JADI BOT* 
  *≻* Jadi Bot 15k Tidak Owner (1 minggu)
  *≻* Jadi Bot + Owner 20k (1 bulan)
  *≻* Jadi Bot + Owner 25k (Permanen)

  *JASA RUN BOT*
  *≻* Run Bot 15k (1 minggu)
  *≻* Run Bot 20k (1 bulan)
  *≻* Run Bot 25k (Permanen)

  *Minat? Langsung chat aja ya cuy 🐦*

  *Contact person Owner* :
  wa.me/${ownernomer}
`
}

//—————「 Simple Menu 」—————//
exports.groupmenu = (prefix) => {
	return`
  *GROUP MENU*
  *≻* ${prefix}linkgroup
  *≻* ${prefix}ephemeral [option]
  *≻* ${prefix}setppgc  
  *≻* ${prefix}setname 
  *≻* ${prefix}setdesc 
  *≻* ${prefix}group [option]
  *≻* ${prefix}editinfo [option]
  *≻* ${prefix}add @user
  *≻* ${prefix}kick @user
  *≻* ${prefix}hidetag 
  *≻* ${prefix}tagall 
  *≻* ${prefix}antilink [on/off]
  *≻* ${prefix}mute [on/off]
  *≻* ${prefix}promote @user
  *≻* ${prefix}demote @user
  *≻* ${prefix}vote 
  *≻* ${prefix}devote
  *≻* ${prefix}upvote
  *≻* ${prefix}cekvote
  *≻* ${prefix}hapusvote
  `
}

exports.downloadermenu = (prefix) => {
	return`
  *DOWNLOADER MENU*
  *≻* ${prefix}tiktoknowm 
  *≻* ${prefix}tiktokwm 
  *≻* ${prefix}tiktokmp3 
  *≻* ${prefix}instagram 
  *≻* ${prefix}twitter 
  *≻* ${prefix}twittermp3 
  *≻* ${prefix}facebook 
  *≻* ${prefix}pinterestdl 
  *≻* ${prefix}ytmp3 
  *≻* ${prefix}ytmp4 
  *≻* ${prefix}getmusic 
  *≻* ${prefix}getvideo 
  *≻* ${prefix}umma 
  *≻* ${prefix}joox 
  *≻* ${prefix}soundcloud 
  `
}

exports.searchmenu = (prefix) => {
	return`
  *SEARCH MENU*
  *≻* ${prefix}play 
  *≻* ${prefix}yts 
  *≻* ${prefix}google 
  *≻* ${prefix}gimage 
  *≻* ${prefix}pinterest 
  *≻* ${prefix}wikimedia 
  *≻* ${prefix}ytsearch 
  *≻* ${prefix}ringtone 
  *≻* ${prefix}stalk [option] 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  *≻* ${prefix}animesearch 
  *≻* ${prefix}character 
  *≻* ${prefix}manga 
  *≻* ${prefix}playstore 
  *≻* ${prefix}gsmarena 
  *≻* ${prefix}jadwalbioskop 
  *≻* ${prefix}nowplayingbioskop 
  *≻* ${prefix}aminio 
  *≻* ${prefix}wattpad 
  *≻* ${prefix}webtoons 
  *≻* ${prefix}drakor 
  `
}

exports.randommenu = (prefix) => {
	return`
  *RANDOM MENU*
  *≻* ${prefix}coffe
  *≻* ${prefix}quotesanime
  *≻* ${prefix}couple
  `
}

exports.randomanimemenu = (prefix) => {
	return`
  *RANDOM ANIME MENU*
  *≻* ${prefix}loli
  *≻* ${prefix}neko
  *≻* ${prefix}waifu
  *≻* ${prefix}shinobu
  *≻* ${prefix}megumin
  *≻* ${prefix}bully
  *≻* ${prefix}cuddle
  *≻* ${prefix}cry
  *≻* ${prefix}hug
  *≻* ${prefix}awoo
  *≻* ${prefix}kiss
  *≻* ${prefix}lick
  *≻* ${prefix}pat
  *≻* ${prefix}smug
  *≻* ${prefix}bonk
  *≻* ${prefix}yeet
  *≻* ${prefix}blush
  *≻* ${prefix}smile
  *≻* ${prefix}wave
  *≻* ${prefix}highfive
  *≻* ${prefix}handhold
  *≻* ${prefix}nom
  *≻* ${prefix}bite
  *≻* ${prefix}glomp
  *≻* ${prefix}slap
  *≻* ${prefix}kill
  *≻* ${prefix}happy
  *≻* ${prefix}wink
  *≻* ${prefix}poke
  *≻* ${prefix}dance
  *≻* ${prefix}cringe
  *≻* ${prefix}anime
  *≻* ${prefix}waifu
  *≻* ${prefix}husbu
  *≻* ${prefix}neko
  *≻* ${prefix}shinobu
  *≻* ${prefix}waifus 
  *≻* ${prefix}nekos 
  *≻* ${prefix}trap 
  *≻* ${prefix}blowjob 
  `
}

exports.textpromenu = (prefix) => {
	return`
  *TEXT PRO MENU*
  *≻* ${prefix}3dchristmas
  *≻* ${prefix}3ddeepsea
  *≻* ${prefix}americanflag
  *≻* ${prefix}3dscifi
  *≻* ${prefix}3drainbow
  *≻* ${prefix}3dwaterpipe
  *≻* ${prefix}halloweenskeleton
  *≻* ${prefix}sketch
  *≻* ${prefix}bluecircuit
  *≻* ${prefix}space
  *≻* ${prefix}metallic
  *≻* ${prefix}fiction
  *≻* ${prefix}greenhorror
  *≻* ${prefix}transformer
  *≻* ${prefix}berry
  *≻* ${prefix}thunder
  *≻* ${prefix}magma
  *≻* ${prefix}3dcrackedstone
  *≻* ${prefix}3dneonlight
  *≻* ${prefix}impressiveglitch
  *≻* ${prefix}naturalleaves
  *≻* ${prefix}fireworksparkle
  *≻* ${prefix}matrix
  *≻* ${prefix}dropwater
  *≻* ${prefix}harrypotter
  *≻* ${prefix}foggywindow
  *≻* ${prefix}neondevils
  *≻* ${prefix}christmasholiday
  *≻* ${prefix}3dgradient
  *≻* ${prefix}blackpink
  *≻* ${prefix}gluetext
  `
}

exports.photooxymenu = (prefix) => {
	return`
  *PHOTO OXY MENU*
  *≻* ${prefix}shadow
  *≻* ${prefix}romantic
  *≻* ${prefix}smoke
  *≻* ${prefix}burnpapper
  *≻* ${prefix}naruto
  *≻* ${prefix}lovemsg
  *≻* ${prefix}grassmsg
  *≻* ${prefix}lovetext
  *≻* ${prefix}coffecup
  *≻* ${prefix}butterfly
  *≻* ${prefix}harrypotter
  *≻* ${prefix}retrolol
  `
}

exports.ephotomenu = (prefix) => {
	return`
  *EPHOTO MENU*
  *≻* ${prefix}ffcover
  *≻* ${prefix}crossfire
  *≻* ${prefix}galaxy
  *≻* ${prefix}glass
  *≻* ${prefix}neon
  *≻* ${prefix}beach
  *≻* ${prefix}blackpink
  *≻* ${prefix}igcertificate
  *≻* ${prefix}ytcertificate
  `
}

exports.funmenu = (prefix) => {
	return`
  *GAME & FUN MENU*
  *≻* ${prefix}simih
  *≻* ${prefix}bagaimanakah
  *≻* ${prefix}kapankah
  *≻* ${prefix}apakah
  *≻* ${prefix}bisakah
  *≻* ${prefix}rate
  *≻* ${prefix}wangy
  *≻* ${prefix}gantengcek
  *≻* ${prefix}cekganteng
  *≻* ${prefix}cantikcek
  *≻* ${prefix}cekcantik
  *≻* ${prefix}sangecek
  *≻* ${prefix}ceksange
  *≻* ${prefix}gaycek
  *≻* ${prefix}cekgay
  *≻* ${prefix}lesbicek
  *≻* ${prefix}halah
  *≻* ${prefix}hilih
  *≻* ${prefix}huluh
  *≻* ${prefix}heleh
  *≻* ${prefix}holoh
  *≻* ${prefix}jadian
  *≻* ${prefix}jodohku
  *≻* ${prefix}tictactoe
  *≻* ${prefix}delttt
  *≻* ${prefix}family100
  *≻* ${prefix}tebak
  *≻* ${prefix}math
  *≻* ${prefix}suitpvp [@tag]
  `
}

exports.primbonmenu = (prefix) => {
	return`
  *PRIMBON MENU*
  *≻* ${prefix}nomorhoki
  *≻* ${prefix}artimimpi
  *≻* ${prefix}artinama
  *≻* ${prefix}ramaljodoh
  *≻* ${prefix}ramaljodohbali
  *≻* ${prefix}suamiistri
  *≻* ${prefix}ramalcinta
  *≻* ${prefix}cocoknama
  *≻* ${prefix}pasangan
  *≻* ${prefix}jadiannikah
  *≻* ${prefix}sifatusaha
  *≻* ${prefix}rezeki
  *≻* ${prefix}pekerjaan
  *≻* ${prefix}nasib
  *≻* ${prefix}penyakit
  *≻* ${prefix}tarot
  *≻* ${prefix}fengshui
  *≻* ${prefix}haribaik
  *≻* ${prefix}harisangar
  *≻* ${prefix}harisial
  *≻* ${prefix}nagahari
  *≻* ${prefix}arahrezeki
  *≻* ${prefix}peruntungan
  *≻* ${prefix}weton
  *≻* ${prefix}karakter
  *≻* ${prefix}keberuntungan
  *≻* ${prefix}memancing
  *≻* ${prefix}masasubur
  *≻* ${prefix}zodiak
  *≻* ${prefix}shio
  `
}

exports.convertmenu = (prefix) => {
	return`
  *CONVERT MENU*
  *≻* ${prefix}toimage
  *≻* ${prefix}removebg
  *≻* ${prefix}sticker
  *≻* ${prefix}emojimix
  *≻* ${prefix}tovideo
  *≻* ${prefix}togif
  *≻* ${prefix}tourl
  *≻* ${prefix}tovn
  *≻* ${prefix}tomp3
  *≻* ${prefix}toaudio
  *≻* ${prefix}ebinary
  *≻* ${prefix}dbinary
  *≻* ${prefix}styletext
  `
}

exports.mainmenu = (prefix) => {
	return`
  *MAIN MENU*
  *≻* ${prefix}script
  *≻* ${prefix}ping
  *≻* ${prefix}owner
  *≻* ${prefix}menu
  *≻* ${prefix}delete
  *≻* ${prefix}infochat
  *≻* ${prefix}quoted
  *≻* ${prefix}listpc
  *≻* ${prefix}listgc
  *≻* ${prefix}listonline
  `
}

exports.databasemenu = (prefix) => {
	return`
  *DATABASE MENU*
  *≻* ${prefix}setcmd
  *≻* ${prefix}listcmd
  *≻* ${prefix}delcmd
  *≻* ${prefix}lockcmd
  *≻* ${prefix}addmsg
  *≻* ${prefix}listmsg
  *≻* ${prefix}getmsg
  *≻* ${prefix}delmsg
`
}

exports.anonymousmenu = (prefix) => {
	return`
  *ANONYMOUS CHAT*
  *≻* ${prefix}anonymous
  *≻* ${prefix}start
  *≻* ${prefix}next
  *≻* ${prefix}keluar
  *≻* ${prefix}sendkontak
  `
}

exports.islamicmenu = (prefix) => {
	return`
  *ISLAMIC MENU*
  *≻* ${prefix}iqra
  *≻* ${prefix}hadist
  *≻* ${prefix}alquran
  *≻* ${prefix}juzamma
  *≻* ${prefix}tafsirsurah
  `
}

exports.voicechargermenu = (prefix) => {
	return`
  *VOICE CHANGER*
  *≻* ${prefix}bass
  *≻* ${prefix}blown
  *≻* ${prefix}deep
  *≻* ${prefix}earrape
  *≻* ${prefix}fast
  *≻* ${prefix}fat
  *≻* ${prefix}nightcore
  *≻* ${prefix}reverse
  *≻* ${prefix}robot
  *≻* ${prefix}slow
  *≻* ${prefix}tupai
  `
}

exports.ownermenu = (prefix) => {
	return`
  *OWNER MENU*
  *≻* ${prefix}react
  *≻* ${prefix}chat
  *≻* ${prefix}join
  *≻* ${prefix}leave
  *≻* ${prefix}block @user
  *≻* ${prefix}unblock @user
  *≻* ${prefix}bcgroup 
  *≻* ${prefix}bcall 
  *≻* ${prefix}setppbot
  *≻* ${prefix}setexif
  *≻* ${prefix}setmenu 
  *≻* ${prefix}setallmenu 
  `
}

//tqto jan di hapus ya :) kalau mau nambahin nama kalian gpp.
exports.thanksto = () => {
	return`
  *THANKS TO*
  *≻* DikaArdnt
  *≻* ZeeoneOfc
  *≻* FatihArridho
  *≻* Yoga
  *≻* Riy
  *≻* Sanzy
  *≻* Nekel
  `
}