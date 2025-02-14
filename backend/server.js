import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Utilisateur fictif (à remplacer par une base de données)
const users = [
  { id: 1, username: 'admin', password: '$2a$10$5Q9sqw4cRAtL59DZyVURw.zFYpAB2wE0AqzleRdu9zZ2q3fFhZFAu' } // Mot de passe : "password"
];

const app = express();
app.use(express.json());

// Route de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Trouver l'utilisateur
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Utilisateur non trouvé' });
  }

  // Comparer le mot de passe
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err || !isMatch) {
      return res.status(400).json({ message: 'Mot de passe incorrect' });
    }

    // Créer un token JWT
    const token = jwt.sign({ userId: user.id }, 'votre-clé-secrète', { expiresIn: '1h' });
    res.json({ message: 'Authentification réussie', token });
  });
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('API en écoute sur http://localhost:3000');
});
