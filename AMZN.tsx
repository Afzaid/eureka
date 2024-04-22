import { FunctionComponent } from "react";

const AMZN: FunctionComponent = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[20px_0px] min-w-[273px] max-w-full text-left text-xl text-black font-body-m">
      <div className="relative leading-[140%] font-medium mq450:text-base mq450:leading-[22px]">
        Stock Listing
      </div>
      <div className="self-stretch rounded-[11.12px] bg-gray-0 flex flex-col items-start justify-start py-[19.764705657958984px] pr-[30px] pl-[29.647058486938477px] relative gap-[39.53px_0px] text-5xl-7 text-gray-0 font-body-text-2-bold border-[1.2px] border-solid border-whitesmoke-300 mq450:gap-[39.53px_0px]">
        <div className="self-stretch flex flex-row items-baseline justify-between gap-[20px] mq450:flex-wrap">
          <div className="relative leading-[39.53px] font-medium mq450:text-xl mq450:leading-[32px]">
            Stock Chart
          </div>
          <div className="flex flex-row items-center justify-start gap-[0px_9.88px] text-mid-3 text-cornflowerblue-200">
            <div className="relative leading-[24.71px] font-medium">
              View All
            </div>
            <img
              className="h-[11.9px] w-[12.4px] relative"
              loading="lazy"
              alt=""
              src="/-icon-arrow-right.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[14.82px_0px] text-mini-8 text-black">
          <div className="self-stretch bg-gray-0 flex flex-row items-start justify-between py-[4.941176414489746px] px-[9.882352828979492px] gap-[20px] text-darkgray mq450:flex-wrap">
            <b className="relative leading-[24.71px] mq450:w-full mq450:h-[13px]">
              #
            </b>
            <b className="w-[59.3px] relative leading-[24.71px] flex items-center shrink-0">
              Name
            </b>
            <b className="w-[59.3px] relative leading-[24.71px] flex items-center shrink-0">
              Price
            </b>
            <b className="w-[64.2px] relative leading-[24.71px] flex items-center shrink-0">
              Status
            </b>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-[4.941176414489746px] px-[9.882352828979492px] gap-[20px] mq450:flex-wrap">
            <div className="w-[17.3px] relative leading-[39.53px] font-medium text-center flex items-center justify-center shrink-0 mq450:w-full mq450:h-[17.3px]">
              1
            </div>
            <div className="w-[59.3px] relative leading-[39.53px] font-medium flex items-center shrink-0">
              NFLX
            </div>
            <div className="relative leading-[39.53px] font-medium">
              Ksh. 416.03
            </div>
            <div className="w-[59.3px] relative leading-[24.71px] text-seagreen flex items-center shrink-0">
              +2.37%
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-[4.941176414489746px] px-[9.882352828979492px] gap-[20px] mq450:flex-wrap">
            <div className="w-[17.3px] relative leading-[39.53px] font-medium text-center flex items-center justify-center shrink-0 mq450:w-full mq450:h-[17.3px]">
              2
            </div>
            <div className="w-[59.3px] relative leading-[39.53px] font-medium flex items-center shrink-0">
              AMZN
            </div>
            <div className="relative leading-[39.53px] font-medium">
              Ksh. 251.64
            </div>
            <div className="w-[59.3px] relative leading-[24.71px] text-seagreen flex items-center shrink-0">
              +2.09%
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-[4.941176414489746px] px-[9.882352828979492px] gap-[20px] mq450:flex-wrap">
            <div className="w-[17.3px] relative leading-[39.53px] font-medium text-center flex items-center justify-center shrink-0 mq450:w-full mq450:h-[17.3px]">
              3
            </div>
            <div className="w-[59.3px] relative leading-[39.53px] font-medium flex items-center shrink-0">
              AAPL
            </div>
            <div className="relative leading-[39.53px] font-medium">
              Ksh. 178.61
            </div>
            <div className="w-[59.3px] relative leading-[24.71px] text-seagreen flex items-center shrink-0">
              +1.36%
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-[4.941176414489746px] px-[9.882352828979492px] gap-[20px] mq450:flex-wrap">
            <div className="w-[17.3px] relative leading-[39.53px] font-medium text-center flex items-center justify-center shrink-0 mq450:w-full mq450:h-[17.3px]">
              4
            </div>
            <div className="w-[59.3px] relative leading-[39.53px] font-medium flex items-center shrink-0">
              NFLX
            </div>
            <div className="relative leading-[39.53px] font-medium">
              Ksh. 416.03
            </div>
            <div className="w-[59.3px] relative leading-[24.71px] text-seagreen flex items-center shrink-0">
              +0.25%
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-[4.941176414489746px] px-[9.882352828979492px] gap-[20px] mq450:flex-wrap">
            <div className="w-[17.3px] relative leading-[39.53px] font-medium text-center flex items-center justify-center shrink-0 mq450:w-full mq450:h-[17.3px]">
              5
            </div>
            <div className="w-[59.3px] relative leading-[39.53px] font-medium flex items-center shrink-0">
              META
            </div>
            <div className="relative leading-[39.53px] font-medium">
              Ksh. 285.50
            </div>
            <div className="w-[59.3px] relative leading-[24.71px] text-firebrick flex items-center shrink-0">
              -0.44%
            </div>
          </div>
        </div>
        <div className="w-[4.9px] h-[481.8px] absolute !m-[0] top-[0px] left-[0px] bg-gray1-300 hidden z-[2]" />
      </div>
    </div>
  );
};

export default AMZN;
