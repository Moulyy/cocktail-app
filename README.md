# Application de génération de cocktail aléatoire

Application Vue.js pour la génération de trois cocktails aléatoires et la visualisation des ingrédients composants chaque cocktail. Cette application utilise l'API TheCocktailDB : https://www.thecocktaildb.com/

Librairies utilisées : 
- Vue.JS
- Tailwind.css
- Jest.js
- vue3-lottie

## Création de l'image docker
``` 
docker build -t cocktail-app -f ./Dockerfile .
```
## Lancement d'un container
```
docker run -e VUE_APP_API_KEY=yourAPIKey cocktail-app
```
La clé API qui doit être utilisé par Vade pour l'application a été communiquée par mail.

# Lancement de l'application

```
npm install
npm run serve
```

## Exécution des tests unitaires
```
npm run test:unit
```