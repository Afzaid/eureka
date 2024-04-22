import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar1 from "../components/NavBar1";
import Statusbar1 from "../components/Statusbar1";
import StockListTableView from "../components/StockListTableView";

const AdminPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAgencyLabelNodeClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onHeaderTextContainerClick = useCallback(() => {
    navigate("/transaction-history");
  }, [navigate]);

  const onSALText1Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-0 overflow-hidden flex flex-row items-start justify-start gap-[0px_62px] tracking-[normal] mq450:gap-[0px_62px] mq800:gap-[0px_62px] mq1300:flex-wrap">
      <NavBar1
        onAgencyLabelNodeClick={onAgencyLabelNodeClick}
        onHeaderTextContainerClick={onHeaderTextContainerClick}
        onSALText1Click={onSALText1Click}
      />
      <main className="mt-[-8px] h-[1024px] w-[1076px] relative max-w-full text-left text-lg text-black font-body-m mq450:h-auto mq450:min-h-[1024]">
        <Statusbar1 logo1="/logo-11@2x.png" />
        <div className="absolute top-[38px] left-[0px] bg-gray-0 w-full flex flex-row items-center justify-between gap-[20px] max-w-full z-[2] text-cornflowerblue-200 mq450:flex-wrap">
          <div className="relative leading-[32px] font-medium">
            Welcome back!
          </div>
          <div className="flex flex-row items-center justify-start gap-[0px_5px] text-sm">
            <div className="relative leading-[20px]">Harvey Specter</div>
            <img
              className="h-6 w-6 relative rounded-81xl overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame-63.svg"
            />
          </div>
        </div>
        <h1 className="m-0 absolute top-[147px] left-[323px] text-17xl leading-[140%] font-extrabold font-inherit mq450:text-3xl mq450:leading-[30px] mq800:text-10xl mq800:leading-[40px]">
          SAL
        </h1>
        <section className="absolute top-[253px] left-[31px] w-[673px] flex flex-col items-start justify-start pt-0 px-0 pb-[81px] box-border max-w-full text-left text-sm text-grey-600 font-body-m">
          <div className="overflow-hidden flex flex-row items-start justify-start py-0 pr-px pl-1 gap-[0px_4px] shrink-0 mq800:flex-wrap">
            <div className="w-[59px] rounded-3xl flex flex-col items-center justify-start pt-2 px-0 pb-4 box-border relative gap-[10px_0px] text-cornflowerblue-200">
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-0">
                <b className="relative leading-[140%] whitespace-nowrap">
                  Overview
                </b>
              </div>
              <div className="w-[52px] h-1.5 absolute !m-[0] bottom-[0px] left-[calc(50%_-_26px)] rounded-t-lg rounded-b-none bg-cornflowerblue-200" />
            </div>
            <div className="rounded-3xl flex flex-row items-end justify-center pt-2 pb-0 pr-[5px] pl-2 gap-[0px_10px]">
              <div className="relative leading-[140%]">Market depth</div>
              <div className="h-1.5 w-[52px] relative rounded-t-lg rounded-b-none bg-silver-100 hidden" />
            </div>
            <div className="w-[76px] rounded-3xl flex flex-row items-end justify-center pt-2 px-0 pb-0 box-border gap-[0px_10px]">
              <div className="relative leading-[140%]">Earnings</div>
              <div className="h-1.5 w-[52px] relative rounded-t-lg rounded-b-none bg-silver-100 hidden" />
            </div>
            <div className="w-14 rounded-3xl flex flex-row items-end justify-center pt-2 px-0 pb-0 box-border gap-[0px_10px]">
              <div className="relative leading-[140%]">Notes</div>
              <div className="h-1.5 w-[52px] relative rounded-t-lg rounded-b-none bg-silver-100 hidden" />
            </div>
            <div className="w-[54px] rounded-3xl flex flex-row items-end justify-center pt-2 px-0 pb-0 box-border gap-[0px_10px]">
              <div className="relative leading-[140%]">News</div>
              <div className="h-1.5 w-[52px] relative rounded-t-lg rounded-b-none bg-silver-100 hidden" />
            </div>
            <div className="w-[82px] rounded-3xl flex flex-row items-end justify-center pt-2 px-0 pb-0 box-border gap-[0px_10px]">
              <div className="relative leading-[140%]">Research</div>
              <div className="h-1.5 w-[52px] relative rounded-t-lg rounded-b-none bg-silver-100 hidden" />
            </div>
            <div className="w-[87px] rounded-3xl flex flex-row items-end justify-center pt-2 px-0 pb-0 box-border gap-[0px_10px]">
              <div className="relative leading-[140%]">Financials</div>
              <div className="h-1.5 w-[52px] relative rounded-t-lg rounded-b-none bg-silver-100 hidden" />
            </div>
            <div className="self-stretch rounded-3xl hidden flex-col items-center justify-center pt-2 px-[5px] pb-0 gap-[10px_0px] font-body-text-2-bold">
              <div className="h-5 relative leading-[140%] flex items-center">
                Option 2
              </div>
              <div className="w-[52px] h-1.5 relative rounded-t-lg rounded-b-none bg-silver-100 hidden" />
            </div>
            <div className="mr-[-6px] rounded-3xl flex flex-row items-end justify-center pt-2 pb-0 pr-[5px] pl-2 gap-[0px_10px]">
              <div className="relative leading-[140%]">{`Price & Volume`}</div>
              <div className="h-1.5 w-[52px] relative rounded-t-lg rounded-b-none bg-silver-100 hidden" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-0 pr-px pl-0 box-border max-w-full shrink-0 text-base-5 text-primary-shade5">
            <div className="flex-1 flex flex-row items-center justify-start relative max-w-full [row-gap:20px] mq800:flex-wrap">
              <div className="flex-1 rounded-[8.24px] bg-gray-0 overflow-hidden flex flex-col items-center justify-start p-[22px] box-border gap-[26px_0px] min-w-[233px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8.24px_0px] text-3xl text-primary-blue">
                  <div className="w-[69px] relative leading-[140%] font-medium hidden mq450:text-lg mq450:leading-[25px]">
                    GOOG
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[39px] pl-0 gap-[0px_8.24px] text-[29.3px] text-cornflowerblue-200">
                    <div className="relative leading-[140%] font-medium mq450:text-[23px] mq450:leading-[33px]">
                      55695.72
                    </div>
                    <div className="h-[38.5px] flex flex-row items-center justify-start gap-[0px_3.66px] text-base-5 text-tertiary-stock-green-2">
                      <img
                        className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/arrow-2.svg"
                      />
                      <img
                        className="h-[14.6px] w-[14.6px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/arrow.svg"
                      />
                      <img
                        className="h-[14.6px] w-[14.6px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/arrow.svg"
                      />
                      <div className="relative leading-[140%] font-medium">
                        4.70 (0.81 %)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[52px] flex flex-row items-start justify-start">
                  <div className="w-[236px] flex flex-row items-start justify-between gap-[20px]">
                    <div className="h-[51px] w-20 flex flex-col items-start justify-start py-0 px-0 box-border gap-[6px_0px]">
                      <div className="mt-[-1px] relative leading-[140%] font-semibold">
                        56965
                      </div>
                      <div className="mb-[-1px] relative leading-[140%] font-light text-grey-700">
                        Ask
                      </div>
                    </div>
                    <div className="h-[51px] w-[100px] flex flex-col items-start justify-start py-0 px-0 box-border gap-[6px_0px]">
                      <div className="mt-[-1px] relative leading-[140%] font-medium">
                        55265.41
                      </div>
                      <div className="mb-[-1px] relative leading-[140%] font-light text-grey-700">
                        Bid
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-0 flex flex-row items-start justify-start">
                  <div className="h-px w-[42.1px] relative box-border border-t-[0.9px] border-solid border-grey-200" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="w-[236px] flex flex-row items-start justify-between gap-[20px]">
                    <div className="h-[50px] w-20 flex flex-col items-start justify-start py-0 px-0 box-border gap-[6px_0px]">
                      <div className="mt-[-1px] relative leading-[140%] font-medium">
                        57876
                      </div>
                      <div className="mb-[-1px] relative leading-[140%] font-light text-grey-700">
                        24 h - hi
                      </div>
                    </div>
                    <div className="h-[50px] w-[100px] flex flex-col items-start justify-start py-0 px-0 box-border gap-[6px_0px]">
                      <div className="mt-[-1px] relative leading-[140%] font-medium">
                        4100.54
                      </div>
                      <div className="mb-[-1px] relative leading-[140%] font-medium text-grey-700">
                        24 h - lo
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-0 flex flex-row items-start justify-start">
                  <div className="h-px w-[42.1px] relative box-border border-t-[0.9px] border-solid border-grey-200" />
                </div>
                <div className="w-[236px] hidden flex-row items-center justify-between gap-[20px]">
                  <div className="h-[50.4px] w-[79.7px] relative">
                    <div className="absolute top-[-1.79%] left-[0%] leading-[140%] font-black">
                      57876
                    </div>
                    <div className="absolute top-[56.35%] left-[0%] leading-[140%] font-black text-grey-700">
                      Open
                    </div>
                  </div>
                  <div className="h-[50.4px] w-[99.8px] relative">
                    <div className="absolute top-[-1.79%] left-[0%] leading-[140%] font-black">
                      4100.54
                    </div>
                    <div className="absolute top-[56.35%] left-[0%] leading-[140%] font-black text-grey-700">
                      Close
                    </div>
                  </div>
                </div>
                <div className="w-[42.1px] h-px relative box-border hidden border-t-[0.9px] border-solid border-grey-200" />
                <div className="w-[236px] hidden flex-row items-center justify-between gap-[20px]">
                  <div className="h-[50.4px] w-[79.7px] relative">
                    <div className="absolute top-[-1.79%] left-[0%] leading-[140%] font-black">
                      57876
                    </div>
                    <div className="absolute top-[56.35%] left-[0%] leading-[140%] font-black text-grey-700">
                      MKT Cap
                    </div>
                  </div>
                  <div className="h-[50.4px] w-[99.8px] relative">
                    <div className="absolute top-[-1.79%] left-[0%] leading-[140%] font-black">
                      4100.54
                    </div>
                    <div className="absolute top-[56.35%] left-[0%] leading-[140%] font-black text-grey-700">
                      P/E ratio
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[251px] w-[314px] flex flex-col items-start justify-start py-px px-0 box-border min-w-[314px] text-smi-8 text-grey-900 mq800:flex-1">
                <StockListTableView
                  selection="/selection@2x.png"
                  back="Apple Inc"
                  back1="AAPL"
                />
                <StockListTableView
                  selection="/selection@2x.png"
                  back="Microsoft Inc"
                  back1="MSFT"
                  propBorder="unset"
                  propDisplay="inline-block"
                  propWidth="unset"
                  propPaddingRight="unset"
                  propWidth1="163px"
                  propFlex="unset"
                  propPadding="unset"
                />
                <StockListTableView
                  selection="/selection@2x.png"
                  back="Amazon Inc"
                  back1="AMZN"
                  propBorder="unset"
                  propDisplay="flex"
                  propWidth="63px"
                  propPaddingRight="20px"
                  propWidth1="unset"
                  propFlex="1"
                  propPadding="0px 1px 0px 0px"
                />
                <div className="self-stretch flex-1 rounded-[7.32px] bg-gray-0 overflow-hidden flex flex-row items-center justify-between gap-[20px]">
                  <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[21.97275161743164px] gap-[0px_14.65px]">
                    <img
                      className="h-[79.7px] w-[5.5px] relative object-contain hidden"
                      alt=""
                      src="/selection@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-[7.32px_0px]">
                      <div className="relative leading-[140%]">Apple Inc</div>
                      <div className="w-[57px] relative text-mini-6 leading-[140%] font-semibold flex items-center box-border pr-5">
                        AAPL
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch w-[163px] flex flex-row items-center justify-end gap-[0px_10.99px] text-seagreen">
                    <div className="self-stretch flex-1 flex flex-col items-end justify-center">
                      <div className="h-[23.8px] flex flex-row items-center justify-start gap-[0px_3.66px]">
                        <img
                          className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/arrow.svg"
                        />
                        <img
                          className="h-[14.6px] w-[14.6px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/arrow-3.svg"
                        />
                        <img
                          className="h-[14.6px] w-[14.6px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/arrow.svg"
                        />
                        <div className="relative leading-[140%] font-light">
                          4.70 (0.81 %)
                        </div>
                      </div>
                      <div className="w-[105.3px] relative text-base-5 leading-[140%] text-primary-shade5 text-right flex items-center">
                        13,669.69
                      </div>
                    </div>
                    <img
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/navigational-arrows.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[264px] !m-[0] absolute bottom-[-27.1px] left-[11px] bg-gray-0 flex flex-row items-start justify-start pt-2.5 pb-[11px] pr-[5px] pl-0 box-border gap-[0px_14px] z-[1] text-center text-sm text-cornflowerblue-200 font-body-text-2-bold">
                <div className="h-[27.8px] flex-1 rounded-[3.01px] box-border overflow-hidden flex flex-row items-center justify-center pt-1 px-0.5 pb-[3px] gap-[0px_3.01px] border-[0.8px] border-solid border-cornflowerblue-200">
                  <img
                    className="h-[9px] w-[9px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/plus.svg"
                  />
                  <b className="w-[25px] relative leading-[140%] flex items-center justify-center box-border pl-5 pr-5">
                    Sell
                  </b>
                </div>
                <button className="cursor-pointer [border:none] pt-2 px-2 pb-[9px] bg-cornflowerblue-200 flex-[0.9103] rounded-[3.01px] overflow-hidden flex flex-row items-center justify-center gap-[0px_3.01px] hover:bg-deepskyblue">
                  <img
                    className="h-[9px] w-[9px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/plus.svg"
                  />
                  <b className="w-[77.6px] relative text-sm leading-[10.5px] flex font-body-text-2-bold text-grey-100 text-center items-center justify-center shrink-0 box-border pl-5 pr-5">
                    Buy
                  </b>
                </button>
              </div>
            </div>
          </div>
        </section>
        <b className="absolute top-[721px] left-[135px] text-[10.5px] leading-[140%] flex font-body-text-2-bold text-center items-center justify-center w-[325px] h-[-2px]">
          Stocks Worth
        </b>
      </main>
    </div>
  );
};

export default AdminPage;
