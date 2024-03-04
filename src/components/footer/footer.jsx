import insta from '../../assets/insta.svg'

const Footer = () => {
    return(
        <div className='border border-solid border-x-transparent border-t-neutral-700 border-b-transparent h-15 py-3 mt-20'>
            <a href='https://www.instagram.com/criswallss/' className=' block w-20'><img src={insta} alt='logo Instagram' className='block h-8 w-8 mx-10 my-5'/></a>
        </div>
    )
}

export default Footer