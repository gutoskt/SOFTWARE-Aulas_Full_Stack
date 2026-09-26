import express from 'express';
import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';

const tarefas = ["Comprar Pao", "Lavar Roupa", "Estudar Node.js"];

// Query Params ?nome=Comrpar Pao
// Route Params /tarefas/2
// Request Body { nome: "Comprar Pao", "usuario": 123 }

const router = Router();

  router.use("/api", router);

  // Middleware global que será executado em todas as rotas

  router.use((req: Request, res: Response, next: NextFunction) => {

    console.log("Passou aqui no Mid Global");

    return next();
  });


  // Middleware específico para verificar se o nome está presente no corpo da requisição
  
  function checkNome(req: Request, res: Response, next: NextFunction) {
  

    if(!req.body.nome){
      return res.status(400).json({message: "Nome é obrigatório"});
    }

    return next();
  }

  /*router.get('/tarefas', (req: Request, res: Response) => {

    const nome = req.query.nome;

    res.json({message: 'Lista de Tarefas', tarefa: nome})
  });*/

  /*router.get('/tarefas/:id', (req: Request, res: Response) => {

    const id = req.params.id;

    res.json({message: 'Lista de Tarefas', tarefa: id})
  });*/

  router.get('/tarefas', (req: Request, res: Response) => {

    res.json(tarefas)
  });

  router.get('/tarefas/:index', (req: Request, res: Response) => {

    const index = Number(req.params.index); // Tem que transformar em número, vem como string

    res.json({tarefa: tarefas[index]});
  });

  // Método POST para criar uma nova tarefa

  router.post('/tarefas', checkNome, (req: Request, res: Response) =>{
    const {nome} = req.body;

    tarefas.push(nome);
    res.json(tarefas);
  });


  // Método PUT para atualizar uma tarefa

  router.put('/tarefas/:index', (req: Request, res: Response) => {

    const index = Number(req.params.index); // Tem que transformar em número, vem como string

    tarefas[index] = req.body.nome;

    res.json(tarefas);
  });

  router.delete('/tarefas/:index', (req: Request, res: Response) => {

    const index = Number(req.params.index); // Tem que transformar em número, vem como string

    tarefas.splice(index, 1); // o que é o 1 -> significa que vai remover 1 elemento a partir do índice especificado

    res.json(tarefas);
  });

export default router;