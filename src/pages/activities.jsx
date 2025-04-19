import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import useWindowSize from '../hooks/useWindowSize';
import { BreadCrumb } from 'primereact/breadcrumb';
import espaco1 from '../assets/imgs/general/belasartes.jpg';
import espaco2 from '../assets/imgs/general/belavsita.jpg';
import espaco3 from '../assets/imgs/general/terraco.jpg';
import espaco4 from '../assets/imgs/general/tamandare.jpg';
import espaco5 from '../assets/imgs/general/casablancaebelavista.jpg';
import { useNavigate } from 'react-router-dom';

const Activities = () => {
    const { width } = useWindowSize();
    const navigate = useNavigate();

    const breadcrumbItems = [
        { label: 'Home', url: '/' },
        { label: 'Atividades', url: '/atividades' }
    ];

    const imgsSpaces = [
        {
            id: 1,
            itemImageSrc: espaco1,
            title: 'Belas Artes'
        },
        {
            id: 2,
            itemImageSrc: espaco2,
            title: 'Bela Vista'
        },
        {
            id: 3,
            itemImageSrc: espaco3,
            title: 'Espaço Duque de Caxias'
        },
        {
            id: 4,
            itemImageSrc: espaco4,
            title: 'Arcos e Tamandaré'
        },
        {
            id: 5,
            itemImageSrc: espaco5,
            title: 'Casablanca e Bela Vista'
        }
    ];

    return (
        <>
            <Header />
            <div className='p-6'>
                <div className={`${width < 769 ? 'flex flex-column' : 'flex align-items-center justify-content-between'} px-1`}>
                    {width < 769 ? (
                        <>
                            <BreadCrumb model={breadcrumbItems} className='border-none text-medium' />
                            <h1 className="text-3xl font-bold p-0" style={{ color: 'var(--primary-color)' }}>Atividades</h1>
                        </>
                    ) : (
                        <>
                            <h1 className="text-3xl font-bold p-0" style={{ color: 'var(--primary-color)' }}>Atividades</h1>
                            <BreadCrumb model={breadcrumbItems} className='border-none text-medium' />
                        </>
                    )}
                </div>
                <div className='text-start max-w-full'>
                    <p className='px-6'>
                        A prática esportiva promove inúmeros benefícios, como redução dos riscos de doenças, melhora na formação do corpo, diminuição do estresse e do nível de ansiedade, melhora da coordenação motora, proteção dos ossos e das articulações, e manutenção de uma vida saudável.<br />

                        É fundamental a prática de atividade física da infância até o envelhecimento. Não existe exercício ideal, é preciso respeitar a individualidade, o desejo, prazer e a aptidão física.<br />

                        AS INFORMAÇÕES SOBRE AS ATIVIDADES DO CÍRCULO MILITAR NÃO SÃO DE RESPONSABILIDADE DA SECRETARIA E DEVEM TRATADAS DIRETAMENTE COM CADA PROFESSOR(A).<br /><br />

                        ESCOLHA A MODALIDADE ESPORTIVA ABAIXO PARA VISUALIZAR O CONTATO DO PROFESSOR(A) E OS HORÁRIOS DE AULAS DISPONÍVEIS.</p>
                </div>
                <div
                    className="grid gap-4 justify-content-center mt-6"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: width >= 1024 ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)',
                        justifyItems: 'center'
                    }}
                >
                    {imgsSpaces.map((item) => (
                        <div
                            key={item.id}
                            className="relative cursor-pointer overflow-hidden border-round-xl"
                            style={{
                                width: width >= 1024 ? '350px' : '300px',
                                height: width >= 1024 ? '400px' : '350px'
                            }}
                            onClick={() => navigate('/novidades')}
                        >
                            <img
                                src={item.itemImageSrc}
                                alt={item.title}
                                className="w-full h-full object-cover border-round-xl"
                            />
                            <div
                                className="absolute bottom-0 left-0 w-full text-white"
                                style={{
                                    background: 'rgba(0, 0, 0, 0.6)',
                                    backdropFilter: 'blur(2px)',
                                    padding: '0.5rem 1rem'
                                }}
                            >
                                <h3 className="m-0 text-lg font-bold">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Activities
