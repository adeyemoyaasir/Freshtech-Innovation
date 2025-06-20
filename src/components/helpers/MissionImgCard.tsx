import MissionImg from '../../assest/img/mission.png'
import MissionImgTwo from '../../assest/img/mission2.png'


const MissionImgCard = () => {
    return (
        <div className="">
            {/* VISIBLE ON 768PX AND ABOVE */}
            <img 
                src={MissionImg}
                className="hidden md:block"
            />

            {/* VISIBLE ON 768PX AND BELOW */}
            <img 
                src={MissionImgTwo}
                className="block md:hidden"
            />
        </div>
    )
}

export default MissionImgCard
