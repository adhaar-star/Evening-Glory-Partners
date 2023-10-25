import { IphoneWithNotch } from ".";

export default {
  title: "Components/IphoneWithNotch",
  component: IphoneWithNotch,
  argTypes: {
    leftArea: {
      options: [
        "recording",
        "normal",
        "on-call-hotspot",
        "with-back-to-app",
        "location-screen-mirrioring",
        "share-play",
      ],
      control: { type: "select" },
    },
    notchSize: {
      options: ["standard-iphone-12-and-before", "narrow-iphone-13-series"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    locationOn: false,
    backToApp: "Search",
    time: "9:41",
    withNetwork: true,
    leftArea: "recording",
    notchSize: "standard-iphone-12-and-before",
    className: {},
    privacyIndicatorPrivacyIndicatorClassName: {},
  },
};
