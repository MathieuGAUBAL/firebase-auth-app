const express = require('express');
const router = express.Router();
const connection = require('../db_config');

//créer une playlist
router.post('/', (req, res) => {
    const { title, genre } = req.body;

    const sql = `INSERT INTO playlist ( title, genre ) VALUES (?, ?)`;
    connection.query(sql, [title, genre], (error, results) => {
        if (error) {
            res.status(500).json({ error: error });
        } else {
            res.status(201).json({
                id: results.insertId,
                title,
                genre,
            });
        };
    });
});

//consulter une playlist par son :id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM playlist WHERE id=?`;
    connection.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).json({ error: error });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'ressource not found!' });
        } else {
            res.status(200).json(results);
        }
    });
});

//consulter toutes les playlists
router.get('/', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM playlist`;
    connection.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).json({ error: error });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'ressource not found!' });
        } else {
            res.status(200).json(results);
        }
    });
});

//supprimer une playlist par son :id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM playlist WHERE id=?`;
    connection.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).json({ error: error });
        } else if (results.length > 0) {
            const sql = `DELETE FROM playlist WHERE id=?`;
            connection.query(sql, [id], (error, results) => {
                if (error) {
                    res.status(500).json({ error: error });
                } else {
                    res.status(204).end();
                }
            });
        } else {
            res.status(404).json({ error: 'ressource not found!' });
        }
    });
});

//modifier une playlist par son :id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, genre } = req.body;

    const sql = `SELECT * FROM playlist WHERE id=?`;
    connection.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).json({ error: error });
        } else if (results.length > 0) {

            const sql = `UPDATE playlist SET ? WHERE id=?`;
            connection.query(sql, [req.body, id], (error, results) => {
                if (error) {
                    res.status(500).json({ error: error });
                } else {
                    res.status(202).json({
                        id,
                        title,
                        genre
                    });
                }
            });
        } else {
            res.status(404).json({ error: 'ressource not found!' });
        }
    });
});

//consulter les tracks d'une playlist par son :id
router.get('/:id/tracks', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT t.title, t.artist, t.album_picture, t.youtube_url FROM track AS t JOIN track AS p WHERE p.id=p.playlist_id AND t.playlist_id=?`;
    connection.query(sql, [id], (error, results) => {
        if (error) {
            res.status(500).json({ error: error });
        }else if(results.length > 0){
            res.status(200).json(results);
        }else{
            res.status(404).json({error:'Ressource not found'});
        }
    })
});

module.exports = router;