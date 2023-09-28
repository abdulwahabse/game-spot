import { useState, useEffect } from "react";
import { HStack, Icon } from "@chakra-ui/react";
import { BsStarFill, BsStar } from "react-icons/bs";

interface Props {
  rating: number;
}

export default function Rating({ rating }: Props) {
  const [ratingIcons, setRatingIcons] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const icons = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        icons.push(<Icon key={i} as={BsStarFill} color="yellow.300" />);
      } else {
        icons.push(<Icon key={i} as={BsStar} color="yellow.300" />);
      }
    }
    setRatingIcons(icons);
  }, [rating]);

  return <HStack>{ratingIcons}</HStack>;
}
