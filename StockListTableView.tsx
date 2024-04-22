import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type StockListTableViewType = {
  selection?: string;
  back?: string;
  back1?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propDisplay?: CSSProperties["display"];
  propWidth?: CSSProperties["width"];
  propPaddingRight?: CSSProperties["paddingRight"];
  propWidth1?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
};

const StockListTableView: FunctionComponent<StockListTableViewType> = ({
  selection,
  back,
  back1,
  propBorder,
  propDisplay,
  propWidth,
  propPaddingRight,
  propWidth1,
  propFlex,
  propPadding,
}) => {
  const stockListTableViewStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const backStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth,
      paddingRight: propPaddingRight,
    };
  }, [propDisplay, propWidth, propPaddingRight]);

  const rightStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  const stockIncreaseStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="self-stretch flex-1 rounded-[7.32px] bg-gray-0 overflow-hidden flex flex-row items-center justify-start py-0 pr-[21.97275161743164px] pl-0 gap-[0px_66.83px] text-left text-smi-8 text-grey-900 font-body-m border-[0.4px] border-solid border-cornflowerblue-200"
      style={stockListTableViewStyle}
    >
      <div className="flex flex-row items-center justify-start py-0 pr-0 pl-[21.97275161743164px] gap-[0px_14.65px]">
        <img
          className="h-[79.7px] w-[5.5px] relative object-contain hidden"
          alt=""
          src={selection}
        />
        <div className="flex flex-col items-start justify-start gap-[7.32px_0px]">
          <div className="relative leading-[140%]">{back}</div>
          <div
            className="relative text-mini-6 leading-[140%] font-semibold"
            style={backStyle}
          >
            {back1}
          </div>
        </div>
      </div>
      <div
        className="self-stretch w-[163px] flex flex-row items-center justify-end gap-[0px_10.99px] text-seagreen"
        style={rightStyle}
      >
        <div className="self-stretch flex-1 flex flex-col items-end justify-center">
          <div
            className="h-[23.8px] flex flex-row items-center justify-start gap-[0px_3.66px]"
            style={stockIncreaseStyle}
          >
            <img
              className="h-[22px] w-[22px] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/arrow.svg"
            />
            <img
              className="h-[14.6px] w-[14.6px] relative overflow-hidden shrink-0"
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
          alt=""
          src="/navigational-arrows.svg"
        />
      </div>
    </div>
  );
};

export default StockListTableView;
