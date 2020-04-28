## Rakenduse kasutamine
Külasta veebilehte: https://raulek.github.io/react-game/

või jooksuta kohalikult:
```
git clone https://github.com/RaulEK/react-game.git
cd react-game
npm install
npm start
```

## Üldine dokumentatsioon
Tööks kulus aega natuke alla 11 tundi. Kursori asemel käib mäng klaviatuuriga, kursori vältimiseks reaalajas ei suutnud ma piisavalt stabiilset *game-loopi* luua. Seega praegune mäng uuendab ainult siis kui mängija liigub. Kastid liiguvad küll suvaliselt aga ei ole teadlikud teiste asukohtadest, seega ei üksteist sihilikult ei väldi. Üldiselt läks töö edukalt ja oli kaasahaarav. Raskemad osad olid kasutaja sisendi põhjal korrektne *state-i* uuendamine ja mänguvälja ning elementide suuruste suhte paika saamine. Teiste projektidega võrreldes kulutasin rohkem aega CSS-ile.

## Lahenduse kirjeldus
Rakenduse tegin *ReactJS*iga. Kõik peamine kood on kaustades *src/components* (*Game.js, Piece.js, WinMenu.js*) ja *src/services* (*game-controller.js*). Lisaks on avaleht failis *App.js*. Põhifail on *Game.js*, mis vastutab mängu eest. *game-controller.js* fail sisaldab meetodeid kastide positsioonide arvutamiseks ja uuendamiseks. 
