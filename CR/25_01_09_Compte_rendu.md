# Compte Rendu de Réunion

## Date : 09/01/2025
## Participants :
- **Présentiel :**
  - Herssens Alexandre
  - Decroix Floriant
  - Grez Clément
  - Sacepe Fabien
- **Distanciel :**
  - Mme Billamboz 
  - Hamad Amyr
  - Lannoy Romain

---

### Points abordés :

#### 1. Gestion du planning
Le planning des rendus reste à définir suite aux décisions prises ce jour.

Contacter Mme Billamboz dès la moindre question blocante.

#### 2. Solvants et molécules
Les solvants sont souvent les mêmes (une dizaine environ).

Les réactifs : diversité très importante et parfois la molécule n'existe pas encore, ce qui peut poser un problème d'identification

#### 3. Base de données maison
Création d'une base de données maison

Les données incluront les molécules et leurs propriétés :
  - Structure chimique (identifiées par le dessin ou numéro CAS) : unique pour chaque molécule. Possibilité d'identifier par le couple nom et formule brute de la molécule.
  - Intégrer des données fréquemment utilisées d'une base existante tout en limitant son volume pour éviter le stockage d'informations inutiles.

#### 4. Gestion des coûts
Peu d'importance accordée à la conservation des prix des molécules. Ceux ci varient, notamment selon le fournisseur.
Dans une réaction chimique les réactifs sont constants, le seul paramètre qui est susceptible d'évoluer est la technologie d'activation. Son coût peut être intéressant à stocker.

#### 5. Réactions chimiques
Vérifier que les réactions chimiques sont équilibrées :
  - Tous les atomes des réactifs doivent être retrouvés dans les produits et sous-produits. Le programme pourrait afficher le bilan atomique.
  - Les coefficients stœchiométriques doivent être pris en compte.

#### 6. Partie traitement
Ajouter une partie traitement comprenant solvants et additifs dans les calculs :
  - Prendre en compte les solvants ou additifs supplémentaires. La phase de traitement peut générer des déchets.
  - Considérer l'ajout d'une vue dédiée au traitement.

#### 7. Maquette et affichage
Sur la maquette :
  - Regrouper produits et déchets.
  - Placer les solvants avec les catalyseurs,plusieurs catalyseurs ou solvants peuvent être utilisés.

#### 8. Technologie et développement
Choix de faire une architecture monolithique avec utilisation de JavaScript.
Cette solution permettra de distribuer une application autonome car exécutable dans un navigateur hors connexion.

---

### Questions discutées :
1. Quels solvants et molécules sont les plus récurrents à inclure (10 principaux) ?
2. Comment  intégrer les données moléculaires ?
3. La base de données locale permet de diminuer l'utilisation réseau, mais quel est le volume optimal à intégrer ?

---

### Actions à entreprendre :
- Vérification des équilibres chimiques et des coefficients stœchiométriques.
- Mise en place des calculs pour intégrer les solvants, additifs, et déchets.
- Définir les priorités pour le développement et la maquette.
- Organisation du planning et suivi des contacts.

---

**Fin de la réunion**
