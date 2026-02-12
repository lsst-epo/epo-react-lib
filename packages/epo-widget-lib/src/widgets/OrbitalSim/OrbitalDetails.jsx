import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import styles from "./OrbitalSim.module.css";
import Slideout from "@rubin-epo/epo-react-lib/Slideout";
import Button from "@rubin-epo/epo-react-lib/Button";
function OrbitalDetails({ rows, velocity, type }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (rows) setActive(true);
  }, [rows]);

  return (
    <>
      <Button
        styleAs="secondary"
        className={styles["details-toggle"]}
        isInactive={rows}
        onClick={() => setActive(!active)}
      >
        Show Details
      </Button>
        <Slideout className={styles.slideout} slideFrom="left" isOpen={!active}>
          <div
            className={styles.slideoutPanel}
            style={{
              width: '50ch'
            }}
          >
              <h3>Orbital Details</h3>
               {
                rows.map(e => (
                  <div className={styles.slideoutRow}>
                    <div className={styles.slideoutCol} data-align="left">
                      <p>{e.rowTitle}</p>
                    </div>
                    <div className={styles.slideoutCol} data-align="right" dangerouslySetInnerHTML={{__html: e.rowContent}}>
                    </div>
                  </div>
                ))
               }
            <Button
              isBlock
              onClick={() => setActive(!active)}
            >
              Close
            </Button>
          </div>
        </Slideout>
    </>
  );
}

OrbitalDetails.propTypes = {
  data: PropTypes.object,
  velocity: PropTypes.number,
  type: PropTypes.string,
};

export default OrbitalDetails;
