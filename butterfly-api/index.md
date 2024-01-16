<h1 class="header-markdown">Butterfly Player API <span id="versions-player">Loading API</span></h1>

**Butterfly Player API** est une alternative JavaScript sans dépendance et peut servir d'alternative au framework Vidéo.js. Elle vous permet d'intégrer facilement un lecteur vidéo à votre site internet.

La **Butterfly Player API** est un thème démontrant les capacités du gestionnaire d'événements **Blueberry V0.3**. Le code source fourni dans la page [Github](https://github.com/FloaggFrance/Butterfly-Player-API) vous permettra de créer votre propre lecteur vidéo, sur mesure selon vos besoins. Bien sûr, les fonctionnalités disponibles dans le thème présent dans ce git ou bien cette page utilisent des fonctionnalités natives du gestionnaire.

## [Customisation Docs](./butterfly-api/customization)

> Ce si est une versions de développement

## Exemple interactif

<section class="video-size"><div id="player"></div></section>

Vidéo original [Rockstar mag'](https://www.youtube.com/watch?v=gMr32jqWjSE)

# Introduction.
## Créer un premier lecteur vidéo
Pour créer le lecteur Butterfly, vous devez d'abord appeler le fichier JavaScript avec le code ci-dessous. Il importera toutes les classes, fonctions et variables nécessaires pour créer le lecteur vidéo.

**Versions Stables**
```html
<script type="text/javascript" src="//floagg.info/package/player@release-butterfly"></script>
```


**Versions Beta**
```html
<script type="text/javascript" src="//floagg.info/package/beta-player@release-fluttershy"></script>
```

Une fois que vous avez ajouter les fichier Javascript, vous pouvez ajouter une balise ayant par exemple d'ID égal à player et ajouter cette ligne de code.
Intégrez la Butterfly Player API à votre site internet.

```html
<script type="text/javascript" src="//floagg.info/package/beta-player@release-fluttershy"></script>
<script type="text/javascript">
    Player.set('#player', {
        height: 720,
        width: 1280,
        src: 'https://www.siteweb.com/monfichier.mp4',
        thumbnail: 'https://www.siteweb.com/monfichier.png'
    });
    Player.load();
</script>
```

Si vous souhaitez intégrer plusieurs lecteurs vidéo à votre site internet, il est préférable de créer une instance pour chacun d'entre eux, comme suit :
```html
<script type="text/javascript">
    const MyInstanceAPI = new Fluttershy_API();
    MyInstanceAPI.set('#player', {
        height: 720,
        width: 1280,
        src: 'https://www.siteweb.com/monfichier.mp4',
        thumbnail: 'https://www.siteweb.com/monfichier.png'
    });
    MyInstanceAPI.load();
</script>
```
> Tout action réaliser sur la classe Player ou bien Kernel doit etre mise avant d'appeller le `Player.load()`

> Si vous rencontré un problèmes CSS, ajouter simplement cette ligne `Player.link_css_player = "https://floagg.info/package/stylesheet@v0.3-fluttershy"`

# Configuration avancées.
[SettingsObject](./butterfly-api/SettingsObject) attend un Object, celle si peut contenir une liste de paramètre (voir [ICI](./butterfly-api/SettingsObject)), qui permettra à la Butterfly Player API définir des paramétres pour l'interface ou bien pour noyeaux d'évenement.

```JS
Player.set(CssSelectorElement, SettingsObject)
```

## Propriété principal à savoir

[Height](./butterfly-api/SettingsObject#height) {.link-header} && [Width](./butterfly-api/SettingsObject#width) {.link-header}<br>
La propriété Height vas définire une hauteur à votre lecteur vidéo. Elle peut contenir une chaine de caractère entre 'auto' ou 'xx%', ou bien un entier.

Et Width vas définire une largeur à votre lecteur vidéo. Elle peut contenir une chaine de caractère entre 'auto' ou 'xx%', ou bien un entier.

[Src](./butterfly-api/SettingsObject#src) {.link-header}<br>
Est une propriété qui définiras une URL vidéo à votre lecteur, pour que il puisse la lire une fois charger sur la page.

[Thumbnail](./butterfly-api/SettingsObject#thumbnail) {.link-header}<br>
Est une propriété qui définiras une URL image à l'élement Thumbnail, pour que il puisse l'afficher lorsque la vidéos n'ais pas en lecture.