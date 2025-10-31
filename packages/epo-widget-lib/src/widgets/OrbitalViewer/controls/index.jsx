import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Button from '../../../site/button';
import ButtonIcon from '../../../site/button/ButtonIcon';
// import NetlifyButton from "@rubin-epo/epo-react-lib/atomic/NetlifyButton";
// import ButtonIcon from "@rubin-epo/epo-react-lib/ButtonIcon";


import SkipBackward from '../../../site/icons/SkipBackward';
import SkipForward from '../../../site/icons/SkipForward';
import Pause from '../../../site/icons/Pause';
import Play from '../../../site/icons/Play';
import Replay from '../../../site/icons/Replay';

import { controls, buttonContainer, buttonLabel } from './controls.module.scss';

const OrbitViewerControls = ({
  playing,
  handleStartStop,
  handleNext,
  handlePrevious,
  handleReset,
}) => {
  const { t } = useTranslation('interface');
  const StartStopTag = playing ? Pause : Play;
  const StartStopText = playing ? t('actions.pause') : t('actions.play');

  return (
    <div className={controls} data-testid="orbit-viewer-controls">
      <div className={buttonContainer}>
        <NetlifyButton
          icon
          iconEl={
            <ButtonIcon
              srText={t('actions.skip_backward')}
              Icon={SkipBackward}
            />
          }
          onClick={handlePrevious}
        />
        <span className={buttonLabel}>{t('actions.skip_backward')}</span>
      </div>
      <div className={buttonContainer}>
        <NetlifyButton
          icon
          iconEl={
            <ButtonIcon
              srText={t('actions.play_or_pause')}
              Icon={StartStopTag}
            />
          }
          onClick={handleStartStop}
        />
        <span className={buttonLabel}>{StartStopText}</span>
      </div>
      <div className={buttonContainer}>
        <NetlifyButton
          icon
          iconEl={
            <ButtonIcon srText={t('actions.skip_forward')} Icon={SkipForward} />
          }
          onClick={handleNext}
        />
        <span className={buttonLabel}>{t('actions.skip_forward')}</span>
      </div>
      <div className={buttonContainer}>
        <NetlifyButton
          icon
          iconEl={<ButtonIcon srText={t('actions.reset')} Icon={Replay} />}
          onClick={handleReset}
        />
        <span className={buttonLabel}>{t('actions.reset')}</span>
      </div>
    </div>
  );
};

OrbitViewerControls.propTypes = {
  playing: PropTypes.bool,
  handleStartStop: PropTypes.func,
  handleNext: PropTypes.func,
  handlePrevious: PropTypes.func,
  handleReset: PropTypes.func,
};

export default OrbitViewerControls;
