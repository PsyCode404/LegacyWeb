# 🌸 FAQ Legacy – Une Expérience Moderne construite avec une Technologie Vintage

Ce projet s'inscrit dans le cadre de la Nuit de l'Info 2025 et relève un défi rare : concevoir une page web qui semble créée en 2025, mais réalisée avec les technologies du milieu des années 2000. Le résultat est une page FAQ indistinguable d'un site moderne, parfaitement responsive, élégante, fluide et interactive, pourtant construite sans CSS3, sans frameworks, et sans outils modernes.

C'est un véritable exercice d'ingénierie créative où chaque composant a été réinventé sous contrainte, démontrant qu'un design réfléchi peut transcender la technologie à disposition.

---

## 🎯 Mandat du Projet & Défi Principal

Construire une page FAQ moderne, responsive et interactive, en utilisant strictement :

HTML 4.01

CSS 2.1

jQuery 1.x

Sans :

❌ Media queries

❌ Flexbox ou Grid

❌ Border-radius ou box-shadow

❌ Transitions ou transformations

❌ JavaScript moderne

❌ Frameworks (React, Vue, Angular…)

Le principal défi :
Combler 20 ans d’évolution web avec des technologies figées.
Créer aujourd’hui ce qui n’était même pas concevable en 2005.

---

## ✨ Fonctionnalités Clés & Architecture Technique

Chaque fonctionnalité a été pensée pour reproduire les standards du web moderne tout en respectant strictement les contraintes patrimoniales.

### 1. 🖥️ Simulation de Responsive Design (sans media queries)

Le responsive est entièrement géré côté JavaScript.

🔧 Principe

Au chargement et au redimensionnement, un script mesure la largeur de la fenêtre et applique automatiquement l’une de ces classes au wrapper principal :

layout-desktop
layout-tablet
layout-mobile


Chacune déclenche un ensemble de styles CSS 2.1 différents.
Ce système recrée l’équivalent des media queries… sans media queries.

🎨 Mise en page CSS

Toute la structure utilise :

floats

inline-blocks

largeurs en pourcentage

Une prouesse inspirée de l’ère Web 1.0 utilisée comme un outil de design moderne.

### 2. 📚 Accordéon FAQ ultra-fluide (jQuery only)

Un accordéon moderne intégralement alimenté par jQuery 1.x :

- Animation fluide via `.slideDown()` et `.slideUp()`
- Une seule réponse ouverte à la fois
- Interface épurée et intuitive

Aucune animation CSS n'a été utilisée. Tout repose sur la logique JavaScript d'époque, parfaitement optimisée.

### 3. 🧠 Suivi de progression gamifié (mini-IA)

Pour encourager l'exploration, la FAQ intègre un système de progression intelligent :

- Comptabilise les questions uniquement lues une fois
- Affiche « Vous avez lu X questions sur 5 » en temps réel
- Débloque un message final motivant : `🎉 Vous avez exploré toutes les questions de la FAQ !`

Cette micro-gamification donne l'impression d'un coach ou assistant numérique.

### 4. 🗂️ Système d'Onglets Accessible

La section "Pour qui est ce village numérique ?" utilise un système d'onglets :

- Chargement instantané
- Sans rechargement de page
- Accessible au clavier
- Style moderne recréé sans `border-radius` ni `transition`

### 5. 💬 Infobulles "assistant IA" hautement raffinées

Des micro-infobulles enrichissent l'expérience :

- Icône `?` discrète et moderne
- Infobulle au survol et au focus clavier
- Positionnement dynamique
- Texte pédagogique contextuel

### 6. 🔍 Mini Simulateur de Diagnostic d'Appareil (sans backend)

Un mini-assistant façon "IA embarquée" :

- L'utilisateur répond à 3 questions (radio)
- jQuery calcule un score
- Une recommandation contextualisée apparaît :
  - ⭐ Votre appareil est parfaitement réutilisable
  - ⭐ Recommandé : passer à une distribution Linux légère
  - ⭐ Impact estimé : -50% d'empreinte numérique

Un simulateur intelligent, 100% frontend.

### 7. 📱 UX Mobile : contournement créatif d'une limite structurelle

⚠️ Problème imposé par HTML4 + CSS2.1 :

Les boutons radio natifs ne peuvent pas être redimensionnés.
Impossible d’augmenter leur taille, changer leur couleur ou styliser leur forme.

✔ Notre solution élégante

Au lieu de tricher, nous avons repensé l’expérience utilisateur :

Rendre l’intégralité du label cliquable

Augmenter la zone tactile

Agrandir la police et l’espacement uniquement en mobile


Résultat :
Une interaction moderne sans toucher au bouton radio, totalement conforme aux limites technologiques.

---

## 💡 Stack Technique

| **Couche** | **Technologie** | **Notes** |
| :--- | :--- | :--- |
| **Markup** | HTML 4.01 Transitional | Strictement conforme W3C |
| **Styles** | CSS 2.1 | Aucune fonctionnalité CSS3 |
| **Script** | jQuery 1.12.4 | Animations + logique responsive |
| **Architecture** | Single Page App (sans framework) | 100% côté client |

---

## 🗂 Structure du Projet

```markdown
/
├── index.html
├── css/
│   └── legacy-faq.css
├── js/
│   └── legacy-faq.js
└── img/
    └── logo.png
```

---

## 🚀 Déploiement sur Vercel

Ce site étant purement statique, Vercel est idéal.

### Configuration

- **Chemins Relatifs** : Utilisez toujours des chemins relatifs depuis le fichier `index.html` pour garantir que les ressources sont correctement localisées.
- **Aucune Étape de Build** : Comme le projet est en HTML, CSS et JS purs, aucune configuration de build n'est nécessaire.

### Configuration Vercel Explicite

Pour une configuration Vercel explicite, vous pouvez optionnellement ajouter un fichier `vercel.json` :

```json
{
  "version": 2,
  "builds": [
    { "src": "*", "use": "@vercel/static" }
  ]
}
```

---

## 🏁 Conclusion

> Ce projet démontre qu'il est possible de créer une expérience 2025 avec la technologie de 2005, tout en maintenant accessibilité, fluidité et design moderne. Ce n'est pas uniquement une page FAQ ; c'est une preuve de créativité, un exercice d'ingénierie à contre-courant, et une démonstration qu'un bon développeur peut faire beaucoup avec très peu.

Un hommage au web d'hier, conçu pour les utilisateurs d'aujourd'hui.
