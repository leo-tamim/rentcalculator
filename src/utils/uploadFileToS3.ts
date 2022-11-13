import { KEY_CDN_URL } from "@/config/keys";
import { IGetUploadSignedUrlResponse, IImageInput } from "@/types/app/common";
import axios from "axios";

const uploadFileToS3 = async (
  gqlResponse: IGetUploadSignedUrlResponse,
  file: File
): Promise<IImageInput | undefined> => {
  try {
    const response = await axios.put(gqlResponse.result.url, file, {
      headers: { "Content-Type": file.type },
    });

    if (response.status === 200) {
      return {
        name: gqlResponse.result.name,
        url: `${KEY_CDN_URL}/${gqlResponse.result.name}`,
      };
    }
  } catch (error) {
    console.error("Error while uploading file to s3", error);
  }

  return;
};

export default uploadFileToS3;
