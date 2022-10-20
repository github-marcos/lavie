const Psicologos = require("../models/Psicologos");
const bcrypt = require('bcryptjs')

const psicologoController = {
    listarPsicologo: async (req, res) => {
        const listaDePsicologos = await Psicologos.findAll({
        });

        res.status(200).json(listaDePsicologos);
    },


   encontrarPsicologo: async (req, res) => {
        const { id } = req.params;

        const encontrarPsicologos = await Psicologos.findOne({
            where: {
                id,
                },
        });
        

        res.status(200).json(encontrarPsicologos);
    },

    async registrarPsicologo(req, res) {
        const { email, senha } = req.body;

        const newSenha = bcrypt.hashSync(senha, 10);

        const newPsicologo = await Psicologos.create({ email, senha: newSenha });
    
        return res.status(200).json(newPsicologo);
    },


    async cadastrarPsicologo(req, res) {
    //try{
        console.log(req.auth);
        const { nome, email, senha, apresentacao } = req.body;

        const novoPsicologo = await Psicologos.create ({
            nome, 
            email,
            senha,
            apresentacao,
        });
    
        res.status(201).json(novoPsicologo);
    },//catch(err){
      //return res
      //.status(500)
      //.json("Erro de processamento")  
      
    async atualizarPsicologo(req, res) {
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;

        const psicologoAtualizado = await Psicologos.update(
            {
            nome,
            email,
            senha,
            apresentacao,
            }, 
            
            {
            where: {
               id,
              },
            },
        );
        
        res.status(200).json("Psicologo Atualizado");
    },


    async deletarPsicologo(req, res) {
        const { id } = req.params;
        
        const deletarPsicologo = await Psicologos.count({
            where: {
                id,
                },
        });
        if (!id) return res.status(404).json("id não encontrado");

        await Psicologos.destroy({
            where: {
                id,
            },
        });

        res.sendStatus(204);
        },
};

module.exports = psicologoController;