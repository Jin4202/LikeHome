import "../styles/globals.css";
import { UserProvider } from "../components/Context/userContext";
import { HotelProvider } from "../components/Context/hotelContext";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <div className="">
      {getLayout(
        <HotelProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </HotelProvider>
      )}
    </div>
  );
}

export default MyApp;
