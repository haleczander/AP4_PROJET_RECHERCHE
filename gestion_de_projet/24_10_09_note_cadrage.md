# Note de cadrage : `Outil Automatisé de Calcul et Représentation Graphique des Paramètres de Chimie Verte`

## Introduction

Dans le cadre du développement durable, le secteur de la chimie a adopté des paramètres de chimie verte pour évaluer et quantifier l'impact environnemental des procédés chimiques. Ces paramètres mesurent, entre autres, la production de déchets, le rendement et la recyclabilité des réactions. Cependant, les calculs nécessaires pour ces évaluations sont souvent complexes et chronophages, nécessitant la collecte manuelle de données sur les réactifs, produits et conditions expérimentales.

Afin de simplifier ces calculs et de rendre les notions de chimie verte plus accessibles, notamment dans un contexte pédagogique, il est essentiel de développer un outil automatisé. Cet outil permettra d'accélérer les calculs, d'améliorer l’interprétation des résultats et de faciliter l'enseignement des principes de chimie verte aux étudiants. Il servira également aux chercheurs et professionnels de l’industrie chimique, en rendant les processus d'analyse plus efficaces.

## Contexte

Actuellement, les calculs liés aux paramètres de chimie verte, tels que la réduction des déchets et l'optimisation des rendements, sont réalisés manuellement à partir de diverses sources de données. Les chercheurs en chimie utilisent principalement des feuilles de calcul développées par l'Université de Limoges, mais ces outils manquent de convivialité et de flexibilité. La collecte des informations, notamment sur les réactifs, produits, catalyseurs et autres variables chimiques, se fait souvent de manière fastidieuse, ce qui ralentit les analyses.

L’outil automatisé à développer vise à simplifier ces tâches en récupérant automatiquement les données des molécules à partir du code CAS ou d'un schéma chimique. Cela permettra d’effectuer rapidement les calculs des six paramètres de chimie verte, tout en produisant des résultats visuels clairs et interprétables, comme des graphiques radars.

Cet outil, destiné aux chercheurs, enseignants et étudiants, doit répondre aux exigences de l’enseignement et de la recherche, tout en facilitant l'évaluation des procédés chimiques en fonction de leur impact environnemental. Il offrira une interface intuitive, permettant de saisir facilement les données.


## Objectifs du projet : généraux et spécifiques

L'objectif principal du projet est de concevoir un outil automatisé pour simplifier et accélérer les calculs des paramètres de chimie verte, tout en fournissant des représentations graphiques claires et accessibles. Ce projet vise à répondre aux besoins des chercheurs en chimie, des enseignants et des étudiants, en facilitant la collecte des données et en automatisant le processus de calcul.

Un des objectifs majeurs est de remplacer les méthodes manuelles, longues et fastidieuses, par un processus automatisé capable de calculer les six paramètres clés de la chimie verte. L'outil devra permettre une collecte automatique des données à partir du code CAS ou d’un schéma moléculaire, offrant ainsi un gain de temps important dans les analyses.

L'outil visera également à être accessible et simple d'utilisation. L'interface sera intuitive, permettant à des utilisateurs non spécialistes de l’informatique, comme les chercheurs en chimie et les étudiants, de l’utiliser aisément. L'accent sera mis sur la facilité d'accès aux informations pertinentes et sur la convivialité des fonctions de saisie et d'interprétation des résultats.

Enfin, l’outil servira aussi de support pédagogique. Il permettra aux enseignants-chercheurs d’illustrer les concepts de chimie verte en cours, en fournissant des calculs précis et des représentations graphiques des résultats. Les étudiants pourront ainsi mieux comprendre l'impact environnemental des réactions chimiques, renforçant leur apprentissage grâce à l’utilisation d’un outil moderne et interactif.

En plus des six calculs de base des paramètres de chimie verte, l'outil sera conçu avec une perspective évolutive, permettant de futures améliorations pour une analyse encore plus complète. À terme, il pourrait être enrichi par l'intégration de nouveaux critères qui viendraient compléter les six paramètres traditionnels. Par exemple, il pourrait inclure l’évaluation des aspects énergétiques, mesurant l'empreinte énergétique des procédés, ainsi qu’une analyse plus approfondie du cycle de vie (ACV), permettant d’évaluer l'impact global d'une réaction chimique, depuis la production des matières premières jusqu’à la gestion des déchets.

