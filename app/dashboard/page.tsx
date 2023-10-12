import DashboardIcon from "@/components/icons/DashboardIcon";
import { dashBoardStatsRoute } from "@/app/api/auth/api";
import StatsCard from "@/components/Cards/StatsCard";
import EditDbModal from "@/components/Modals/EditDbModal";
import { cookies } from "next/headers";
import axios from "axios";
import { getUser } from "@/lib/actions/authActions";

const Home = async () => {
  const data = await dashBoardStatsRoute();

  const d = await getUser();
  console.log(d);
  const test = async () => {
    "use server";
    // console.log(cookies().get("login")?.value);
  };
  return (
    <>
      <section className="flex flex-col mt-10 dark:bg- ">
        {/* <form action={test} method="POST">
          <button type="submit">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
            consequuntur. Tenetur beatae laudantium voluptates ad asperiores
            necessitatibus ipsam, nihil itaque harum sed, fugiat quasi quod hic
            impedit labore quam minima.
          </button>
        </form> */}
        <div className="flex justify-between items-center">
          <span className="flex gap-4 items-center">
            <DashboardIcon className="h-10 w-10" />
            <span className="text-2xl">DashBoard</span>
          </span>

          <EditDbModal />
        </div>

        <h2 className="text-xl mt-10 text-sky-800 dark:text-gray-200  ">
          Database Status
        </h2>
      </section>
      <section className="flex flex-col justify-start pt-10 gap-x-8 ">
        {data?.length &&
          data.map((item) => {
            return <StatsCard key={item.dbName} stats={item} />;
          })}
      </section>
    </>
  );
};

export default Home;
