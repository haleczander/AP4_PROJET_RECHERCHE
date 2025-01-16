# 2025_01_16 : Priorisation des tâches

[1 - 5] : 1 = très important; 5 = moins important


## Interface

### Trouver une molécule
- [3] pouvoir renseigner une molécule par le dessin (schéma )
- [1] pouvoir renseigner une molécule par formulaire (excel bis)
- [1] pouvoir ajouter ou supprimer des réactifs
- [1] pouvoir ajouter ou supprimer des activations
- [1] pouvoir ajouter ou supprimer des traitements
- [1] pouvoir ajouter ou supprimer des solvants
- [1] pouvoir ajouter ou supprimer des catalyseurs
- [1] pouvoir renseigner le produit principal
- [1] pouvoir renseigner les produits secondaires
- [2] que ce soit plus rapide que de tout renseigner à la main dans l'excel
- [3] pouvoir renseigner une molécule par formule + nom 
- [3] renseigner une molécule par le CAS ( pour ceux qu'on connait )
- [1] pouvoir préciser les coefficients stœchiométriques
- [3] avoir un indicateur d'équilibre de l'équation

### UX
- [2] S'assurer que l'interface soit intuitif
- [2] S'assurer qu'il n'y ait pas trop d'informations



### Visualiser les résultats
- [1] pouvoir visualiser les résultats sous forme de graphique radar + histogramme
    - 6-7 indicateurs
    - EMR Tox PRMm Danger
- [1] pouvoir visualiser les résultats sous forme de tableau
- [5] pouvoir exporter les resultats ( recueil besoin sur le format à faire )



## Données
- [3] avoir une base de données des molécules
- [2] avoir un schéma de BDD solide
- [3] en tant que chercheur, pouvoir enrichir la base de données
- [4] avoir une méthode d'export de la bdd pour distribuer aux élèves
- [3] avoir une base de données des méthodes d'activation
- [5] avoir un pool de molécules fréquemment utilisées et minimal comme base  de départ pour les chercheurs
- [4] pouvoir supprimer les molécules
- [3] définir un serveur (springboot? postgres?)
- [3] mettre en place le serveur
- [3] disposer d'authentification pour accéder au serveur de bdd

## Code
- [1] test puis calcul de la masse des déchets
- [1] test puis calcul du coût massique du produit
- [1] test puis calcul du facteur environnemental molaire
- [1] test puis calcul du facteur environnemental massique
- [1] test puis calcul du facteur stoechiométrique
- [1] test puis calcul de l’inverse du facteur stoechiométrique
- [1] test puis calcul du rapport nréactif min / nréactif max
- [1] test puis calcul du coefficient CMR

- [1] test puis calcul de l'Economie de Carbone
- [1] test puis calcul de l'Economie d'Atomes 
- [1] test puis calcul du Rendement 
- [1] test puis calcul de l'Efficacité Massique de Réaction 
- [1] test puis calcul du PRMm 
- [1] test puis calcul du Coef. Danger 
- [1] test puis calcul du Coef. Tox
- [1] tester chaque formule de calcul automatiquement ( tests unitaires )
- [1] essayer de récupérer des cas tests
- [1] transmettre les données de l'interface au moteur de calcul
- [1] mettre en place les outils de test
- [1] mettre en place un pipeline ci

## Divers
- [3] Pouvoir moduler l'activation ( à définir avec mme BILLAMBOZ)
