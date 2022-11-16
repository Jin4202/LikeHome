import React from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout/Layout";
import Book from "../../components/Reservations/Book";

function booking() {
  const router = useRouter();
  const  booking  = router.query;
  return (
    <Layout>
      {booking.book != null ? <Book condition={booking.book}/> : <></>}
    </Layout>
  );
}
export default booking;
