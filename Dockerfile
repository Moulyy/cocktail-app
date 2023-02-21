# Image de base
FROM node:latest
ARG VUE_APP_API_KEY
ENV VUE_APP_API_KEY=$VUE_APP_API_KEY

# Copier les fichiers de l'application
COPY . /app

# Changer le répertoire de travail
WORKDIR /app

# Installer les dépendances
RUN npm install

# Compiler l'application
RUN npm run build

# Exposer le port
EXPOSE 8080

# Démarrer l'application
CMD ["npm", "run", "serve"]