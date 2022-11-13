import { gql } from "@apollo/client";
import { DocumentNode } from "graphql";

const GET_UPLOAD_SIGNED_URL: DocumentNode = gql`
  query getUploadSignedUrl($ext: String!, $isPrivate: Boolean) {
    getUploadSignedUrl(ext: $ext, isPrivate: $isPrivate) {
      message
      result {
        name
        url
      }
      statusCode
    }
  }
`;

export default GET_UPLOAD_SIGNED_URL;
