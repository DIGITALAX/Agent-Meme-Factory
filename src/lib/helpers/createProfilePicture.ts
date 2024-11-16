import { ImageSet, NftImage } from "@lens-protocol/react-web";
import { INFURA_GATEWAY, IPFS_REGEX } from "../constants";

const createProfilePicture = (
  publication: ImageSet | NftImage | null | undefined
): string => {
  let profileImage: string | undefined = undefined;

  if (!publication) {
    return "";
  }

  if (publication?.__typename === "ImageSet") {
    if (publication?.raw?.uri) {
      if (
        publication?.raw?.uri?.includes("ipfs://") &&
        IPFS_REGEX.test(publication?.raw?.uri?.split("ipfs://")?.[1])
      ) {
        profileImage = `${INFURA_GATEWAY}/ipfs/${
          publication?.raw?.uri?.split("ipfs://")[1]
        }`;
      } else if (publication?.raw?.uri?.includes("ar://")) {
        profileImage = `https://arweave.net/${publication?.raw?.uri
          ?.split("ar://")?.[1]
          ?.replace(/"/g, "")
          ?.trim()}`;
      } else {
        profileImage = publication?.raw?.uri;
      }
    } else if (publication?.optimized?.uri) {
      if (
        publication?.optimized?.uri?.includes("ipfs://") &&
        IPFS_REGEX.test(publication?.optimized?.uri?.split("ipfs://")?.[1])
      ) {
        profileImage = `${INFURA_GATEWAY}/ipfs/${
          publication?.optimized?.uri?.split("ipfs://")[1]
        }`;
      } else if (publication?.raw?.uri?.includes("ar://")) {
        profileImage = `https://arweave.net/${publication?.optimized?.uri
          ?.split("ar://")?.[1]
          ?.replace(/"/g, "")
          ?.trim()}`;
      } else {
        profileImage = publication?.optimized?.uri;
      }
    }
  } else {
    if ((publication as NftImage)?.image?.raw?.uri) {
      if (
        (publication as NftImage)?.image?.raw?.uri?.includes("ipfs://") &&
        IPFS_REGEX.test(
          (publication as NftImage)?.image?.raw?.uri?.split("ipfs://")?.[1]
        )
      ) {
        profileImage = `${INFURA_GATEWAY}/ipfs/${
          (publication as NftImage)?.image?.raw?.uri?.split("ipfs://")[1]
        }`;
      } else if (
        (publication as NftImage)?.image?.raw?.uri?.includes("ar://")
      ) {
        profileImage = `https://arweave.net/${(
          publication as NftImage
        )?.image?.raw?.uri
          ?.split("ar://")?.[1]
          ?.replace(/"/g, "")
          ?.trim()}`;
      } else {
        profileImage = (publication as NftImage)?.image?.raw?.uri;
      }
    } else if ((publication as NftImage)?.image?.optimized?.uri) {
      if (
        (publication as NftImage)?.image?.optimized?.uri?.includes("ipfs://") &&
        IPFS_REGEX.test(
          (publication as NftImage)?.image?.optimized?.uri?.split(
            "ipfs://"
          )?.[1] || ""
        )
      ) {
        profileImage = `${INFURA_GATEWAY}/ipfs/${
          (publication as NftImage)?.image?.optimized?.uri?.split("ipfs://")[1]
        }`;
      } else if (
        (publication as NftImage)?.image?.optimized?.uri?.includes("ar://")
      ) {
        profileImage = `https://arweave.net/${(
          publication as NftImage
        )?.image?.optimized?.uri
          ?.split("ar://")?.[1]
          ?.replace(/"/g, "")
          ?.trim()}`;
      } else {
        profileImage = (publication as NftImage)?.image?.optimized?.uri;
      }
    }
  }

  return profileImage || "";
};

export default createProfilePicture;
