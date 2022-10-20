import './styles.scss'
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <header className= 'banner'>
            <img src={banner} alt="Banner-Principal" />
        </header>
    )
}

export default Banner