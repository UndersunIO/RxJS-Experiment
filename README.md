# Expérimentation RxJS avec ReactTS

## Barre de navigation avec affichage différé + Test unitaire.

### Fiche

# Rxjs

https://www.learnrxjs.io/

## Qu’est ce que RxJS ?

Nom : Reactive eXtension for JS

Paradigme : Programmation Reactive .

Quand ? : Si vous travaillez aussi sur d’autre framework que react comme angular, besoin de gestion / d’édition complexe sur un event ou donnée asynchrone.

Utilité : Travailler avec des flux de données asynchrone.

exemples : gestion d’event, animations, websockets, gestion d’erreur, delai

Concepts clé : Observable, Operators, tree shaking (réduire l’impact du bundle)

Processus :

- Crée un observable
- S’abonner
- integrer

# Lexique

Observable : Objet émettant une séquence de valeurs sur le temps une fois abonné.

Abonnement : Permet de recevoir la valeur émis par l’observable

- nettoyer / annuler l’execution (le désabonnement par exemple)
