import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@carbon/react";
import Lottie from "react-lottie";
import animationData from "../../../public/lottieAnimate.json";
import PlanIcon from "../../reUse/PlanIcon";
import UserCardIcon from "../../reUse/UserCardIcon";
import ConsultCardIcon from "../../reUse/ConsultCardIcon";
import PlanIconLarge from "../../reUse/PlanIconLarge";
import SafetyLargeIcon from "../../reUse/SafetyLargeIcon";
export default function DashboardIndex() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="innerPortal">
      <div className="cardFullDashboard">
        <div className="txtCardFullDash">
          <div>
            <Typography variant="h4B" color="neutral.b800">
              Analyzing and Personalizing
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="neutral.b800">
              Please allow us some time as we are going through your response to
              personalize your questionnaire. Please be patient as we are taking
              some time to generate your service.
            </Typography>
          </div>
          <Button kind="primary" size="lg" onClick={() => handleSave()}>
            Explore Knowledge Centre
          </Button>
        </div>
        <div className="lty">
          <Lottie options={defaultOptions} height={200} width={400} />
        </div>
      </div>
      <div className="quarterArea">
        <div className="cardQuarterDashboard">
          <div className="planCard">
            <div className="headerPlan">
              <PlanIcon />
              <Typography variant="small" color="neutral.b800">
                Plans
              </Typography>
            </div>
            <div className="lineHeader"></div>
            <div className="contentCard">
              <PlanIconLarge />
              <div>
                <Typography variant="small" color="neutral.b200">
                  Pick a plan that suits your needs and take advantage of the
                  excellent service we provide.
                </Typography>
              </div>
            </div>
            <Button
              kind="primary"
              size="lg"
              className="btnss"
              disabled={true}
              onClick={() => handleNext()}
              fullWidth
            >
              Upgrade
            </Button>
          </div>
        </div>
        <div className="cardQuarterDashboard">
          <div className="userCard">
            <div className="headerPlan">
              <UserCardIcon />
              <Typography variant="small" color="neutral.b800">
                Users
              </Typography>
            </div>
            <div className="lineHeader"></div>
          </div>
        </div>
        <div className="cardQuarterDashboard">
          <div className="consultCard">
            <div className="headerPlan">
              <ConsultCardIcon />
              <Typography variant="small" color="neutral.b800">
                Consultation
              </Typography>
            </div>
            <div className="lineHeader"></div>
            <div className="contentCard">
              <SafetyLargeIcon />
              <div>
                <Typography variant="small" color="neutral.b200">
                  Pick a plan that suits your needs and take advantage of the
                  excellent service we provide.
                </Typography>
              </div>
            </div>
            <Button
              kind="primary"
              size="lg"
              className="btnss"
              disabled={true}
              onClick={() => handleNext()}
              fullWidth
            >
              Upgrade
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
