import { useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
import { sidebarList } from "../../data/UserDashboard";

import caretUp from "../../assets/images/caret-up.png";
import caretDown from "../../assets/images/caret-down.png";
import orangeMark from "../../assets/images/orange mark.png";

const UserDashboardReport = () => {
  const [activePrice, setActivePrice] = useState("300");
  const [otherPrice, setOtherPrice] = useState("200");
  const prices = ["10,000", "500", "1,000", "100", "300", "5,000"];
  const [proceedToPayment, setProceedToPayment] = useState(false);

  const handleIncrease = (): void => {
    let number = +otherPrice;
    number++;
    setOtherPrice(`${number}`);
  };

  const handleReduce = (): void => {
    let number = +otherPrice;
    number--;
    setOtherPrice(`${number}`);
  };

  return (
    <div className="flex flex-col ">
      <Header dashboard />
      <div className="flex-1 flex">
        <div className="">
          <DashboardSidebar sidebarList={sidebarList} />
        </div>
        <main className="w-full pt-6 overflow-y-auto h-[calc(100vh-5rem)] bg-[rgba(0,6,255,.15)]">
          <div className="w-full  ">
            <div className="sm-w-[90%] mx-auto">
              <section className="px-[5%] mt-9 mb-16 md:mb-12 flex flex-col md:flex-row gap-14 md:gap-20">
                <div className="max-w-[400px]">
                  <p className="font-bold text-xl mb-5">
                    Make a secure Donation
                  </p>
                  <div className="grid grid-cols-3 gap-5">
                    {prices.map((price, idx) => (
                      <div
                        onClick={() => setActivePrice(price)}
                        className={`${
                          activePrice == price && " !bg-primaryBlue text-white"
                        } bg-[#f5f6fa] relative flex justify-center items-center py-3 px-5 cursor-pointer rounded-md shadow-md`}
                        key={idx}
                      >
                        <p className="font-semibold">{`$${price}`}</p>
                        {activePrice === price && (
                          <div className="absolute top-1 right-1 w-4 h-4 shadow-lg bg-white rounded-full flex justify-center items-center">
                            <img src={orangeMark} alt="check mark" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="my-10">
                    <p className="text-xl font-bold mb-2">Others</p>
                    <div
                      className={`bg-[#f5f6fa] relative flex gap-10 justify-end pr-16 items-center cursor-pointer rounded-md shadow-md`}
                    >
                      <p className=" px-5 py-2 rounded-sm font-semibold text-xl">
                        <span className="inline-block mr-2 text-base font-bold">
                          USD
                        </span>
                        {`  ${otherPrice}`}
                      </p>
                      <div>
                        <div onClick={handleIncrease}>
                          <img
                            className="w-7 p-1"
                            src={caretUp}
                            alt="caret up"
                          />
                        </div>
                        <div onClick={handleReduce}>
                          <img
                            className="w-7 p-1"
                            src={caretDown}
                            alt="caret down"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p>
                        {" "}
                        <span className="font-semibold tracking-wider">
                          Name:
                        </span>{" "}
                        Suleiman Abdullahi
                      </p>
                      <p>
                        {" "}
                        <span className="font-semibold tracking-wider">
                          Address:
                        </span>{" "}
                        Suleimsnsyd cresent 243 avenue
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => setProceedToPayment(true)}
                      className="w-[300px] mx-auto sm:mx-[unset] py-3 text-white bg-primaryBlue font-medium tracking-wider"
                    >
                      Proceed
                    </button>
                  </div>
                </div>
                <div className="my-auto">
                  <p className="text-gold text-lg font-semibold">Thank You</p>
                  <p className="font-bold my-5 text-xl">Help make a change</p>
                  <p className="tracking-wider">
                    Your dollars are used to provide support to victims
                    <br className="hidden sm:block" /> through our statewide
                    hotline, one-on-one advocacy, criminal{" "}
                    <br className="hidden sm:block" />
                    justice system advocacy and intervention, courtroom support,{" "}
                    <br className="hidden sm:block" />
                    media intervention and to provide resources, referrals and{" "}
                    <br className="hidden sm:block" /> education.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboardReport;
