import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./OrbitalSim.module.css";
import { SimpleTable } from "@rubin-epo/epo-react-lib";
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
        {active ? "Hide Details" : "Show Details"}
      </Button>
      <div
        className={classnames(styles.details, {
          [styles["active-details"]]: active,
        })}
      >
        <SimpleTable className={styles["details-table"]} simpleTable={rows} />
      </div>
    </>
  );
}

OrbitalDetails.propTypes = {
  data: PropTypes.object,
  velocity: PropTypes.number,
  type: PropTypes.string,
};

export default OrbitalDetails;
