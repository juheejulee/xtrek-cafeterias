# xtrek Cafeterias Microsite

A responsive microsite built to showcase the cafeterias, daily menus, and catering services offered across xtrek’s multi-building Ottawa campus.  
The goal of this project is to provide employees, contractors, and nearby businesses with easy access to fresh daily offerings and cafeteria information.

---

## Features

### 1. Daily Menu (PDF)
The head chef requested a simple and flexible way to update the menu of the day.  
To support this, the microsite includes a downloadable PDF template (`xtrek_today_menu.pdf`) that can be replaced anytime without modifying the website code.  
This ensures long-term maintainability and easy updates.

### 2. Responsive Design
All sections adapt smoothly across desktop, tablet, and mobile:
- Hero section reflows vertically on smaller screens  
- Services section stacks into a single column  
- Catering table remains readable and scrollable  
- Accordion menus collapse for compact mobile viewing  

The layout follows WCAG and Lighthouse recommendations, including explicit image sizes to reduce layout shift.

### 3. Cafeteria Accordion
Each cafeteria includes:
- Description of the featured dish  
- Ingredients list  
- Smooth accordion interaction  
- Keyboard-accessible navigation

### 4. Internal Navigation Enhancements
The microsite uses smooth scrolling and skip links to improve navigation for keyboard and screen-reader users.  
Menu items use `data-target` attributes that scroll to corresponding sections.

---

## Technologies Used
- **HTML5** for structured and accessible markup  
- **CSS3** (Flexbox + responsive media queries)  
- **Vanilla JavaScript** for accordion interaction and smooth scrolling  
- **PDF template** created for easy menu updates  

---

# Microsite des cafétérias xtrek

Un microsite responsive conçu pour présenter les cafétérias, les menus du jour et les services de traiteur offerts sur le campus multi-bâtiments d’xtrek à Ottawa.  
L’objectif est de permettre aux employé(e)s, aux entrepreneur(e)s et aux entreprises voisines d’accéder facilement aux offres quotidiennes et aux informations des cafétérias.

---

### 1. Menu du jour (PDF)
Le chef souhaitait une méthode simple et flexible pour mettre à jour le menu du jour.  
Pour répondre à ce besoin, le microsite inclut un modèle PDF téléchargeable (`xtrek_today_menu.pdf`) qui peut être remplacé à tout moment sans modifier le code du site.  
Cela assure une maintenance simplifiée et des mises à jour rapides.

### 2. Design responsive
Chaque section s’adapte de manière fluide aux écrans de bureau, tablettes et mobiles :
- La section héroïque se réorganise verticalement sur les petits écrans  
- La section Services passe en une seule colonne  
- Le tableau de traiteur reste lisible et défilable  
- Les accordéons se replient pour un affichage compact sur mobile  

La mise en page suit les recommandations WCAG et Lighthouse, incluant des dimensions d’images explicites pour réduire les décalages de mise en page.

### 3. Accordéons des cafétérias
Chaque cafétéria présente :
- Une description du plat vedette  
- Une liste détaillée des ingrédients  
- Une interaction fluide de type accordéon  
- Une navigation accessible au clavier  

### 4. Améliorations de navigation interne
Le microsite utilise un défilement fluide et un lien d’évitement pour améliorer l’accessibilité aux utilisateurs du clavier et aux lecteurs d’écran.  
Les éléments du menu utilisent des attributs `data-target` pour faire défiler la page vers la section correspondante.

---

## Technologies utilisées
- **HTML5** pour une structure sémantique accessible  
- **CSS3** (Flexbox et media queries responsives)  
- **JavaScript Vanilla** pour les accordéons et le défilement fluide  
- **Modèle PDF** pour faciliter la mise à jour du menu du jour  

---
