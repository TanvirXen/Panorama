import React from "react";
import Typography from "@mui/material/Typography";
export default function Layout() {
  return (
    <div className="PortalLayout">
      <div className="Playout">
        <div className="lgSec">
          <div className="lgo">
            <img src="/lgborder.svg" alt="" srcset="" />
          </div>
          <div className="liness"></div>
        </div>
        <div className="services">
          <div className="serviceText">
            <Typography variant="smallB" color="b800">
              Services
            </Typography>
          </div>
          <div className="serve">
            <div className="ser">
              <img src="/assesment.svg" />
              <div>
                <Typography variant="small" color="b800">
                  Assesment
                </Typography>
              </div>
            </div>
            <div className="liness"></div>
          </div>
          <div className="servess">
            <div className="ser">
              <img src="/knowledge.svg" />
              <div>
                <Typography variant="small" color="b800">
                  Knowledge
                </Typography>
              </div>
            </div>
            <div className="ser">
              <img src="/activity.svg" />
              <div>
                <Typography variant="small" color="b800">
                  Activity
                </Typography>
              </div>
            </div>
            <div className="ser">
              <img src="/plans.svg" />
              <div>
                <Typography variant="small" color="b800">
                  Plans And Billing
                </Typography>
              </div>
            </div>
            <div className="ser">
              <img src="/ques.svg" />
              <div>
                <Typography variant="small" color="b800">
                  Support
                </Typography>
              </div>
            </div>
          </div>
          <div className="usa">
          <div className="userPro">
        <div className="usp">
        <img src="/john_doe.png" className="userMargin" />
            <div style={{paddingLeft:'12px'}}>
              <div>
                <Typography variant="small" color="neutral.b800">
                  John Doe
                </Typography>
              </div>
              <div>
                <Typography variant="small" color="neutral.b200">
                  Panorama
                </Typography>
              </div>
            </div>
        </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}
