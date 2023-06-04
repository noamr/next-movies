

import Link from 'next/link';
import Profile from './Profile';
import LINKS from 'utils/constants/links';
import { W185H278 } from 'config/image-sizes';
import QUERY_PARAMS from 'utils/constants/query-params';
import { useContext } from 'react';
import {CurrentLinkContext, PrevLinkContext} from 'contexts/current-link-context';
function PersonLink({
  person,
  baseUrl
}) {
  const currentLinkID = useContext(CurrentLinkContext);
  const prevLinkID = useContext(PrevLinkContext);
  return <>
    <Link
      href={{
        pathname: LINKS.PERSON.HREF,
        query: {
          [QUERY_PARAMS.ID]: person.id,
          [QUERY_PARAMS.PAGE]: 1
        }
      }}>
      <a style={{viewTransitionName: (currentLinkID == person.id || prevLinkID == person.id) ? `person-${person.id}` : "none"}}>
        <Profile src={`${baseUrl}w${W185H278.WIDTH}${person.profile_path}`} alt={person.name} />
      </a>
    </Link>
    <style jsx>{`
      a {
        display: block;
      }
    `}</style>
  </>;
}

export default PersonLink;
