#  Notice : Page d'accueil

Cette page permet de **définir les informations principales liées à une réaction chimique** pour le calcul de ses métriques de chimie verte.

---

##  Barre de navigation

La barre de navigation située à gauche de l’écran vous permet d’accéder facilement aux différentes sections de l’outil :

- **Accueil** : page de calcul 
- **Molécules** : accès à la liste des molécules disponibles dans la base (voir notice dédiée)
- **Ajout de molécule** : permet de renseigner de nouvelles molécules dans la base (voir notice dédiée)

---

##  Zone de réaction (rectangle en haut de page)

La section supérieure affiche **la réaction chimique en cours de construction** :

- **Réaction principale** 
- **Traitement post-réactionnel**
- **Purification**
- **Produit final**

Ces informations sont automatiquement mises à jour selon le contenu du formulaire.

---

## Formulaire de définition de réaction

Le formulaire est organisé en quatre sections principales :

### 1. Réaction principale

Cette étape contient les éléments nécessaires à la réaction chimique initiale :

#### Réactifs
- **Molécule** : champ de recherche.
- **Pureté (%)** : pourcentage de pureté du composé utilisé.
- **Volume (mL)** : volume du composé utilisé dans la réaction, exprimé en millilitres.
- **Prix/g (€)** : prix unitaire du composé (en euros par gramme).

#### Catalyseurs
- **Molécule** : champ de recherche.
- **Pureté (%)** : pourcentage de pureté du composé utilisé.
- **Volume (mL)** : volume du composé utilisé dans la réaction, exprimé en millilitres.
- **Prix/g (€)** : prix unitaire du composé (en euros par gramme).

#### Solvants
- **Molécule** : champ de recherche.
- **Pureté (%)** : pourcentage de pureté du composé utilisé.
- **Volume (mL)** : volume du composé utilisé dans la réaction, exprimé en millilitres.
- **Prix/g (€)** : prix unitaire du composé (en euros par gramme).

#### Activation
- **Durée (min)** : durée de chauffage, agitation, etc.
- **Puissance (W)** : puissance utilisée.
- **Prix du kWh (€)** : prix unitaire d’électricité.
- **Énergie (kWh)** : valeur calculée automatiquement.

---

### 2. Traitement post-réactionnel

Étape intervenant **après la réaction principale**, avant la purification :

#### Réactifs post-réactionnels
- **Molécule** : champ de recherche.
- **Pureté (%)** : pourcentage de pureté du composé utilisé.
- **Volume (mL)** : volume du composé utilisé dans la réaction, exprimé en millilitres.
- **Prix/g (€)** : prix unitaire du composé (en euros par gramme).

#### Activation post-réactionnelle
- **Durée (min)** : durée de chauffage, agitation, etc.
- **Puissance (W)** : puissance utilisée.
- **Prix du kWh (€)** : prix unitaire d’électricité.
- **Énergie (kWh)** : valeur calculée automatiquement.

---

### 3. Purification

Étape de séparation ou nettoyage des produits obtenus :

#### Réactifs de purification
- **Molécule** : champ de recherche.
- **Pureté (%)** : pourcentage de pureté du composé utilisé.
- **Volume (mL)** : volume du composé utilisé dans la réaction, exprimé en millilitres.
- **Prix/g (€)** : prix unitaire du composé (en euros par gramme).

#### Activation pour la purification
- **Durée (min)** : durée de chauffage, agitation, etc.
- **Puissance (W)** : puissance utilisée.
- **Prix du kWh (€)** : prix unitaire d’électricité.
- **Énergie (kWh)** : valeur calculée automatiquement.

---

###  4. Produit final

Définissez ici les caractéristiques du ou des produits obtenus :

- **Molécule** : champ de recherche.
- **Pureté (%)** : pourcentage de pureté du composé utilisé.
- **Volume (mL)** : volume du composé utilisé dans la réaction, exprimé en millilitres.
- **Prix/g (€)** : prix unitaire du composé (en euros par gramme).

---

Pour chaque élement, il suffit de remplir les données et d'appuyer sur le bouton **ajouter** afin qu'il soit enregistré dans l'algorithme de calcul et afficher dans l'écran de visualisation de la réaction.

---

## Visualisation des résultats 

