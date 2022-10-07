import "../styles/globals.css";
import { UserProvider } from "../components/Context/userContext";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <div className="">
      {getLayout(
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      )}
    </div>
  );
}

export default MyApp;
