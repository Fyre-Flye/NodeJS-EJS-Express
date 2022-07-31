const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const items = [
        { title: 'D', message: 'Desenvolvimento de Software' },
        { title: 'E', message: 'Empreendedorismo' },
        { title: 'M', message: 'Marketing Digital' },
        { title: 'A', message: 'Administração' },
        { title: 'I', message: 'Infraestrutura' },
        { title: 'S', message: 'Segurança da Informação' }
    ]

    const subtitle = "EJS é muito legal!"

    res.render('pages/index', {sigla: items, subtitle: subtitle});
    });

app.get('/about', (req, res) => {
    res.render('pages/about');
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });