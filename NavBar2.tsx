import { FunctionComponent } from "react";

export type NavBar2Type = {
  /** Action props */
  onProfileINSTANCEClick?: () => void;
  onTextContainerClick?: () => void;
  onMessagesettingContainer1Click?: () => void;
};

const NavBar2: FunctionComponent<NavBar2Type> = ({
  onProfileINSTANCEClick,
  onTextContainerClick,
  onMessagesettingContainer1Click,
}) => {
  return (
    <div className="w-60 bg-gray-0 overflow-hidden shrink-0 flex flex-col items-start justify-start py-10 pr-[17px] pl-0 box-border gap-[80px_0px] text-left text-base text-gray-400 font-body-m mq1125:pt-[26px] mq1125:pb-[26px] mq1125:box-border mq450:pt-5 mq450:pb-5 mq450:box-border">
      <div className="self-stretch flex flex-row items-center justify-start gap-[14px] text-5xl text-primary-800 font-heading-6">
        <img
          className="h-[45px] w-[43.1px] relative"
          loading="lazy"
          alt=""
          src="/group-397961.svg"
        />
        <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-bold font-inherit mq450:text-lgi mq450:leading-[26px]">
          Stocks A Lot..
        </h3>
      </div>
      <div className="w-44 flex flex-col items-center justify-start pt-0 px-0 pb-[243px] box-border gap-[40px_0px] mq800:pb-[158px] mq800:box-border">
        <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-8">
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
        <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-5">
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
        <div className="self-stretch flex flex-col items-center justify-start gap-[31px_0px]">
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-6">
            <div
              className="flex flex-row items-start justify-start gap-[0px_16px] cursor-pointer"
              onClick={onProfileINSTANCEClick}
            >
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/school1.svg"
              />
              <div className="relative leading-[24px]">Portofolio</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[40px_0px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[25px_0px] text-primary-600">
              <div className="flex flex-row items-start justify-start py-0 pr-[30px] pl-0">
                <div className="flex flex-row items-center justify-start gap-[0px_26px]">
                  <div className="h-12 w-1.5 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary-600" />
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5">
                    <div
                      className="flex flex-row items-start justify-start gap-[0px_16px] cursor-pointer"
                      onClick={onTextContainerClick}
                    >
                      <img
                        className="h-6 w-6 relative min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src="/money1.svg"
                      />
                      <div className="relative leading-[24px] font-semibold">
                        Payment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-5 gap-[0px_16px] text-gray-400">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/arrow.svg"
                />
                <div className="relative leading-[24px]">Transactions</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[49px] pl-5">
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
            <div className="flex flex-row items-start justify-start py-0 pr-[27px] pl-5">
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
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-8">
        <div className="flex flex-col items-start justify-start gap-[40px_0px]">
          <div className="flex flex-row items-start justify-start gap-[0px_16px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/user.svg"
            />
            <div className="relative leading-[24px]">Profile</div>
          </div>
          <div
            className="flex flex-row items-start justify-start gap-[0px_16px] cursor-pointer"
            onClick={onMessagesettingContainer1Click}
          >
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/arrow-1.svg"
            />
            <div className="relative leading-[24px]">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
