import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { BannerWorkProps } from '../components/BannerWork';
import { toast } from 'react-toastify';

interface ControlsProviderProps {
    children: any;
}

export type SectorProps = {
    id?: number,
    name: string
}

export type ChargeProps = {
    id?: number,
    name: string
    sectorId?: number
}

export type ServicesProps = {
    icon: HTMLImageElement,
    title: string,
    text: string
}

export type TechsProps = {
    icon: HTMLImageElement,
    name: string
}

export type EmailBodyProps = {
    name: string,
    email: string,
    text: string
}

interface ControlsContextData {
    modal: boolean,
    setModal: Dispatch<SetStateAction<boolean>>,
    dataModal: BannerWorkProps
    setDataModal: Dispatch<SetStateAction<BannerWorkProps>>,
    services: any,
    works: any,
    technologies: any,
    sendEmail(body: EmailBodyProps): Promise<string>
}

export const ControlsContext = createContext(({} as ControlsContextData));

function ControlsProvider({ children }: ControlsProviderProps) {

    const [modal, setModal] = useState<boolean>(false)

    const [dataModal, setDataModal] = useState<BannerWorkProps>({} as BannerWorkProps)

    const services = [
        {
            icon: '/design.png',
            title: 'Page Design',
            text: 'With a business requirements analysis, a preview of the result using UX/UI concepts is essential to start a project.'
        },
        {
            icon: '/responsive.png',
            title: 'Interface Development',
            text: 'Following the layout, development for multiplatforms and different devices is seen as best practices and best for the end user.'
        },
        {
            icon: '/support.png',
            title: 'Support and Maintenance',
            text: 'Interested in updating, remodeling or fixing a bug on your site? Contact me and we will see the best to be done!'
        },
        {
            icon: '/fluxo-de-trabalho.png',
            title: 'Project Life Cicle',
            text: 'The project life cycle is related to the phases it goes through, from Initiation, Planning, Implementation and Delivery.'
        },
        {
            icon: '/api.png',
            title: 'API Integration',
            text: 'Integrating an API into your website makes it more efficient, independent and informative.'
        },
        {
            icon: '/idea.png',
            title: 'Idea structure',
            text: 'Structuring an idea coherently and following the right steps allows you to explore and go deeper into it.'
        },
    ]

    const works = [
        {
            banner: '/work1.png',
            name: "Moovre Project",
            repo: 'private',
            site: 'https://moovre-panel-corporate.netlify.app/home',
            techs: 'React, Next.js, Type Script, HTML5, SCSS',
            video: 'Unavailable',
            text: 'Este projeto foi desenvolvido com o intuito de atender as pessoas de forma simples para se locomoverem de forma mais fácil para lugares distantes pagando menos. O Negócio consiste em dois lados, o fornecedor de serviços e o consumidor, esta parte do projeto está voltado ao prestador de serviços. Em desenvolvimento utilizei muitos recursos do React e Nextjs para aprimorar o carregamento e funcionamento de algumas partes como Funcionários e Perfil principal. O Projeto ainda irá contar com integrações futuras com o back-end, novas páginas e funcionalidades.',
            period: 'jun/22 - In Progress'
        },
        {
            banner: '/gpmanager.png',
            name: "GP Manager",
            repo: 'private',
            site: 'https://www.researchgate.net/publication/354922163_Desenvolvimento_de_um_Sistema_Web_para_Gerenciamento_de_Projetos_TI_Baseado_no_PMBOK',
            techs: 'React, Next.js, Type Script, HTML5, SCSS, Node.js, Heroku',
            video: 'Unavailable',
            text: 'Com a necessidade de um sistema integrado para gerenciamento de Projetos voltados para a área de tecnologia, surgiu uma idéia de construir um baseado nas premissas do PMBOK. Este foi meu Trabalho de Conclusão de Curso, onde uma pesquisa científica foi realizada na área para descobrir os gaps e falhas em sistemas de gerenciamento. Pela complexidade de um sistema que atenda tantas necessidades foi realizado através da metodologia SCRUM. Com a estrutura pronta, realizei o desenvolvimento com React no Front-end, Noje.js no Back-end e MongoDB como Data-base. Este trabalho foi postado em um dos maiores sites de pesquisas científicas do mundo, atualmente o projeto segue em evolução.',
            documentation: 'https://www.researchgate.net/publication/354922163_Desenvolvimento_de_um_Sistema_Web_para_Gerenciamento_de_Projetos_TI_Baseado_no_PMBOK',
            period: 'jun/20 - In Progress'
        },
        {
            banner: '/ig.news.png',
            name: "IG News",
            repo: 'https://github.com/mauricio178/ignews',
            site: 'Unavailable',
            techs: 'React.js, Next.js, HTML5, SCSS, FaunaDB',
            video: 'https://www.linkedin.com/feed/update/urn:li:activity:6832059513273692160/',
            text: 'Com o intuito de exercitar o conhecimento em SSR e SSGcom Next.js, realizei este projeto em bootcamp onde trabalham processos de "OAuth" Github, Pagamentos com Stripe, Controle de assinaturas, Server Side Rending, Server Side Generation.',
            period: 'jun/21 - ago/21'
        },
        {
            banner: '/player-community.png',
            name: "Player Community",
            repo: 'https://github.com/mauricio178/ignews',
            site: 'Unavailable',
            techs: 'React Native, Type Script, HTML5, SCSS',
            video: 'https://www.linkedin.com/feed/update/urn:li:activity:6829266472934662144/',
            text: 'Este projeto funciona para agendamento de partidas com Players através de uma conexão com a API do Discord, logando com seu perfil, ele busca todos os servidores e as pessoas dentro deles, permitindo organizar jogatinas com seus amigos. Aqui foi utilizado React Native com conceitos de UX-UI. ',
            period: 'ago/21 - nov/21'
        },
    ]

    const technologies = [
        {
            icon: '/js.png',
            name: 'Java Script'
        },
        {
            icon: '/ts.png',
            name: 'Type Script'
        },
        {
            icon: '/react.webp',
            name: 'React'
        },
        {
            icon: '/react-native.png',
            name: 'React Native'
        },
        {
            icon: '/html-5.png',
            name: 'HTML5'
        },
        {
            icon: '/css-3.png',
            name: 'CSS3'
        },
        {
            icon: '/styled-components.png',
            name: 'Styled Components'
        },
        {
            icon: '/sass.png',
            name: 'Sass'
        },
        {
            icon: '/nextjs.png',
            name: 'Next.js'
        },
        {
            icon: '/nodejs.png',
            name: 'Node.js'
        },
        {
            icon: '/mongodb.webp',
            name: 'MongoDB'
        },
        {
            icon: '/mysql.png',
            name: 'SQL'
        },
    ]

    async function sendEmail(body: EmailBodyProps) {
        toast.success(`Thanks ${body.name}! I will answer as soon as possible`)

        var link = "mailto:me@example.com"
            + "?cc=myCCaddress@example.com"
            + "&subject=" + encodeURIComponent("*Enter a subject*")
            + "&body=" + encodeURIComponent(body.text)
            ;

        window.location.href = link;

        return 'true'
    }

    return (
        <div>
            <ControlsContext.Provider
                value={{
                    modal,
                    setModal,
                    dataModal,
                    setDataModal,
                    services,
                    works,
                    technologies,
                    sendEmail
                }}
            >
                {children}
            </ControlsContext.Provider>
        </div>
    )
}

function useControls() {
    return useContext(ControlsContext)
}

export { ControlsProvider, useControls }