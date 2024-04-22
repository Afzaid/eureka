import { FunctionComponent, useCallback } from "react";
import Logo from "./Logo";
import TextField from "./TextField";
import { useNavigate } from "react-router-dom";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  return (
    <form className="m-0 h-[342px] w-[752.1px] rounded-xl bg-gray-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-center py-[27px] px-10 box-border relative gap-[70px_91px] max-w-full mq450:h-auto mq450:min-h-[342]">
      <Logo />
      <div className="w-[286px] !m-[0] absolute top-[27px] left-[424.1px] flex flex-col items-center justify-center py-5 px-2.5 box-border gap-[10px_0px]">
        <TextField label="Username*" leftPlaceholder="johndoe" />
        <TextField label="Password*" leftPlaceholder="******* " />
      </div>
      <div
        className="absolute !m-[0] top-[284px] left-[115.1px] text-sm [text-decoration:underline] leading-[140%] font-extralight font-body-m text-black text-left cursor-pointer"
        onClick={onDontHaveAnClick}
      >
        Don’t have an account?
      </div>
      <button
        className="cursor-pointer [border:none] py-[11px] pr-[123px] pl-[103px] bg-primary-600 !m-[0] absolute top-[273px] left-[371.1px] rounded-4xs overflow-hidden flex flex-row items-center justify-start hover:bg-cornflowerblue-100"
        onClick={onFrameButtonClick}
      >
        <div className="relative text-sm leading-[140%] font-extrabold font-body-m text-gray-0 text-left">
          Login
        </div>
      </button>
    </form>
  );
};

export default FrameComponent;
