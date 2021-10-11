const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cancion', (err, songs) => {
            if (err) {
                res.json(err);
            }
            console.log(songs);
            res.render('songs', {
                data: songs
            });
        });
    });
}

controller.save = (req, res) => {

    req.getConnection((err, conn) => {
        const data = req.body;
        conn.query('INSERT INTO cancion set ? ', [data], (err, cancion) => {
            res.redirect('/');
        });
    });

    // console.log(req.body);
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cancion WHERE id = ?', [id], (err, song) => {
            console.log(song[0]);
            res.render('song_edit', {
                data: song[0]
            });
        })
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newSong = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE cancion set ? WHERE id = ?', [newSong, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM cancion WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });    
};

module.exports = controller;