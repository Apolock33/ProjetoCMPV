import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import useWindowSize from '../hooks/useWindowSize';
import { BreadCrumb } from 'primereact/breadcrumb';
import activity1 from '../assets/imgs/general/basquete.jpg';
import activity2 from '../assets/imgs/general/futebol.jpg';
import activity3 from '../assets/imgs/general/pilates.jpg';
import activity4 from '../assets/imgs/general/natacao.jpg';
import activity5 from '../assets/imgs/general/judo.jpg';
import ImgDialog from '../components/imgDialog';

const Activities = () => {
    const { width } = useWindowSize();
    const [openImg, setOpenImg] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const breadcrumbItems = [
        { label: 'Home', url: '/' },
        { label: 'Atividades', url: '/atividades' }
    ];

    const imgsActivities = [
        {
            id: 1,
            itemImageSrc: activity1,
            title: 'Basquete',
            infos: '',
            idade: '',
            contato: ''

        },
        {
            id: 2,
            itemImageSrc: activity2,
            title: 'Futebol',
            infos: '',
            idade: '',
            contato: ''

        },
        {
            id: 3,
            itemImageSrc: activity3,
            title: 'Pilates',
            infos: 'Contato diretamente com a academia <br/>*Descontos para Plano Família (somente nos planos mensais) – 2 membros: 5% | 3 ou mais membros: 8% | somente no DCC',
            idade: '',
            contato: ''

        },
        {
            id: 4,
            itemImageSrc: activity4,
            title: 'Natação',
            infos: '',
            idade: '',
            contato: ''

        },
        {
            id: 5,
            itemImageSrc: activity5,
            title: 'Judô',
            infos: '',
            idade: '',
            contato: ''

        },
    ];

    const handleImageClick = (img) => {
        setSelectedImg(img);
        setOpenImg(true);
    };

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
                    <p style={{ fontFamily: 'var(--font-family-suport)' }}>
                        A prática esportiva promove inúmeros benefícios, como redução dos riscos de doenças, melhora na formação do corpo, diminuição do estresse e do nível de ansiedade, melhora da coordenação motora, proteção dos ossos e das articulações, e manutenção de uma vida saudável.<br /><br />
                        É fundamental a prática de atividade física da infância até o envelhecimento. Não existe exercício ideal, é preciso respeitar a individualidade, o desejo, prazer e a aptidão física.<br /><br />
                        AS INFORMAÇÕES SOBRE AS ATIVIDADES DO CÍRCULO MILITAR NÃO SÃO DE RESPONSABILIDADE DA SECRETARIA E DEVEM TRATADAS DIRETAMENTE COM CADA PROFESSOR(A).<br /><br />
                        ESCOLHA A MODALIDADE ESPORTIVA ABAIXO PARA VISUALIZAR O CONTATO DO PROFESSOR(A) E OS HORÁRIOS DE AULAS DISPONÍVEIS.
                    </p>
                </div>

                <div
                    className="grid gap-4 justify-content-center mt-6"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: width > 1024 ? 'repeat(3, 1fr)' : width > 768 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
                        justifyItems: 'center'
                    }}
                >
                    {imgsActivities.map((item) => (
                        <div
                            key={item.id}
                            className="relative cursor-pointer overflow-hidden border-round-xl"
                            style={{
                                width: width >= 1024 ? '350px' : '300px',
                                height: width >= 1024 ? '400px' : '350px'
                            }}
                            onClick={() => handleImageClick(item)}
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

            <ImgDialog
                visible={openImg}
                onclose={() => setOpenImg(false)}
                imgSelected={selectedImg}
            />

            <Footer />
        </>
    )
}

export default Activities;
