
import clsx from 'clsx';

import Rating from 'components/Rating';
import LanguagesRuntimeRelease from './LanguagesRuntimeRelease';

const BasicsSection = ({
  className,
  voteAverage,
  spokenLanguages,
  runtime,
  releaseDate,
  id
}) => (
  <>
    <div className={clsx('basics-section', className)}>
      <Rating
        viewTransitionName={`rating-${id}`}
        withValue
        voteAverage={voteAverage} />
      <LanguagesRuntimeRelease
        spokenLanguages={spokenLanguages}
        runtime={runtime}
        releaseDate={releaseDate} />
    </div>
    <style jsx>{`
      .basics-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </>
);

export default BasicsSection;
