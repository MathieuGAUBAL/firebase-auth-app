# firebase-auth-app

implémentation firebase : 

back :
1.creer un dossier à la racine du back qu'on nomme "firebase" (comme tu veux en fait)
2.
A. Depuis la plateforme de firebase, cliquer sur la roue dentée (Project Overview)
B. allez dans la rubrique Service accounts et cliquer sur create new account ou si deja fait. récupérer le code proposer en nodeJs

```
var admin = require("firebase-admin");
var serviceAccount = require("path/to/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
```

C. Cliquer sur new generate private key. Tu vas devoir télécharger ce fichier qui est important pour l'authentification (voir documentation). Modifier var => const

D. Inclure le fichier fraichement téléchargé (private key) dans le dossier firebase créer


