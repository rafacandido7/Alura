import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <header className= 'bg-primary-blue text-center'>
            <img className='max-w-full' src={banner} alt="Banner-Principal" />
        </header>
    )
}

export default Banner