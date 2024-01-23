import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import { VolunteeringCard } from "./Card";

export function PastCarousel({ pastEvents }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const empty = pastEvents.length === 0;
  const slides = pastEvents.map((item) => (
    <Carousel.Slide key={item.title}>
      <VolunteeringCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      {!empty && (
        <Carousel
          slideSize={{ sm: "33%" }}
          slideGap={{ base: rem(2), sm: "xl" }}
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          loop
        >
          {slides}
        </Carousel>
      )}
    </>
  );
}
