# Architecture Logicielle - Outil de Calcul des Paramètres de Chimie Verte

Ce document décrit l'architecture logicielle détaillée du projet pour faciliter la reprise du développement par de futures équipes.

## Architecture Globale

Le projet suit une architecture MVC (Modèle-Vue-Contrôleur) avec une séparation claire des responsabilités :

```
webapp/
├── src/                      # Code source principal
│   ├── mvc/                 # Implémentation MVC core
│   ├── models/              # Modèles de données
│   ├── controllers/         # Logique métier
│   ├── services/           # Services réutilisables
│   ├── utils/              # Utilitaires
│   ├── validators/         # Validation des données
│   ├── indicateurs/        # Calculs des indicateurs chimiques
│   ├── comparisons/        # Logique de comparaison
│   ├── main.js            # Point d'entrée
│   ├── router.js          # Routage principal
│   ├── routes.js          # Définitions des routes
│   ├── settings.js        # Configuration
│   └── constants.js       # Constantes globales
│
├── pages/                   # Pages de l'application
├── styles/                  # Styles CSS/SCSS
├── data/                    # Données statiques
├── assets/                  # Ressources statiques
├── tests/                   # Tests automatisés
└── server.js               # Serveur Node.js
```

## Composants Principaux

### 1. Core MVC (`src/mvc/`)
- Implémentation du pattern MVC
- Gestion des événements et du state
- Liaison données-vue

### 2. Modèles (`src/models/`)
- Structures de données
- Validation des données
- Interactions avec la base de données

### 3. Contrôleurs (`src/controllers/`)
- Logique métier
- Gestion des requêtes
- Coordination entre modèles et vues

### 4. Services (`src/services/`)
- Services réutilisables
- Intégrations externes
- Gestion des calculs complexes

### 5. Module Indicateurs (`src/indicateurs/`)
- Calculs des paramètres de chimie verte
- Algorithmes d'optimisation
- Validation des résultats

## Flux de Données

1. Entrée utilisateur → Validation (`validators/`)
2. Traitement → Contrôleurs (`controllers/`)
3. Calculs → Services (`services/`) + Indicateurs (`indicateurs/`)
4. Mise à jour → Modèles (`models/`)
5. Rendu → Vues (pages/)

## Configuration et Déploiement

### Variables d'Environnement
```javascript
// .env
NODE_ENV=development
PORT=3000
DB_CONNECTION=...
```


### Scripts NPM Disponibles
```json
{
  "dev": "Démarre le serveur de développement",
  "build": "Compile pour la production",
  "test": "Lance les tests",
  "lint": "Vérifie le code"
}
```
<!-- ALEXANDRE --> 
## Installation du projet ( dev )
**S'assurer d'avoir node d'installé**
```cmd
npm i --save-dev
```
<!-- ALEXANDRE --> 
### Commandes utiles
`build` et `watch` pour respectivement "compiler" une fois ou en "permanence" les fichiers js vers le bundle.
`test` pour lancer la banque de tests (jest).

```cmd
npm run build
npm run watch
npm run test
```

Lancement du serveur : `npm run start`


## Guide de Développement

<!-- ALEXANDRE --> 
### 1. Setup Initial
```bash
git clone [repository]
cd webapp
npm install
```

### 2. Conventions de Code
- ESLint pour le style de code
- Prettier pour le formatage
- JSDoc pour la documentation
- Commits conventionnels

### 3. Workflow de Développement
1. Créer une branche feature/
2. Développer avec tests
3. Linter et formatter
4. Pull request avec revue
5. Merge après validation

## Points d'Extension

### 1. Nouveaux Indicateurs
- Ajouter dans `src/indicateurs/`
- Implémenter l'interface standard
- Ajouter tests unitaires
- Mettre à jour la documentation

### 2. Nouvelles Visualisations
- Étendre les composants dans `pages/`
- Utiliser les services existants
- Suivre les guidelines UX/UI

## Dépendances Principales

- Node.js (v14+)
- Express.js (Backend)
- [Liste des autres dépendances majeures]

## Monitoring et Logs

- Logs structurés (Winston)
- Métriques de performance
- Gestion des erreurs

## Sécurité

- Validation des entrées
- Sanitization des données
- Protection contre les injections
- Gestion des sessions

## Documentation API

La documentation détaillée de l'API est disponible dans `/doc/api/`.

## Support et Contact

Pour toute question technique :
1. Consulter la documentation dans `/doc/`
2. Vérifier les issues GitHub
3. Contacter l'équipe technique

## Roadmap Technique

1. Optimisation des performances
2. Nouvelles fonctionnalités planifiées
3. Dette technique à traiter


# Calculateur des métriques de la chimie verte


## Crédits 
- Table périodique des éléments : [Bowserinator@github]("https://github.com/Bowserinator/Periodic-Table-JSON")



