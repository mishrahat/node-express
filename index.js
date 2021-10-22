const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const users = [
    {
        id: 0,
        name: 'Salman Khan',
        email: 'salmanbhai@gmail.com',
        phone: '082922789'
    },
    {
        id: 1,
        name: 'Shahrukh Khan',
        email: 'srkking@gmail.com',
        phone: '0835459'
    },
    {
        id: 2,
        name: 'Aamir Khan',
        email: 'perfectaamir@gmail.com',
        phone: '084353389'
    },
    {
        id: 3,
        name: 'Akshay Kumar',
        email: 'akshaykhiladi@gmail.com',
        phone: '08534534389'
    },
    {
        id: 4,
        name: 'Sanjay Dutt',
        email: 'sanjubaba@gmail.com',
        phone: '08254654659'
    },
    {
        id: 5,
        name: 'Ajay Devgan',
        email: 'ajaysingham@gmail.com',
        phone: '0822342389'
    },
    {
        id: 6,
        name: 'Sunny Deol',
        email: 'sunnypaaji@gmail.com',
        phone: '0823453479'
    }
];

app.use(cors());
app.use(express.json());

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser);
})

app.get('/', (req, res) => {
    res.send('Bohot Cheese Ek Sath!');
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to Port', port);
})