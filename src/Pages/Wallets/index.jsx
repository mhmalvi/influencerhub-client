import React from "react";
import Navbar from "../../Components/Shared/Navbar";
import takaLogo from "../../assets/Images/taka_logo.png";
import dollarLogo from "../../assets/Images/dollar_logo.png";
import rightCornerArrow from "../../assets/Images/right_corner_arrow.png";
import leftCornerArrow from "../../assets/Images/left_corner_arrow.png";
import fountainPen from "../../assets/Images/fountain_pen.png";
import { useState } from "react";

const Wallet = () => {
  const [transactionsType, setTransactionsType] = useState("payment");
  const [transactionsMethod, setTransactionsMethod] = useState("bkash");

  console.log(transactionsType);

  return (
    <div className='wallet-wrapper min-h-screen'>
      <div className='page-width mx-auto pb-12 2xl:pb-0'>
        <div>
          <Navbar loggedin={true} />
        </div>
        <div className='mx-28 backdrop-blur-md bg-black bg-opacity-5 p-8 rounded-2xl flex justify-center items-end'>
          <div>
            <div className='w-88 h-46 relative rounded-2xl balance-wrapper px-5 py-3'>
              <div className='border border-gray-400 p-2 z-20 rounded-2xl backdrop-blur-sm'>
                <div className='flex justify-between items-start'>
                  <h2 className='text-2xl font-normal font-mulish leading-8'>
                    Balance
                  </h2>
                  <div className='flex items-start'>
                    <img src={takaLogo} alt='Taka' />
                    <img className='ml-1' src={dollarLogo} alt='Dollar' />
                  </div>
                </div>
                <h1 className='font-mulish font-bold text-3.5xl leading-10'>
                  8,453.00
                </h1>
                <div className='flex items-center mt-7'>
                  <div className='flex items-center'>
                    <img src={rightCornerArrow} alt='' />
                    <h4 className='mb-0 ml-3 font-mulish font-semibold'>
                      5962.00
                    </h4>
                  </div>
                  <div className='flex items-center ml-10'>
                    <img src={leftCornerArrow} alt='' />
                    <h4 className='mb-0 ml-3 font-mulish font-semibold'>
                      5926.00
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-88 h-46 relative rounded-2xl px-5 py-3.5 border border-gray-3200 bg-gray-200 bg-opacity-50 backdrop-blur-md mt-5'>
              <div>
                <div className='flex justify-between items-start'>
                  <h2 className='text-base font-light font-mulish leading-5'>
                    Information
                  </h2>
                  <div className='flex items-end'>
                    <img src={fountainPen} alt='' />
                  </div>
                </div>
                <div>
                  <table className='font-mulish mt-4'>
                    <tr className='font-normal text-base leading-6 cursor-pointer'>
                      <td className='text-xs'>
                        <p>Location</p>
                      </td>

                      <td className=''>
                        <p className='pl-4 pr-6'>:</p>
                      </td>
                      <td className=''>
                        <p className='font-mulish font-semibold text-xs leading-4'>
                          Bangladesh
                        </p>
                      </td>
                    </tr>
                    <tr className='font-normal text-base leading-6 cursor-pointer'>
                      <td className='text-xs'>
                        <p>Bkash</p>
                      </td>

                      <td className=''>
                        <p className='pl-4 pr-6'>:</p>
                      </td>
                      <td className=''>
                        <p className='font-mulish font-semibold text-xs leading-4'>
                          01933355662
                        </p>
                      </td>
                    </tr>
                    <tr className='font-normal text-base leading-6 cursor-pointer'>
                      <td className='text-xs'>
                        <p>Bank ACC</p>
                      </td>

                      <td className=''>
                        <p className='pl-4 pr-6'>:</p>
                      </td>
                      <td className=''>
                        <p className='font-mulish font-semibold text-xs leading-4'>
                          6HE46URR677wSR446Ic
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className='w-64 ml-5 mt-11 pt-1.5'>
              <p className='text-xs leading-5 font-mulish font-extralight text-gray-200'>
                Find Easily. Types: 24/7 Accessible, Big Variaty, Instant
                Results, Products Online.
              </p>
            </div>
          </div>
          <div
            className='ml-16 p-6 rounded-2xl'
            style={{
              border: "0.5px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "20px",
            }}
          >
            <h2 className='font-light text-2xl leading-8 font-mulish text-white text-center pt-4 pb-3'>
              Transactions
            </h2>
            <form action='/'>
              <div className='flex items-center'>
                <div className='wallet-option flex items-center'>
                  <input
                    className='cursor-pointer'
                    id='payment'
                    type='radio'
                    name='payment-method'
                    value='payment'
                    onChange={(e) => setTransactionsType(e.target.value)}
                  />
                  <label
                    htmlFor='payment'
                    className={`ml-1 text-base font-normal leading-6 font-mulish text-white ${
                      transactionsType === "withdraw" && "opacity-75"
                    } cursor-pointer`}
                  >
                    Payment
                  </label>
                </div>
                <div className='wallet-option flex items-center ml-4'>
                  <input
                    className='cursor-pointer'
                    id='withdraw'
                    type='radio'
                    name='payment-method'
                    value='withdraw'
                    onChange={(e) => setTransactionsType(e.target.value)}
                  />
                  <label
                    htmlFor='withdraw'
                    className={`ml-1 text-base font-normal leading-6 font-mulish text-white ${
                      transactionsType === "payment" && "opacity-75"
                    } cursor-pointer`}
                  >
                    Withdraw
                  </label>
                </div>
              </div>

              <div className='px-2 py-1 bg-black bg-opacity-5 rounded-2xl mt-3 mb-2 flex items-center'>
                <div
                  className={`px-20 py-2.5 rounded-2xl text-base font-normal leading-6 font-mulish ${
                    transactionsMethod === "bkash" && "bg-dark-blue"
                  } text-white cursor-pointer`}
                  onClick={() => setTransactionsMethod("bkash")}
                >
                  Bkash
                </div>
                <div
                  className={`px-20 py-2.5 rounded-2xl text-base font-normal leading-6 font-mulish ${
                    transactionsMethod === "bank" && "bg-dark-blue"
                  } text-white cursor-pointer`}
                  onClick={() => setTransactionsMethod("bank")}
                >
                  Bank
                </div>
              </div>

              <div className='mt-2.5'>
                <p className='font-mulish font-light ml-6 text-white mb-1'>
                  Pay to
                </p>
                <div>
                  <input
                    className='w-66 px-6 py-2.5 text-base font-normal leading-6 font-mulish bg-black bg-opacity-5 rounded-2xl outline-none border-none text-white'
                    type='text'
                    name='acc_number'
                    id=''
                    defaultValue='01933355662'
                  />
                  <p className='font-light text-xs leading-5 font-mulish ml-6 text-white text-opacity-50'>
                    Please enter the Bank acc or bkash number
                  </p>
                </div>
              </div>

              {transactionsMethod === "bkash" ? (
                <div
                  className={`${
                    transactionsType === "withdraw" && "hidden"
                  } mt-2.5`}
                >
                  <p className='font-mulish font-light ml-6 text-white mb-1'>
                    Transaction ID
                  </p>
                  <div>
                    <input
                      className='w-66 px-6 py-2.5 text-base font-normal leading-6 font-mulish bg-black bg-opacity-5 rounded-2xl outline-none border-none text-white'
                      type='text'
                      name='tran_id'
                      id=''
                      defaultValue='fkgjdriofhsdfhg'
                    />
                    <p className='font-light text-xs leading-5 font-mulish ml-6 text-white text-opacity-50'>
                      Please enter the Bank acc or bkash number
                    </p>
                  </div>
                </div>
              ) : (
                <div className='mt-2.5'>
                  <p className='font-mulish font-light ml-6 text-white mb-1'>
                    Password
                  </p>
                  <div>
                    <input
                      className='w-66 px-6 py-2.5 text-base font-normal leading-6 font-mulish bg-black bg-opacity-5 rounded-2xl outline-none border-none text-white'
                      type='text'
                      name='tran_id'
                      id=''
                      defaultValue='562566'
                    />
                    <p className='font-light text-xs leading-5 font-mulish ml-6 text-white text-opacity-50'>
                      Please enter the Bank acc or bkash number
                    </p>
                  </div>
                </div>
              )}

              <div className='mt-2.5'>
                <p className='font-mulish font-light ml-6 text-white mb-1'>
                  Amount
                </p>
                <div>
                  <input
                    className='w-44 px-6 py-2.5 text-base font-normal leading-6 font-mulish bg-black bg-opacity-5 rounded-2xl outline-none border-none text-white'
                    type='text'
                    name='acc_number'
                    id=''
                    defaultValue='400'
                  />
                </div>
                <div
                  className={`${
                    transactionsType === "withdraw" ? "block" : "hidden"
                  } font-light text-xs leading-5 font-mulish ml-6 text-white text-opacity-80 mt-2.5`}
                >
                  <span>Commission</span>
                  <span className='ml-5'>500</span>
                </div>
              </div>
              <div className='flex justify-center items-center mt-7 pt-0.5'>
                <button
                  type='submit'
                  className='mx-auto w-68 btn-grad text-white hover:text-white px-8 py-3 rounded-full cursor-pointer font-thin font-mulish'
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
