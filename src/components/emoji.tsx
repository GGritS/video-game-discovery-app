import { FC } from "react";

import bullsEye from "./../assets/bulls-eye.webp";
import thumbsUp from "./../assets/thumbs-up.webp";
import meh from "./../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

type EmojiProps = {
  rating: number;
};

const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};

export const Emoji: FC<EmojiProps> = ({ rating }) => {
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} mt={1} />;
};
