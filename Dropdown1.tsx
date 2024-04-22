import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Dropdown1Type = {
  /** Style props */
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propPaddingRight?: CSSProperties["paddingRight"];
  propHeight1?: CSSProperties["height"];
  propDisplay1?: CSSProperties["display"];
  propPaddingRight1?: CSSProperties["paddingRight"];
  propPaddingRight2?: CSSProperties["paddingRight"];
  propHeight2?: CSSProperties["height"];
  propDisplay2?: CSSProperties["display"];
  propPaddingRight3?: CSSProperties["paddingRight"];
  propWidth?: CSSProperties["width"];
};

const Dropdown1: FunctionComponent<Dropdown1Type> = ({
  propHeight,
  propDisplay,
  propPaddingRight,
  propHeight1,
  propDisplay1,
  propPaddingRight1,
  propPaddingRight2,
  propHeight2,
  propDisplay2,
  propPaddingRight3,
  propWidth,
}) => {
  const options1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
      paddingRight: propPaddingRight,
    };
  }, [propHeight, propDisplay, propPaddingRight]);

  const options2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay1,
      paddingRight: propPaddingRight1,
    };
  }, [propHeight1, propDisplay1, propPaddingRight1]);

  const options3Style: CSSProperties = useMemo(() => {
    return {
      paddingRight: propPaddingRight2,
    };
  }, [propPaddingRight2]);

  const options4Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      display: propDisplay2,
      paddingRight: propPaddingRight3,
    };
  }, [propHeight2, propDisplay2, propPaddingRight3]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px] max-w-full text-left text-sm text-gray-900 font-body-m">
      <div className="self-stretch rounded-3xs bg-gray-50 flex flex-row items-center justify-center p-3 box-border max-w-full">
        <div className="flex-1 flex flex-row items-center justify-between py-0 px-1 box-border max-w-full gap-[20px]">
          <div className="relative leading-[20px]">Sell</div>
          <img
            className="h-6 w-6 relative"
            alt=""
            src="/vuesaxlineararrowdown.svg"
          />
        </div>
      </div>
      <div className="w-[220px] h-2 rounded-3xs bg-gray-50 box-border flex flex-col items-center justify-start pt-1 px-[3px] pb-[3px] opacity-[0] text-base border-[1px] border-solid border-gray-4">
        <div className="self-stretch h-0 flex flex-col items-start justify-start py-0 px-3 box-border gap-[12px_0px]">
          <div
            className="h-6 relative tracking-[0.15px] leading-[24px] font-black inline-block box-border pr-5"
            style={options1Style}
          >
            Options 1
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-4" />
        </div>
        <div className="self-stretch h-0 flex flex-col items-start justify-start py-0 px-3 box-border gap-[12px_0px]">
          <div
            className="h-6 relative tracking-[0.15px] leading-[24px] font-black inline-block box-border pr-5"
            style={options2Style}
          >
            Options 2
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-4" />
        </div>
        <div className="self-stretch h-px flex flex-col items-start justify-start pt-3 px-3 pb-0 box-border gap-[12px_0px]">
          <div
            className="h-6 relative tracking-[0.15px] leading-[24px] font-black inline-block box-border pr-5"
            style={options3Style}
          >
            Options 3
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-4" />
        </div>
        <div className="self-stretch h-0 flex flex-col items-start justify-start py-0 px-3 box-border gap-[12px_0px]">
          <div
            className="h-6 relative tracking-[0.15px] leading-[24px] font-black inline-block box-border pr-5"
            style={options4Style}
          >
            Options 4
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-4" />
        </div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-3">
          <div
            className="h-0 w-[101px] flex flex-col items-start justify-start pt-3 pb-0 pr-5 pl-0 box-border relative gap-[12px_0px]"
            style={frameDivStyle}
          >
            <div className="h-6 absolute !m-[0] left-[0px] tracking-[0.15px] leading-[24px] font-black inline-block">
              Options 5
            </div>
            <div className="w-[189px] h-px relative box-border hidden z-[1] border-t-[1px] border-solid border-gray-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown1;