Une fois toutes les données de la réaction renseignées, cliquez sur **Calculer**. Cela déclenche l’analyse des informations saisies et affiche un tableau récapitulatif ainsi que des radars des résultats de la réaction principale et complète dans une section dédiée.

### Résultats affichés

Chaque ligne du tableau correspond à une **réaction définie** (réaction principale, post-réactionnel, purification), et affiche les **indicateurs de performance suivants** :

| Indicateur                  | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| Masse totale utilisée       | Masse combinée de tous les réactifs (en grammes)                           |
| Coût total (€)              | Somme des coûts de tous les intrants (réactifs, solvants, énergie, etc.)   |
| Énergie totale (kWh)        | Énergie consommée pendant les activations (calculée automatiquement)       |
| Volume total (mL)           | Volume cumulé des substances utilisées                                     |
| Efficacité économique       | Ratio entre la valeur du produit final et le coût global                   |
| Impact environnemental      | Estimation indicative (si renseigné) des impacts liés à certains produits  |

> Les résultats sont calculés dynamiquement à partir des champs renseignés. Des champs laissés vides peuvent entraîner des résultats partiels.

---

#  Notice : Liste des molécules

Cette section vous permet de **visualiser, exporter ou importer** les molécules utilisées dans l’outil de calcul de métriques de chimie verte.

---

##  Rechercher une molécule

Utilisez le champ de recherche en haut de la liste pour filtrer les molécules par **nom**, **formule brute** ou **CAS**.

---

##  Exporter/Importer la base de données

- En cliquant sur le bouton **Exporter**, vous téléchargez un fichier JSON contenant toutes les données actuelles de la base.
- En cliquand sur le bouton **Importer**, vous pouvez directement injecter des molécules dans la base de données via JSON.

### Aide pour importer des molécules : 

Pour importer des molécules, il est conseiller de télécharger la Base de données existante en l'exportant et de l'enrichir directement. Cela permet de garder les molécules existante mais également de respecter la structure.

# Notice : Ajout d’une molécule

Cette fiche permet d’ajouter une molécule dans la base de données de l’outil de calcul de métrique de chimie verte.

> **Champs obligatoires** : seuls le **Nom** et la **Formule brute** sont requis pour valider l’ajout.  
> Les autres champs sont facultatifs mais fortement recommandés pour une évaluation complète.

---

## 1. Informations générales

### **Nom**  
Indiquez le nom usuel ou IUPAC de la molécule.  
*Exemple : Acétone*

### **CAS**  
Renseignez le numéro CAS (Chemical Abstracts Service), identifiant unique de la molécule.  
*Exemple : 67-64-1*

### **Formule brute**  
Insèrez la formule chimique brute.  
*Exemple : C₃H₆O*

---

## 2. Section Danger

Activez les boutons correspondant aux dangers associés à la molécule. Plusieurs options peuvent être sélectionnées.  
Chaque danger est représenté par un interrupteur (ON/OFF).

### Catégories disponibles :

| Danger                      | Description rapide                                      |
|----------------------------|----------------------------------------------------------|
| **Nocif**                  | Peut causer des effets nocifs modérés                   |
| **Irritant**               | Provoque une inflammation locale (peau, yeux, etc.)     |
| **Explosible**             | Risque d’explosion                                      |
| **Toxique**                | Nocif même à faible dose                                |
| **Très toxique**           | Effets graves à très faible dose                        |
| **Danger environnement**   | Toxique pour l’environnement (eau, sol, faune, flore)   |
| **Facilement inflammable** | Peut s’enflammer facilement                             |
| **Extrêmement inflammable**| S’enflamme très rapidement                              |
| **R40 / R45 / R46 / R49**  | Mentions de risques cancérogènes, mutagènes             |
| **R60 / R61 / R62 / R63**  | Mentions de risques liés à la reproduction              |

---

## 3. Validation

Une fois tous les champs renseignés :

**Cliquez sur le bouton "Ajouter"** pour enregistrer la molécule dans la base de données.


---

### Crédits

Projet réalisé dans le cadre d'un projet de recherche & développement AP4 à l'ISEN Lille :

- **Alexandre HERSSENS**  
- **Floriant DECROIX**  
- **Fabien SACEPE**  
- **Romain LANNOY**  
- **Amyr HAMAD**  
- **Clément GREZ**

