import React from 'react'
import Header from '../components/header'
import { BreadCrumb } from 'primereact/breadcrumb';
import { TabView, TabPanel } from 'primereact/tabview';
import { FaBuilding, FaPhotoFilm, FaUser } from 'react-icons/fa6';
import useWindowSize from '../hooks/useWindowSize';
import { Carousel } from 'primereact/carousel';
import imgFacility1 from '../assets/imgs/general/facility1.jpg';
import imgFacility2 from '../assets/imgs/general/facility2.jpg';
import imgFacility3 from '../assets/imgs/general/facility3.jpg';
import imgFacility4 from '../assets/imgs/general/facility4.jpg';
import imgFacility5 from '../assets/imgs/general/facility5.jpg';
import imgFacility6 from '../assets/imgs/general/facility6.jpg';
import imgFacility7 from '../assets/imgs/general/facility7.jpg';
import imgFacility8 from '../assets/imgs/general/facility8.jpg';
import imgFacility9 from '../assets/imgs/general/facility9.jpg';
import imgFacility10 from '../assets/imgs/general/facility10.jpg';
import imgFacility11 from '../assets/imgs/general/facility11.jpg';
import imgFacility12 from '../assets/imgs/general/facility12.jpg';
import imgFacility13 from '../assets/imgs/general/facility13.jpg';
import imgFacility14 from '../assets/imgs/general/facility14.jpg';
import imgFacility15 from '../assets/imgs/general/facility15.jpg';
import imgFacility16 from '../assets/imgs/general/facility16.jpg';
import imgFacility17 from '../assets/imgs/general/facility17.jpg';
import imgFacility18 from '../assets/imgs/general/facility18.jpg';
import imgFacility19 from '../assets/imgs/general/facility19.jpg';
import imgFacility20 from '../assets/imgs/general/facility20.jpg';
import imgFacility21 from '../assets/imgs/general/facility21.jpg';
import imgFacility22 from '../assets/imgs/general/facility22.jpg';
import imgFacility23 from '../assets/imgs/general/facility23.jpg';
import imgFacility24 from '../assets/imgs/general/facility24.jpg';
import imgFacility25 from '../assets/imgs/general/facility25.jpg';
import imgFacility26 from '../assets/imgs/general/facility26.jpg';
import Footer from '../components/footer';

