# Données d'entrée pour les formules de chimie verte

## 1. Énergie de réaction (∆H)
**Formule :**  
ΔH = Σ ΔH\_{produits} - Σ ΔH\_{réactifs}

### Données d'entrée :
- **ΔH des produits** : Entropie de chaque produit (trouvée dans les tables thermodynamiques)
- **ΔH des réactifs** : Entropie de chaque réactif (trouvée dans les tables thermodynamiques)

---

## 2. ERM (Efficacité de Réaction Massique)
**Formule :**  
ERM = (Masse du produit désiré / Masse totale des réactifs) × 100

### Données d'entrée :
- **Masse du produit désiré** : Masse du produit formé à l'issue de la réaction.
- **Masse totale des réactifs** : Somme des masses de tous les réactifs utilisés.

---

## 3. Facteur E
**Formule :**  
Facteur E = (Σ Masse des déchets) / Masse du produit désiré

### Données d'entrée :
- **Masse des déchets produits** : Somme des masses des sous-produits ou déchets générés.
- **Masse du produit désiré** : Masse du produit formé à l'issue de la réaction.

---

## 4. Utilisation Atomique
**Formule :**  
Utilisation Atomique = (Masse du produit désiré / Σ Masse des réactifs) × 100

### Données d'entrée :
- **Masse du produit désiré** : Masse du produit formé.
- **Masse des réactifs utilisés** : Masse totale des réactifs.
- **Masse des produits formés** : Masse des produits obtenus pour comparaison avec les réactifs.

---

## 5. Indice EF (Efficacité des Flux)
**Formule :**  
EF = Masse des intrants / Masse des produits

### Données d'entrée :
- **Masse des intrants (réactifs)** : Masse totale des réactifs utilisés dans la réaction.
- **Masse des produits obtenus** : Masse totale des produits formés.

---

## 6. PRM (Pourcentage de matière recyclée)
**Formule :**  
PRM = (Masse des matières recyclées ou réutilisables / Masse totale des matières introduites dans le processus) × 100

### Données d'entrée :
- **Masse des matières recyclées ou réutilisables** : Masse des matières qui sont recyclées dans le processus.
- **Masse totale des matières introduites** : Masse totale de toutes les matières (réactifs, catalyseurs, etc.) dans le processus.

## Informations que vous pouvez obtenir à partir de ces bases de données pour les formules :

### 1. Énergie de réaction (∆H) :
- **PubChem** peut partiellement fournir des enthalpies de formation standard pour certains composés.
- **ChemSpider** et **ChEMBL** peuvent donner des liens vers des publications avec des données thermodynamiques.

### 2. ERM (Efficacité de Réaction Massique) :
- **PubChem**, **ChemSpider**, et **ZINC** peuvent fournir des masses molaires et d'autres propriétés physiques pour les réactifs et produits.

### 3. Facteur E :
- **ECHA** fournit des données détaillées sur les déchets et la dangerosité, ce qui peut être utile pour les calculs du facteur E.

### 4. Utilisation Atomique :
- Les masses molaires nécessaires peuvent être obtenues via **PubChem**, **ChemSpider**, et **ZINC**.

### 5. Indice EF (Efficacité des Flux) :
- Les masses des intrants (réactifs) et des produits peuvent être obtenues à partir des propriétés physico-chimiques dans **PubChem**, **ChemSpider**, **ZINC**, et **ECHA**.

### 6. PRM (Pourcentage de matière recyclée) :
- Les propriétés physiques des matières recyclées et réutilisables peuvent être trouvées dans **ECHA** et **PubChem**.

---

