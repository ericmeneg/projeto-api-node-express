import Produto from  "../models/produto.model.js"

export default class ProdutoController{
    static async index(req,res) {
        const produtos = await Produto.findMany()
        res.json(produtos)
    }
}