Révisions

On s'approprie un besoin, on comprend le projet qu'on s'apprete à réaliser
on peut réaliser ou partir d'intégrations statiques de nos pages types, du HTML, du CSS et du JS pour respectivement, la structure, la mise en forme et les intéractions.
Il nous faut un serveur HTTP pour servir nos pages quand un utilisateur les demandes en envoyant des requetes depuis son navigateur (en tapant une url ou en cliquant sur un lien)
J'execute un programme Javascript avec Node
Dans ce programme j'utilise express pour mettre en place un serveur HTTP, un programme qui entendra les requete HTTP qui lui sont adressée et qui pourra y répondre
Pour manipuler nos données facilement on met en place la BDD
Pour garantir des évolutions faciles du projet on fait des choix judicieux d'architecture
Exos de révisions

Voici une liste d'exercices que tu peux réaliser dans l'ordre que tu veux, certains te permettront de réviser les notions de la saisons, d'autres d'aller plus loin. Choisis ce qui t'intéresse le plus.

Pour tous ces exos, nous t'encourageons fortement à faire une branche par exo. N'hésite à merge ensuite sur master chaque exo pour t'entraîner. Tu peux même faire une Pull Request sur github, pour cela n'hésite à collaborer avec tes camarades.

Avant de commencer pense à créer le .env et une nouvelle database si ce n'est pas déjà fait. Execute le script create-table.js pour créer les tables et faire le seeding via node create-table

Eviter les répétitions

Dans les vues on a plein de répétitions notamment pour la balise head, header, footer, ... vois comment factoriser ça.

Gérer les erreurs

Regarde le mainController, on ne gère pas le cas ou la BDD ne répondrait pas, voir pour ajouter des block try/catch

Lister les marques

Créer une page pour lister les marques du site. Tâche de bien séparer les concepts avec le router, le controller et une vue.

N'hésite pas ajouter plus de marques dans le fichier create-table.js (puis le réexécuter via node create-table pour voir plus de marques

Lister les produits d'une marque

Au clic sur une marque, on veut voir une page avec la liste des produits de cette marque. Vois ce qu'il faut faire.

Création d'un modèle catégorie

En plus d'avoir une marque, chaque produit peut avoir des catégories caractérisées par un titre. Crée le modèle pour les catégories et définis l'association qui va bien sachant qu'une catégorie peut appartenir à plusieurs produits et qu'un produit peut avoir plusieurs catégories.

Exemple de catégories : "Audio", "Vidéo", "Nouveau", ...

Ajoute ces catégories dans le fichier create-table.js et à les associer à tes produits (puis le réexucter via node create-table

Tu ne sais pas comment faire ?
Afficher les catégories

Sur la page de détail d'un produit, affiche les catégories d'un produit.

Moteur de recherche

Crée un formulaire de recherche par titre de produit. Il peut être dans le header ou sur une page dédiée comme tu préfères. A la validation du formulaire on arrive sur une page de résultat qui liste les produits correspondant au critère de recherche.

En plus pourquoi pas permettre la recherche par catégorie et/ou par marque.

Inscription / connexion

En te basant sur le boulot d'OQuiz, ajoute un model User et les routes pour gérer la connexion et l'inscription

Liste d'envie

Si on est connecté, on a un bouton "Ajouter à mes envies" sur chaque produit. On a une page "Ma liste d'envie" pour voir cette liste. Tu peux la mémoriser en session.

Page admin

Ajouter un role et une page admin pour ajouter des produits

Aller plus loin

Imagine d'autres fonctionnalités et implémente les ;)