D’autres évolutions pourraient porter sur l’évaluation de la dangerosité des substances, notamment leur toxicité ou leur impact environnemental, ainsi que sur la recyclabilité des matériaux. L'outil pourrait également prendre en compte l’origine des ressources utilisées, en distinguant entre ressources renouvelables et non renouvelables. Cette modularité future permettra de rendre l’outil plus robuste et polyvalent, capable de s’adapter aux besoins croissants des utilisateurs et à l'évolution des pratiques en chimie durable.

## Portée du projet : livrables et exclusions

Le projet vise à développer un outil automatisé et convivial pour calculer et visualiser les six principaux paramètres de chimie verte, avec une interface intuitive adaptée aux chercheurs, enseignants et étudiants en chimie. Dans un premier temps, l'outil devra permettre de réaliser les calculs à partir des données saisies dans l'interface. Les résultats seront présentés sous forme de tableaux et de graphiques, notamment des graphiques radars, pour une interprétation claire et rapide des données. L'outil devra pouvoir être ouvert à l'enrichissement en fonctionnalités et rester respectueux de l'environnement.

Le service de calcul ne pourra pas être accessible à des personnes extérieures à JUNIA et les résultats ne pourront être consultés que par la personne ayant lancé le calcul.

En fonction des possibilités techniques, les données des molécules pourront être complétées automatiquement à partir des identifiants CAS ou de leur schéma.

Les résultats pourront pas la suite être sauvegardés localement ce qui permettra leur recoupage et comparaison dans des graphiques idéalement en trois dimensions.

Les livrables seront les suivants:
### Assurés
- Un interface intuitif pour renseigner les données et respectant la charte grapique JUNIA avec un affichage des résultats sur forme de tableau et de graphique radar
- Un moteur de calcul qui fournira les résultats sans les conserver et qui pourra être enrichi

### En fonction des possibilités techniques
- Un module de remplissage automatique des molécules à partir de leur identifiant CAS
- Un module de remplissage automatique des molécules à partir de leur schéma
- Une base de donnée pour l'indexation des molécules et de leurs paramètres nécessaires aux calculs.
- Un système de sauvegarde des résultats
- Un système de comparaison des résultats simple
- Un système de comparaison de résultats en 3D avec comme un des axes, le paramètre qui aura évolué entre les calculs.

### En fonction du temps et des données disponibles
- L'affichage d'indicateurs supplémentaires comme l'aspect énergétique, la dangerosité, l'analyse du cycle de vie.


## Contraintes et hypothèses
Le projet de développement d'un outil automatisé pour les calculs de chimie verte doit tenir compte de diverses contraintes et hypothèses qui peuvent influencer son succès. Parmi les contraintes, l'accessibilité des données constitue un enjeu majeur. Il est impératif que l'outil puisse collecter des informations précises et à jour à partir de sources fiables, comme les bases de données existantes (ex. : INRS, PubChem), ce qui implique également une intégration éventuelle d'APIs. De plus, l'interface utilisateur devra être conçue pour être intuitive et accessible, en tenant compte du fait que les utilisateurs ne sont pas des spécialistes en informatique, mais plutôt des chercheurs et étudiants en chimie.

Une autre contrainte concerne la confidentialité des données. L'accès au moteur de calcul devra être strictement limité aux utilisateurs autorisés, garantissant ainsi que les résultats des calculs demeurent confidentiels et sécurisés. En outre, le projet devra se conformer aux normes environnementales, ce qui signifie que l'architecture de l'outil doit être optimisée pour réduire son empreinte écologique, sans sacrifier la performance.

Concernant les hypothèses, il est prévu que les utilisateurs possèdent une compréhension de base des principes de la chimie verte, ce qui facilitera l'adoption de l'outil. Il est également hypothétique que des ressources humaines et techniques suffisantes seront disponibles pour assurer le développement, le test et le déploiement de l'application dans le respect des délais établis. Enfin, le projet repose sur l'idée que l'outil pourra évoluer avec le temps, intégrant de nouvelles fonctionnalités et paramètres pour répondre aux besoins futurs des chercheurs dans le domaine de la chimie verte.

## Approche du projet : méthodologie d’exécution, organigramme 
## Risques principaux et stratégies pour les restreindre
## Gestion des parties prenantes : identification et cartographie des parties prenantes du projet et leurs rôles
## Budget et calendrier : grandes catégories de dépenses, calendrier (grandes étapes et principales dates)
