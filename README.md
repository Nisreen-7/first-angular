# first-angular

Dans le app.component.ts, créer une nouvelle méthode changeName() qui à l'intérieur va assigner une nouvelle valeur à la propriété name (this.name)
	
Dans le app.component.html, rajouter un button et lui assigner au (click) la méthode changeName

## Dans le component ts,
rajouter une propriété display initialisée à false. Créer une méthode toggleDisplay qui va passer sa valeur de true à false ou de false à true
	
Dans le template, rajouter une div avec un paragraphe dedans, et mettre un ngIf pour faire que la div ne s'affiche que si display
	
Rajouter un bouton qui va déclencher le toggle au click

## Faire une  boucle dans le BoucleComponent
	
Dans le component boucle, déclarer une nouvelle propriété list dans laquelle on va mettre un tableau de strings
	
Dans le template, faire un ul avec un li dedans et sur le li, rajouter un ngFor pour répéter le li pour chaque élément de la list
	
Rajouter une méthode addItem dans le component qui va attendre un argument de type string et va le push à l'intérieur de la list
	
Dans le template, créer un bouton qui au click va appeler la méthode addItem en lui mettant "quelque chose" en argument
	
Faire un deuxième bouton qui appellera la même méthode mais avec une autre valeur en argument, et pourquoi pas un troisième bouton


## Faire un component compteur

Générer un nouveau component CounterComponent avec le ng g c
	
Dans ce composant, rajouter une propriété count, une méthode increment et une decrement
	
Dans le template, afficher le count et un bouton + et un - qui lanceront les méthodes associées
	
Dans le BoucleComponent, faire en sorte d'afficher un CounterComponent à côté de chaque élément du for
