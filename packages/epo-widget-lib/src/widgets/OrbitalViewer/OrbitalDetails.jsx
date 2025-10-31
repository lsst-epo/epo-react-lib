import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import classnames from 'classnames';
import Unit from '../../charts/Unit/index.jsx';
import Table from '../../site/forms/table/index.jsx';
import { getValue, toSigFigs } from '../../../lib/utilities.js';
import {
  details,
  activeDetails,
  detailsToggle,
  detailsTable,
} from './orbital-viewer.module.scss';
import Button from '../../site/button/index.js';

function OrbitalDetails({ data, velocity, type }) {
  const { t } = useTranslation('widgets');
  const { H, a, i, e, name, Principal_desig: pd, Earth_moid: moid } =
    data || {};
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (data) setActive(true);
  }, [data]);

  function renderValueWithUnits(value, unitType, showUnit) {
    if (!value) return '';

    return (
      <>
        {getValue(unitType, value)}
        {showUnit && <Unit type={unitType} />}
      </>
    );
  }

  function getRows() {
    if (type === 'hazardous-asteroids') {
      return [
        [t('orbit_viewer.details_table.scientific_name'), name || pd || ''],
        [
          t('orbit_viewer.details_table.absolute_magnitude'),
          renderValueWithUnits(H, 'magnitude', false),
        ],
        [
          t('orbit_viewer.details_table.earth_moid'),
          renderValueWithUnits(moid, 'moid', true),
        ],
      ];
    }

    return [
      [t('orbit_viewer.details_table.scientific_name'), name || pd || ''],
      [
        t('orbit_viewer.details_table.orbit_size'),
        renderValueWithUnits(a, 'semimajor_axis', true),
      ],
      [
        t('orbit_viewer.details_table.eccentricity'),
        renderValueWithUnits(e, 'eccentricity', false),
      ],
      [
        t('orbit_viewer.details_table.inclination'),
        renderValueWithUnits(i, 'inclination', true),
      ],
      [
        t('orbit_viewer.details_table.orbital_speed'),
        renderValueWithUnits(toSigFigs(velocity, 3), 'velocity', true),
      ],
    ];
  }

  return (
    <>
      <Button
        className={detailsToggle}
        flat
        disabled={!data}
        onClick={() => setActive(!active)}
      >
        {t('orbit_viewer.details', { context: active ? 'hide' : 'show' })}
      </Button>
      <div
        className={classnames(details, {
          [activeDetails]: active,
        })}
      >
        <Table className={detailsTable} includeRowTitles rows={getRows()} />
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
