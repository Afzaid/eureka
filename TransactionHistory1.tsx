import { FunctionComponent } from "react";

const TransactionHistory1: FunctionComponent = () => {
  return (
    <section className="absolute top-[386px] left-[0px] w-[720px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[13px_0px] max-w-full text-left text-base-3 text-inactive-state-color font-outfit">
      <div className="w-[162px] relative font-medium flex items-center box-border pr-5">
        Transaction History
      </div>
      <div className="w-[435px] flex flex-row items-start justify-start py-0 pr-[23px] pl-0 box-border gap-[0px_11px] max-w-full mq450:flex-wrap">
        <button className="cursor-pointer pt-2.5 pb-2 pr-10 pl-[38px] bg-gray-0 rounded-[22.22px] overflow-hidden flex flex-row items-center justify-center border-[0.7px] border-solid border-cornflowerblue-200 hover:bg-gainsboro-100 hover:box-border hover:border-[0.7px] hover:border-solid hover:border-deepskyblue">
          <div className="relative text-smi-6 tracking-[0.01em] font-medium font-outfit text-text-color-80-opacity text-left">
            All
          </div>
        </button>
        <button className="cursor-pointer pt-2.5 pb-2 pr-[19px] pl-[18px] bg-gray-0 rounded-[22.22px] overflow-hidden flex flex-row items-center justify-center border-[0.7px] border-solid border-whitesmoke-200 hover:bg-gainsboro-100 hover:box-border hover:border-[0.7px] hover:border-solid hover:border-lightgray">
          <div className="relative text-smi-6 tracking-[0.01em] font-medium font-outfit text-text-color-80-opacity text-left">
            Complete
          </div>
        </button>
        <button className="cursor-pointer pt-2.5 px-2 pb-2 bg-gray-0 flex-1 rounded-[22.22px] box-border overflow-hidden flex flex-row items-center justify-center min-w-[62px] border-[0.7px] border-solid border-whitesmoke-200 hover:bg-gainsboro-100 hover:box-border hover:border-[0.7px] hover:border-solid hover:border-lightgray">
          <div className="relative text-smi-6 tracking-[0.01em] font-medium font-outfit text-text-color-80-opacity text-left">
            Pending
          </div>
        </button>
        <button className="cursor-pointer pt-2.5 px-2 pb-2 bg-gray-0 flex-1 rounded-[22.22px] box-border overflow-hidden flex flex-row items-center justify-center min-w-[62px] border-[0.7px] border-solid border-whitesmoke-200 hover:bg-gainsboro-100 hover:box-border hover:border-[0.7px] hover:border-solid hover:border-lightgray">
          <div className="relative text-smi-6 tracking-[0.01em] font-medium font-outfit text-text-color-80-opacity text-left">
            Cancelled
          </div>
        </button>
      </div>
      <div className="self-stretch rounded-[8.89px] bg-gray-0 box-border overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-7 gap-[22px_0px] max-w-full text-xs-9 text-text-color-80-opacity border-[0.7px] border-solid border-whitesmoke-200">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch overflow-x-auto flex flex-row items-start justify-start text-darkslategray-100 border-b-[0.7px] border-solid border-dividers-and-borders-grey-light">
            <button className="cursor-pointer [border:none] py-[13px] pr-[50px] pl-[53px] bg-[transparent] overflow-hidden shrink-0 flex flex-row items-center justify-center border-b-[0.7px] border-solid border-dividers-and-borders-grey-light hover:bg-silver-200">
              <div className="relative text-xs-9 tracking-[0.01em] font-outfit text-inactive-state-color text-center">
                Transaction ID
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[13px] pr-16 pl-[63px] bg-[transparent] overflow-hidden shrink-0 flex flex-row items-center justify-center border-b-[0.7px] border-solid border-dividers-and-borders-grey-light hover:bg-silver-200">
              <div className="relative text-xs-9 tracking-[0.01em] font-outfit text-inactive-state-color text-center">
                Date
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-[13px] bg-[transparent] w-[111.1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-b-[0.7px] border-solid border-dividers-and-borders-grey-light hover:bg-silver-200">
              <div className="flex-1 relative text-xs-9 tracking-[0.01em] font-outfit text-inactive-state-color text-center pl-5 pr-5">
                Amount
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-[13px] bg-[transparent] w-[151.9px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-b-[0.7px] border-solid border-dividers-and-borders-grey-light hover:bg-silver-200">
              <div className="w-[75px] relative text-xs-9 tracking-[0.01em] font-outfit text-inactive-state-color text-center inline-block box-border pl-5 pr-5">
                Stocks
              </div>
            </button>
            <div className="overflow-hidden shrink-0 flex flex-row items-center justify-start py-[13px] pr-[57px] pl-[26px]">
              <div className="relative tracking-[0.01em]">Status</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq800:flex-wrap">
            <input
              className="w-full [border:none] [outline:none] bg-secondary-background h-[41.5px] flex-1 overflow-hidden flex flex-row items-center justify-start py-[13px] px-[17px] box-border font-outfit text-xs-9 text-text-color-80-opacity min-w-[120px]"
              placeholder="#15267"
              type="text"
            />
            <div className="bg-secondary-background overflow-hidden flex flex-row items-center justify-center py-[13px] pr-[46px] pl-[43px] whitespace-nowrap">
              <div className="relative tracking-[0.01em]">Mar 1, 2023</div>
            </div>
            <div className="w-[111.1px] bg-secondary-background overflow-hidden shrink-0 flex flex-row items-center justify-center py-[13px] px-3 box-border text-center">
              <div className="w-[61px] relative tracking-[0.01em] inline-block box-border pl-5 pr-5">
                100
              </div>
            </div>
            <div className="bg-secondary-background overflow-hidden flex flex-row items-center justify-center py-[13px] pr-[74px] pl-[73px] text-center">
              <div className="relative tracking-[0.01em]">1</div>
            </div>
            <div className="w-[117px] bg-secondary-background overflow-hidden shrink-0 flex flex-row items-center justify-start py-[13px] px-[17px] box-border">
              <div className="w-[62px] relative tracking-[0.01em] inline-block box-border pr-5">
                Success
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] text-center mq800:flex-wrap">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-[13px] px-[17px] box-border min-w-[65px] text-left">
              <div className="w-[65px] relative tracking-[0.01em] inline-block box-border pr-5">
                #153587
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center py-[13px] pr-[39px] pl-[43px]">
              <div className="relative tracking-[0.01em]">Jan 26, 2023</div>
            </div>
            <div className="w-[111.1px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[13px] box-border">
              <div className="w-[63px] relative tracking-[0.01em] inline-block box-border pl-5 pr-5">
                300
              </div>
            </div>
            <div className="w-[151.9px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[13px] box-border">
              <div className="w-[47px] relative tracking-[0.01em] inline-block box-border pl-5 pr-5">
                3
              </div>
            </div>
            <div className="w-[117px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[13px] px-[17px] box-border text-left text-seagreen">
              <div className="w-[62px] relative tracking-[0.01em] inline-block box-border pr-5">
                Success
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] text-center mq800:flex-wrap">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-start pt-3.5 px-4 pb-3 box-border min-w-[60px] text-left">
              <div className="w-[60px] relative tracking-[0.01em] inline-block box-border pr-5">
                #12436
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center pt-3.5 pb-3 pr-[39px] pl-[43px]">
              <div className="relative tracking-[0.01em]">Feb 12, 2033</div>
            </div>
            <div className="w-[111.1px] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-3.5 px-[11px] pb-3 box-border">
              <div className="w-[61px] relative tracking-[0.01em] inline-block box-border pl-5 pr-5">
                100
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center pt-3.5 pb-3 pr-[74px] pl-[73px]">
              <div className="relative tracking-[0.01em]">1</div>
            </div>
            <div className="w-[117px] overflow-hidden shrink-0 flex flex-row items-center justify-start pt-3.5 px-[17px] pb-3 box-border text-left text-seagreen">
              <div className="w-[62px] relative tracking-[0.01em] inline-block box-border pr-5">
                Success
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq800:flex-wrap">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-[13px] px-4 box-border min-w-[59px]">
              <div className="w-[59px] relative tracking-[0.01em] inline-block box-border pr-5">
                #16879
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center py-[13px] pr-[39px] pl-[43px] text-center">
              <div className="relative tracking-[0.01em]">Feb 12, 2033</div>
            </div>
            <div className="w-[111.1px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[13px] box-border">
              <div className="w-[63px] relative tracking-[0.01em] inline-block box-border pl-5 pr-5">
                500
              </div>
            </div>
            <div className="w-[151.9px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[13px] box-border text-center">
              <div className="w-[47px] relative tracking-[0.01em] inline-block box-border pl-5 pr-5">
                5
              </div>
            </div>
            <div className="w-[117px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[13px] px-[17px] box-border text-seagreen">
              <div className="w-[62px] relative tracking-[0.01em] inline-block box-border pr-5">
                Success
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq800:flex-wrap">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-start pt-3.5 px-[17px] pb-3 box-border min-w-[58px]">
              <div className="w-[58px] relative tracking-[0.01em] inline-block box-border pr-5">
                #16378
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center pt-3.5 pb-3 pr-[39px] pl-[42px] text-center">
              <div className="relative tracking-[0.01em]">Feb 28, 2033</div>
            </div>
            <div className="w-[111.1px] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-3.5 px-3 pb-3 box-border">
              <div className="w-[63px] relative tracking-[0.01em] inline-block box-border pl-5 pr-5">
                500
              </div>
            </div>
            <div className="w-[151.9px] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-3.5 px-3 pb-3 box-border text-center">
              <div className="w-[47px] relative tracking-[0.01em] inline-block box-border pl-5 pr-5">
                5
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start pt-3.5 pb-3 pr-[47px] pl-4 text-firebrick">
              <div className="relative tracking-[0.01em]">Cancelled</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq800:flex-wrap">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-[13px] px-[17px] box-border min-w-[61px]">
              <div className="w-[61px] relative tracking-[0.01em] inline-block box-border pr-5">
                #16609
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center py-[13px] pr-[33px] pl-[37px] text-center">
              <div className="relative tracking-[0.01em]">March 13, 2033</div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center py-[13px] pr-[45px] pl-11">
              <div className="relative tracking-[0.01em]">100</div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center py-[13px] pr-[74px] pl-[73px] text-center">
              <div className="relative tracking-[0.01em]">1</div>
            </div>
            <div className="w-[117px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[13px] px-[17px] box-border text-seagreen">
              <div className="w-[62px] relative tracking-[0.01em] inline-block box-border pr-5">
                Success
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq800:flex-wrap">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-start pt-3.5 px-4 pb-3 box-border min-w-[60px]">
              <div className="w-[60px] relative tracking-[0.01em] inline-block box-border pr-5">
                #16907
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center pt-3.5 pb-3 pr-[33px] pl-9 text-center">
              <div className="relative tracking-[0.01em]">March 18, 2033</div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center pt-3.5 pb-3 pr-[45px] pl-11">
              <div className="relative tracking-[0.01em]">100</div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center pt-3.5 pb-3 pr-[74px] pl-[73px] text-center">
              <div className="relative tracking-[0.01em]">1</div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start pt-3.5 pb-3 pr-14 pl-[17px] text-truecaller-logo-color">
              <div className="relative tracking-[0.01em]">Pending</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-4 box-border max-w-full text-xs-2 text-darkslategray-200 font-body-m">
          <div className="flex-1 flex flex-row items-start justify-between py-0 pr-px pl-0 box-border max-w-full gap-[20px] mq450:flex-wrap">
            <div className="flex flex-row items-start justify-start py-0 pr-9 pl-0 gap-[0px_3px]">
              <div className="flex flex-row items-center justify-start py-0 pr-0.5 pl-[5px] relative gap-[0px_4px]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[2.81px] bg-gainsboro-200" />
                <div className="relative font-medium z-[1]">10</div>
                <img
                  className="h-[12.2px] w-[12.2px] relative overflow-hidden shrink-0 object-contain z-[1]"
                  alt=""
                  src="/bold--arrows--alt-arrow-left@2x.png"
                />
              </div>
              <div className="mb-[-1px] relative text-xs-9 font-medium">
                {" "}
                per page
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-0 gap-[0px_2px]">
              <div className="flex flex-row items-center justify-start py-0 px-[5px] relative gap-[0px_3px]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[-0.3px] bottom-[0px] left-[0px] rounded-[2.81px] bg-gainsboro-200" />
                <div className="relative font-medium z-[1]">1</div>
                <img
                  className="h-[12.2px] w-[12.2px] relative overflow-hidden shrink-0 object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/bold--arrows--alt-arrow-left-1@2x.png"
                />
              </div>
              <div className="mb-[-1px] relative text-xs-9 font-medium">
                {" "}
                of 1 pages
              </div>
              <div className="h-[18px] w-8 relative">
                <img
                  className="absolute top-[0.1px] left-[0.3px] w-[17.8px] h-[17.8px] overflow-hidden"
                  alt=""
                  src="/bold--arrows--alt-arrow-left-2.svg"
                />
                <img
                  className="absolute top-[0.1px] left-[14.3px] w-[17.8px] h-[17.8px] overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="/bold--arrows--alt-arrow-right.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory1;
