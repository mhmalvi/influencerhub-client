import React from 'react'
import { Link } from 'react-router-dom';
import Icons from '../../../Components/Shared/Icons';

const Campaign = ({campaign}) => {
  return (
    <Link
      to={"/working-campaign/1"}
      className="w-60 rounded-md bg-white shadow-sm text-black hover:text-black"
    >
      <img
        className="w-full rounded-tl-md rounded-tr-md"
        src={campaign.banner}
        alt=""
      />
      <div className="px-3 py-2">
        <h5 className="text-sm font-light text-blue-500">{campaign.type}</h5>
        <p>{campaign.title}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs">
            <div className="flex items-center mr-3 leading-5">
              <Icons.People className="text-gray-400 mr-1" />
              <span>30</span>
            </div>
            <div className="flex items-center leading-5">
              <Icons.Clock className="text-gray-400 mr-1" />
              <span>3</span>
              <span className="text-gray-400 ml-1">Days</span>
            </div>
          </div>
          <div className="flex items-center">
            <Link to={"/"}>
              <Icons.Tiktok className="w-5 text-gray-400" />
            </Link>
            <Link to={"/"}>
              <Icons.Instagram className="w-4 text-gray-400 mx-1" />
            </Link>
            <Link to={"/"}>
              <Icons.OutlineFacebook className="w-4 text-gray-500 ml-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Campaign