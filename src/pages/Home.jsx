import React from 'react'
import { Info, Navbar, Repo, User, Search } from '../components'
import { GlobalContext } from '../context/context'
import loadingImage from '../images/preloader.gif';

const Home = () => {

    const { isLoading } = GlobalContext();
    if (isLoading) {
        return <main>
            <Navbar />
            <Search />
            <img src={loadingImage} className='loading-img' alt='loding' />
        </main>
    }

    return (
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repo />
        </main>
    )

}

export default Home