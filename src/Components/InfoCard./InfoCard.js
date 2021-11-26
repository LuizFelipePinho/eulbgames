import './infoCard.css'

const InfoCard = ({image, name, price, storyline, year}) => {


    return (
        <>
            <div className="boxInfoGame">

                <div className="boxImgInfoCard">
                    <div className=""> <img className = "ImgInfoCard" src={image} alt=""></img></div>
                </div>

                    <div>
                        <h3 className="nameInfoCard">{name}</h3>
                        <p className="storyInfoCard">{storyline}</p>
                    </div>

            </div>
        
        </>
    )
}

export default InfoCard;