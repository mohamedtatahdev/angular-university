🎓 University Project
📑 Sommaire

📝 Introduction

🎯 Objectifs du projet

🚀 Angular : Présentation rapide

1. Qu'est-ce qu'Angular ?

2. Écosystème Angular

🛠️ Mise en place du projet

1. Création du projet Angular

2. Architecture du projet

3. Configuration des composants

🔐 Authentification JWT & Local Storage

📡 Services Angular

🌐 Requêtes HTTP avec HttpClient

🧾 Formulaires réactifs

🧭 Routing Angular

⚠️ Gestion des erreurs API

🚀 Évolutions possibles

🏆 Conclusion

📝 Introduction

Ce projet a pour objectif de mettre en pratique le développement d'une application web moderne à l'aide d'Angular et de concepts avancés tels que l'authentification JWT, la communication avec une API et la gestion des erreurs.

[!WARNING]
Remarque importante :
L'API fournie par l'université peut volontairement échouer avec une erreur 503 Service Unavailable.
Ce comportement simule un scénario réel de surcharge serveur, obligeant l'application à gérer correctement les erreurs côté client.

🎯 Objectifs du projet

Explorer des frameworks front-end modernes (Angular, React, VueJS, etc.) ou VanillaJS.

Mettre en place des formulaires réactifs.

Implémenter une authentification JWT sécurisée.

Communiquer avec une API REST.

Gérer les erreurs serveur et client.

Découvrir l'écosystème Angular et ses outils.

🚀 Angular : Présentation rapide
1. Qu'est-ce qu'Angular ?

Angular est un framework front-end open-source développé et maintenu par Google.
Il offre une structure robuste pour créer des applications web modernes, scalables et maintenables.

Avantages clés :

Architecture basée sur des composants.

Injection de dépendances intégrée.

Programmation réactive via Signals et RxJS.

Utilisation de TypeScript pour un code plus fiable.

Outils intégrés (CLI, Material Design, etc.).

2. Écosystème Angular
Package	Rôle principal
@angular/forms	Gestion des formulaires (réactifs ou basés sur un modèle).
@angular/router	Système de routage et navigation.
@angular/animations	Création d’animations fluides.
@angular/service-worker	Ajout de fonctionnalités PWA (offline, cache).
@angular/material	Composants UI modernes basés sur Material Design.
@angular/platform-browser	Rendu et interactions DOM.
@angular/platform-server	Rendu côté serveur pour SEO et performance.
🛠️ Mise en place du projet
1. Création du projet Angular
ng new university-app
cd university-app

2. Architecture du projet

Structure par défaut générée par Angular CLI :

<img width="222" height="537" alt="Architecture Angular" src="https://github.com/user-attachments/assets/c410ac11-7aa8-4498-8f90-29afdad608f0" />
3. Configuration des composants

Pour des composants plus légers (template et style inline), configurez angular.json :

"schematics": {
  "@schematics/angular:component": {
    "inlineTemplate": true,
    "inlineStyle": true,
    "skipTests": true,
    "flat": true
  }
}

🔐 Authentification JWT & Local Storage
1. Fonctionnement général

L'utilisateur se connecte via un formulaire.

Envoi des identifiants à l'API (/login_check).

Réception d'un token JWT.

Stockage du token dans le Local Storage.

Utilisation du token pour les appels sécurisés.

À la déconnexion → suppression du token + redirection vers la page de login.

2. Schéma visuel
<img width="651" height="656" alt="JWT Flow" src="https://github.com/user-attachments/assets/e149b419-c664-46dd-95cb-3c12592b22c4" />
📡 Services Angular
Pourquoi des services ?

Centraliser la logique métier.

Gérer la communication avec l’API via HttpClient.

Réduire la duplication de code.

Services implémentés :
Service	Rôle
AuthService	Gestion de l'authentification et des tokens JWT.
ClassroomsService	CRUD des formations.
UserService	CRUD des étudiants.
ApiErrorService	Gestion centralisée des erreurs API.
🌐 Requêtes HTTP avec HttpClient
1. Activer HttpClient

Dans app.config.ts :
<img width="614" height="267" alt="HttpClient import" src="https://github.com/user-attachments/assets/4055a130-363a-4f22-9e7a-a29c4d826e37" />

2. Exemple : GET
Service :
<img width="790" height="350" alt="Http GET" src="https://github.com/user-attachments/assets/43c0999a-6fb4-4c42-b093-28eb957b1549" />
Utilisation dans un composant :
<img width="622" height="308" alt="Http GET subscribe" src="https://github.com/user-attachments/assets/39e69fb0-2b4a-44da-9e6d-3b3e278ac10e" />
3. Notion d'Observable
<img width="690" height="268" alt="Observable" src="https://github.com/user-attachments/assets/d5407b41-03d0-4338-80ff-51cbd6fd4b79" />

[!NOTE]
Les Observables permettent de gérer les flux asynchrones.
Il est nécessaire d'utiliser .subscribe() pour récupérer leurs données.

🧾 Formulaires réactifs
Élément	Description
FormControl	Représente un champ individuel avec valeur, état et validations.
FormGroup	Groupe logique de contrôles (ex : formulaire utilisateur).
FormArray	Ensemble dynamique de contrôles (ex : liste d'adresses).

Exemple avec FormBuilder :
<img width="763" height="143" alt="FormBuilder" src="https://github.com/user-attachments/assets/0f09b299-7e27-4d44-9cd4-70b8e16c9fb5" />

🧭 Routing Angular

Définir les routes dans un module dédié.

Utiliser <router-outlet> dans les templates pour afficher les vues.

<img width="486" height="666" alt="Routing Angular" src="https://github.com/user-attachments/assets/f4337c97-f903-4349-b1d2-abe911b1f669" />
⚠️ Gestion des erreurs API
Objectif :

Gérer les erreurs comme :

422 Unprocessable Entity

503 Service Unavailable

Implémentation :

Service dédié :

<img width="525" height="310" alt="Error Service" src="https://github.com/user-attachments/assets/1d597226-a56e-47f5-baac-3743776deca9" />

Affichage dans le template :

<img width="545" height="426" alt="Template Error Handling" src="https://github.com/user-attachments/assets/e202e107-fd0d-489c-8d64-f715d3dd65bf" />
🚀 Évolutions possibles

Implémenter un HttpInterceptor pour la gestion globale des erreurs.

Utiliser des guards pour sécuriser les routes.

Approfondir l'utilisation des Signals.

Mettre en place des tests unitaires et end-to-end.

Optimiser le chargement avec le lazy loading.

🏆 Conclusion

Ce projet m'a permis de découvrir Angular en profondeur, notamment :

La gestion des formulaires réactifs.

L'authentification sécurisée via JWT.

La gestion des erreurs côté client.

