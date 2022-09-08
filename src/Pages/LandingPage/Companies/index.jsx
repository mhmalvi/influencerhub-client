import React from "react";
import metaMask from "../../../assets/Images/MetaMask.png";
import trustWallet from "../../../assets/Images/trust_wallet.png";
import walletConnect from "../../../assets/Images/wallet_connect.png";
import exodus from "../../../assets/Images/Exodus.png";
import safepal from "../../../assets/Images/safepal.png";
// import grabLogo from "../../../assets/Images/grab-logo.png";

const Companies = () => {
  const companies = [metaMask, trustWallet, walletConnect, exodus, safepal];
  return (
    <div className="page-width mx-auto pb-20">
      <div className="w-full">
        <div className="flex flex-wrap gap-x-28 gap-y-12 justify-center items-center">
          {companies.map((company, i) => (
            <img key={i} className="pb-0.5" src={company} alt="" srcSet="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
