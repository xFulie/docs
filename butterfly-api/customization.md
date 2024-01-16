# Custome HMI / UI
Depuis la versions 0.7.1 Fluttershy, la **Butterfly Player API** dispose d'une classe HMI appeler `new Flutershy_HMI()`, celle si vas vour permettre de personnaliser l'Human Machine Interface ou User Interface.

l'HMI est celle qui affiche les controls et évenement lier à l'interface comparès à la Gestionnaire d'évenement Blueberry qui lui gère les évenement lier à contenu media.

## Où trouver la classe ?
Vous pouvez trouver la classe qui gère l'HMI en recherchant une classe nommer "FluttershyHMI" ou bien en allant sur le GitHub en allant l'HMI et ouvrant le fichier *fluttershy.HMI.js*

## Modifier uniquement la couleurs
Lorsque la **Butterfly Player API** s'initialise, elle vas créer une balise `<style type="text/css">:root { --color-primary-player-butterfly: ${this.colorPlayer}; --color-text-player-butterfly: ${this.colorPlayerText}; }</style>` dans la page dans l'élément `<head>`.

Vous pouvez remplacer la couleur du lecteur, par vos couleurs personnel en utiliser les propriété si-dessous.

```JS
MonInstance.colorPlayer = '#f8f200' // Change la couleur de fond (bouton, progress-bar)
MonInstance.colorPlayerText = '#000' // Chnage la couleur du texte
```


## Modifier uniquement le Stylesheet
Lorsque la **Butterfly Player API** s'initialise, elle vas créer une balise `<link rel="stylesheet" type="text/css" href="${this.link_css_player}">` dans la page dans l'élément `<head>`.

Vous pouvez remplacer le fichier CSS charger, par votre fichier personnel en utiliser le propriété si-dessous.

```JS
MonInstance.link_css_player = 'myFile.css'
```