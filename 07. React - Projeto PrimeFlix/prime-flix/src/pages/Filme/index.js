import { useEffect, useState } from 'react'; // Removido o 'use' não utilizado
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom'; // Juntei os imports aqui
import './filme.css';
import api from '../../services/api';
import { toast } from 'react-toastify'; // Importando o toast para notificações

function Filme() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function loadFilmes() {
            await api.get('movie/550/recommendations', {
                params: {
                    api_key: '510e3d0a6252e01ab343ede762380f85',
                    language: 'pt-br',
                    page: 1,
                }
            })
            .then((response) => {
                setFilmes(response.data.results.slice(1, 11));
                setLoading(false);
            })
            .catch((err) => {
                console.log("Erro ao encontrar filme!!");
                navigate("/", { replace: true });
            });
        }

        loadFilmes();

        return () => {
            console.log("Componente desmontado");
        }
    }, [navigate, id]); // Adicionado navigate nas dependências por boa prática

    // Em vez de um useEffect e um state, procuramos o filme diretamente aqui
    
    
    function CleanFilme() {
        return filmes.find((filme) => String(filme.id) === id);
    }

    const filmeSelecionado = CleanFilme();

    function salvarFilmes(){

        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filmeSelecionado.id);

        if(!hasFilme){
            filmesSalvos.push(filmeSelecionado);
            localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
            toast.success("Filme salvo com sucesso!");
        }
        else{
            toast.warn("Filme já está na lista");
        }
    }

    // 1. Enquanto estiver carregando da API
    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filme escolhido...</h2>
            </div>
        )
    }

    // 2. Se terminou de carregar E não achou o filme na lista -> Redireciona Instantâneo
    if (!filmeSelecionado) {
        return (
            <div className="loading">
                <Navigate to="/" replace />
            </div>
        )
    }

    // 3. Se achou o filme, renderiza ele direto (sem precisar fazer .map no HTML)
    return (
        <div className="container-filme">
            <article key={filmeSelecionado.id}>
                <h1>{filmeSelecionado.title}</h1>
                <img 
                    src={`https://image.tmdb.org/t/p/w500${filmeSelecionado.poster_path}`} 
                    alt={filmeSelecionado.title} 
                />
                <h3>Sinopse</h3>
                <span>{filmeSelecionado.overview}</span>
                <strong>Avaliação: {filmeSelecionado.vote_average} / 10</strong>

                <div className="area-buttons">
                    <button onClick={salvarFilmes}>Salvar

                    </button>
                    <button>
                        <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filmeSelecionado.title} Trailer`}>Trailer</a>
                    </button>
                </div>
            </article>
        </div> 
    )
}

export default Filme;