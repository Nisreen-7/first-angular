# FirstAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## exo
Créer un nouveau component FirstComponent dans lequel on mettra tout ce qui n'est pas un component dans le AppComponent actuellement (template et propriétés/méthodes)
	
Configurer le router en suivant le tuto
	
Faire 4 route/page, une pour / qui pointe sur FirstComponent, une sur /boucle qui pointe sur BoucleComponent, une sur /counter qui pointe sur CounterComponent et une pour /calcul pour CalculComponent


## Tableau de Rooms

Dans le dossier app, créer un fichier entities.ts et dedans créer une interface Room qui aura les propriétés suivante : un id en number, un name en string, un surface en number et un opened en boolean (ne pas oublier de export l'interface pour pouvoir s'en servir dans d'autre fichiers)
	
Générer un component RoomListComponent et créer une nouvelle route sur /rooms qui pointera dessus
	
Dans ce component créer une propriété de type Room[] et dedans mettre un array avec 2-3 rooms par défaut
	
Dans le template, faire une boucle pour afficher les salles avec leurs informations
	
Faire en sorte que si la room est ouverte, on affiche son nom en vert, sinon on l'affiche en rouge

--nous creeons un itemComponent (son) de listComponent(father)


## Style et ouverture/fermeture de la salle


	
Dans le room-item.component, rajouter un bouton qui va nous permettre d'ouvrir ou fermer la room
	
Dans le css, faire en sorte de changer un peu l'affichage, en mettant par exemple une bordure avec du padding ou autre
	
Dans le css du room list, faire en sorte d'afficher les rooms sous forme de flexbox

Formulaire room

Dans le room-list component, rajouter une propriété newRoom avec une Room dedans avec des valeurs par défaut
	
Créer un formulaire et liés les champs de la newRoom à des inputs
	
Créer une méthode addRoom qui va push newRoom dans l'array et faire en sorte de l'appeler au submit du formulaire

## Supprimer une room via un ouput

Dans le room-item rajouter une button à l'intérieur de l'article et lui mettre un event au click
	
Dans le ts du room-item, ajouter un nouvel output delete qui va être un event emitter avec une Room à l'intérieur
	
Créer une méthode buttonClick dans le ts du room-item toujours, et dans cette méthode, faire en sorte de déclencher l'output delete, en lui mettant la room en valeur (on assigne ensuite le buttonClick à notre button dans le template)
	
Côté room-list, dans le ts, on crée une méthode deleteRoom(room:Room) et dans cette méthode on va faire le code suivant : this.list = this.list.filter(item => item != room);
	
Assigner le deleteRoom au (delete) de notre app-room-item
