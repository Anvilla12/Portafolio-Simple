import Layout from "../components/layout";
import Link from "next/link";

const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p> Esta pagina no existe....  aun</p>
            <Link href="/">
                <a>Volver</a>
            </Link>
        </div>
    </Layout>
)

export default custom404