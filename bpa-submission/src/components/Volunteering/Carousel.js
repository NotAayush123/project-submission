import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import { VolunteeringCard } from "./Card";
import "@mantine/carousel/styles.css";

export function CardsCarousel({ date }) {
  const initialDate = new Date(date);
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
      name: "Volunteer At DOJ Community Giveaway",
      organization: "Charity Crossing Inc",
      image:
        "data:image/jpeg;base64,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",
      maxSpots: 7,
      address:
        "Adam's Four Shopping Center, 800 West 4th street, Wilmington, DE 19802",
      time: "10:30 AM - 2:00 PM",
      day: nextFridayFormatted,
      usersTask:
        "You will help with setup, distribute household items, toys, pet items, holiday items, and dry/canned food, and help with the cleanup.",
      contactPhone: "(502)-802-2290",
      contactEmail: "chandradontaraju@gmail.com",
      volunteers: [
        {
          name: "Karl Barnett",
          profilePicture: "",
        },
        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
        {
          name: "Jeff Sanders",
          profilePicture: "",
        },
        {
          name: "Joe Bern",
          profilePicture:
            "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
      ],
    },
    {
      name: "Volunteer at Phoenixville - PACS, Community Giveaway",
      organization: "Charity Crossing",
      image:
        "data:image/jpeg;base64,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",
      maxSpots: 7,
      address: "101 Buchanan Street, Pheonixville, PA 19460, USA",
      time: "9:15 AM - 12:30 AM",
      day: nextSaturdayFormatted,
      usersTask:
        "You will help with the setup and distribution of household items, toys, pet items, holiday items, canned food, and more.",
      contactPhone: "(215)-200-9191",
      contactEmail: "sumitha.ramasamy@gmail.com",
      volunteers: [
        {
          name: "Theodore Ulysses",
          profilePicture:
            "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
        },
        {
          name: "Jeff Sanders",
          profilePicture: "",
        },
      ],
    },

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
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <VolunteeringCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ sm: "33%" }}
      slideGap={{ base: rem(2), sm: "xl" }}
      align="start"
      slidesToScroll={mobile ? 1 : 3}
      loop
    >
      {slides}
    </Carousel>
  );
}
