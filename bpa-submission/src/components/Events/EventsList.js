import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import { VolunteeringCard } from "../Volunteering/Card";
import "@mantine/carousel/styles.css";

export function EventsList() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const initialDate = new Date(user.date);
  function getNextDayFormatted(initialDate, dayOfWeek) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDayOfWeek = initialDate.getDay();
    let difference = dayOfWeek - currentDayOfWeek;

    if (difference <= 0) {
      difference += 7;
    }

    const nextDate = new Date(
      initialDate.getTime() + difference * 24 * 60 * 60 * 1000
    );
    const formattedDate = `${daysOfWeek[dayOfWeek]}, ${nextDate.toLocaleString(
      "en-US",
      { month: "long", day: "numeric", year: "numeric" }
    )}`;
    return formattedDate;
  }
  const nextFridayFormatted = getNextDayFormatted(initialDate, 5);
  const nextSaturdayFormatted = getNextDayFormatted(initialDate, 6);
  const nextSundayFormatted = getNextDayFormatted(initialDate, 0);

  console.log("Next Friday:", nextFridayFormatted);
  console.log("Next Saturday:", nextSaturdayFormatted);
  console.log("Next Sunday:", nextSundayFormatted);

  const data = [
    {
      name: "Volunteer at Interfaith Community Housing Giveaway",
      organization: "Charity Crossing",
      image:
        "https://www.shutterstock.com/image-photo/we-successful-team-social-workers-600nw-1692488659.jpg",
      maxSpots: 4,
      address: "613 North Washington Street Wilmington, DE 19801",
      time: "9:00 AM - 12:00 PM",
      day: nextSundayFormatted,
      usersTask:
        "You will help with the setup, the distribution of household items, pet items, holiday items, and dry/canned food, and help with the cleanup.",
      contactPhone: "(302)-438-3059",
      contactEmail: "baranidharan@yahoo.com",
      volunteers: [
        {
          name: "Joe Bern",
          profilePicture:
            "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
        {
          name: "Theodore Ulysses",
          profilePicture:
            "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
        },
        {
          name: "Jake Conner",
          profilePicture: "",
        },
      ],
    },

    {
      name: "Volunteer at Volunteer Delaware Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://www.communityactionprovo.org/wp-content/uploads/2021/06/charity-volunteer-work-1080x675-1.jpg",
      maxSpots: 6,
      address:
        "Austin D Baltz Elementary School, 1500 Spruce Ave, Wilmington, DE 19805, USA",
      time: "9:00 AM - 1:30 PM",
      day: nextSundayFormatted,
      usersTask:
        "Volunteers will come to the event location. You will help with the setup, the distribution of household items, pet items, holiday items, and dry/canned food, and help with the cleanup.",
      contactPhone: "(302)-465-3719",
      contactEmail: "vameen07@gmail.com",
      volunteers: [
        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
        {
          name: "Kent Cleveland",
          profilePicture:
            "https://st.depositphotos.com/1269204/1219/i/380/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
        },

        {
          name: "Karl Barnett",
          profilePicture: "",
        },
      ],
    },

    {
      name: "Volunteer at Glasgow Park Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://www.uwslondon.ac.uk/wp-content/uploads/2021/08/AdobeStock_379372226-1024x683.jpeg",
      maxSpots: 20,
      address:
        "The Barn at the Glasgow Park, 2275 Pulaski Hwy, Newark, DE 19702",
      time: "7:45 AM - 1:00 PM",
      day: nextSaturdayFormatted,
      usersTask:
        "You will help with the setup, the distribution of household items, pet items, holiday items, and dry/canned food, and help with the cleanup.",
      contactPhone: "(234)-222-2121",
      contactEmail: "kpkaypeer@yahoo.com",
      volunteers: [
        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
        {
          name: "Jeff Sanders",
          profilePicture: "",
        },
      ],
    },
  ];
  const data2 = [
    {
      name: "Volunteer at Trinity AME Church Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://www.gettaxhub.com/wp-content/uploads/2020/08/volunteer-opportunities.jpg",
      maxSpots: 5,
      address: "Trinity AME Church, Lockwood Street, Middletown, DE, USA",
      time: "12:00 PM - 3:00 PM",
      day: nextSundayFormatted,
      usersTask:
        "You will help with the setup, the distribution of household items, pet items, holiday items, and dry/canned food, and help with the cleanup.",
      contactPhone: "(937)-245-1921",
      contactEmail: "csivamurthy@yahoo.com",
      volunteers: [
        {
          name: "Jake Conner",
          profilePicture: "",
        },
        {
          name: "Jane Smith",
          profilePicture:
            "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705363200&semt=sph",
        },
        {
          name: "George Madison",
          profilePicture: "",
        },
      ],
    },

    {
      name: "Volunteer at Herlithy, Wilmington Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://cdn.create.vista.com/api/media/small/534517466/stock-photo-humanitarian-help-male-arab-volunteer-holding-carton-box-with-products-working-with-colleagues-at-charity",
      maxSpots: 5,
      address: "320 E 5th St Wilmington, DE 19801",
      time: "12:30 AM - 3:30 PM",
      day: nextSundayFormatted,
      usersTask:
        "You will help with the setup, the distribution of household items, pet items, holiday items, and dry/canned food, and help with the cleanup.",
      contactPhone: "(302)-415-4700",
      contactEmail: "arund19@yahoo.com",
      volunteers: [
        {
          name: "George Madison",
          profilePicture: "",
        },
        {
          name: "Max Cornell",
          profilePicture: "",
        },
      ],
    },
    {
      name: "Volunteer at PCI Front St, Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://volpro.net/wp-content/uploads/2022/09/volunteers-scaled.jpg",
      maxSpots: 3,
      address: "510-500 Front Street, Wilmington, DE 19801, USA",
      time: "1:00 PM - 4:00 PM",
      day: nextSundayFormatted,
      usersTask:
        "You will help with the setup, the distribution of household items, pet items, holiday items, and dry/canned food, and help with the cleanup.",
      contactPhone: "(267)-788-5208",
      contactEmail: "prranjit@yahoo.com",
      volunteers: [
        {
          name: "Joe Bern",
          profilePicture:
            "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
        {
          name: "Jake Conner",
          profilePicture: "",
        },
      ],
    },
  ];
  const data3 = [
    {
      name: "Volunteer At LJBC Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://digitaldealer.com/wp-content/uploads/2019/08/Connect-with-Your-Community.jpeg",
      maxSpots: 6,
      address: "304 Aiken Ave, Perryville, MD 21903, USA",
      time: "11:00 AM - 3:30 PM",
      day: nextSaturdayFormatted,
      usersTask:
        "You will help with the setup and the distribution of household items, toys, dry/canned food, pet items, holiday items, and more",
      contactPhone: "(302)-743-3172",
      contactEmail: "ininder_jaswal@yahoo.com",
      volunteers: [
        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
        {
          name: "Kent Cleveland",
          profilePicture:
            "https://st.depositphotos.com/1269204/1219/i/380/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
        },
        {
          name: "Karl Barnett",
          profilePicture: "",
        },
      ],
    },
    {
      name: "Volunteer at Smyrna Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2Fmarket-charity-involvement.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.3699&fp-y=0.3778&h=415&q=88&w=622&s=114ffeb854e614cfaf0312a19be87fc9",
      maxSpots: 5,
      address: "16 East Mount Vernon St Smyrna, DE 19977 United States",
      time: "10:45 AM - 1:45 PM",
      day: nextSundayFormatted,
      usersTask:
        "You will help with the setup, the distribution of household items, pet items, holiday items, and dry/canned food, and help with the cleanup.",
      contactPhone: "(720)-487-0483",
      contactEmail: "s2023gu@gmail.com",
      volunteers: [
        {
          name: "Theodore Ulysses",
          profilePicture:
            "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
        },
        {
          name: "Joe Bern",
          profilePicture:
            "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
        {
          name: "Kent Cleveland",
          profilePicture:
            "https://st.depositphotos.com/1269204/1219/i/380/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
        },
        {
          name: "Max Cornell",
          profilePicture: "",
        },
      ],
    },
  ];
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <VolunteeringCard {...item} />
    </Carousel.Slide>
  ));
  const slides2 = data2.map((item) => (
    <Carousel.Slide key={item.title}>
      <VolunteeringCard {...item} />
    </Carousel.Slide>
  ));
  const slides3 = data3.map((item) => (
    <Carousel.Slide key={item.title}>
      <VolunteeringCard {...item} />
    </Carousel.Slide>
  ));
  return (
    <>
      <Carousel
        slideSize={{ sm: "33%" }}
        slideGap={{ base: rem(2), sm: "sm" }}
        align="start"
        slidesToScroll={mobile ? 1 : 3}
        className="mt-5"
        // controlSize={0}
      >
        {slides}
      </Carousel>
      <Carousel
        slideSize={{ sm: "33%" }}
        slideGap={{ base: rem(2), sm: "sm" }}
        align="start"
        slidesToScroll={mobile ? 1 : 3}
        className="mt-5"
      >
        {slides2}
      </Carousel>
      <Carousel
        slideSize={{ sm: "33%" }}
        slideGap={{ base: rem(2), sm: "sm" }}
        align="start"
        slidesToScroll={mobile ? 1 : 3}
        className="mt-5"
      >
        {slides3}
      </Carousel>
    </>
  );
}
