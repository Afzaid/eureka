import { FunctionComponent } from "react";

export type NewsType = {
  title?: string;
  label2?: string;
};

const News: FunctionComponent<NewsType> = ({ title, label2 }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[37px] text-left text-xs text-dark-quiz font-body-m">
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px]">
        <div className="w-[165.7px] relative leading-[18px] inline-block">
          {title}
        </div>
        <div className="flex flex-row items-center justify-start gap-[1px] text-2xs text-lightsteelblue-100">
          <div className="relative leading-[18px]">News Media</div>
          <div className="h-[17px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
            <div className="w-px h-[16.9px] relative box-border border-r-[1px] border-solid border-aliceblue" />
          </div>
          <div className="relative leading-[18px]">{label2}</div>
        </div>
      </div>
      <img
        className="self-stretch w-[56.5px] relative max-h-full min-h-[64px]"
        loading="lazy"
        alt=""
        src="/image3.svg"
      />
    </div>
  );
};

export default News;
