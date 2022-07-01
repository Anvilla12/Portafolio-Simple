import Layout from "../components/layout"
import Link from "next/link"
import { experiences, projects, skills } from "../profile"

const Index = () => (
    <Layout>
        {/* foto de perfil */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="img2.jpg" alt="/" className="img-fluid" />
                        </div>
                        <div className="col md-8">
                            <h1 className="py-4">Vivian Vislow &lang;Triple_Vi&rang;</h1>
                            <h3 className="px-2">Data Analyst</h3>
                            <p className="px-2 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus, laudantium inventore consequatur quia,
                                possimus nostrum quas, et voluptas assumenda non nihil.
                                Labore ullam id voluptas temporibus
                            </p>
                            <a href="/hireme" className="btn btn-outline-primary">Contratame!</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Segunda seccion */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Habilidades</h1>

                        {skills.map(({ skill, percentaje }, k) => (
                            <div className="py-3" key={k}>
                                <h5>{skill}</h5>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${percentaje}%` }}></div>
                                </div>
                            </div>


                        ))}
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experiencia</h1>
                        {experiences.map(({ title, description, from, to }, k) => (
                            <div className="py-3" key={k}>
                                <ul>
                                    <li>
                                        <h3>{title}</h3>
                                        <h5>{from}-{to}</h5>
                                        <p>{description}</p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Portafolio */}

        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Portafolio</h1>
                        </div>

                        {
                            projects.map(({ title, description, image }, k) => (
                                <div className="col-md-4 p-2" key={k}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={image} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                            <a href="#!">Ver Más</a>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>
                <div className="col-md-12 py-4">
                    <div className="text-end px-4">
                        <Link href="/portfolio">
                            <a className="btn btn-lg btn-primary ">Mas Projectos...</a>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>





        {/* links alternos */}
        <a href="blog">Blog</a> <br />
        <a href="github">Github</a>
    </Layout>
)

export default Index