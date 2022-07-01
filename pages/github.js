import Layout from "../components/layout"

const Github = ({user}) =>  {
    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="car card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt="" />
                        <p>{user.bio}</p>
                        <a href={user.blog} target="_blank" className="btn btn-outline-warning my-2">My Blog</a> <br />
                        <a href={user.html_url} target="_blank" className="btn btn-outline-warning">Go to Github</a>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export async function getServerSideProps(){

    const res = await fetch("https://api.github.com/users/Anvilla12");
    const data = await res.json()

    console.log(data)
    return {
        props: {
            user: data
        }
    }
}


export default Github