## ECHA - HAMAD Amyr 09/10/2024

### Qu'est-ce que c'est ECHA ?

L'**ECHA** (Agence européenne des produits chimiques) est une agence de l'Union européenne chargée de la mise en œuvre des règlements chimiques de l'UE, comme **REACH** (Registration, Evaluation, Authorisation and Restriction of Chemicals). L'ECHA gère une base de données publique qui contient des informations détaillées sur les substances chimiques fabriquées, importées et utilisées en Europe, garantissant leur sécurité pour la santé humaine et l'environnement.

### Quelles données peut-on trouver dessus ?

La base de données de l'ECHA fournit des informations complètes sur les substances chimiques, notamment :

- **Numéros CAS** : Identifiants chimiques uniques pour chaque substance.
- **Données toxicologiques** : Informations sur la toxicité, écotoxicité, et effets à long terme sur la santé.
- **Propriétés physico-chimiques** : Solubilité, point d'ébullition, pression de vapeur, etc.
- **Utilisations industrielles** : Applications des substances dans divers secteurs.
- **Restrictions et autorisations** : Liste des substances soumises à autorisation, interdiction ou restrictions particulières.

### Pourquoi faire ?

- **Conformité réglementaire** : Les entreprises doivent enregistrer les substances qu'elles produisent ou importent dans l'UE afin de respecter les règlements REACH.
- **Sécurité et environnement** : Les chercheurs, régulateurs et industriels utilisent les données pour évaluer les risques des substances chimiques sur la santé humaine et l'environnement.
- **Substitution de substances dangereuses** : Identification d'alternatives plus sûres aux substances chimiques dangereuses utilisées dans les produits ou les processus industriels.
- **Gestion des risques** : Accès à des informations pour limiter l'impact des substances sur la santé publique et l'environnement.

## Solutions numériques

### Accès via l'interface web de l'ECHA

L'interface web de l'ECHA permet d'accéder à la base de données des substances enregistrées sous REACH, avec la possibilité de rechercher et d'extraire des informations détaillées sur les substances chimiques.

- **Recherche avancée** : Recherches par numéro CAS, nom de substance, propriétés chimiques ou réglementations spécifiques.
- **Consultation de rapports** : Possibilité de visualiser et télécharger les dossiers complets de conformité REACH des substances.
- **Accès aux fiches de données de sécurité (FDS)** : Informations détaillées sur les précautions à prendre lors de la manipulation des substances.

### Fonctionnalités de l'API :

L'ECHA met à disposition une API pour accéder aux données de substances chimiques, facilitant l'automatisation des processus de recherche et de conformité.

- **Rechercher des substances** par numéro CAS, nom ou propriétés.
- **Accéder aux données toxicologiques** et écotoxicologiques.
- **Télécharger des informations réglementaires** sur les substances restreintes ou soumises à autorisation dans l'UE.

### Accès FTP : ftp://echa.europa.eu/reach/

**Données disponibles** :

- **Fichiers des substances enregistrées** : Données complètes sur les substances chimiques enregistrées dans le cadre de REACH.
- **Rapports de conformité** : Données relatives aux exigences légales, y compris les évaluations des risques.
- **Informations sur les substances dangereuses** : Listes des substances soumises à restriction ou autorisation.

**Utilisation typique** :
- Téléchargement en masse des données pour une évaluation locale des substances, souvent utilisée dans des analyses de risque ou des études de conformité réglementaire.

### Python ?

Bien que l'ECHA ne propose pas de bibliothèque Python dédiée, il est possible d'utiliser des requêtes API standard via des scripts Python pour extraire et analyser les données de substances chimiques.

**Fonctionnalités** :

- Extraire des informations réglementaires pour des substances spécifiques.
- Télécharger des données toxicologiques et physico-chimiques.
- Automatiser l'analyse des substances restreintes ou soumises à autorisation.
