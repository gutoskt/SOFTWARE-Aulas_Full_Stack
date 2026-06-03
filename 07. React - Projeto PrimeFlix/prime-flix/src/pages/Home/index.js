import './home.css'
import {use, useEffect, useState} from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom';

// https://api.themoviedb.org/3/movie/550/recommendations?api_key=510e3d0a6252e01ab343ede762380f85&language=pt-br


function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get('movie/550/recommendations',{
                params: {
                    api_key: '510e3d0a6252e01ab343ede762380f85',
                    language: 'pt-br',
                    page: 1,
                }
            });

            // await = esperar a resposta da api
            //console.log(response.data.results.slice(1,11));
            setFilmes(response.data.results.slice(1,11));
            setLoading(false);
        }

        loadFilmes();
    }, []);

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;