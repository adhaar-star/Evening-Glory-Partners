/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NetworkWifiFull1 } from "../../icons/NetworkWifiFull1";
import { BatteryFull } from "../BatteryFull";
import { PrivacyIndicator } from "../PrivacyIndicator";
import { SimSingleSim } from "../SimSingleSim";
import "./style.css";

export const IphoneWithNotch = ({
  locationOn = false,
  backToApp = "Search",
  time = "9:41",
  withNetwork = true,
  leftArea,
  notchSize,
  className,
  privacyIndicatorPrivacyIndicatorClassName,
}) => {
  return (
    <div className={`iphone-with-notch ${className}`}>
      <div className="div-2">
        {["location-screen-mirrioring", "normal", "on-call-hotspot", "recording", "share-play"].includes(leftArea) && (
          <div className={`time ${leftArea} ${notchSize}`}>
            <div className="element">{time}</div>
          </div>
        )}

        {leftArea === "with-back-to-app" && (
          <>
            <img className="back-arrow" alt="Back arrow" src="/img/back-arrow.svg" />
            <div className={`search notch-size-${notchSize}`}>{backToApp}</div>
            <div className={`element-wrapper notch-size-0-${notchSize}`}>
              <div className="text-wrapper">{time}</div>
            </div>
          </>
        )}
      </div>
      <div className={`notch-area notch-size-1-${notchSize}`} />
      <div className="div-2">
        <div className={`status-area notch-size-2-${notchSize}`}>
          <div className="auto-layout">
            <SimSingleSim />
            {withNetwork && <NetworkWifiFull1 className="network-wifi-full" />}

            <BatteryFull className="battery-full-uncharged" />
          </div>
        </div>
        <PrivacyIndicator className={privacyIndicatorPrivacyIndicatorClassName} />
      </div>
    </div>
  );
};

IphoneWithNotch.propTypes = {
  locationOn: PropTypes.bool,
  backToApp: PropTypes.string,
  time: PropTypes.string,
  withNetwork: PropTypes.bool,
  leftArea: PropTypes.oneOf([
    "recording",
    "normal",
    "on-call-hotspot",
    "with-back-to-app",
    "location-screen-mirrioring",
    "share-play",
  ]),
  notchSize: PropTypes.oneOf(["standard-iphone-12-and-before", "narrow-iphone-13-series"]),
};
