
const Card2 = ({children, className, title}) => {
    return (
        <div className={`card2 ${className}`}>
            <h1>{title}</h1>
            {children} 
        </div>
    )
}

const Profile7 = () => {
    return (
        <div>
            <Card2 
                className="card-2a"
                title="Photo"> 
                {/* <h1>Photo</h1> */}
                <img 
                    className="avatar4"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={90}
                    height={90} 
                />
            </Card2> 

            <Card2 
                className="card-2b"
                title="About"> 
                {/* <h1>About</h1> */}
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </Card2>
        </div>
    )
}

export default Profile7