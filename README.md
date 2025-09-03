# Introduction University

## Objectif du projet
- Exploration de frameworks côté client (React, VueJS, Angular, Svelte, NextJS, Astro...) ou bien réalisation en full VanillaJS
- Réalisation de formulaires
- Authentification JWT
- Communication avec une API
- Gestion des erreurs renvoyées par l'API
[!WARNING]
** Remarque
La particularité de l'API fournie par l'université est qu'elle peut échouer (code 503 Service Unavailable) : cela simule un scénario dans lequel les demandes d'inscription sont très élevées et le serveur ne peut tenir la charge**

---

# Angular ?
1. Qu'est-ce qu'Angular ?
Angular est un framework de développement web qui permet aux développeurs de créer des applications rapides et fiables.
Maintenu par une équipe dédiée chez Google, Angular fournit un large ensemble d'outils, d'API, et de bibliothèques pour simplifier et optimiser le flux de travail de développement. Il offre une plateforme solide pour construire des applications qui peuvent évoluer aussi bien avec la taille de l'équipe de développement qu'avec la complexité de la base de code.

2. Caractéristiques principales
   - Architecture basée sur des composants et composition
   - Injection de dépendances (DI)
   - Réactivité basée sur les Signals
   - Utilisation de TypeScript
     
3. Un framework progressif
   - @angular/http : fournit des services pour effectuer des requêtes HTTP, facilitant la communication avec des API RESTful.
   - @angular/service-worker : intègre des fonctionnalités de Progressive Web App (PWA), permettant la mise en cache et le fonctionnement hors ligne des applications.
   - @angular/material : propose une collection de composants UI basés sur les directives de Material Design, offrant des éléments d'interface utilisateur modernes et réactifs.
   - @angular/cli : outil en ligne de commande qui simplifie la création, la gestion et le déploiement d'applications Angular.
   - @angular/cdk : le "Component Dev Kit" fournit des outils et des comportements communs pour la création de composants personnalisés.
   - @angular/platform-browser : contient des outils spécifiques au navigateur pour le rendu et la manipulation du DOM.
   - @angular/platform-server : supporte le rendu côté serveur, améliorant les performances et le référencement des applications.
   - @angular/animations : fournit des API pour créer des animations fluides et réactives dans les applications.
   - @angular/forms : gère les formulaires réactifs et basés sur des modèles, facilitant la validation et la gestion des entrées utilisateur.
   - @angular/router : permet la navigation et le routage entre les vues, essentiel pour les applications à page unique.
  
     

# Les débuts dans Angular 
1. Crée un dossier, Aller dans ce dossier, executer la commande suivante
   ```bash
   ng new app
   ```

2. Architecture du projet
   <img width="222" height="537" alt="image" src="https://github.com/user-attachments/assets/c410ac11-7aa8-4498-8f90-29afdad608f0" />

3.Les composants
dans angular.json
```bash
"schematics": {
"@schematics/angular:component": {
"inlineTemplate": true,
"inlineStyle": true,
"skipTests": true,
"flat": true
}
} ```

# Authentification JWT & Local Storage

Login et génération de JWT

- Appel à l'API /login_check avec username/password

- Récupération du token

- Stockage dans localStorage

Sauvegarde du token

Utilisation pour les appels sécurisés

 Déconnexion

- Suppression du token

- Redirection vers la page de connexion

Utilisation de local storage
<img width="651" height="656" alt="image" src="https://github.com/user-attachments/assets/e149b419-c664-46dd-95cb-3c12592b22c4" />

Un exemple dans le code 
<img width="720" height="782" alt="image" src="https://github.com/user-attachments/assets/982b4e6a-4206-4622-ba16-1549cb36b0ff" />


# Services Angular
- Centraliser la logique métier

- Communication avec l’API via HttpClient

Services créés dans le projet
- AuthService : gestion du login/logout et token

- ClassroomsService : CRUD des formations

- UserService : CRUD des étudiants

- ApiErrorService : gestion globale des erreurs

# Requêtes HTTP
Exemple avec la requete get:
Tout d'abord
Avant toute chose, vous devez vous assurer que le service HttpClient est importé dans votre application. Si ce n'est pas le cas, vous pouvez le faire en ajoutant provideHttpClient() à la liste des fournisseurs de votre application.

Allez dans src/app/app.config.ts:
<img width="614" height="267" alt="image" src="https://github.com/user-attachments/assets/4055a130-363a-4f22-9e7a-a29c4d826e37" />

Injecter HttpClient(dans un service)

<img width="790" height="350" alt="image" src="https://github.com/user-attachments/assets/43c0999a-6fb4-4c42-b093-28eb957b1549" />

Utuliser le service dans le composant pour recuper la liste en utilisant la methode subscribe de l'objet observable retourné par le service

<img width="622" height="308" alt="image" src="https://github.com/user-attachments/assets/39e69fb0-2b4a-44da-9e6d-3b3e278ac10e" />




# Formulaires réactifs

# Outils et librairies (Angular Material)

# Routing Angular 🆕

# Gestion d’erreurs (422, 503, etc.)

# Évolutions possibles

# Conclusion

#

#

#

