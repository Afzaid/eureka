import { FunctionComponent } from "react";

export type ProfileFrameType = {
  /** Action props */
  onInboxFrameContainer1Click?: () => void;
};

const ProfileFrame: FunctionComponent<ProfileFrameType> = ({
  onInboxFrameContainer1Click,
}) => {
  return (
    <div className="flex flex-row items-start justify-start py-0 px-8 text-left text-base text-gray-400 font-body-m">
      <div className="flex flex-col items-start justify-start gap-[40px_0px]">
        <div className="flex flex-row items-start justify-start gap-[0px_16px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/user.svg"
          />
          <div className="relative leading-[24px]">Profile</div>
        </div>
        <div
          className="flex flex-row items-start justify-start gap-[0px_16px] cursor-pointer"
          onClick={onInboxFrameContainer1Click}
        >
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/arrow-1.svg"
          />
          <div className="relative leading-[24px]">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFrame;
