const pool = require('../config/database');

async function listaEditora() {
    const [results] = await pool.query('SELECT * FROM editora');
    return results;
}

async function adicionarEditora(editora) {
    const { nome_editora } = editora;
    const [results] = await pool.query('INSERT INTO editora (nome_editora)) VALUES (?)', [nome_editora]);
    return results.insertId;
}

async function atualizarEditora(id, livro) {
    const { titulo, autor, dataPublicacao } = livro;
    await pool.query('UPDATE livros SET titulo = ?, autor = ?, dataPublicacao = ? WHERE id = ?', [titulo, autor, dataPublicacao, id]);
}

async function deletarLivro(id) {
    await pool.query('DELETE FROM livros WHERE id = ?', [id]);
}

module.exports = {
    listarLivros,
    adicionarLivro,
    atualizarLivro,
    deletarLivro
};