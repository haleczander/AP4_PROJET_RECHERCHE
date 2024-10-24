# Note de cadrage : Outil Automatisé de Calcul et Représentation Graphique des Paramètres de Chimie Verte

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

Les résultats pourront par la suite être sauvegardés localement ce qui permettra leur recoupage et comparaison dans des graphiques idéalement en trois dimensions.

Les livrables seront les suivants:
### Assurés
- Une interface intuitive pour renseigner les données et respectant la charte grapique JUNIA avec un affichage des résultats sur forme de tableau et de graphique radar
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

La méthodologie d'exécution du projet suivra une approche Kanban, privilégiant un flux de travail continu et flexible. Chaque fonctionnalité sera développée de manière itérative en fonction de sa priorité, définie dans un backlog évolutif, facilitant le suivi de sa progression, de la collecte des données à leur implémentation finale. Cette méthode permettra d'intégrer les retours des parties prenantes en temps réel, tout en assurant une amélioration progressive de l'outil avec des livrables incrémentaux. Par ailleurs, une approche de développement piloté par les tests (TDD) sera envisagée pour le développement du module de calcul, garantissant ainsi une validation rigoureuse des fonctionnalités tout au long du processus.

### Organigramme

Responsable de projet: Muriel BILLAMBOZ
Gestion de projet, référent technique: Alexandre HERSSENS
Responsable data, infrastructure: Amyr HAMAD
Responsable UX-UI: Floriant DECROIX
Responsable développement: Fabien SACEPE
Tests fonctionnels: Clément GREZ, Romain LANNOY


## Risques principaux et stratégies pour les restreindre
### Risques principaux

Le projet présente plusieurs risques majeurs. Tout d'abord, un risque technique lié à l'intégration des données via des APIs externes (ex : bases INRS, PubChem) pourrait ralentir le projet si ces sources ne sont pas stables, accessibles ou facilement exploitables. Ensuite, un risque fonctionnel concerne l'ergonomie et la simplicité d'utilisation de l'interface, cruciale pour des utilisateurs non experts en informatique, comme les chercheurs et étudiants en chimie. Il existe également un risque de délais comme des ressources limitées en temps ou en moyens pourraient affecter le planning. Enfin, des risques sécuritaires sont liés à la confidentialité résultats des calculs ou de l'accès à l'outil.

### Stratégies pour les restreindre

Pour minimiser ces risques, plusieurs stratégies seront mises en place. Le risque technique sera réduit en réalisant une étude approfondie des APIs dès les phases initiales du projet, tout en prévoyant des solutions alternatives, comme des bases de données locales en cas d'indisponibilité ou de limitations des sources externes. Le risque fonctionnel sera traité en adoptant une démarche itérative de tests utilisateurs réguliers, impliquant des chercheurs et étudiants pour valider l'ergonomie et garantir la simplicité d'utilisation. Pour éviter les retards, une gestion proactive du planning sera mise en œuvre, avec des points de suivi fréquents et des marges de temps prévues pour les imprévus. Quant à la sécurité, l'outil ne sera dans un premier accessible qu'aux enseignants. 

## Gestion des parties prenantes : identification et cartographie des parties prenantes du projet et leurs rôles

Les chercheurs et scientifiques constituent des utilisateurs clés, car ils tireront parti de l'outil pour évaluer l'impact environnemental de leurs travaux. Les enseignants jouent également un rôle crucial en intégrant cet outil dans leurs cours, facilitant ainsi l'apprentissage des concepts de chimie verte. Les étudiants sont des utilisateurs finaux qui bénéficieront de l'accessibilité et de la convivialité de l'interface. Du côté technique, l'équipe de développement est responsable de la conception et de l'implémentation de l'outil. Enfin, les acteurs environnementaux, les industriels de la chimie et les agences de régulation représentent des parties prenantes externes, dont les attentes en matière de conformité réglementaire et d'impact environnemental influenceront les choix de conception et les fonctionnalités de l'outil. Une communication régulière avec ces parties prenantes sera essentielle pour s'assurer que le projet répond à leurs besoins et attentes.


## Budget et calendrier : grandes catégories de dépenses, calendrier (grandes étapes et principales dates)

Le budget disponible pour le projet s'élève à 100 €, à priori réservés pour l'acquisition de matériel nécessaire à la mise en œuvre de l'outil automatisé de calcul et de représentation graphique des paramètres de chimie verte. Ces fonds seront alloués à l'achat de composants essentiels, tels que des équipements informatiques, des licences de logiciels, ou éventuellement des outils de prototypage.

Le calendrier du projet débutera par la validation des besoins, où les utilisateurs et parties prenantes seront consultés pour s'assurer que toutes les exigences fonctionnelles et techniques sont bien comprises. Une fois les besoins validés, nous passerons au choix de l'architecture logicielle, définissant les technologies et les infrastructures nécessaires pour garantir la performance et la sécurité de l'outil. Cette étape inclura également la conception détaillée de l'outil, incluant la modélisation de l'interface et la planification des fonctionnalités. En parallèle, le développement du module de calcul sera initié, suivant une approche TDD pour garantir la fiabilité des résultats. Simultanément, nous mettrons en place des mécanismes pour la gestion des données, en intégrant les API pour la collecte automatique des informations chimiques. Enfin, le développement de l'interface utilisateur sera réalisé, visant à créer une expérience intuitive et accessible pour les chercheurs et étudiants en chimie, tout en intégrant les retours des utilisateurs au fur et à mesure de l'avancement du projet.


