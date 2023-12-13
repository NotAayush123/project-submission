import {
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  Container,
} from "@mantine/core";
import classes from "./Reviews.module.css";
import { useEffect, useState } from "react";
import RatingStars from "./RatingStars";

export function Reviews() {
  const [animate, setAnimate] = useState();
  useEffect(() => {
    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const missionSection = document.getElementById("reviews");

    const handleScroll = () => {
      if (isElementInViewport(missionSection)) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const DUMMY_COMMENTS = [
    {
      avatarImg:
        "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: "Alice Johnson",
      rating: "5",
      comment:
        "<p>I found this website to be an incredibly helpful platform for volunteering. It not only connected me with wonderful volunteer opportunities but also allowed me to be a part of a great community. The website is well-built and easy to navigate. I can't recommend it enough!</p>",
    },
    {
      avatarImg:
        "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      name: "John Smith",
      rating: "4.5",
      comment:
        "<p>This website has been a great resource for my volunteering journey. The supportive community and the well-structured platform make it easy to find and engage in meaningful volunteer work. I'm very impressed!</p>",
    },
    {
      avatarImg:
        "https://images.unsplash.com/photo-1610069302033-6fee1f5791d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Ella Davis",
      rating: "4.5",
      comment:
        "<p>This website is a gem for volunteers. I've had an incredible experience being a part of the community and participating in various volunteer projects. The site's user-friendliness and supportive environment make it stand out.</p>",
    },
    {
      avatarImg:
        "https://images.unsplash.com/photo-1608549036505-ead5b1de5417?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "David Brown",
      rating: "3.5",
      comment:
        "<p>This website is a good place to start volunteering, but I believe it can improve in terms of the community's engagement. The website's design and functionality are decent, but there's room for enhancement.</p>",
    },
  ];

  return (
    <div id="reviews">
      <h3 className={`${classes.title} ${animate ? `${classes.animate}` : ""}`}>
        Reviews
      </h3>
      <Container size="lg">
        {DUMMY_COMMENTS.map((comment) => {
          return (
            <Paper
              withBorder
              radius="md"
              className={`${classes.comment} ${
                animate ? `${classes.commentAnimate}` : ""
              }`}
            >
              <Group>
                <Avatar
                  src={`${comment.avatarImg}`}
                  alt="Person Name"
                  radius="xl"
                />
                <div>
                  <Text fz="sm">
                    {comment.name}{" "}
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Eo_circle_orange_checkmark.svg/2048px-Eo_circle_orange_checkmark.svg.png"
                      alt=""
                      style={{
                        width: "18px",
                        height: "18px",
                        marginBottom: "3px",
                      }}
                      draggable="false"
                    />
                  </Text>

                  <RatingStars rating={comment.rating} />
                </div>
              </Group>
              <TypographyStylesProvider className={classes.body}>
                <div
                  className={classes.content}
                  dangerouslySetInnerHTML={{
                    __html: `${comment.comment}`,
                  }}
                />
              </TypographyStylesProvider>
            </Paper>
          );
        })}
      </Container>
    </div>
  );
}
