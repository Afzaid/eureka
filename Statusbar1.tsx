import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Statusbar1Type = {
  logo1?: string;

  /** Style props */
  todayTop?: CSSProperties["top"];
};

const Statusbar1: FunctionComponent<Statusbar1Type> = ({ logo1, todayTop }) => {
  const statusbarStyle: CSSProperties = useMemo(() => {
    return {
      top: todayTop,
    };
  }, [todayTop]);

  return (
    <div
      className="absolute top-[0px] left-[735px] w-[341px] flex flex-col items-center justify-start pt-[114px] px-0 pb-[31px] box-border gap-[28px_0px] max-w-full text-left text-lg text-dark-quiz font-body-m"
      style={statusbarStyle}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] bg-gray-0 shadow-[-24px_0px_80px_rgba(49,_79,_124,_0.02)]" />
      <div className="w-[316px] h-[285px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[17px] z-[1]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
            <div className="relative leading-[24px] font-medium">
              My Balances
            </div>
          </div>
          <div className="h-[38.1px] w-9 relative flex items-center justify-center">
            <img
              className="h-full w-full object-contain absolute left-[0px] top-[19px] [transform:scale(3.222)]"
              loading="lazy"
              alt=""
              src="/add-card1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[21px_0px] text-gray-0">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[0px_12px]">
            <div className="flex-[0.8611] flex flex-col items-start justify-start py-[13px] pr-[27px] pl-3 relative gap-[29px]">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <div className="absolute h-full w-full top-[0.3px] right-[0px] bottom-[-0.3px] left-[0px] rounded-xl bg-cornflowerblue-200" />
                <img
                  className="absolute h-full w-full top-[0.3px] right-[0px] bottom-[-0.3px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/ornament.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[7px_0px]">
                <div className="relative leading-[24px] font-medium z-[2]">
                  Kenya Sh.
                </div>
                <b className="relative text-base tracking-[0.02em] leading-[24px] font-roboto z-[2]">
                  80,435.712
                </b>
              </div>
              <div className="flex flex-col items-start justify-start gap-[10px_0px] text-sm font-roboto">
                <div className="flex flex-row items-center justify-start gap-[4px] z-[2]">
                  <img
                    className="h-[16.9px] w-4 relative"
                    alt=""
                    src="/icon--bitcoin.svg"
                  />
                  <div className="relative tracking-[0.02em] leading-[20px] font-medium">
                    0,0014
                  </div>
                </div>
                <input
                  className="m-0 w-6 h-[25.4px] relative overflow-hidden shrink-0 z-[2]"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[13px] px-3 relative">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <div className="absolute h-full w-full top-[0.3px] right-[0px] bottom-[-0.3px] left-[0px] rounded-xl bg-sandybrown" />
                <img
                  className="absolute h-full w-full top-[0.3px] right-[0px] bottom-[-0.3px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/ornament-11.svg"
                />
              </div>
              <div className="self-stretch h-[72px] flex flex-col items-start justify-start gap-[16px_0px]">
                <div className="flex flex-col items-start justify-start gap-[7px_0px]">
                  <div className="relative leading-[24px] font-medium z-[2]">
                    Bitcoin
                  </div>
                  <b className="relative tracking-[0.02em] leading-[24px] font-roboto z-[2]">
                    1.84333767
                  </b>
                </div>
                <div className="self-stretch h-0.5 relative box-border z-[2] border-t-[2px] border-dashed border-papayawhip" />
              </div>
              <img
                className="w-6 h-[25.4px] absolute !m-[0] bottom-[12.4px] left-[12px] overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/icon--credit-card-11.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0px_12px]">
            <button className="cursor-pointer [border:none] pt-2 px-2 pb-[9px] bg-[transparent] flex flex-row items-center justify-center relative">
              <img
                className="h-full w-full absolute !m-[0] top-[0.2px] right-[0px] bottom-[-0.2px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full"
                alt=""
                src="/bg.svg"
              />
              <div className="flex flex-row items-center justify-start py-0 px-[13px] gap-[4px] z-[1]">
                <img
                  className="h-[25.4px] w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--arrow-up.svg"
                />
                <div className="relative text-xs tracking-[0.02em] leading-[16px] font-semibold font-body-m text-seagreen text-left">
                  Withdraw
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-2 px-2 pb-[9px] bg-[transparent] flex flex-row items-center justify-center relative">
              <img
                className="h-full w-full absolute !m-[0] top-[0.2px] right-[0px] bottom-[-0.2px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full"
                alt=""
                src="/bg-11.svg"
              />
              <div className="flex flex-row items-center justify-start py-0 px-5 gap-[3px] z-[1]">
                <img
                  className="h-[25.4px] w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--arrow-up-11.svg"
                />
                <div className="relative text-xs tracking-[0.02em] leading-[16px] font-semibold font-body-m text-gray-0 text-left">
                  Deposit
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[21px_0px] max-w-full text-smi">
        <div className="w-[329px] h-[241px] flex flex-row items-start justify-start py-0 pr-5 pl-[27px] box-border max-w-full">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-px gap-[21px] z-[1]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-lg">
              <div className="relative leading-[24px] font-medium">
                Activities
              </div>
              <div className="flex flex-row items-center justify-start gap-[4px] text-sm text-lightsteelblue-200">
                <div className="relative leading-[20px] font-medium">Today</div>
                <img
                  className="h-[16.9px] w-4 relative"
                  alt=""
                  src="/icon--chevron.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[0px_12px]">
                <img
                  className="h-[50.8px] w-12 relative"
                  loading="lazy"
                  alt=""
                  src="/logo1.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="relative tracking-[0.02em] leading-[16px] font-medium">
                    Microsoft
                  </div>
                  <div className="relative text-sm tracking-[0.02em] leading-[16px] text-slategray">
                    Sell
                  </div>
                </div>
              </div>
              <div className="h-[45px] flex flex-col items-end justify-start pt-0 px-0 pb-0 box-border gap-[4px] text-sm text-firebrick font-roboto">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                    Ksh. 2,435.80
                  </div>
                </div>
                <div className="mb-[-1px] w-[79px] flex flex-row items-center justify-start gap-[8px] text-2xs text-health-care-dark-grey-1 font-body-m">
                  <div className="flex-1 relative leading-[18px] font-medium shrink-0">
                    Today
                  </div>
                  <div className="h-[8.5px] w-px relative box-border border-r-[1px] border-solid border-health-care-dark-grey-1" />
                  <div className="flex-1 relative leading-[18px] font-medium shrink-0">
                    16.40
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[51px] flex flex-row items-center justify-between gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[0px_12px]">
                <div className="h-[50.8px] w-12 relative">
                  <div className="absolute h-full w-full top-[-0.98%] right-[0%] bottom-[0.98%] left-[0%] rounded-xl bg-royalblue" />
                  <img
                    className="absolute h-[86.61%] w-[91.67%] top-[5.71%] right-[4.17%] bottom-[7.68%] left-[4.17%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                    alt=""
                    src={logo1}
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="relative tracking-[0.02em] leading-[16px] font-medium">
                    Tesla
                  </div>
                  <div className="relative text-sm tracking-[0.02em] leading-[16px] text-slategray">
                    Buy
                  </div>
                </div>
              </div>
              <div className="h-[45px] w-[93px] flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[4px] text-sm text-seagreen font-roboto">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                    Ksh. 1,435.72
                  </div>
                </div>
                <div className="mt-[-1px] mb-[-1px] self-stretch flex flex-row items-center justify-start py-0 px-[7px] gap-[8px] text-2xs text-health-care-dark-grey-1 font-body-m">
                  <div className="flex-1 relative leading-[18px] font-medium">
                    Today
                  </div>
                  <div className="h-[8.5px] w-px relative box-border border-r-[1px] border-solid border-health-care-dark-grey-1" />
                  <div className="flex-1 relative leading-[18px] font-medium">
                    14.02
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[276px] h-[51px] flex flex-row items-center justify-between gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[0px_12px]">
                <img
                  className="h-[50.8px] w-12 relative"
                  loading="lazy"
                  alt=""
                  src="/logo-21.svg"
                />
                <div className="h-[37px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[6px]">
                  <div className="relative tracking-[0.02em] leading-[16px] font-medium">
                    Apple
                  </div>
                  <div className="mb-[-1px] relative text-sm tracking-[0.02em] leading-[16px] text-slategray">
                    Buy
                  </div>
                </div>
              </div>
              <div className="h-[45px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[4px] text-sm text-seagreen font-roboto">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                    Ksh. 435.24
                  </div>
                </div>
                <div className="mb-[-1px] flex flex-row items-center justify-start gap-[8px] text-2xs text-health-care-dark-grey-1 font-body-m">
                  <div className="relative leading-[18px] font-medium">
                    Today
                  </div>
                  <div className="h-[8.5px] w-px relative box-border border-r-[1px] border-solid border-health-care-dark-grey-1" />
                  <div className="relative leading-[18px] font-medium">
                    10.12
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-aliceblue" />
        <div className="w-[316px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[19px] z-[1] text-lg">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="relative leading-[28px] font-medium">News</div>
            <div className="relative text-sm leading-[20px] font-medium text-lightsteelblue-200">
              See All
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-xs">
            <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="w-44 relative leading-[18px] inline-block">
                  Microsoft, Tesla, Apple News and Price Data
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px] text-2xs text-lightsteelblue-100">
                  <div className="relative leading-[18px]">News Media</div>
                  <div className="h-[16.9px] w-px relative box-border border-r-[1px] border-solid border-aliceblue" />
                  <div className="relative leading-[18px]">1h ago</div>
                </div>
              </div>
              <img
                className="h-[63.5px] w-[60px] relative min-h-[64px]"
                loading="lazy"
                alt=""
                src="/image1.svg"
              />
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-aliceblue" />
            <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="w-44 relative leading-[18px] inline-block">
                  Coinbase’s Junk Bonds Show Tesla Really Is Going...
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px] text-2xs text-lightsteelblue-100">
                  <div className="relative leading-[18px]">News Media</div>
                  <div className="h-[16.9px] w-px relative box-border border-r-[1px] border-solid border-aliceblue" />
                  <div className="relative leading-[18px]">4h ago</div>
                </div>
              </div>
              <img
                className="h-[63.5px] w-[60px] relative min-h-[64px]"
                loading="lazy"
                alt=""
                src="/image1.svg"
              />
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-aliceblue" />
            <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[9px_0px]">
                <div className="w-44 relative leading-[18px] inline-block">
                  JPMorgan CEO's statement made Tesla price fall...
                </div>
                <div className="flex flex-row items-center justify-start gap-[7px] text-2xs text-lightsteelblue-100">
                  <div className="relative leading-[18px]">News Media</div>
                  <div className="h-[16.9px] w-px relative box-border border-r-[1px] border-solid border-aliceblue" />
                  <div className="relative leading-[18px]">5h ago</div>
                </div>
              </div>
              <img
                className="h-[63.5px] w-[60px] relative min-h-[64px]"
                loading="lazy"
                alt=""
                src="/image1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statusbar1;
