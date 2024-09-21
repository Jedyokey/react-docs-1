import { getSomeImage } from "../js_files/utils";

export default function Gallery() {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Notable Scientists</h1>
      
      <div className="profile-flex">
            <Profile5
                className="profile-flex-1"
                imageId="szV5sdG"
                name="Maria Skłodowska-Curie"
                profession="Physicist and Chemist"
                discovery="Polonium (chemical element)"
                awards={[
                    "Nobel Prize in Physics",
                    "Nobel Prize in Chemistry",
                    "Davy Medal",
                    "Matteucci Medal"
                ]}
            />

            <Profile5 
                className="profile-flex-2"
                imageId="YfeOqp2"
                name="Katsuko Saruhashi"
                profession="Geochemist"
                discovery="A method for measuring carbon dioxide in seawater"
                awards={[
                    "Nobel Prize in Chemistry",
                    "Guggenheim Fellowship"
                ]}
            />
      </div>
    </div>
  );
}


const Profile5 = ({
    className,
    imageId,
    name,
    profession,
    awards,
    discovery,
    imageSize = 70
}) => {
    const imageSrc = getSomeImage(imageId)

    return (
        <div>
            <section className={`profile5 ${className}`}>
                <h2>{name}</h2>

                <img
                    className="profile5-img" 
                    src={imageSrc} 
                    alt={name}
                    width={imageSize}
                    height={imageSize}
                />

                <ul>
                    <li><b>Profession:</b> {profession}</li>
                    <li>
                        <b>Awards: {awards.length} </b>
                        ({awards.join(", ")})
                    </li>
                    <li>
                        <b>Discovered:</b> {discovery}
                    </li>
                </ul>
            </section>
        </div>
    )
}