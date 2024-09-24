# Recueil des besoins

## I. Organisation des rencontres
- Contact par Teams préféré
- Gère plusieurs projets d'étudiants
- Ne pas hésiter à solliciter si blocage
- Présence: 08h00-16h00 ( Jeudi -> 17h45 )

- Prochaine rencontre : 
    - Bibliographie
    - Propositions et argumentaire

## II. Notion de chimie verte ( "Verte" = Greenwashing )
Évaluer l'impact environnemental :
- Respectueux de l'environnement, 
- Réduire l'usage de substances nocives
- Réduire les déchets

Economie d'atome : ratio atomes PRODUIT / DÉCHETS

6 Paramètres de chimie verte qui sont des équations

### II.A Plus loin
- intégrer les aspects énergétiques 
- évaluation de la dangerosité
- ACV analyse cycle vie ( se combiner avec cymapro? )
- Indicateur sur l'origine de la ressource
- Recyclabilité
- Avec les paramètres qui évoluent

Ex: Phénol : 90% de rendement mais pour 80g de phénol => 150g de déchet PAS BIEN

## III. Le besoin fondamental
Actuellement les calculs sont faits à la "main", longs et fastidieux.
Besoin d'un outil qui à partir des paramètres d'entrée ( molécules, rendement, temps de réaction, mode d'apport énergétique ) fournit des résultats sous forme d'un tableau et d'un graphique type radar pour chacun des 6 critères.

Une part de la difficulté vient de la recherche des informations des molécules qui n'est pas automatisée. Le rendement, le temps de réaction et le mode d'apport énergétique sera renseigné par le chercheur.

Les utilisateurs ne seront pas des informaticiens mais seront des chimistes.

### III.A Indispensable
La réalisation du calcul à partir de l'équation bilan et des paramètres renseignés. 

Des feuilles de calcul Excel créées par l'Université de Bordeaux existent et contiennent les formules. Leur usage n'est pas assez convivial et modulable.

### III.B Dans un second temps
Les données des molécules sont disponibles à partir de diverses sources, leur collecte et leur utilisation peut être compliquée. Il existe le fichier INRS qui recense toutes les molécules avec un identifiant (CAS) ainsi que la masse molaire, la dangerosité, ...

Les données pour le calcul devront être renseignées automatiquement à partir de ces sources ou d'une base mise en place qui sera enrichie. Les molécules pourront être sélectionnées à partir du CAS ou à partir d'un schéma ( solution plus désirable ), le schema nécessitera la récupération des paramètres de calculs associés ( masse molaire, etc... ).

L'interface devra pouvoir afficher les informations des molécules sélectionnées.


## IV. Les cas d'usages / Confidentialité
Le programme sera utilisé par les chercheurs et par des étudiants en TP.

Le programme pourra être utilisé dans le cadre de recherche financées par des tiers et le module de calcul ne pourra pas être accessible par n'importe qui. L'utilisation du programme se limitera au réseau (sens informatique) Junia. 

Les résultats devront également pouvoir être exportés à des fins d'analyse et de comparaison, mais uniquement sur le poste du chercheur. Les résultats sont confidentiels.

Dans l'idéal, les résultats d'un même calcul en modifiant certains paramètres pourront être comparés sur un graphique 3D avec des plans rejoignant les arrêtes correspondantes pour différents graphiques radars produits.

## V. Direction graphique
La charte Junia peut-être respectée. L'interface doit être intuitif pour des chercheurs ( mise en évidence des informations à saisir )

## VI. Informations utiles
### VI.A Notions basiques de chimie
- Ce qui rentre = ce qui disparaît = REACTIF
- Ce qui persiste : le solvant, le catalyseur ( placés sur la flèche avec le temps de réaction et la température )
- Les produits et déchets

### VI.B Chemsketch
L'application Chemsketch peut être utile afin de récupérer les paramètres de calcul à partir d'un schéma.
