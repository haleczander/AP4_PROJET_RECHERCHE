# Éléments de cadrage

## 1. Cartographie des acteurs : Enjeux

### Acteurs
- Chercheurs / scientifiques
- Etudiants en chimie
- Presse scientifique ( affichage des graphs pour les articles )
- Fabricants de l'industrie chimique
- Clients de l'industrie chimique
- Agences de régulation de l'industrie chimie ( sécurité, )
- Acteurs environnementaux
- Acteurs du recyclage
- Acteurs du traitement des déchets ( décharge, recyclé, ... )
- Acteurs de la chaine de production ( ceux qui collectent, ceux qui transportent, fabricants cf plus haut )
- Junia ( infrastructure )

### Analyse des enjeux

- Comparer les coûts environnementaux ou pour la santé enre les réactions en fonction des conditions de récolte et de fabrication...

#### Chercheurs / Scientifiques / Étudiants
- Disposer d'un outil simple et rapide d'utilisation pour mesurer l'impact environnemental et en sécurité des réactions chimiques
- Disposer d'un outil qui permette aussi d'être enrichi par la suite pour intégrer d'autres indicateurs

#### Acteurs environnementaux / Clients de l'industrie chimique
- Pouvoir mesurer l'impact environnemental et en sécurité de telle ou telle réaction chimique


## 2. Benchmarking : Solutions existantes
- Recherche manuelle des composants chimiques
- Base de données PubChem
- Base de données de l'INRS
- Chemsketch pour récupérer les infos sur les molécules

- Feuille de calcul de l'Université de Grenoble 

- Réalisation des calculs à la main

- Green Chemistry Assistant (GCA), http://fusion.stolaf.edu/gca


### Attribuer une note aux solutions existantes
A-F : A=Bien, F=Moins Bien

| solution | degré technicité | maturité | prix | facilité d'utilisation | performance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| collecte des données manuelle | F | F | A | D | F |
| utilisation d'une base de données | D | D | A | C |
| calcul à la main | F | F | A | F | F | 
| feuille de calcul | C | B | A | D | D | 
| Green Chemistry Assistant | B | B | A | D | C |

### Analyser les résultats

Actuellement il n'existe aucune solution clef en main qui rassemble toutes les étapes, de la collecte des données à la réalisation du calcul. 

Plusieurs solutions existent pour la collecte des données.

La réalisation des calculs peut se faire à la main ce qui est extrêmement laborieux, ou à l'aide d'une feuille de calcul, qui a le mérite de faciliter l'opération mais dont l'utilisation n'est pas très intuitive et ne permet pas la modification de certains paramètres tels que l'apport d'énergie.

## 3. Positionnement : Challenges

### Lister les défauts de l'existant
cf 2. Analyser les résultats

### Identifier les challenges ( techniques, usages, écologie ) "Comment faire pour que la solution soit plus/moins ...
- Collecte / Récupération automatique des données :
    - Soit via BDD existante et la recherche d'une API
    - Soit via dessin de la molécule : recherche d'une solution déjà existante à intégrer à notre solution ou développement en cas de non-existance

- Réalisation d'un interface ergonomique, facile d'utilisation et intuitif.

- La solution ne doit pas être trop gourmande en ressources, car elle s'intégère dans une démarche environnementale (chimie verte). Le choix de l'architecture et de l'acces au moteur de calcul ainsi qu'à la base de données doit être le moins polluant possible.

- La confidentialité n'est pas à ignorer, l'accès au moteur de calcul ne doit paspouvoir se faire de n'importe où. Les résultats des calculs doivent rester confidentiels et uniquement à destination de la personne qui les réalise. La solution ne devra être accessible que sur le réseau Junia.

- Mise en place des infrastructures pour l'implémentation de notre solution. A qui s'addresser pour la mettre en oeuvre.

- L'outil devra permettre la comparaison entre différents calculs ayant des paramètres différents, via l'affichage de graphiques radars en 2D/3D et de tableaux. ( notion d'historisation, création de dossiers de calculs? mise en pause et reprise des calculs )


## 4. Bête à cornes : Formulation du besoin

### Clarifier le besoin
#### A qui mon produit rend-il service ?
#### Sur quoi agit mon produit ?
#### Quel est le but de mon produit ?

### BAC 1
USAGER: Les acteurs de la recherche scientifique
SOLUTION: Le moteur de calcul
MATIERE D'OEUVRE: La réalisation des calculs

FONCTION: Le moteur de calul facilite la réalisation des calculs de chimie verte aux acteurs de la recherche chimiques/scientifique

### BAC 2
USAGER: Les acteurs de la recherche scientifique
SOLUTION: La base de données des composants chimiques
MATIERE D'OEUVRE: La collecte des données

FONCTION: La base de données des produits chimiques facilite la collecte des données nécessaires aux calculs en chimie verte aux acteurs de la recherche chimiques/scientifique


### BAC 3
USAGER: Les acteurs de la recherche scientifique
SOLUTION: L'affichage des résultats (+ sauvegarde)
MATIERE D'OEUVRE: L'interprétation

FONCTION: L'affichage des résultats facilite l'interprétation des résultats des calculs de chimie verte aux acteurs de la recherche chimiques/scientifique

### BAC 4
USAGER: Les enseignants / étudiants
SOLUTION: L'interface
MATIERE D'OEUVRE: L'"accessibilité" des concepts de chimie

FONCTION: L'interface utilisateur facilite la compréhension des concepts de la chimie verte


### BAC 5
USAGER: Les futurs développeurs
SOLUTION: L'architecture de l'application
MATIERE D'OEUVRE: L'enrichissement de la solution

FONCTION: L'architecture de notre solution devra permettre aux futurs développeurs de pouvoir enrichir la solution sans avoir à la repenser intégralement.


## 5. Note de cadrage
• Introduction : description, importance, parties prenantes
• Contexte : raison d’être, historique
• Objectifs du projet : généraux et spécifiques
• Portée du projet : livrables et exclusions
• Contraintes et hypothèses
• Approche du projet : méthodologie d’exécution, organigramme 
• Risques principaux et stratégies pour les restreindre
• Gestion des parties prenantes : identification et cartographie des parties prenantes du projet et leurs rôles
• Budget et calendrier : grandes catégories de dépenses, calendrier (grandes étapes et principales dates)