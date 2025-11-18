import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./OrbitalSim.module.css";
import Table from "@rubin-epo/epo-react-lib/SimpleTable";
import Button from "@rubin-epo/epo-react-lib/Button";

// TODO: Revisit file organization to improve this import
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
          [styles.activeDetails]: active,
        })}
      >
        {/* <Table className={styles.detailsTable} rows={rows} /> */}
        <Table rows={rows} />
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
