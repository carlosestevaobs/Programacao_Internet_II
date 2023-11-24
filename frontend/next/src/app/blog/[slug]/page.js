"use client"
import Home from '@/app/page';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  display: flex;
`;

export default function Page({ params }) {
    const noticias = [
        {
            id: 1,
            titulo: "Professor Carlos Estevão apresenta projeto de visão",
            noticia: "No último domingo, professor Carlos ...",
            imagemUrl: "http://github.com/carlosestevaobs.png",
        },
        {
            id: 2,
            titulo: "Professor Túlio conclui seu curso",
            noticia: "Na última sexta-feira, professor Túlio...",
            imagemUrl: "https://github.com/tulioqrxkyde.png",
        }
    ];

    const noticiaEncontrada = noticias.find((noticia) => noticia.id === parseInt(params.slug));

    if (!noticiaEncontrada) {
        return <p>Notícia não encontrada</p>;
    }

    return (
        <Home>
            <Container>
                <div>
                <Image
                        src={noticiaEncontrada.imagemUrl}
                        alt="Imagem da Notícia"
                        width={300} 
                        height={300} 
                    />
                </div>
                <div>
                    <h2>{noticiaEncontrada.titulo}</h2>
                    <p>{noticiaEncontrada.noticia}</p>
                </div>
            </Container>
        </Home>
    );
}
