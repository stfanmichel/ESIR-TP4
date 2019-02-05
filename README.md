# ESIR-TP4 : Tests unitaires et sécurité

Pour ce TP nous allons repartir de l'état final du TP4.
Nous allons lui ajouter des tests unitaires, un peu de sécurité et une optimisation pour supporter des montées en charges.

## Objectifs :
  - Mettre en place des tests unitaires sur les services REST
  - Comprendre quelques failles de sécurité commune et le moyen de les éviter
  - Optimiser notre serveur par l'utilisation d'un pattern de cache mémoire.
  
## Sujets abordés :
 - Express
 - REST / CRUD
 - Tests unitaires
 - Optimisation (pattern cache)
 - Sécurisation des applications web
 
## Lien utiles :

  - Outillage (npm, node, git, curl, postman, ab, etc.) : https://slides.com/stephmichel/deck-4#/
  - Express : Le cours sur les tests unitaires et de charges de Benoît. 
  
## Modules node utilisés
  - express : https://www.npmjs.com/package/express
  - mocha : https://www.npmjs.com/package/mocha
  - chai : https://www.npmjs.com/package/chai
  - chai-http : https://www.npmjs.com/package/chai-http
  - helmet : https://www.npmjs.com/package/helmet
  
Pour le bon déroulement du TP et pour vous familiariser avec GIT, lorsque vous liser une ligne du genre (Tag: BLA-BLA-BLA), 
c'est qu'il est temps de commiter vos modifications afin de pouvoir revenir à ce niveau de code plus tard si besoin. 
Ceci vous permettra également de vous y retrouver lorsque le correctif vous sera fourni.
  
# Initialisation d'un projet

Repartir de l'état final du TP3.

(tag : TP4-ESIR-INIT)

# STEP 1 : Configuration et permier test unitaire

Nous allons installer les modules mocha et chai-http et réaliser le test unitaire d'un permier service REST.

(tag : TP4-ESIR-STEP1)

# STEP 2 : Configuration et permier test unitaire

En autonomie, il s'agit de réaliser les tests unitaires de tous les autres service REST.

(tag : TP4-ESIR-STEP2)

