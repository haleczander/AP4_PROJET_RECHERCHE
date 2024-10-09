## ZINC - HAMAD Amyr 09/10/2024

### Qu'est-ce que c'est ZINC ?

**ZINC** est une base de données publique contenant des informations sur des molécules disponibles dans le commerce, principalement utilisée pour le criblage virtuel et la modélisation moléculaire. Elle a été développée par l'Université de Californie à San Francisco (UCSF) et est largement utilisée dans la recherche en chimie médicinale, en biologie structurale et en chimie computationnelle pour identifier des composés potentiellement bioactifs.

### Quelles données peut-on trouver dessus ?

ZINC propose des informations détaillées sur des millions de molécules disponibles dans le commerce, notamment :

- **Formule moléculaire** : Composition chimique des composés.
- **Structure chimique** : Visualisation des structures en 2D et 3D.
- **SMILES et InChI** : Représentation textuelle des molécules.
- **Fournisseurs commerciaux** : Informations sur où et comment acheter les composés.
- **Propriétés physico-chimiques** : Poids moléculaire, LogP, solubilité, etc.
- **Données de disponibilité** : Prix et quantités disponibles auprès des fournisseurs.

### Pourquoi faire ?

- **Criblage virtuel** : Utiliser les données pour identifier des molécules candidates dans le cadre du développement de médicaments ou de projets de chimie verte.
- **Modélisation moléculaire** : Explorer des structures chimiques et simuler leurs interactions avec des cibles biologiques.
- **Recherche scientifique** : Accéder à une vaste base de molécules pour tester des hypothèses en laboratoire ou en chimie computationnelle.
- **Industrie pharmaceutique** : Trouver des molécules commercialement disponibles pour des essais biologiques ou chimiques.

## Solutions numériques

### Accès via l'interface web de ZINC

ZINC permet une recherche facile à travers son interface web, où les utilisateurs peuvent explorer des molécules par structure, nom ou propriétés chimiques.

- **Recherche avancée** : Vous pouvez effectuer des recherches par structure moléculaire, SMILES, InChI, ou nom du composé.
- **Visualisation des structures chimiques** : Voir des représentations en 2D et 3D directement dans le navigateur.
- **Téléchargement de données** : Exporter des informations sur les molécules sous divers formats, y compris SDF, SMILES et CSV.

### Fonctionnalités de l'API :

ZINC met à disposition une API puissante qui permet d'accéder aux informations moléculaires et de les intégrer dans des pipelines de recherche ou d'analyse.

- **Rechercher des composés par structure chimique, nom, SMILES, ou InChI**.
- **Télécharger des ensembles de données structurées** pour des analyses locales.
- **Accéder aux informations sur les fournisseurs commerciaux** pour acheter directement des composés.

### Accès FTP : ftp://zinc15.docking.org/

**Données disponibles** :

- **Téléchargement de molécules commerciales** : Fichiers de structures au format SDF, SMILES, CSV.
- **Données d’accessibilité** : Informations commerciales, y compris les prix et les fournisseurs.
- **Sous-ensembles spécifiques** : Accès à des sous-ensembles de molécules classées par propriétés chimiques ou bioactives.

**Utilisation typique** :
- Criblage virtuel et modélisation moléculaire dans des projets de recherche en chimie et biologie structurale.
- Analyse des propriétés chimiques pour identifier des molécules respectueuses de l'environnement ou à potentiel thérapeutique.

### Python ?

ZINC peut être exploité en Python via des scripts utilisant son API ou en téléchargeant des ensembles de données structurées pour une utilisation hors ligne.

**Fonctionnalités** :

- Automatiser la recherche de composés par structure chimique, nom ou identifiant.
- Extraire des données commerciales et chimiques pour des analyses personnalisées.
- Intégrer les informations ZINC dans des projets de chimie computationnelle ou de criblage virtuel.
