const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let collection;

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('games_Playstation_Store');
    collection = db.collection('games_Playstation_Store');

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

connectDB();

app.use(express.json()); 


app.post('/matriculas', async (req, res) => {
  try {
    const novaMatricula = req.body;

    const result = await collection.insertOne(novaMatricula);

    
    res.status(201).json({ message: 'Game criado com sucesso', matriculaId: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar game', error: err });
  }
});

app.get('/games', async (req, res) => {
  try {


    const games = await collection.find().toArray();
    //complete o código
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar games', error: err });
  }
});

const { ObjectId } = require('mongodb');

app.get('/matriculas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    //complete o código

    if (!matricula) {
      res.status(404).json({ message: 'Matrícula não encontrada' });
    } else {
      res.status(200).json(matricula);
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar matrícula', error: err });
  }
});

app.put('/matriculas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);
    const atualizacao = req.body;

    const alterar =  await collection.updateOne( { _id: newId }, { $set: atualizacao });

    if (alterar.matchedCount === 0) {
      res.status(404).json({ message: 'Matrícula não encontrada' });
    } else {
      res.status(200).json({ message: 'Matrícula atualizada com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar matrícula', error: err });
  }
});

app.delete('/matriculas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    const result = await collection.deleteOne({ _id: newId })

    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Matrícula não encontrada' });
    } else {
      res.status(200).json({ message: 'Matrícula excluída com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir matrícula', error: err });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
