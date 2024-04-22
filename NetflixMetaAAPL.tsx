import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NetflixMetaAAPLType = {
  netflix?: string;
  ksh41603?: string;
  nFLX?: string;
  ellipseDot?: string;
  janFebMarApr?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propTransform?: CSSProperties["transform"];
  propTransform1?: CSSProperties["transform"];
  propTransform2?: CSSProperties["transform"];
  propTransform3?: CSSProperties["transform"];
  propTransform4?: CSSProperties["transform"];
  propTransform5?: CSSProperties["transform"];
  propTransform6?: CSSProperties["transform"];
  propTransform7?: CSSProperties["transform"];
  propTransform8?: CSSProperties["transform"];
  propTransform9?: CSSProperties["transform"];
};

const NetflixMetaAAPL: FunctionComponent<NetflixMetaAAPLType> = ({
  netflix,
  ksh41603,
  nFLX,
  ellipseDot,
  janFebMarApr,
  propColor,
  propTransform,
  propTransform1,
  propTransform2,
  propTransform3,
  propTransform4,
  propTransform5,
  propTransform6,
  propTransform7,
  propTransform8,
  propTransform9,
}) => {
  const ellipseDotStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const areaChartStyle: CSSProperties = useMemo(() => {
    return {
      transform: propTransform,
    };
  }, [propTransform]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      transform: propTransform1,
    };
  }, [propTransform1]);

  const vectorIcon1Style: CSSProperties = useMemo(() => {
    return {
      transform: propTransform2,
    };
  }, [propTransform2]);

  const vectorIcon2Style: CSSProperties = useMemo(() => {
    return {
      transform: propTransform3,
    };
  }, [propTransform3]);

  const vectorIcon3Style: CSSProperties = useMemo(() => {
    return {
      transform: propTransform4,
    };
  }, [propTransform4]);

  const vectorIcon4Style: CSSProperties = useMemo(() => {
    return {
      transform: propTransform5,
    };
  }, [propTransform5]);

  const vectorIcon5Style: CSSProperties = useMemo(() => {
    return {
      transform: propTransform6,
    };
  }, [propTransform6]);

  const vectorIcon6Style: CSSProperties = useMemo(() => {
    return {
      transform: propTransform7,
    };
  }, [propTransform7]);

  const janFebMarAprStyle: CSSProperties = useMemo(() => {
    return {
      transform: propTransform8,
    };
  }, [propTransform8]);

  const mayJunJulAugSepStyle: CSSProperties = useMemo(() => {
    return {
      transform: propTransform9,
    };
  }, [propTransform9]);

  return (
    <div className="rounded-4xs bg-gray-0 box-border overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[24px_0px] max-w-full text-left text-sm text-black font-body-text-2-bold border-[1px] border-solid border-whitesmoke-300">
      <div className="w-1 h-[188px] absolute !m-[0] top-[0px] left-[0px] bg-gray1-300 hidden z-[0]" />
      <div className="self-stretch flex flex-row items-center justify-between py-0 pr-2 pl-[7px] gap-[20px]">
        <div className="flex flex-col items-start justify-start gap-[5px_0px]">
          <div className="relative leading-[20px]">{netflix}</div>
          <b className="relative text-xl leading-[28px] mq450:text-base mq450:leading-[22px]">
            {ksh41603}
          </b>
        </div>
        <div className="flex flex-col items-end justify-start gap-[5px_0px] text-right text-xl">
          <h2 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
            {nFLX}
          </h2>
          <div
            className="relative text-xs leading-[20px] text-seagreen"
            style={ellipseDotStyle}
          >
            {ellipseDot}
          </div>
        </div>
      </div>
      <div className="w-[292px] h-[79px] relative" style={areaChartStyle}>
        <div className="absolute top-[-35.1px] left-[0px] w-[289.4px] hidden flex-row items-start justify-start gap-[0px_25px]">
          <img
            className="self-stretch w-0 relative max-h-full min-h-[116px]"
            alt=""
            src="/vector.svg"
            style={vectorIconStyle}
          />
          <img
            className="self-stretch w-0 relative max-h-full min-h-[116px]"
            alt=""
            src="/vector.svg"
            style={vectorIcon1Style}
          />
          <img
            className="self-stretch w-0 relative max-h-full min-h-[116px]"
            alt=""
            src="/vector.svg"
            style={vectorIcon2Style}
          />
          <img
            className="self-stretch w-0 relative max-h-full min-h-[116px]"
            alt=""
            src="/vector.svg"
            style={vectorIcon3Style}
          />
          <img
            className="self-stretch w-0 relative max-h-full min-h-[116px]"
            alt=""
            src="/vector.svg"
            style={vectorIcon4Style}
          />
          <img
            className="self-stretch w-0 relative max-h-full min-h-[116px]"
            alt=""
            src="/vector.svg"
            style={vectorIcon5Style}
          />
          <img
            className="self-stretch w-0 relative max-h-full min-h-[116px]"
            alt=""
            src="/vector.svg"
            style={vectorIcon6Style}
          />
        </div>
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full mix-blend-screen"
          alt=""
          src={janFebMarApr}
          style={janFebMarAprStyle}
        />
        <img
          className="absolute h-[60.76%] w-full top-[0%] right-[0%] bottom-[39.24%] left-[0%] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/vector-8.svg"
          style={mayJunJulAugSepStyle}
        />
      </div>
    </div>
  );
};

export default NetflixMetaAAPL;
