import { useRouter } from "next/router";


import HotelList from "../../components/Hotels/HotelList";
import Layout from "../../components/Layout/Layout";

function Home() {
  const router = useRouter();
  const { hotels } = router.query;
  console.log(hotels);
  return (
    <Layout>
      {hotels != null ? <HotelList condition={hotels} /> : <></>}
    </Layout>
  );
}
export default Home;
