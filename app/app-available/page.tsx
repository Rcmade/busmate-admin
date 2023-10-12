import AppAvailavlityForm from "@/components/Forms/AppAvailavlityForm";
import { getAppAvailabilityRoute } from "@/app/api/auth/api";

const page = async () => {
  const data = await getAppAvailabilityRoute();
  // console.log(data);

  if (data?.error) {
    throw Error(data.error);
  }
  return (
    <>
      <section className="flex w-full mt-10 flex-wrap gap-4 ">
        <div>
          <p className="text-slate-800 dark:text-gray-200 ">
            Last Updater _id:
            <span className="ml-2 text-slate-900 dark:text-slate-200">
              {data.contributor} 303504893b9e84900
            </span>
          </p>
        </div>
        <AppAvailavlityForm data={data} />
      </section>
    </>
  );
};

export default page;
