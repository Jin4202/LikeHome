import React, { useState } from "react";
import Account from "../../components/Account/Account";
import StyleContext from "../../components/Context/StyleContext";
import AccountLayout from "../../components/Layout/AccountLayout";

function index() {
  return (
    <AccountLayout>
      <Account />
    </AccountLayout>
  );
}

export default index;
