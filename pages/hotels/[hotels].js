import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import StyleContext from "../../components/Context/StyleContext";
import HotelList from "../../components/Hotels/HotelList";
import Layout from "../../components/Layout/Layout";

function Home() {
  const router = useRouter();
  const { hotels } = router.query;
  const [getProp, setProps] = useState([]);
  return (
    <Layout>
      {hotels != null ? <HotelList condition={hotels} /> : <></>}
    </Layout>
  );
}
export default Home;
