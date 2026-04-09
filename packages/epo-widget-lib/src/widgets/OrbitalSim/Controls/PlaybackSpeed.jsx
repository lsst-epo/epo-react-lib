/* eslint-disable react/no-danger */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { formatValue } from "../orbitalUtilities";
import Slider from '@rubin-epo/epo-react-lib/HorizontalSlider';
import * as Styled from "./styles";

function PlaybackSpeed({
  dayPerVizSec,
  elapsedTime,
  sliderOnChangeCallback,
  speeds,
}) {
  const { t } = useTranslation();

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

  return (
    <>
      <Styled.PlaybackContainer>
        <Styled.PlaybackSpeedSliderHeader>
          <Styled.PlaybackSpeedTitle>
            {t('orbital_sim.playback.time_step')}
          </Styled.PlaybackSpeedTitle>
          <Styled.PlaybackSpeedSliderLabel>
            {t('orbital_sim.playback.sec_with_count', {
              count: Math.round(dayPerVizSec)
            })}
          </Styled.PlaybackSpeedSliderLabel>
        </Styled.PlaybackSpeedSliderHeader>
        <Styled.PlaybackSpeedSliderLabelTop>
          {t('orbital_sim.playback.time_equivalence', {
            firstTime: t('orbit_viewer.playback.interval.secWithCount', {
              count: 1,
            }),
            secondTime: t('orbit_viewer.playback.interval.yearWithCount', {
              count: 1,
            }),
            context: 'verbose',
          })}
        </Styled.PlaybackSpeedSliderLabelTop>
        <Styled.PlaybackSpeedSliderLabelBottom>
          {t('orbital_sim.playback.normal_time')}
        </Styled.PlaybackSpeedSliderLabelBottom>
        <Styled.PlaybackSpeedSliderWrapper>
          <Slider
            isVertical={true}
            min={speeds.min}
            invert={true}
            max={speeds.max}
            step={speeds.step}
            value={dayPerVizSec}
            onChangeCallback={sliderOnChangeCallback}
          />
        </Styled.PlaybackSpeedSliderWrapper>
        <Styled.ElapsedTimeContainer>
          <Styled.ElapsedTimeTitle>{t('elapsed_time.title')}</Styled.ElapsedTimeTitle>
          <Styled.ElapsedTimeInner>
            <Styled.ElapsedTimeBlock>
              <Styled.ElapsedVal>{formatElapsed('years', 'number')}</Styled.ElapsedVal>
              <div>
                {formatElapsed('years', 'string')}
              </div>
            </Styled.ElapsedTimeBlock>
            <Styled.ElapsedTimeDivider></Styled.ElapsedTimeDivider>
            <Styled.ElapsedTimeBlock>
              <Styled.ElapsedVal>{formatElapsed('days', 'number')}</Styled.ElapsedVal>
              <Styled.ElapsedLabel>
                {formatElapsed('days', 'string')}
              </Styled.ElapsedLabel>
            </Styled.ElapsedTimeBlock>
          </Styled.ElapsedTimeInner>
        </Styled.ElapsedTimeContainer>
      </Styled.PlaybackContainer>
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
