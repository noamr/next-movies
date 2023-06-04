

import clsx from 'clsx';
import {CurrentLinkContext, PrevLinkContext} from 'contexts/current-link-context';
import { useContext } from 'react';
const CLASS_NAME = 'poster-title';

function PosterTitle({
  theme,
  className,
  children,
  id,
  ...rest
}) {
  const currentLinkID = useContext(CurrentLinkContext);
  const prevLinkID = useContext(PrevLinkContext);
  return <>
    <h2
      className={clsx(CLASS_NAME, className)}
      style={{viewTransitionName: (currentLinkID === id || prevLinkID === id) ? `title-${id}` : 'none'}}
      {...rest}>
      {children}
    </h2>
    <style jsx>{`
      .${CLASS_NAME} {
        text-align: center;
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightRegular};
        color: var(--palette-text-secondary);
        margin-bottom: 1rem;
        line-height: 1.4;
      }
    `}</style>
  </>
};

export default PosterTitle;
