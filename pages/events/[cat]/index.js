import CatEvent from "@/src/components/events/catEvent";
import Image from "next/image";
import Link from "next/link";

// import Image from "/asset/img-banner.png";
const EventCatPage = ({ data, pageName }) => (
  <CatEvent data={data} pageName={pageName}></CatEvent>
);

export default EventCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const id = context.params?.cat;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  return {
    // Passed to the page component as props
    props: { data, pageName: id },
  };
}
