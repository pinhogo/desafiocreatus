import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import express from 'express'
const app = express()
app.use(express.json());
import fetch from 'node-fetch';
import { config } from 'dotenv';
config();

const KEY = {
    omdb: process.env.OmdbApiKey,
    autorization: process.env.auto
}

const api = {
    Omdb: `http://www.omdbapi.com/?${KEY.omdb}&plot=full&t=`,
    Tmdb: `https://api.themoviedb.org/3/search/movie?query=`
}

app.get('/findmovie', async (req, res) => {
    const { title } = req.query;
    let original_title = String;
    let release_date = String;

    const fetchMovieData = async () => {
        const response = await fetch(`${api.Tmdb}${title}&include_adult=true&language=pt-BR&page=1&region=Brasil`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `${KEY.autorization}`
            }
        });

        const data = await response.json();

        original_title = (data.results[0].original_title);
        release_date = (data.results[0].release_date);

        const fetchMovieimdb = async () => {
            const response = await fetch(`${api.Omdb}${original_title}&y=${release_date}`)
            const data2 = await response.json();
            async function find() {
                const result = await prisma.movies.findUnique({
                    where: {
                        tconst: data2.imdbID
                    }

                })
                if (result != null) {
                    res.json(result);

                } else {
                    const result = await prisma.movies.create(
                        {
                            data: {
                                title: data.results[0].title,
                                orinal_title: data2.Title,
                                classification: data2.Rated,
                                sinopsys: data.results[0].overview,
                                tconst: data2.imdbID,
                                genre: data2.Genre,
                                year: data2.Released,
                                casting: { actors: data2.Actors, director: data2.Director, wiriter: data2.Writer },
                                rating: [{ source: data2.Ratings[0].Source, value: data2.Ratings[0].Value }, { source: data2.Ratings[1].Source, value: data2.Ratings[1].Value }, { source: data2.Ratings[2].Source, value: data2.Ratings[2].Value }, { source: "Imdb", value: data2.imdbRating }],
                                time: data2.Runtime,
                                awards: data2.Awards,
                                BoxOffice: data2.BoxOffice,
                                Poster: data2.Poster
                            }
                        }
                    );
                    res.json(result);
                }
            }
            find()
                .catch((e) => console.error(e))
                .finally(async () => await prisma.$disconnect());
        }
        fetchMovieimdb();
    }
    fetchMovieData();

});

app.delete('/deletemovie', async (req, res) => {
    const { title } = req.query;
    let original_title = String;
    let release_date = String;

    const fetchMovieData = async () => {
        const response = await fetch(`${api.Tmdb}${title}&include_adult=true&language=pt-BR&page=1&region=Brasil`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `${KEY.autorization}`
            }
        });

        const data = await response.json();

        original_title = (data.results[0].original_title);
        release_date = (data.results[0].release_date);

        const fetchMovieimdb = async () => {
            const response = await fetch(`${api.Omdb}${original_title}&y=${release_date}`)
            const data2 = await response.json();
            async function find() {
                const result = await prisma.movies.findUnique({
                    where: {
                        tconst: data2.imdbID
                    }
                })
                if (result === null) {
                    res.json("O filme não foi encontrado na base de dados");
                } else {
                    const result = await prisma.movies.delete(
                        {
                            where: {
                                tconst: data2.imdbID
                            }
                        }
                    );
                    res.json('Filme deletado com sucesso');
                }
            }
            find()
                .catch((e) => console.error(e))
                .finally(async () => await prisma.$disconnect());
        }
        fetchMovieimdb();
    }
    fetchMovieData();

});

app.get('/findall', async (req, res) => {
    async function find() {
        const result = await prisma.movies.findMany()
        if (result === null) {
            res.json('Nenhum filme encontrado');
        } else {
            res.json(result);
        }
    }
    find()
        .catch((e) => console.error(e))
        .finally(async () => await prisma.$disconnect());
})

app.get("/users", async (req, res) => {
    const result = await prisma.user.findMany();
    res.json(result)
});

app.post("/creat", async (req, res) => {
    const { email } = req.body;
    const result = await prisma.user.create({
        data: {
            email
        },
    });
    res.json(result)
});

app.put("/updateuser", async (req, res) => {
    const { name, email } = req.body;
    const result = await prisma.user.update({
        where: {
            email
        },
        data: {
            name
        },
    });
    res.json(result)
});

app.delete("/deluser", async (req, res) => {
    const { email } = req.body;
    const result = await prisma.user.delete({
        where: {
            email
        }
    });
    res.json("Usuário deletado com sucesso")
});


app.listen(3000, () =>
    console.log(`🚀 Server ready at: http://localhost:3000`)
);

