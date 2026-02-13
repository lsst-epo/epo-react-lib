/* eslint-disable react/no-danger */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
// import  formatValue  from "@rubin-epo/epo-react-lib/lib/calculations";
import Slider from '@rubin-epo/epo-react-lib/HorizontalSlider';
import styles from "./OrbitalSim.module.css";


function PlaybackSpeed({
  dayPerVizSec,
  elapsedTime,
  sliderOnChangeCallback,
  speeds,
}) {
  const formatValue = function(number, decimalPlaces) {
    return Number.parseFloat(Number.parseFloat(number).toFixed(decimalPlaces));
  };

  const { t } = useTranslation('widgets');

  function formatSpeed(speed) {
    const years = speed / 365;
    const justYears = Math.floor(years);
    const justDays = 365 * (years - justYears);
    let formattedYears = {};
    let formattedDays = {};

    formattedYears = {
      number: formatValue(justYears),
      string: t('elapsed_time.interval.year', { count: justYears }),
    };

    formattedDays = {
      number: formatValue(justDays),
      string: t('elapsed_time.interval.day', { count: justDays }),
    };

    if (justYears >= 1) {
      return `${formattedYears.number} ${formattedYears.string}`;
    }

    if (justDays < 1) {
      return t('orbit_viewer.playback.interval.secWithCount', { count: 1 });
    }

    return `${formattedDays.number} ${formattedDays.string}`;
  }

  function formatElapsed(type, value) {
    const isNegative = elapsedTime < 0;
    const years = Math.abs(elapsedTime) / 365.256;
    const justYears = Math.floor(years);
    const justDays = Math.floor(365.256 * (years - justYears));
    let formattedYears = {};
    let formattedDays = {};

    formattedYears = {
      number: formatValue(isNegative ? -justYears : justYears),
      string: t('elapsed_time.interval.year', { count: justYears }),
    };

    formattedDays = {
      number: formatValue(isNegative ? -justDays : justDays),
      string: t('elapsed_time.interval.day', { count: justDays }),
    };

    if (type === 'days') return formattedDays[value];
    if (type === 'years') return formattedYears[value];

    return null;
  }

  const formattedSpeed = useMemo(() => {
    return formatSpeed(dayPerVizSec);
  }, [dayPerVizSec]);

  return (
    <>
      <div className={styles["playback-speed-slider-header"]}>
        <h4 className={styles["playback-speed-title"]}>
          {t('orbital_sim.playback.time_step')}
        </h4>
        <div className={styles["playback-speed-slider-label"]}>
          {t('orbital_sim.playback.time_equivalence', {
            firstTime: t('orbit_viewer.playback.interval.secWithCount', {
              count: 1,
            }),
            secondTime: formattedSpeed,
          })}
        </div>
      </div>
      <div className={styles["playback-speed-slider-label-top"]}>
        {t('orbital_sim.playback.time_equivalence', {
          firstTime: t('orbit_viewer.playback.interval.secWithCount', {
            count: 1,
          }),
          secondTime: t('orbit_viewer.playback.interval.yearWithCount', {
            count: 1,
          }),
          context: 'verbose',
        })}
      </div>
      <div className={styles["playback-speed-slider-label-bottom"]}>
        {t('orbital_sim.playback.normal_time')}
      </div>
      <Slider
        className={styles["playback-speed-slider"]}
        isVertical={true}
        min={speeds.min}
        invert={true}
        max={speeds.max}
        step={speeds.step}
        value={dayPerVizSec}
        onChangeCallback={sliderOnChangeCallback}
      />
      <div className={styles["elapsed-time-container"]}>
        <div className={styles["elapsed-time-title"]}>{t('elapsed_time.title')}</div>
        <div className={styles["elapsed-time-inner"]}>
          <div className={styles["elapsed-time-block"]}>
            <div className={styles["elapsed-val"]}>{formatElapsed('years', 'number')}</div>
            <div className={styles["elapsed-time-label"]}>
              {formatElapsed('years', 'string')}
            </div>
          </div>
          <div className={styles["elapsed-time-divider"]}></div>
          <div className={styles["elapsed-time-block"]}>
            <div className={styles["elapsed-val"]}>{formatElapsed('days', 'number')}</div>
            <div className={styles["elapsed-label"]}>
              {formatElapsed('days', 'string')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

PlaybackSpeed.propTypes = {
  dayPerVizSec: PropTypes.number,
  elapsedTime: PropTypes.number,
  speeds: PropTypes.object,
  sliderOnChangeCallback: PropTypes.func,
};

export default PlaybackSpeed;
