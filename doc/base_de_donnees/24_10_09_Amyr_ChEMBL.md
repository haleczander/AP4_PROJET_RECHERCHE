## ChEMBL - HAMAD Amyr 09/10/2024

### Qu'est-ce que c'est ChEMBL ?

ChEMBL est une base de données publique gratuite spécialisée dans les informations sur la bioactivité de petites molécules utilisées dans la recherche biomédicale. Elle est maintenue par l'European Molecular Biology Laboratory (EMBL), via l'European Bioinformatics Institute (EBI). ChEMBL est utilisée par des chercheurs, scientifiques et industriels pour trouver des données biologiques et chimiques qui soutiennent le développement de médicaments et les études de bioactivité.

### Quelles données peut-on trouver dessus ?

ChEMBL propose des informations approfondies sur des molécules bioactives, y compris :

Structure chimique : Représentation 2D et 3D des composés.
Données biologiques : Bioactivité, cibles biologiques, interactions avec les protéines.
Propriétés physico-chimiques : LogP, solubilité, poids moléculaire.
Informations pharmacologiques : Indications thérapeutiques, essais cliniques.
Identifiants uniques : Comme ChEMBL ID pour les composés, les cibles et les activités.

### Pourquoi faire ?

Recherche en développement de médicaments : ChEMBL est une ressource clé pour identifier des molécules avec un potentiel thérapeutique.
Biologie des systèmes : Étudier l'interaction des molécules bioactives avec des cibles biologiques spécifiques.
Chimie médicinale : Trouver des informations sur les interactions médicament-cible et optimiser les composés candidats.
Criblage pharmacologique : Accéder à des données sur les essais biologiques et biochimiques pour évaluer l'efficacité des composés.

## Solutions numériques

### Accès via l'interface web de ChEMBL

La manière la plus simple d'utiliser ChEMBL est via son interface web conviviale. Vous pouvez effectuer des recherches détaillées sur des molécules bioactives, des cibles biologiques et des essais biologiques.

Recherche avancée : Recherche par structure chimique, activité biologique, cible spécifique ou identifiant ChEMBL.
Téléchargement de données : Vous pouvez exporter des résultats sous divers formats comme CSV, SDF, etc.
Visualisation des activités biologiques : Explorer les résultats des essais biologiques associés aux molécules d'intérêt.

### Fonctionnalités de l'API :

ChEMBL offre une API complète permettant d'interagir avec la base de données pour des besoins spécifiques :

Rechercher des molécules, des cibles biologiques ou des essais par structure chimique ou nom.
Extraire des données sur les propriétés bioactives et pharmacologiques.
Accéder à des informations sur les essais cliniques, les interactions moléculaires, et les activités biologiques.
Accès FTP : ftp://ftp.ebi.ac.uk/pub/databases/chembl/

### Données disponibles :

Fichiers de la base de données ChEMBL au format SQL, SDF, CSV, etc.
Information sur les composés chimiques, les cibles et les activités biologiques.
Utilisation typique :

Téléchargement en masse pour des analyses à grande échelle, souvent dans le cadre de projets de modélisation pharmacologique ou de criblage virtuel.

### Python ?

ChEMBL peut être exploité en Python via la bibliothèque chembl_webresource_client, qui permet d'interagir facilement avec l'API de ChEMBL.

Fonctionnalités :

Rechercher des composés, cibles, ou activités.
Extraire des données sur la bioactivité et les propriétés chimiques.
Téléchargement de structures moléculaires et manipulation des données pour des analyses avancées.