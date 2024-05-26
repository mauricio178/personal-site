import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { BannerWork } from '../components/BannerWork'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Modal } from '../components/Modal'
import { ServiceCard } from '../components/ServiceCard'
import { useControls } from '../hooks/controls'
import styles from '../styles/Home.module.scss'
import { AllTextProps, allTextsPortuguese, allTextsEnglish } from '../services/variables'
import Skeleton from 'react-loading-skeleton'
import { SkeletonComponent } from '../components/SkeletonComponent'
import { SwitchToggle } from '../components/SwitchToggle'

export default function Home() {

  const {
    services,
    works,
    technologies,
    sendEmail,
    currentLanguage,
    setCurrentLanguage
  } = useControls()

  const [currentText, setCurrentText] = useState<AllTextProps>(allTextsPortuguese as AllTextProps)

  const [loading, setLoading] = useState(false);

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function updateSiteLanguage() {
    setCurrentText(currentLanguage.language === "br" ? allTextsPortuguese : allTextsEnglish)
  }

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      updateSiteLanguage();

      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentLanguage]);

  return (
    <div className={styles.container}>

      <Head>
        <title>Mauricio R.</title>
        <meta name="Mauricio R." content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.hello} id={"top"}>
        {loading ?
          <>
            <SkeletonComponent localUsed='page-top' />
          </>
          :
          <div>
            <h1 className={styles.title}>{currentText.top.hi_there}</h1>
            <h3 className={styles.label}>{currentText.top.i_am.name}<br /> {currentText.top.i_am.profession}</h3>
            <p className={styles.legend}>{currentText.top.its_pleasure}</p>
          </div>
        }
      </div>

      <div className={styles.whatido} id={"whatido"}>

        <div>
          <h1>What i do</h1>

          <h2>Some services that I provide and concepts I follow.</h2>

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

      </div>

      <div className={styles.works} id={"works"}>
        <h1>My works and projects</h1>

        <h3>Check out some of my work and personal projects</h3>

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

        <Modal />

      </div>

      <div className={styles.aboutme} id={"aboutme"}>
        <h1>About me</h1>
        <div className={styles.content}>
          <p>Curious about how things worked, I graduated in Information Systems in <a href={"https://www.unidesc.edu.br/"} target={"_blank"}>UNIDESC - Development University.</a><br /><br />
            I have been working in the development area since 2020, where I chose to improve my knowledge and invest my time.<br /><br />
            On my journey, I learned to deal with projects in different stages from planning, development to maintenance.<br /><br />
            Today I transform concepts and learning into results where I work.
          </p>

          <Image src={'/about-me.png'} alt={'working-gif'} width={'460'} height={'265'} />
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

      <Footer />

    </div>
  )
}
