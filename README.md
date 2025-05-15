# Outil de calcul des métriques de la chimie verte

Outil réalisé dans le cadre du projet de recherche & développement et supervisé par **Muriel BILLAMBOZ**, Junia ISEN Lille pour l'année 2024-2025 par:
- **Alexandre HERSSENS**  
- **Floriant DECROIX**  
- **Fabien SACEPE**  
- **Romain LANNOY**  
- **Amyr HAMAD**  
- **Clément GREZ**


## 1. Introduction

Dans un contexte mondial de transition écologique, la chimie se voit contrainte de repenser ses procédés afin de réduire son impact environnemental. La chimie verte, en s’appuyant sur des indicateurs quantitatifs, permet d’évaluer la durabilité des réactions chimiques, en mesurant notamment la production de déchets, la consommation d’énergie ou encore la recyclabilité des matériaux utilisés.

Cependant, les calculs associés à ces évaluations sont encore trop souvent réalisés manuellement, à partir de données dispersées et difficilement exploitables. Cette situation limite l’adoption à grande échelle de ces pratiques, tant dans la recherche que dans l’enseignement.

Le projet présenté ici vise à combler ce manque par le développement d’un outil numérique automatisé, convivial et évolutif, qui facilitera les calculs, la visualisation et l’interprétation des paramètres de chimie verte.

## 2. Contexte Scientifique

### 2.1 Indicateurs Clés de la Chimie Verte

La chimie verte s’évalue à l’aide de six indicateurs essentiels, permettant de juger de la performance environnementale d’un procédé chimique :

- **Facteur E** (quantité de déchets générés)  
- **Économie d'atomes** (proportion d'atomes intégrés dans le produit final)  
- **Rendement massique**  
- **Intensité énergétique**  
- **Potentiel de recyclage**  
- **Score de dangerosité**

### 2.2 Enjeux et Limites Actuels

**Enjeux :**

- Intégration des notions de développement durable dans la recherche et la pédagogie  
- Vulgarisation et interprétation des résultats auprès des non-spécialistes  

**Limites rencontrées :**

- Calculs manuels fastidieux et peu reproductibles
- Collecte hétérogène et lente des données moléculaires  
- Outils existants peu ergonomiques, souvent sous forme de feuilles Excel rigides  
- Difficulté de visualisation pédagogique des résultats pour les étudiants  
- Source d'erreurs humaines

## 3. Problématique

### 3.1 Constats

- Le temps de calcul est prohibitif dès que plusieurs paramètres sont impliqués  
- Les outils actuels ne sont ni intégrés ni adaptés à un usage académique moderne  
- La comparaison systématique des procédés est difficile en l’absence de visualisation synthétique  
- L’expérience utilisateur est souvent négligée, ce qui limite l’appropriation de ces outils  

## 4. Objectifs du Projet

- Développer un outil automatisé pour le calcul rapide et fiable des six indicateurs clés de la chimie verte  
- Offrir une interface intuitive, adaptée aux chercheurs, enseignants et étudiants, sans compétence informatique nécessaire  
- Faciliter l'ajout de molécules et les sauvegarder pour des utilisations ultérieur
- Fournir des résultats visuels clairs : graphiques radars, tableaux dynamiques  
- Intégrer des fonctionnalités évolutives pour inclure des critères avancés comme :  
  - Empreinte énergétique  
  - Analyse du cycle de vie (ACV)  
  - Toxicité  
  - Recyclabilité  
  - Origine des ressources  

## 5. Méthodologie

### 5.1 Approche de Développement

Le projet s'inscrit dans un esprit agile, favorisant un cycle de développement continu et flexible. Chaque fonctionnalité est intégrée progressivement, selon sa priorité définie dans un backlog évolutif.

Les **modules critiques**, en particulier le moteur de calcul, sont testés automatiquement afin de garantir la fiabilité et d’éviter les régressions lors des mises à jour.

### 5.2 Déploiement des Fonctionnalités

- Développement itératif de l’interface utilisateur  
- Mise en place de tests utilisateurs dès les premières versions  
- Intégration continue des retours (enseignants, chercheurs, étudiants)
