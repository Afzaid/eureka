import { FunctionComponent } from "react";

export type TextField1Type = {
  label?: string;
  leftPlaceholder?: string;
};

const TextField1: FunctionComponent<TextField1Type> = ({
  label,
  leftPlaceholder,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px] text-left text-xs text-grey-700 font-body-m">
      <div className="flex flex-row items-center justify-start gap-[0px_4px]">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/plus.svg"
        />
        <div className="relative leading-[140%]">{label}</div>
      </div>
      <div className="self-stretch h-[42px] rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-3 pr-2.5 pl-2 gap-[0px_197px] border-[1px] border-solid border-grey-500">
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] h-5 flex-1 flex flex-row items-center justify-start font-body-m text-sm text-dimgray min-w-[149px]"
          placeholder={leftPlaceholder}
          type="text"
        />
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/windowclose.svg"
        />
      </div>
      <div className="w-[62px] h-4 hidden flex-row items-center justify-start gap-[0px_4px] text-black">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
          alt=""
          src="/plus.svg"
        />
        <div className="h-[17px] flex-1 relative leading-[140%] font-black inline-block whitespace-nowrap shrink-0">
          Helper text
        </div>
      </div>
    </div>
  );
};

export default TextField1;