const About = () => {
    const { width } = useWindowSize();

    const breadcrumbItems = [
        { label: 'Home', url: '/' },
        { label: 'Sobre Nós', url: '/sobrenos' }
    ];

    const imgsFacilities = [
        {
            id: 1,
            src: imgFacility1,
            alt: 'Imagem 1'
        },
        {
            id: 2,
            src: imgFacility2,
            alt: 'Imagem 2'
        },
        {
            id: 3,
            src: imgFacility3,
            alt: 'Imagem 3'
        },
        {
            id: 4,
            src: imgFacility4,
            alt: 'Imagem 4'
        },
        {
            id: 5,
            src: imgFacility5,
            alt: 'Imagem 5'
        },
        {
            id: 6,
            src: imgFacility6,
            alt: 'Imagem 6'
        },
        {
            id: 7,
            src: imgFacility7,
            alt: 'Imagem 7'
        },
        {
            id: 8,
            src: imgFacility8,
            alt: 'Imagem 8'
        },
        {
            id: 9,
            src: imgFacility9,
            alt: 'Imagem 9'
        },
        {
            id: 10,
            src: imgFacility10,
            alt: 'Imagem 10'
        },
        {
            id: 11,
            src: imgFacility11,
            alt: 'Imagem 11'
        },
        {
            id: 12,
            src: imgFacility12,
            alt: 'Imagem 12'
        },
        {
            id: 13,
            src: imgFacility13,
            alt: 'Imagem 13'
        },
        {
            id: 14,
            src: imgFacility14,
            alt: 'Imagem 14'
        },
        {
            id: 15,
            src: imgFacility15,
            alt: 'Imagem 15'
        },
        {
            id: 16,
            src: imgFacility16,
            alt: 'Imagem 16'
        },
        {
            id: 17,
            src: imgFacility17,
            alt: 'Imagem 17'
        },
        {
            id: 18,
            src: imgFacility18,
            alt: 'Imagem 18'
        },
        {
            id: 19,
            src: imgFacility19,
            alt: 'Imagem 19'
        },
        {
            id: 20,
            src: imgFacility20,
            alt: 'Imagem 20'
        },
        {
            id: 21,
            src: imgFacility21,
            alt: 'Imagem 21'
        },
        {
            id: 22,
            src: imgFacility22,
            alt: 'Imagem 22'
        },
        {
            id: 23,
            src: imgFacility23,
            alt: 'Imagem 23'
        },
        {
            id: 24,
            src: imgFacility24,
            alt: 'Imagem 24'
        },
        {
            id: 25,
            src: imgFacility25,
            alt: 'Imagem 25'
        },
        {
            id: 26,
            src: imgFacility26,
            alt: 'Imagem 26'
        }
    ]

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '426px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const itemTemplate = (item) => {
        return (
            <div
                className="cursor-pointer relative overflow-hidden border-round-xl mx-2"
                onClick={() => navigate('/novidades')}
            >
                <img
                    src={item.src}
                    alt={item.title}
                    className="border-round-xl h-full w-full"
                />
            </div>
        );
    };


    return (
        <>
            <div className='p-6'>
                <div className={`${width < 769 ? 'flex flex-column' : 'flex align-items-center justify-content-between'} px-1`}>
                    {width < 769 ? (
                        <>
                            <BreadCrumb model={breadcrumbItems} className='border-none text-medium' />
                            <h1 className="text-3xl font-bold p-0" style={{ color: 'var(--primary-color)' }}>Sobre Nós</h1>
                        </>
                    ) : (
                        <>
                            <h1 className="text-3xl font-bold p-0" style={{ color: 'var(--primary-color)' }}>Sobre Nós</h1>
                            <BreadCrumb model={breadcrumbItems} className='border-none text-medium' />
                        </>)}
                </div>
                <TabView>
                    <TabPanel
                        header="Quem Somos"
                        leftIcon={() => <div className='mt-1 pr-2'><FaUser /></div>}
                    >
                        <div className={`grid align-items-start pr-3`} >
                            <div className={`${width < 769 ? 'col-12' : 'col-6'}`}>
                                <h3 style={{ color: 'var(--primary-color)' }}>Bem-vindo ao Círculo Militar da Praia Vermelha</h3>
                                <p style={{ fontFamily: 'var(--font-family-suport)' }}>O Circulo Militar da Praia Vermelha, ou simplesmente O CÍRCULO, como é carinhosamente conhecido, foi fundado em 8 de março de 1957, por iniciativa dos alunos da Escola de Comando e Estado-Maior do Exército (ECEME).</p>

                                <p style={{ fontFamily: 'var(--font-family-suport)' }}>O major de Intendência Carlos Vanário, oficial-aluno à época, teve destacada atuação para a concretização deste ato. O curso de Comando e Estado-Maior era realizado em 3 (três) anos e a primeira diretoria do clube foi composta por alunos do 2° ano, dentre eles, os tenentes coronéis Rocca Diegues e Lauro Pie, além dos majores Otto Pio Fonseca, Ítalo Mandarino e Sylvio Torraca.</p>

                                <p style={{ fontFamily: 'var(--font-family-suport)' }}>A ECEME colaborou ativamente com a implantação do Círculo, criando sólidos laços que, cultivados permanentemente, fazem do clube uma extensão natural da Escola de mais alto nível de nosso Exército. Quando de sua criação, o clube foi instalado no 14° andar do Edifício da Praia Vermelha (EPV), transferindo-se para sua sede atual no período de 1965/ 1966, após negociações com a Prefeitura do Rio de Janeiro.</p>

                                <p style={{ fontFamily: 'var(--font-family-suport)' }}>O local da nossa sede abrigava, inicialmente, o Salão Casa Blanca, uma das mais famosas casas noturnas da capital fluminense. Posteriormente, sediou a Escola de Belas Artes do Rio de Janeiro. Tais registros históricos se fazem presentes até os dias atuais pela designação dos salões Casa Blanca e Belas Artes, como forma de homenagear nossa história.</p>

                                <p style={{ fontFamily: 'var(--font-family-suport)' }}>Assim, emoldurado pelo mais belo cartão postal da cidade, o Círculo destaca-se como a melhor opção de lazer e cultura para as famílias do entorno da Urca.</p>
                            </div>
                            <div className={`mt-1 ${width < 769 ? 'col-12' : 'col-6'} max-w-30`}>
                                <div className=''>
                                    <h3 style={{ color: 'var(--primary-color)' }}>Missão</h3>
                                    <p style={{ fontFamily: 'var(--font-family-suport)' }}>Proporcionar bem-estar aos associados do CMPV nas atividades esportivas, sociais e culturais, oferecendo uma estrutura com qualidade e segurança.</p>
                                </div>
                                <div>
                                    <h3 style={{ color: 'var(--primary-color)' }}>Visão</h3>
                                    <p style={{ fontFamily: 'var(--font-family-suport)' }}>Ser referencia como clube, procurando inovar, no intuito de apresentar uma eficiente e eficaz opção de lazer aos seus associados.</p>
                                </div>
                                <div>
                                    <h3 style={{ color: 'var(--primary-color)' }}>Valores</h3>
                                    <p style={{ fontFamily: 'var(--font-family-suport)' }}>Responsabilidade, Probidade, Camaradagem, Zelo, Disciplina, Lealdade</p>
                                </div>
                                <div>
                                    <h3 className='mb-3' style={{ color: 'var(--primary-color)' }}>Localização</h3>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.869173844103!2d-43.16804672504368!3d-22.955044739596886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99801a67b5eb6b%3A0xeddf40c5d68ff46f!2sPra%C3%A7a%20General%20Tib%C3%BArcio!5e0!3m2!1spt-BR!2sbr!4v1745093990652!5m2!1spt-BR!2sbr"
                                        width="600"
                                        height="150"
                                        frameborder="0"
                                        style={{ border: 0 }}
                                        allowfullscreen=""
                                        aria-hidden="false"
                                        tabindex="0"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Ex-Presidentes do Círculo</h3>
                            <div
                                className='grid align-items-center gap-2'
                                style={{ fontFamily: 'var(--font-family-suport)' }}>
                                <ul className='col-2 list-none'>
                                    <li>1986 – Cel Ayres</li>
                                    <li>1987 – Cel Henrique</li>
                                    <li>1988 – Cel Praciano</li>
                                    <li>1989 – TC Avena</li>
                                    <li>1990 – TC Kihara</li>
                                    <li>1991 – TC Higino</li>
                                    <li>1992 – TC Boson</li>
                                </ul>
                                <ul className='col-2 list-none'>
                                    <li>1994 – TC Macedo / TC Rachevsky</li>
                                    <li>1995 – Cel Peres</li>
                                    <li>1998 – Cel Macedo</li>
                                    <li>2000 – Cel Henrique</li>
                                    <li>2002 – Cel Melo</li>
                                    <li>2004 – Cel Pastori</li>
                                </ul>
                                <ul className='col-2 list-none'>
                                    <li>2007 – Cel Sampaio</li>
                                    <li>2008 – Cel Elias</li>
                                    <li>2009 – Cel Marco Antônio</li>
                                    <li>2010 – Cel Burke</li>
                                    <li>2011 – Cel Lício</li>
                                    <li>2012 – Cel Frazão</li>
                                    <li>2013 – Cel Paulo Sérgio</li>
                                </ul>
                                <ul className='col-2 list-none'>
                                    <li>2014 – Cel Melo</li>
                                    <li>2015 – Cel Narcizo</li>
                                    <li>2016 – Cel Bessa</li>
                                    <li>2017 – Cel Morgado</li>
                                    <li>2018 – Cel Nelson</li>
                                    <li>2019 – Cel Moussallem</li>
                                    <li>2020 – Cel Sassone</li>
                                </ul>
                                <ul className='col-2 list-none'>
                                    <li>2021 – Cel Corrêa Netto</li>
                                    <li>2022 – Cel José Euclides</li>
                                    <li>2023 – Cel Ivan Christie</li>
                                    <li>2024 – Cel Ruiz</li>
                                    <li>2025 – Cel Gustavo Martins</li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel
                        header="Nossas Instalações"
                        leftIcon={() => <div className='mt-1 pr-2'><FaBuilding /></div>}>
                        <div>

                            <Carousel
                                value={imgsFacilities}
                                numVisible={3}
                                numScroll={3}
                                responsiveOptions={responsiveOptions}
                                style={{ width: width > 1024 ? '97%' : '100%' }}
                                itemTemplate={itemTemplate}
                                showNavigators={width >= 1024}
                                showIndicators={false}
                                circular
                                draggable
                            />
                        </div>
                    </TabPanel>
                    <TabPanel
                        header="Galeria de Fotos"
                        leftIcon={() => <div className='mt-1 pr-2'><FaPhotoFilm /></div>}>
                        <div>
                            <Carousel
                                value={imgsFacilities}
                                numVisible={3}
                                numScroll={3}
                                responsiveOptions={responsiveOptions}
                                style={{ width: width > 1024 ? '97%' : '100%' }}
                                itemTemplate={itemTemplate}
                                showNavigators={width >= 1024}
                                showIndicators={false}
                                circular
                                draggable
                            />
                        </div>
                    </TabPanel>
                </TabView>
            </div>
            <Footer />
        </>
    )
}

export default About