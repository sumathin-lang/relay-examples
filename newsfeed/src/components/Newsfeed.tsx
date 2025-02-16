import * as React from "react";

import { graphql } from "relay-runtime";
import { useClientQuery, useLazyLoadQuery } from "react-relay";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";
import { Workflow } from "./Workflow";
import { Parent } from "./Parent";

// const NewsfeedQuery = graphql`
//   query NewsfeedQuery {
//     topStories {
//       id
//       ...StoryFragment
//     }
//   }
// `;

// const NewsfeedQuery = graphql`
//   query NewsfeedQuery {
// templates {
//   edges {
//     node {
//       name
//       id
//       type
//       # workflow {
//       #   ...WorkflowFragment
//       # }
//     }
//   }
// }

//     workflow {
//       ...WorkflowFragment
//     }
//   }
// `;

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    templates {
      edges {
        node {
          name
          id
          type
          workflow {
            id
            properties {
              displayName
            }
            name
            type
          }
        }
      }
    }
  }
`;

export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});

  const templates = data.templates.edges;
  console.log("templates", templates);
  return (
    <>
      {/* <Parent parent={data} /> */}
      <div className="newsfeed">
        {templates.map((template) => (
          <div key={template.node.id}>
            <h1>{template.node.name}</h1>
            <h2>{template.node.type}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

// export default function Newsfeed({}) {
//   const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
//   const stories = data.topStories;
//   // As before:
//   return (
//     <div className="newsfeed">
//       {stories.map((story) => (
//         <Story key={story.id} story={story} />
//       ))}
//     </div>
//   );
// }

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
