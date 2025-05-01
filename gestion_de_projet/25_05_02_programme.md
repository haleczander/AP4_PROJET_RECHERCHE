# Vendredi 02 mai
Il y a un RDV avec Muriel sur le créneau de mardi 06 mai après midi pendant lequel il y aura une démo et des retours de sa part sans doute.
Cette séance projet est donc la dernière avant le retour client et il y a encore pas mal de travail à faire.
Le nombre d'heures dédiées restant étant assez faible, je ne pense pas qu'il soit judicieux d'y aller tous ensemble. 
J'irai donc avec Flo qui va prendre le lead sur les aspects UX-UI.

## Programme de demain
1. Pensez bien à *rebase* depuis `develop-web-avance0`.
2. Arrêtez toute forme de CSS, une passe d'uniformisation va avoir lieu

## Rappels CSS
- VH, VW : uniquement pour dimensionner la largeur ou la hauteur des sections/div selon l'écran de l'utilisateur
- % : uniquement pour la largeur et hauteur des sections/div selon la taille de l'élément parent
- px : épaisseurs de bordure, rayons de bordure
- em/rem : taille du texte, marges, padding
- ch : pour dimensionner la largeur selon un nombre de caractères

### GZ : 
Je ne sais pas où tu en es par rapport aux molécules supplémentaires à récupérer.
Tu peux déjà commencer par t'assurer que toutes celles que tu avais utilisées pour les différents cas tests des feuilles Excel sont renseignées.
Toujours en recoupant les infos avec le site de l'INRS.
Actuellement il y a 16 molécules renseignées, l'objectif serait d'atteindre une 50aine dont 10 catalyseurs communs et 10 solvants communs.


### Fabien :
Le rebase est d'autant plus important, les derniers commits permettent de renseigner une réaction par formulaire.
Tu pourras à partir de là:
1. Laisser BIGINELLI sur this.reaction
2. Utiliser this.resultats pour l'affichage des résultats
3. Enrichir par formulaire la réaction et relancer le calcul pour s'assurer que les résultats se mettent bien à jour.
4. Nettoie ton code à outrance, n'hésite pas à demander à chat s'il peut: 
	1. Refactoriser
	2. Faire l'inventaire de ce qui peut être mis dans:
		- un fichier utilitaire dédié (à créer : resultats.utils.js)
		- un service dédié (à crée : resultats.service.js)
Il faudra tester toutes les fonctions mises dans des .utils et .service dans le fichier de tests associé. N'hésite pas à demander à chat de te générer les fichiers de tests en lui fournissant des exemples déjà existants.
Quand c'est bien à jour MP moi et crée une Pull Request.

### Amyr :
Refonte du CSS : crée des styles réutilisables ( des variables et des classes qui utilisent ces variables ) pour :
- Titres
- Des tableaux
- Différents niveau pour les zones en arrière plan (conteneurs)
- Boutons : deux nuances
- formulaires (conteneur) et inputs

Tu peux te servir de la page d'accueil pour les tests comme elle est actuellement vide de tout style.

### Flo :
Continue sur la visualisation graphique de la réaction, uniquement du JS dans le canvas. 
J'essaierai de te capter pour une revue intermédiaire et des nouvelles indications si besoin.

### Romain :
Mets en pause le CSS et à partir de la branche `develop-web-avance0` sur l'accueil:
1. T'assurer qu'il y a les bons champs dans le formulaire de réaction pou chacune des étapes
	- S'il en manque ou s'il y en a en trop, il faudra éditer les fonctions _createMoleculeReaction et _createActivationReaction. Dans le JS, ne supprime aucune ligne de type formData.get(…), même si tu as retiré le champs d'un form. Par conttre tu en ajoutes autant que tu veux. Attention cependant à bien définir name dans le HTML.
2. Identifier les vérifications de données à faire ( obligatoire, int, float, min, max, …)
3. Regarder les validators (webapp\src\validators\impl)
4. Créer les validateurs manquants (n'hésite pas à demander  à chatGPT de t'aider en lui donnant des exemples de validateurs déjà créés )
5. Si tu as créé un validateur, crée le test associé (webapp\tests\validators) en t'inspirant de ce qui existe déjà (encore une fois demande à chatGPT) 


