import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BannerWork } from '../components/BannerWork'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Modal } from '../components/Modal'
import { ServiceCard } from '../components/ServiceCard'
import styles from '../styles/Home.module.scss'

export default function Home() {

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
      icon: '/html-5.png',
      name: 'HTML5'
    },
    {
      icon: '/css-3.png',
      name: 'CSS3'
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Mauricio R.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.hello} id={"top"}>
        <h1 className={styles.title}>Hi there!</h1>
        <h3 className={styles.label}>I'm <span>Mauricio Rodrigues</span> and act in <br /> <span>Development Front end</span> area</h3>
        <p className={styles.legend}>it's a pleasure to welcome you here</p>
      </div>

      <div className={styles.whatido} id={"whatido"}>
        <h1>What i do</h1>

        <ul className={styles.services}>
          {
            services.map((service: any, k: number) => {
              return (
                <ServiceCard
                  key={k}
                  icon={service.icon}
                  title={service.title}
                  text={service.text}
                />
              )
            })
          }
        </ul>

      </div>

      <div className={styles.works} id={"works"}>
        <h1>My works and projects</h1>

        <ul className={styles.listWorks}>
          {
            works.map((work: any, k: number) => {
              return (
                <BannerWork
                  banner={work.banner}
                  name={work.name}
                  period={work.period}
                  repo={work.repo}
                  site={work.site}
                  techs={work.techs}
                  text={work.text}
                  video={work.video}
                  documentation={work.documentation}
                  key={k}
                />
              )
            })
          }
        </ul>

        <Modal/>


        {/* <div className={styles.seeMore}>
          <Button label='See more' theme={'white'} />
        </div> */}

      </div>

      <div className={styles.aboutme} id={"aboutme"}>
        <h1>About me</h1>
        <div className={styles.content}>
          <p>Curious about how things worked, I graduated in Information Systems in <a href={"https://www.unidesc.edu.br/"} target={"_blank"}>Midwest Development University.</a><br /><br />
            I have been working in the development area since 2020, where I chose to improve my knowledge and invest my time.<br /><br />
            On my journey, I learned to deal with projects in different stages from planning, development to maintenance.<br /><br />
            Today I transform concepts and learning into results where I work.
          </p>

          <Image src={'/working.gif'} alt={'working-gif'} width={'504'} height={'336'} />
        </div>
        <div className={styles.seeResume}>
          <a href={"https://www.linkedin.com/in/mauricio-rodrigues-659352186/"} target={"_blank"} >
            See Resume
          </a>
        </div>

      </div>

      <div className={styles.technologies} id={"techs"}>
        <h1>Technologies</h1>
        <p>some of the main languages, frameworks and databases I work with.</p>

        <div className={styles.listTechnologies}>
          {
            technologies.map((technologie: any, k: number) => {
              return (
                <a className={styles.icon} key={k}>
                  <Image src={technologie.icon} width={50} height={50} alt={technologie.name} />
                  <p>{technologie.name}</p>
                </a>
              )
            })
          }
        </div>
      </div>

      <div className={styles.getintouch} id={"getintouch"}>
        <h1>Get in touch</h1>
        <p>and let's work together!</p>

        <div className={styles.form}>
          <div>
            <input placeholder='Name'></input>
            <input placeholder='E-mail'></input>
          </div>
          <div className={styles.textarea}>
            <input placeholder='Mesage'></input>
          </div>
        </div>

        <div className={styles.buttonSend}>
          <Button label='Send' theme={'green'}/>
        </div>
      </div>

      <Footer />
    </div>
  )
}
