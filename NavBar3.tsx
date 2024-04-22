import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileFrame from "./ProfileFrame";

const NavBar3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTitleContainer1Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onNewsSectionStructureClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onWelcomeMessageFrameClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <div className="w-60 bg-gray-0 overflow-hidden shrink-0 flex flex-col items-start justify-start py-10 px-0 box-border gap-[80px_0px] text-left text-5xl text-primary-800 font-heading-6 mq450:pt-5 mq450:pb-5 mq450:box-border mq1125:pt-[26px] mq1125:pb-[26px] mq1125:box-border">
      <div className="flex flex-row items-start justify-start py-0 px-8">
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[45px] w-[43.1px] relative"
            loading="lazy"
            alt=""
            src="/group-397961.svg"
          />
          <h3 className="m-0 relative text-inherit leading-[32px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
            SAL.
          </h3>
        </div>
      </div>
      <div className="w-[199px] flex flex-col items-center justify-start pt-0 pb-[243px] pr-5 pl-0 box-border gap-[40px_0px] text-base text-gray-400 font-body-m mq800:pb-[158px] mq800:box-border">
        <div className="flex flex-row items-start justify-start py-0 pr-[17px] pl-8">
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
        <div className="flex flex-row items-start justify-start py-0 pr-[26px] pl-5">
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
        <div
          className="flex flex-row items-start justify-start py-0 px-5 gap-[0px_16px] cursor-pointer"
          onClick={onNewsSectionStructureClick}
        >
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/school1.svg"
          />
          <div className="relative leading-[24px]">Portofolio</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[28px_0px]">
          <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-5">
            <div
              className="flex flex-row items-start justify-start gap-[0px_16px] cursor-pointer"
              onClick={onWelcomeMessageFrameClick}
            >
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/money.svg"
              />
              <div className="relative leading-[24px]">Payment</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[40px_0px] text-primary-600">
            <div className="self-stretch flex flex-col items-start justify-start gap-[28px_0px]">
              <div className="flex flex-row items-center justify-start gap-[0px_26px]">
                <div className="h-12 w-1.5 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary-600" />
                <div className="flex flex-row items-start justify-start gap-[0px_16px]">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/arrow1.svg"
                  />
                  <div className="relative leading-[24px] font-semibold">
                    Transactions
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-8 text-gray-400">
                <div className="flex flex-row items-start justify-start gap-[0px_16px]">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/message.svg"
                  />
                  <div className="relative leading-[24px]">Inbox</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[30px] pl-5 text-gray-400">
              <div className="flex flex-row items-start justify-start gap-[0px_16px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/setting-1.svg"
                />
                <div className="relative leading-[24px]">Settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileFrame onInboxFrameContainer1Click={onTitleContainer1Click} />
    </div>
  );
};

export default NavBar3;
