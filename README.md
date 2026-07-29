# Alnora — site web

Site vitrine pour Alnora, service de lavage de bacs à Cowansville.

## Structure

```
alnora-site/
├── index.html      page principale (accueil, forfaits, zone, avant/après, avis, sondage)
├── css/
│   └── style.css   toutes les styles
└── js/
    └── script.js   menu mobile, curseur avant/après, formulaire du sondage
```

## Mettre le site en ligne avec GitHub Pages

1. Crée un nouveau dépôt sur GitHub (ex. `alnora-site`).
2. Ajoute ces fichiers au dépôt :
   ```
   git init
   git add .
   git commit -m "Premier commit du site Alnora"
   git branch -M main
   git remote add origin https://github.com/TON-NOM-UTILISATEUR/alnora-site.git
   git push -u origin main
   ```
3. Dans GitHub : Settings → Pages → Source → choisis la branche `main` et le dossier `/ (root)`.
4. Le site sera accessible à `https://TON-NOM-UTILISATEUR.github.io/alnora-site/` après quelques minutes.

## Pour brancher un vrai nom de domaine (ex. alnora.ca)

Dans Settings → Pages, ajoute ton domaine personnalisé, puis configure chez ton registraire :
- un enregistrement `CNAME` pointant vers `TON-NOM-UTILISATEUR.github.io`

## À faire avant la mise en ligne réelle

- Remplacer les blocs `.img-before` / `.img-after` dans `css/style.css` par de vraies photos avant/après.
- Brancher le formulaire du sondage (section `#sondage`) à une base de données ou un service comme Google Forms / Airtable / un backend simple.
- Intégrer Stripe pour les paiements (Stripe Checkout ou Payment Links suffisent pour démarrer).
- Relier le bouton "Laisser un avis sur Google" au vrai lien de ta fiche Google Business.
- Ajouter Google Analytics et connecter le profil Google Business.
