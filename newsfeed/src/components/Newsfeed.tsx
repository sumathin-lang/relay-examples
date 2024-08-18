import * as React from "react";
import Story from "./Story";

import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    topStories {
      id
      ...StoryFragment
    }
  }
`;

export default function Newsfeed({}) {
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  const stories = data.topStories;
  // As before:
  return (
    <div className="newsfeed">
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
}

// export default function Newsfeed() {
//   const story = {
//     title: "Placeholder Story",
//     summary: "Placeholder data, to be replaced with data fetched via GraphQL",
//     poster: {
//       name: "Placeholder Person",
//       profilePicture: {
//         url: "/assets/cat_avatar.png",
//       },
//     },
//     thumbnail: {
//       url: "/assets/placeholder.jpeg",
//     },
//   };

//   return (
//     <div className="newsfeed">
//       <Story story={story} />
//     </div>
//   );
// }
