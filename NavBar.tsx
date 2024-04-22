import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileFrame from "./ProfileFrame";

const NavBar: FunctionComponent = () => {
  const navigate = useNavigate();

  const onInboxFrameContainer1Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onNavBarContainerClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onNavBarContainer1Click = useCallback(() => {
    navigate("/transaction-history");
  }, [navigate]);

  return (
    <nav className="m-0 bg-gray-0 overflow-hidden flex flex-col items-start justify-start py-10 px-0 gap-[80px_0px] text-left text-base text-gray-400 font-body-m mq450:pt-5 mq450:pb-5 mq450:box-border mq1125:pt-[26px] mq1125:pb-[26px] mq1125:box-border">
      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-8 text-5xl text-primary-800 font-heading-6">
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[45px] w-[43.1px] relative"
            loading="lazy"
            alt=""
            src="/group-397961.svg"
          />
          <h1 className="m-0 relative text-inherit leading-[32px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Stocks A Lot
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start pt-0 pb-[243px] pr-5 pl-0 gap-[40px_0px] mq800:pb-[158px] mq800:box-border">
        <div className="flex flex-row items-start justify-start py-0 px-3.5">
          <div className="flex flex-row items-start justify-start gap-[0px_16px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/setting.svg"
            />
            <div className="relative leading-[24px]">Dashboard</div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[28px_0px]">
          <div className="flex flex-row items-start justify-start py-0 pr-[35px] pl-8">
            <div className="flex flex-row items-start justify-start gap-[0px_16px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/essentional.svg"
              />
              <div className="relative leading-[24px]">Discover</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[26px] pl-0 text-primary-600">
            <div className="flex flex-row items-center justify-start gap-[0px_26px]">
              <div className="h-12 w-1.5 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary-600" />
              <div className="flex flex-row items-start justify-start gap-[0px_16px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/school.svg"
                />
                <div className="relative leading-[24px] font-semibold">
                  Portofolio
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-0 pl-5 gap-[40px_0px]">
            <div
              className="flex flex-row items-start justify-start gap-[0px_16px] cursor-pointer"
              onClick={onNavBarContainerClick}
            >
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/money.svg"
              />
              <div className="relative leading-[24px]">Payment</div>
            </div>
            <div
              className="flex flex-row items-start justify-start gap-[0px_16px] cursor-pointer"
              onClick={onNavBarContainer1Click}
            >
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/arrow.svg"
              />
              <div className="relative leading-[24px]">Transactions</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0px_16px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/message.svg"
              />
              <div className="relative leading-[24px]">Inbox</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0px_16px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/setting-1.svg"
              />
              <div className="relative leading-[24px]">Settings</div>
            </div>
          </div>
        </div>
      </div>
      <ProfileFrame onInboxFrameContainer1Click={onInboxFrameContainer1Click} />
    </nav>
  );
};

export default NavBar;
