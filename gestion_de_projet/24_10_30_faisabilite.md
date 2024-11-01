# Risques et Alternatives

Dans la mise en place d’un outil automatisé pour le calcul et la représentation graphique des paramètres de chimie verte, plusieurs risques doivent être pris en compte pour garantir le succès et la durabilité du projet. 

**1.1 Risque lié à l'intégration des données**

L’intégration de données provenant de bases variées, comme PubChem (National Center for Biotechnology Information, USA), l'ECHA (Agence européenne des produits chimiques) ou l’INRS (Institut national de recherche et de sécurité), est essentielle pour obtenir des informations complètes et actualisées, mais elle comporte plusieurs défis d’interopérabilité et de fiabilité. Chaque base de données suit ses propres normes de structuration, protocoles de mise à jour et terminologies, ce qui peut entraîner des incohérences lorsqu'elles sont combinées dans un même système d’information. 

De plus, la fréquence de mise à jour et les normes de qualité de chaque base varient, ce qui peut influencer la précision des données collectées. Il ne faut pas non plus ignorer l'empreinte carbone d'une solution intégrant les données de serveurs qui peuvent être à plusieurs centaines voire milliers de kilomètres.

Pour pallier ces difficultés, il est envisagé de mettre en place une base de données "maison" dont la structure sera adapatée en fonction des besoins de l'outil et qui pourra être enrichie pour répondre aux besoins futurs. Il est proposé de mettre en place des routines pour  ponctuellement mettre à jour le catalogue interne, minimisant ainsi le nombre de requêtes vers des serveurs éloignés. Bien que cela nécessite une infrastructure technique supplémentaire, cette approche assure une meilleure qualité des données, indispensable pour des travaux de recherche dont les besoins sont susceptibles d'évoluer.

### Risque lié à la complexité de l’interface utilisateur

Un risque important dans le développement de cet outil réside dans la facilité d’utilisation. Bien que l’interface sera pensée pour être ergonomique, certaines fonctionnalités pourraient s’avérer complexes. En effet, les calculs de chimie verte nécessitent la complétion de nombreux champs et l'outil actuel, une feuille de calcul Excel, manque cruellement de convivialité, les chercheurs ayant souvent du mal à distinguer les champs indispensables et éditables de ceux constants. Ce manque de convivialité se fera d'autant plus ressentir si un public novice, tel que des étudiants qui se familiarisent pour la première fois avec les concepts de chimie verte, se retrouve confronté à un interface mal pensé.

Par ailleurs, la richesse fonctionnelle de l’outil, bien que bénéfique pour une analyse complète, comporte un risque de surcharge d’informations, rendant la navigation moins intuitive. Une interface qui expose d’emblée l’ensemble des fonctionnalités avancées peut rapidement devenir difficile à appréhender pour des étudiants qui cherchent des calculs simples et une compréhension progressive des indicateurs de chimie verte. Cette surcharge d’informations pourrait entraîner une perte d’engagement de la part des utilisateurs débutants, qui pourraient se sentir submergés face à une multitude d’options et d’informations complexes.

De plus, l’outil doit pouvoir répondre aux besoins hétérogènes des différents profils d’utilisateurs, qu’ils soient étudiants, enseignants ou chercheurs expérimentés. Les attentes ne sont pas les mêmes pour ces groupes : les étudiants bénéficieraient d’un accompagnement progressif centré sur les calculs de base et des explications pédagogiques, tandis que les chercheurs auraient besoin d’un accès rapide à des fonctionnalités plus avancées, leur permettant de réaliser des analyses détaillées sans être ralentis par des explications introductives. Sans une segmentation adaptée de l’interface, il existe un risque de rendre l’outil frustrant et peu intuitif pour ces profils diversifiés, réduisant son impact pédagogique et pratique.

Face à ces limites, une alternative viable serait de structurer l’outil en niveaux d’accès différenciés : une version simplifiée pour les étudiants et une version avancée pour les chercheurs et professionnels. Cette distinction permettrait de proposer une interface adaptée à chaque niveau de compétence, garantissant ainsi une meilleure expérience utilisateur et une utilisation optimisée des fonctionnalités selon les besoins spécifiques de chaque groupe.

