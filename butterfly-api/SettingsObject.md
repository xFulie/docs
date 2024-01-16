# SettingsObject.

### [Height](./butterfly-api/SettingsObject#height) && [Width](./butterfly-api/SettingsObject#width) {.header-markdown .link-codes}
La propriété Height vas définire une hauteur à votre lecteur vidéo. Elle peut contenir une chaine de caractère entre 'auto' ou 'xx%', ou bien un entier.

Et Width vas définire une largeur à votre lecteur vidéo. Elle peut contenir une chaine de caractère entre 'auto' ou 'xx%', ou bien un entier.

Lorsque les deux sont définit, celle si fait appel à la method gSize de Blueberry.

### [Src](./butterfly-api/SettingsObject#src) {.header-markdown .link-codes}
Est une propriété qui définiras une URL vidéo à votre lecteur, pour que il puisse la lire une fois charger sur la page.

**A noter : Si une liste Audio est définit, cette propriété devient plus la source principal charger par le lecteur. **

### [Thumbnail](./butterfly-api/SettingsObject#thumbnail) {.header-markdown .link-codes}
Est une propriété qui définiras une URL image à l'élement Thumbnail, pour que il puisse l'afficher lorsque la vidéos n'ais pas en lecture.

### [Title](./butterfly-api/SettingsObject#title) {.header-markdown .link-codes}
Est une propriété qui définiras un titre à votre lecteur vidéos qui s'afficheras dans la coin gauche.

### [Sub_title](./butterfly-api/SettingsObject#sub_title) {.header-markdown .link-codes}
Est une propriété qui définiras un sous-titre à votre lecteur vidéos qui s'afficheras sous le titre du lecteur (si il y en as) dans la coin gauche.

### [Quality](./butterfly-api/SettingsObject#quality) {.header-markdown .link-codes}
Est une propriété qui définiras une liste de nom de qualité au paramettre du lecteur vidéo.

### [Extension](./butterfly-api/SettingsObject#extension) {.header-markdown .link-codes}
Est une propriété qui définiras une liste d'extension au lecteur vidéo, pour que il puisse charger la vidéo au type mime approprier à votre lecteur vidéo.

### [Subtitle](./butterfly-api/SettingsObject#subtitle) {.header-markdown .link-codes}
Est une propriété qui définiras une liste de nom de sous-titre au paramettre du lecteur vidéo.

### [Audio](./butterfly-api/SettingsObject#audio) {.header-markdown .link-codes}
Est une propriété qui définiras une liste de nom de fichier audio au paramettre du lecteur vidéo.

### [DefaultQuality](./butterfly-api/SettingsObject#defaultquality) {.header-markdown .link-codes}
Est une propriété qui définiras une qualité vidéo par défault à votre lecteur vidéo.


## Subtitle
La Butterfly Player API est capable d'afficher des sous-titres au format VTT seulement pour le moment.

```JS
Player.set('#player', {
    height: 720,
    width: 1280,
    src: 'https://www.siteweb.com/monfichier.mp4',
    thumbnail: 'https://www.siteweb.com/monfichier.png',
    subtitle: [
        {
            name: "Français",
            lang: "fr",
            url: "./mes-sous-titre/frencais.vtt"
        }
    ]
});
```

## Quality

Pour afficher un menu de qualité vidéo, il faudra utiliser le Regex `$({quality})`. La Butterfly Player API remplacera le `$({quality})` par le nom de qualité défini dans le tableau 'quality'.

> Le noyau d'événements vidéo Blueberry ne supporte pas le Regex, cela est géré par la version Fluttershy de la Butterfly Player API.

```JS
Player.set('#player', {
    height: 720,
    width: 1280,
    src: 'https://www.siteweb.com/monfichier_$({quality}).mp4',
    thumbnail: 'https://www.siteweb.com/monfichier.png',
    quality: ['720p', '480p', '360p']
})
```

## Audio
Comme pour la gestion de la qualité vidéo, il vous suffit simplement d'ajouter `$({audio})` et la Butterfly Player API remplacera la source vidéo par celle sélectionnée dans le menu vidéos.

> Lorsque l'option/tableau 'audio' est défini, l'option 'src' devient facultative, car le lecteur vidéo va faire passer en priorité la première ligne du tableau 'audio'.

```JS
Player.set('#player', {
    height: 720,
    width: 1280,
    thumbnail: 'https://www.siteweb.com/monfichier.png',
    quality: ['720p', '480p', '360p'],
    audio: [
        {
            id: "vf",
            name: "Français",
            src: 'https://www.siteweb.com/monfichier_$({quality}).mp4'
        }
    ]
})
```

## Extension
En ajoutant `$({extension})`, la Butterfly Player API mettra l'extension adaptée au navigateur parmi la liste fournie dans le tableau des extensions.

```JS
Player.set('#player', {
    height: 720,
    width: 1280,
    thumbnail: 'https://www.siteweb.com/monfichier.png',
    quality: ['720p', '480p', '360p'],
    extension: ['mp4', 'webm'],
    audio: [
        {
            id: "vf",
            name: "Français",
            src: 'https://www.siteweb.com/monfichier_$({quality}).$({extension})'
        }
    ]
})
```