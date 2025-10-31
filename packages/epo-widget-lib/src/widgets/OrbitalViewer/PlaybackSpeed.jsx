/* eslint-disable react/no-danger */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
// import { formatValue } from '../../../lib/utilities.js';
import {formatValue} from 'packages/epo-react-lib/src/lib/calculations.js';
import SliderVertical from '../../site/sliderVertical/index.jsx';
import {
  playbackSpeedTitle,
  playbackSpeedSliderHeader,
  playbackSpeedSlider,
  playbackSpeedSliderLabelTop,
  playbackSpeedSliderLabel,
  playbackSpeedSliderLabelBottom,
  elapsedTimeContainer,
  elapsedTimeInner,
  elapsedTimeTitle,
  elapsedTimeDivider,
  elapsedTimeBlock,
  elapsedVal,
  elapsedLabel,
} from './orbital-viewer.module.scss';

function PlaybackSpeed({
  dayPerVizSec,
  elapsedTime,
  sliderOnChangeCallback,
  speeds,
}) {
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
      <div className={playbackSpeedSliderHeader}>
        <h4 className={playbackSpeedTitle}>
          {t('orbit_viewer.playback.time_step')}
        </h4>
        <div className={playbackSpeedSliderLabel}>
          {t('orbit_viewer.playback.time_equivalence', {
            firstTime: t('orbit_viewer.playback.interval.secWithCount', {
              count: 1,
            }),
            secondTime: formattedSpeed,
          })}
        </div>
      </div>
      <div className={playbackSpeedSliderLabelTop}>
        {t('orbit_viewer.playback.time_equivalence', {
          firstTime: t('orbit_viewer.playback.interval.secWithCount', {
            count: 1,
          }),
          secondTime: t('orbit_viewer.playback.interval.yearWithCount', {
            count: 1,
          }),
          context: 'verbose',
        })}
      </div>
      <div className={playbackSpeedSliderLabelBottom}>
        {t('orbit_viewer.playback.normal_time')}
      </div>
      <SliderVertical
        className={playbackSpeedSlider}
        min={speeds.min}
        max={speeds.max}
        step={speeds.step}
        value={dayPerVizSec}
        changeCallback={sliderOnChangeCallback}
      />
      <div className={elapsedTimeContainer}>
        <div className={elapsedTimeTitle}>{t('elapsed_time.title')}</div>
        <div className={elapsedTimeInner}>
          <div className={elapsedTimeBlock}>
            <div className={elapsedVal}>{formatElapsed('years', 'number')}</div>
            <div className={elapsedLabel}>
              {formatElapsed('years', 'string')}
            </div>
          </div>
          <div className={elapsedTimeDivider}></div>
          <div className={elapsedTimeBlock}>
            <div className={elapsedVal}>{formatElapsed('days', 'number')}</div>
            <div className={elapsedLabel}>
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