### Risque de maintenance et d’évolutivité

L’automatisation complète des calculs peut aussi poser des défis en matière de maintenance et de mise à jour. Il existe un risque que l’outil devienne obsolète si les critères de chimie verte évoluent ou si de nouveaux indicateurs sont ajoutés. Pour répondre à cela, l'architecture devra permettre d’ajuster facilement les algorithmes de calcul et d’ajouter de nouveaux paramètres en fonction des avancées scientifiques.

### Risque de dépendance aux codes CAS et schémas moléculaires

La dépendance aux codes CAS ou aux schémas moléculaires pour collecter les données représente une contrainte potentielle. Il peut être difficile de trouver ces informations pour certaines molécules moins documentées. Proposer de modéliser les molécules directement dans l'application, afin de faciliter l'utilisation de l'outil pourrait poser problème dans la récupération des données moléculaires.

L'intégration à l'outil d'un module de modélisation des schémas moléculaires représente en lui seul un risque. Selon l'architecture finale convenue, plusieurs solutions existent pour dessiner des molécules mais la nature des informations retournées par ces outils varie. Actuellement, les molécules sont dessinées dans Chemsketch afin de rassembler les informations nécessaires aux calculs. Pour minimiser les risques, un module d'import de fichiers chemskecth pourrait être développé dans le but de renseigner automatiquement les données nécessaires aux calculs.

### Risque de sécurité des données et confidentialité

La sécurité des données est aussi un point important. Si les recherches portent sur des procédés industriels ou des produits en développement, elles doivent être protégées contre toute fuite ou usage non autorisé. Une alternative consisterait à ajouter un cryptage des données et un contrôle d’accès sécurisé, garantissant la confidentialité des informations sensibles et le respect des règles de protection des données.

### Hébergement et accès pour les étudiants de Junia

L’hébergement de l’outil sur le réseau interne de Junia pourrait poser des difficultés, notamment en ce qui concerne l’accès pour les étudiants. Le déploiement sur un réseau interne peut être complexe et pourrait limiter l’accessibilité de l’outil hors du campus, ce qui restreindrait l’usage de la plateforme dans un contexte pédagogique à distance ou en travail autonome. L'outil pourrait être hébergé en dehors du réseau junia, de la même manère que junia-learning afin de permettre l'accés à tous avec une limite d'authentification.


# Stratégie

La stratégie adoptée pour ce projet repose sur une architecture modulaire et évolutive, permettant de répondre aux besoins actuels tout en laissant une flexibilité pour intégrer de futures améliorations. La solution technique sera développée en suivant une approche orientée vers l'utilisateur, garantissant que chaque fonctionnalité clé, comme le calcul automatique des paramètres de chimie verte et la représentation graphique, soit intuitive et adaptée aux différents profils d'utilisateurs (étudiants, chercheurs et enseignants). Le choix d'une interface à niveaux d'accès différenciés, avec une version simplifiée pour les débutants et une version avancée pour les utilisateurs expérimentés, assurera une expérience utilisateur optimisée, rendant l'outil accessible et utile pour tous.

Pour réduire les risques liés à l'intégration des données, la stratégie prévoit une base de données interne actualisée à partir de sources fiables comme PubChem et l'INRS, tout en minimisant le nombre de requêtes vers des serveurs distants. L’outil sera conçu de manière à pouvoir être maintenu et mis à jour facilement, garantissant sa durabilité dans un contexte d’évolution continue des normes en chimie verte. En parallèle, des protocoles de sécurité renforcés seront mis en place pour protéger les données, avec un accès limité aux utilisateurs autorisés de Junia, et la possibilité d’intégrer des systèmes de cryptage et d’authentification renforcée si besoin.

En termes de méthodologie, l'approche Kanban et le développement piloté par les tests (TDD) permettront une livraison progressive et continue des fonctionnalités, facilitant la détection et la correction des erreurs au fil du développement. Cette flexibilité, alliée à un processus de validation régulier impliquant les utilisateurs finaux, garantira que l’outil répondra aux attentes des parties prenantes tout en s’assurant de sa robustesse et de son ergonomie.