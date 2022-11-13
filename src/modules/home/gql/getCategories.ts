import { DocumentNode, gql } from "@apollo/client";

const GET_CATEGORIES: DocumentNode = gql`
  query getCategories(
    $filter: CategoryFilterInput
    $pagination: PaginationInput
  ) {
    getCategories(filter: $filter, pagination: $pagination) {
      message
      result {
        categories {
          attributeSetUid
          bnName
          createdAt
          createdBy {
            name
            uid
            userType
          }
          enName
          image {
            name
            signedUrl
            url
          }
          inActiveNote
          isActive
          parent {
            bnName
            enName
            uid
          }
          parents {
            bnName
            enName
            uid
          }
          uid
          updatedAt
          updatedBy {
            name
            uid
            userType
          }
        }
        count
      }
      statusCode
    }
  }
`;

export default GET_CATEGORIES;
