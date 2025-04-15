import Image from "next/image"
import profileImage from "@/data/image/jonatas.jpg"
import "./index.css"

export default function AboutPage() {
    return (

        <div className="container">
            <h1 className="pageTitle">
                Sobre
            </h1>

            <div className="aboutContent">
                <div className="aboutText">
                    <p className="paragraph">
                        Olá! Me chamo Jonatas Alves sou um desenvolvedor front-end apaixonado por transformar ideias em experiências digitais funcionais e envolventes.
                    </p>
                    <p className="paragraph">
                        Iniciei minha jornada no mundo da programação há 1 ano e meio atrás, e desde então venho me dedicando a aprender e evoluir constantemente. Tenho experiência com tecnologias como <strong>HTML, CSS, JavaScript, TypeScript, React, Next.js</strong> e ferramentas modernas de desenvolvimento.
                    </p>
                    <p className="paragraph">
                        Gosto de criar interfaces limpas, acessíveis e responsivas, sempre com foco na usabilidade. Acredito que a tecnologia pode impactar positivamente a vida das pessoas e estou sempre em busca de novos desafios para crescer profissionalmente.
                    </p>
                </div>

                <div className="aboutProfile">
                    <div className="profileImageContainer">
                        <Image
                            src={profileImage}
                            alt="Foto de perfil"
                            width={200}
                            height={200}
                            className="profileImage"
                        />
                    </div>

                    <div className="profileInfo">
                        <h3 className="infoTitle">Informações Pessoais</h3>
                        <ul className="infoList">
                            <li className="infoItem">
                                <span className="infoLabel">Nome:</span>
                                <span className="infoValue">jonatas Rubens Alves dos Santos</span>
                            </li>
                            <li className="infoItem">
                                <span className="infoLabel">Idade:</span>
                                <span className="infoValue">34 anos</span>
                            </li>
                            <li className="infoItem">
                                <span className="infoLabel">Localização:</span>
                                <span className="infoValue">Americana/SP, Brasil</span>
                            </li>
                            <li className="infoItem">
                                <span className="infoLabel">Email:</span>
                                <span className="infoValue">jonatasrubens.santos@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
