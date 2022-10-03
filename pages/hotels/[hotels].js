
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react';

import StyleContext from '../../components/Context/StyleContext';
import HotelList from '../../components/Hotels/HotelList';
import Layout from '../../components/Layout/Layout';



function Home() {
    // const setStyle = "bg-gradient-to-r from-indigo-500 via-purple-500/20 to-pink-500"
    const router = useRouter();
    const {hotels} = router.query;
    const [getProp, setProps] = useState([]);
    return (
        // <StyleContext.Provider value={{ setStyle }}>
            <Layout>
                {(hotels!=null) ? <HotelList condition={hotels}/>:<></> }
            </Layout>
        // </StyleContext.Provider>
    )
}
export default Home