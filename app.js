import express from 'express';
const app = express();

app.set('view engine', 'ejs');


const PORT = 3002;

app.get('/', (req, res) => {
    let user = {
        name: "Drew",
        color: "purple",
        food: "pizza",
        grade: 2.5,
        age: 23,
        hobbies: ['kendama', 'skateboarding', 'chess'],
        classes: ['SDEV301', 'SDEV305', 'ENGL&335']
    }
    res.render('home', {user});
});

app.listen(PORT, () => {
    console.log(`Server is running gloriously at http://localhost:${PORT}`);
})