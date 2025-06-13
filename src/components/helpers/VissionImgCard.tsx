import VissionImg from '../../assest/img/vission.png'
import VissionImgTwo from '../../assest/img/vission2.png'


const VissionImgCard = () => {
    return (
        <div className="">
            {/* VISIBLE ON 768PX AND ABOVE */}
            <img 
                src={VissionImg}
                className="hidden md:block"
            />

            {/* VISIBLE ON 768PX AND BELOW */}
            <img 
                src={VissionImgTwo}
                className="block md:hidden"
            />
        </div>
    )
}

export default VissionImgCard
