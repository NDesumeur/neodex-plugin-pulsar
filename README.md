# Pulsar

Un jeu de rythme en cercle : les notes foncent vers une étoile depuis huit directions. Tourne le bouclier autour de l'étoile pour attraper les notes bleues, et frappe au bon moment les anneaux roses qui se resserrent. Joue les 200 morceaux du plugin Rythme, ou ta propre musique.

*English version: [README.en.md](README.en.md)*

## Comment jouer

- **Notes bleues** : elles arrivent par l'une des huit voies. Place le **bouclier** sur leur voie quand elles touchent l'anneau, avec la **souris** (le bouclier suit sa direction) ou les flèches **← →**. Un repère blanc s'allume au bout de la voie de la prochaine note ; sur des notes serrées, le bouclier n'a jamais de demi-tour impossible à faire.
- **Anneaux roses** : ils se resserrent vers le cercle du bouclier, qui s'allume en rose quand l'un approche. Frappe avec **Espace**, **clic**, **F** ou **J** quand l'anneau se pose dessus : tout devient blanc et « ESPACE ! » s'affiche au bon moment. Les anneaux viennent des notes longues et des accords du morceau.
- **Espace** : jouer · **P** : pause · **Plein écran** pendant la partie.

## Précision et points

Les anneaux sont jugés selon l'écart avec le bon moment : **Parfait** (environ ±90 ms), **Bien** (±180 ms), **OK** (±280 ms), sinon raté ; ils pardonnent deux fois plus que dans Rythme. Les notes bleues sont attrapées si le bouclier est sur leur voie à l'arrivée.

Les points d'une note augmentent de 1 % par note de combo, jusqu'au double à 100 notes de suite ; une note ratée remet le combo à zéro. À la fin, la précision donne une note : **S** à partir de 95 %, **A** à 90 %, **B** à 80 %, **C** à 70 %, **D** en dessous.

## Chansons et difficulté

L'onglet **Chansons** reprend les 200 morceaux de Rythme. La difficulté de chaque niveau est calculée d'après ses notes (densité, passages chargés, déplacements du bouclier), de 1 à 10 étoiles.

## Mes musiques

Dans **Mes musiques**, crée un niveau à partir d'un **fichier audio** importé ou d'une musique de ta bibliothèque **NeoMusic** : le jeu trouve son tempo et ses temps forts et en fait un niveau, à la **difficulté** choisie (1 à 10 étoiles).

## Réglages

- **Volume** de la musique.
- **Son des clics** : le son joué à chaque note touchée, au choix parmi 10 (Doux, Clap, Bois, Grosse caisse, Cristal, Pop, Charleston, Caisse claire, Pluck, Tok) ou aucun. Perdre un combo de 10 ou plus joue un son « combo cassé ».
- **Décalage** (−300 à +300 ms) : il se règle tout seul après chaque partie selon ton retard ou ton avance moyens ; tu peux aussi le changer à la main.

## Données et synchronisation

Tes scores et notes par niveau et tes réglages sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Pulsar → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
