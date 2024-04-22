import { FunctionComponent, useCallback } from "react";
import Logo from "./Logo";
import TextField1 from "./TextField1";
import { useNavigate } from "react-router-dom";

const LogoFrame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRegistrationMessageFrameClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  return (
    <div className="h-[453px] w-[752.1px] rounded-xl bg-gray-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-center py-[27px] px-10 box-border relative gap-[70px_91px] max-w-full text-left text-xs text-grey-700 font-body-m mq450:h-auto mq450:min-h-[453]">
      <Logo frameDivTop="126px" propDisplay="inline-block" />
      <div className="h-[287px] w-[286px] !m-[0] absolute top-[27px] left-[424.1px] flex flex-col items-center justify-center py-5 px-2.5 box-border gap-[10px_0px]">
        <TextField1 label="Bank" leftPlaceholder="PayPall" />
        <TextField1 label="Bank Account*" leftPlaceholder="1234567890 " />
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px_0px]">
          <div className="flex flex-row items-center justify-start gap-[0px_4px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/plus.svg"
            />
            <div className="relative leading-[140%]">Mailing Address</div>
          </div>
          <div className="self-stretch flex-1 rounded overflow-hidden flex flex-row items-start justify-start py-3 pr-2.5 pl-2 gap-[0px_197px] text-sm text-dimgray border-[1px] border-solid border-grey-500">
            <div className="flex-1 flex flex-row items-start justify-start gap-[0px_4px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/plus.svg"
              />
              <div className="relative leading-[140%]">
                <p className="m-0">{`1234, street, `}</p>
                <p className="m-0">Nairobi, Kenya</p>
              </div>
              <div className="h-[17px] w-0 relative box-border hidden border-r-[1px] border-solid border-black" />
            </div>
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
      </div>
      <button
        className="cursor-pointer [border:none] py-[11px] pr-[65px] pl-16 bg-primary-600 !m-[0] absolute top-[384px] left-[243.1px] rounded-4xs overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue-100"
        onClick={onRegistrationMessageFrameClick}
      >
        <div className="relative text-sm leading-[140%] font-extrabold font-body-m text-gray-0 text-left">
          Finish Registration
        </div>
      </button>
    </div>
  );
};

export default LogoFrame;
