import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import { VolunteeringCard } from "../Volunteering/Card";
import "@mantine/carousel/styles.css";

export function EventsList({ value, charities, days }) {
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
  const nextThursdayFormatted = getNextDayFormatted(initialDate, 4);
  const nextFridayFormatted = getNextDayFormatted(initialDate, 5);
  const nextSaturdayFormatted = getNextDayFormatted(initialDate, 6);
  const nextSundayFormatted = getNextDayFormatted(initialDate, 0);

  let data = [
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
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7987226808423!2d-75.5541213!3d39.7441719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd6bb3bcd887%3A0xfd84f8c71997b85f!2s613%20Washington%20St%2C%20Wilmington%2C%20DE%2019801!5e0!3m2!1sen!2sus!4v1709684149230!5m2!1sen!2sus",
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
      name: "Wilmington Blood Transportation",
      organization: "Delmarva Red Cross",
      image:
        "https://www.redcross.org/content/dam/redcross/volunteer/vol-blood-transportation-specialist_500x400.png.jpg.img.jpeg",
      maxSpots: 10,
      address: "100 West 10th Street, Suite 401, Wilmington, DE 19801",
      time: "3 PM - 7 PM",
      day: nextThursdayFormatted,
      usersTask:
        "Volunteers deliver blood, platelets or other blood products to hospitals.",
      contactPhone: "(302)-656-6620",
      contactEmail: "media.ncgc@redcross.org",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7201486397144!2d-75.5515650235174!3d39.74593669619228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd406608452d%3A0x4c204265c4e441fd!2sCommunity%20Service%20Building!5e0!3m2!1sen!2sus!4v1709684329874!5m2!1sen!2sus",
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
      name: "Volunteer At DOJ Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://www.usnews.com/object/image/00000181-6df1-dc48-a7c9-eff563fa0000/gettyimages-1337880968.jpg?update-time=1655407011171&size=responsive640",
      maxSpots: 7,
      address:
        "Adam's Four Shopping Center, 800 West 4th street, Wilmington, DE 19802",
      time: "10:30 AM - 2:00 PM",
      day: nextFridayFormatted,
      usersTask:
        "You will help with setup, distribute household items, toys, pet items, holiday items, and dry/canned food, and help with the cleanup.",
      contactPhone: "(502)-802-2290",
      contactEmail: "chandradontaraju@gmail.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8733763303667!2d-75.56244052351762!3d39.74249509639881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd6e81c6a219%3A0xe10c34bc9e074946!2sAdams%20Four!5e0!3m2!1sen!2sus!4v1709684494494!5m2!1sen!2sus",
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
      name: "Volunteer at Volunteer Delaware Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://www.communityactionprovo.org/wp-content/uploads/2021/06/charity-volunteer-work-1080x675-1.jpg",
      maxSpots: 6,
      address:
        "Austin D Baltz Elementary School, 1500 Spruce Ave, Wilmington, DE 19805, USA",
      time: "9:00 AM - 1:30 PM",
      day: nextSundayFormatted,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8340019310317!2d-75.6024319235176!3d39.74337949634574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fded69b185a7%3A0xab91f619e90bf8e9!2sAustin%20D%20Baltz%20Elementary%20School!5e0!3m2!1sen!2sus!4v1709684601936!5m2!1sen!2sus",
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
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1536.9219178676378!2d-75.74008230160517!3d39.608200200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c70787e222b587%3A0x1549f990ceec691e!2sGlasgow%20Regional%20Park!5e0!3m2!1sen!2sus!4v1709684875770!5m2!1sen!2sus",
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
  let data2 = [
    {
      name: "Volunteer at Trinity AME Church Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://www.gettaxhub.com/wp-content/uploads/2020/08/volunteer-opportunities.jpg",
      maxSpots: 5,
      address: "Trinity AME Church, Lockwood Street, Middletown, DE, USA",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.7065860307052!2d-75.71850792352798!3d39.45336331370816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7a07790508b87%3A0xcc26bbb561578bc3!2sTrinity%20AME%20Church!5e0!3m2!1sen!2sus!4v1709684983820!5m2!1sen!2sus",
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
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.0113412355176!2d-75.54994172351773!3d39.73939609658489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd43aecdbc97%3A0x7d8f4f5e663c6b66!2s320%20E%205th%20St%2C%20Wilmington%2C%20DE%2019801!5e0!3m2!1sen!2sus!4v1709685076429!5m2!1sen!2sus",
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
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.201441189726!2d-75.55016912351782!3d39.73512569684127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd5ce6b7e6cd%3A0xf88c3ada776216ca!2s510%20E%20Front%20St%2C%20Wilmington%2C%20DE%2019801!5e0!3m2!1sen!2sus!4v1709685220154!5m2!1sen!2sus",
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
    {
      name: "NEWARK Afternoon Greenhouse/Farm Event",
      organization: "Food Bank of Delaware",
      image:
        "https://www.fbd.org/wp-content/uploads/2021/08/IMG_5673-480x480.jpg",
      maxSpots: 12,
      address: "222 Lake Drive, Newark, DE 19702",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.6448522154606!2d-75.75785592352238!3d39.6126821041829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7a9e5960a120f%3A0xca9a09e146217e06!2sFood%20Bank%20of%20Delaware%20Inc!5e0!3m2!1sen!2sus!4v1709685358509!5m2!1sen!2sus",
      time: "1 PM - 4 PM",
      day: nextSaturdayFormatted,
      usersTask:
        "Volunteers may be asked to assist with harvesting, washing, or packaging produce, and will need to follow strict policies for safe produce handling.",
      contactPhone: "(302)-292-1305",
      contactEmail: "kbrolis@fbd.org",
      volunteers: [
        {
          name: "Theodore Ulysses",
          profilePicture:
            "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
        },
        {
          name: "Billy Conners",
          profilePicture:
            "https://t4.ftcdn.net/jpg/01/15/85/23/240_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg",
        },
        {
          name: "John Pann",
          profilePicture: "",
        },
      ],
    },

    {
      name: "NEWARK Healthy Pantry (Evening)",
      organization: "Food Bank of Delaware",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.6448522154606!2d-75.75785592352238!3d39.6126821041829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7a9e5960a120f%3A0xca9a09e146217e06!2sFood%20Bank%20of%20Delaware%20Inc!5e0!3m2!1sen!2sus!4v1709685358509!5m2!1sen!2sus",
      image:
        "https://ewscripps.brightspotcdn.com/dims4/default/f28ccb9/2147483647/strip/true/crop/1920x1080+0+180/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fdf%2Fe4%2Fb3795b524a418e424b84fb114ed0%2Fchurch-food-giveaway.jpg",
      maxSpots: 9,
      address: "222 Lake Drive, Newark, DE 19702",
      time: "4 PM - 6 PM",
      day: nextThursdayFormatted,
      usersTask:
        "Tasks will vary depending on the needs of the Food Bank which may include, but not limited to, filling carts with food and products, stocking fridges or freezers with food, sorting through dates, writing clients' information down, distributing carts to their vehicles, receiving donations, sorting through donations, and cleaning/maintaining the pantry space.",
      contactPhone: "(302)-292-1305",
      contactEmail: "Astone@fbd.org",
      volunteers: [
        {
          name: "Jane Smith",
          profilePicture:
            "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705363200&semt=sph",
        },
        {
          name: "Billy Conners",
          profilePicture:
            "https://t4.ftcdn.net/jpg/01/15/85/23/240_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg",
        },
        {
          name: "Max Cornell",
          profilePicture: "",
        },
      ],
    },

    {
      name: "MILFORD Volunteer Room (Morning)",
      organization: "Food Bank of Delaware",
      image:
        "https://www.delawareonline.com/gcdn/authoring/authoring-images/2023/11/10/PWIL/71537486007-p-01-food-bank-20231110.jpg?crop=3399,1912,x0,y177&width=1280&height=720&format=pjpg&auto=webp",
      maxSpots: 20,
      address: "102 Delaware Veterans Boulevard, Milford, DE, USA",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.4923322815325!2d-75.45186544484491!3d38.93557956021544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b89a3ad7e3fac9%3A0x928ce5c96fa00cca!2sFood%20Bank%20of%20Delaware!5e0!3m2!1sen!2sus!4v1709685532226!5m2!1sen!2sus",
      time: "9 AM - 12 PM",
      day: nextSundayFormatted,
      usersTask:
        "The Volunteer room is where we accomplish most of our volunteer-based projects. Tasks will vary depending on the needs of Food Bank of Delaware.",
      contactPhone: "(302)-424-3301",
      contactEmail: "Astone@fbd.org",
      volunteers: [
        {
          name: "Joe Bern",
          profilePicture:
            "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        },
        {
          name: "Billy Conners",
          profilePicture:
            "https://t4.ftcdn.net/jpg/01/15/85/23/240_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg",
        },
        {
          name: "Jake Conner",
          profilePicture: "",
        },
      ],
    },

    {
      name: "MILFORD Healthy Pantry (Morning)",
      organization: "Food Bank of Delaware",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Ellis_loads_food_from_the_Houston_Food_Bank_during_a_giveaway_for_people_suffering_during_the_COVID_19_pandemic.jpg",
      maxSpots: 6,
      address: "102 Delaware Veterans Boulevard, Milford, DE, USA",
      time: "8:45 AM - 12 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.4923322815325!2d-75.45186544484491!3d38.93557956021544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b89a3ad7e3fac9%3A0x928ce5c96fa00cca!2sFood%20Bank%20of%20Delaware!5e0!3m2!1sen!2sus!4v1709685532226!5m2!1sen!2sus",
      day: nextFridayFormatted,
      usersTask:
        "Tasks will vary depending on the needs of the Food Bank which may include but are not limited to, greeting neighbors to the pantry, assisting with check in, supporting throughout the shopping experience, filling carts with food and products, stocking shelves, fridges, and freezers with food, and cleaning/maintaining the pantry space.",
      contactPhone: "(302)-424-3301",
      contactEmail: "Astone@fbd.org",
      volunteers: [
        {
          name: "George Madison",
          profilePicture: "",
        },
        {
          name: "John Pann",
          profilePicture: "",
        },
        {
          name: "Jake Conner",
          profilePicture: "",
        },
      ],
    },
  ];
  let data3 = [
    {
      name: "Volunteer At LJBC Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://digitaldealer.com/wp-content/uploads/2019/08/Connect-with-Your-Community.jpeg",
      maxSpots: 6,
      address: "304 Aiken Ave, Perryville, MD 21903, USA",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.9602382514977!2d-76.07371972352423!3d39.560504107305974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7b8baf7e1853b%3A0x8374643050bc86c!2s304%20Aiken%20Ave%2C%20Perryville%2C%20MD%2021903!5e0!3m2!1sen!2sus!4v1709685682605!5m2!1sen!2sus",
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
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.3827102735963!2d-75.6096076235334!3d39.30224762271402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7713a39c8f8b7%3A0xe5cc3ad85de51f5e!2s16%20E%20Mt%20Vernon%20St%2C%20Smyrna%2C%20DE%2019977!5e0!3m2!1sen!2sus!4v1709685735483!5m2!1sen!2sus",
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
      name: "Volunteer at Phoenixville - PACS, Community Giveaway",
      organization: "Charity Crossing",
      image:
        "https://www.recordnet.com/gcdn/presto/2023/07/15/NRCD/d1047361-cad4-4d51-aa3e-091cb1a8eb80-209Backpacks2023_025a.JPG?width=700&height=467&fit=crop&format=pjpg&auto=webp",
      maxSpots: 7,
      address: "101 Buchanan Street, Pheonixville, PA 19460, USA",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.527334199879!2d-75.52456952350357!3d40.13053587300773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c691feb127fe53%3A0x4a664b1be9bb0f7d!2s101%20Buchanan%20St%2C%20Phoenixville%2C%20PA%2019460!5e0!3m2!1sen!2sus!4v1709685808130!5m2!1sen!2sus",
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
      name: "WILMINGTON Mobile Pantry at Kingswood CC",
      organization: "Food Bank of Delaware",
      image:
        "https://www.foodbankrockies.org/wp-content/uploads/2021/05/Broncos_Dist-40-1024x683.jpg",
      maxSpots: 5,
      address: "2300 Bowers St, Wilmington, DE 19802",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.694369183544!2d-75.53019942351747!3d39.74651569615741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e2cad4afb413%3A0x4d65f231b0e74720!2s2300%20Bowers%20St%2C%20Wilmington%2C%20DE%2019802!5e0!3m2!1sen!2sus!4v1709685872779!5m2!1sen!2sus",
      time: "11 AM - 1 PM",
      day: nextThursdayFormatted,
      usersTask:
        "Volunteers will assist in distributing food, loading cars, and interacting with clients.",
      contactPhone: "(302)-292-1305",
      contactEmail: "Astone@fbd.org",
      volunteers: [
        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
        {
          name: "Billy Conners",
          profilePicture:
            "https://t4.ftcdn.net/jpg/01/15/85/23/240_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg",
        },
      ],
    },

    {
      name: "NEWARK Volunteer Room (Morning)",
      organization: "Food Bank of Delaware",
      image:
        "https://www.fbd.org/wp-content/uploads/2021/08/1Q9A0929-480x480.jpg",
      maxSpots: 16,
      address: "222 Lake Drive, Newark, DE 19702",
      time: "9 AM - 12 PM",
      day: nextSundayFormatted,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.6448522154606!2d-75.75785592352238!3d39.6126821041829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7a9e5960a120f%3A0xca9a09e146217e06!2sFood%20Bank%20of%20Delaware%20Inc!5e0!3m2!1sen!2sus!4v1709685358509!5m2!1sen!2sus",
      usersTask:
        "The Volunteer room is where we accomplish most of our volunteer-based projects. Tasks will vary depending on the needs of Food Bank of Delaware.",
      contactPhone: "(302)-292-1305",
      contactEmail: "Astone@fbd.org",
      volunteers: [
        {
          name: "Bob John",
          profilePicture:
            "https://st3.depositphotos.com/12985848/18855/i/380/depositphotos_188558670-stock-photo-man.jpg",
        },
        {
          name: "Billy Conners",
          profilePicture:
            "https://t4.ftcdn.net/jpg/01/15/85/23/240_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg",
        },
        {
          name: "John Pann",
          profilePicture: "",
        },
        {
          name: "Karl Barnett",
          profilePicture: "",
        },
      ],
    },

    {
      name: "Wilmington Blood Drive",
      organization: "Delmarva Red Cross",
      image:
        "https://www.redcross.org/content/dam/redcross/volunteer/Vol-BloodDonorAmbassador_500x400.jpg.transform/1288/q82/feature/image.jpeg",
      maxSpots: 10,
      address: "100 West 10th Street, Suite 401, Wilmington, DE 19801",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.720148639714!2d-75.55156502351743!3d39.74593669619229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd406608452d%3A0x4c204265c4e441fd!2sCommunity%20Service%20Building!5e0!3m2!1sen!2sus!4v1709686206912!5m2!1sen!2sus",
      time: "12 PM - 3 PM",
      day: nextThursdayFormatted,
      usersTask:
        "Volunteers will engage donors by greeting, registering, answering questions, providing information, and supporting them through the recovery process at the refreshments table.",
      contactPhone: "(302)-656-6620",
      contactEmail: "media.ncgc@redcross.org",
      volunteers: [
        {
          name: "Karl Barnett",
          profilePicture: "",
        },
        {
          name: "Billy Conners",
          profilePicture:
            "https://t4.ftcdn.net/jpg/01/15/85/23/240_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg",
        },
      ],
    },
  ];
  let show = true;
  let show2 = true;
  let show3 = true;
  if (value) {
    data = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (data.length === 0) {
      show = false;
    }
    data2 = data2.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (data2.length === 0) {
      show2 = false;
    }
    data3 = data3.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (data3.length === 0) {
      show3 = false;
    }
  }

  if (charities) {
    let organization = "";
    let organization2 = "";
    let organization3 = "";

    // Check for each organization
    if (charities.charityCrossing === true) {
      organization = "Charity Crossing";
    }
    if (charities.foodBank === true) {
      organization2 = "Food Bank of Delaware";
    }
    if (charities.redCross === true) {
      organization3 = "Delmarva Red Cross";
    }

    // Filter data based on any of the selected organizations
    data = data.filter((item) => {
      return (
        item.organization === organization ||
        item.organization === organization2 ||
        item.organization === organization3
      );
    });

    if (data.length === 0) {
      show = false;
    }
    data2 = data2.filter((item) => {
      return (
        item.organization === organization ||
        item.organization === organization2 ||
        item.organization === organization3
      );
    });
    if (data2.length === 0) {
      show2 = false;
    }
    data3 = data3.filter((item) => {
      return (
        item.organization === organization ||
        item.organization === organization2 ||
        item.organization === organization3
      );
    });
    if (data3.length === 0) {
      show3 = false;
    }
  }
  if (days) {
    let thurs = days.thursday;
    let fri = days.friday;
    let sat = days.saturday;
    let sun = days.sunday;
    if (thurs === true) {
      thurs = nextThursdayFormatted;
    }
    if (fri === true) {
      fri = nextFridayFormatted;
    }
    if (sat === true) {
      sat = nextSaturdayFormatted;
    }
    if (sun === true) {
      sun = nextSundayFormatted;
    }
    data = data.filter((item) => {
      return (
        item.day === thurs ||
        item.day === fri ||
        item.day === sat ||
        item.day === sun
      );
    });

    if (data.length === 0) {
      show = false;
    }
    data2 = data2.filter((item) => {
      return (
        item.day === thurs ||
        item.day === fri ||
        item.day === sat ||
        item.day === sun
      );
    });
    if (data2.length === 0) {
      show2 = false;
    }
    data3 = data3.filter((item) => {
      return (
        item.day === thurs ||
        item.day === fri ||
        item.day === sat ||
        item.day === sun
      );
    });
    if (data3.length === 0) {
      show3 = false;
    }
  }
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
  const error = !show && !show2 && !show3;
  return (
    <>
      {show && (
        <Carousel
          slideSize={{ sm: "25%" }}
          slideGap={{ base: rem(2), sm: "sm" }}
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          className="mt-5"
        >
          {slides}
        </Carousel>
      )}
      {show2 && (
        <Carousel
          slideSize={{ sm: "25%" }}
          slideGap={{ base: rem(2), sm: "sm" }}
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          className="mt-5"
        >
          {slides2}
        </Carousel>
      )}
      {show3 && (
        <Carousel
          slideSize={{ sm: "25%" }}
          slideGap={{ base: rem(2), sm: "sm" }}
          align="start"
          slidesToScroll={mobile ? 1 : 3}
          className="mt-5"
        >
          {slides3}
        </Carousel>
      )}
      {error && (
        <p className="text-center" style={{ fontSize: "1rem" }}>
          No events found.
        </p>
      )}
    </>
  );
}
