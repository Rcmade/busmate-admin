import { DatabaseInfo } from "@/Interfaces";
import Image from "next/image";
import React from "react";

interface Props {
  stats: DatabaseInfo;
}

const imageList: { [key: string]: string } = {
  UserDb: "/assets/images/userStats.png",
  ContributorDb: "/assets/images/currentContributorStats.png",
  FiveDaysLocationDb: "/assets/images/fiveDaysLocationStats.png",
  RealTimeLocationDb: "/assets/images/realTImeLocationState.png",
};

const StatsCard = ({ stats }: Props) => {
  return (
    <>
      <h2 className="text-2xl flex mb-4 dark:text-slate-200 text-gray-900 items-center">
        <Image
          src={imageList[stats.dbName]}
          width={50}
          height={50}
          alt={stats.dbName}
          className="object-contain dark:invert"
        />
        {stats.dbName}
      </h2>
      <div className="flex gap-4 flex-wrap mb-8 ">
        <div
          className={`min-w-[200px] flex items-center flex-1 gap-8 border-l-[3px] rounded-10 bg-white-100 dark:bg-gray-900 shadow-xs transition-all duration-500 hover:shadow-orange-300 dark:hover:shadow-fuchsia-400 shadow-white dark:border dark:border-white px-5 py-4`}
        >
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <Image
              src={"/assets/images/totalSizeDb.png"}
              width={50}
              height={50}
              alt={"Total Size"}
              className="object-contain"
            />
            <p className="text-base text-black-100 dark:text-slate-200">
              Total Size
            </p>
          </div>
          <span>{stats.totalSize}</span>
        </div>

        <div
          className={`min-w-[200px] flex items-center  flex-1 gap-8 border-l-[3px] rounded-10 bg-white-100 dark:bg-gray-900 shadow-xs transition-all duration-500 hover:shadow-orange-300 dark:hover:shadow-fuchsia-400 shadow-white dark:border dark:border-white px-5 py-4`}
        >
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <Image
              src={"/assets/images/freeSizeDb.png"}
              width={50}
              height={50}
              alt={"Free Size"}
              className="object-contain"
            />
            <p className="text-base text-black-100 dark:text-slate-200">
              Free Size
            </p>
          </div>
          <span>{stats.freeStorageSize}</span>
        </div>

        <div
          className={`min-w-[200px] flex items-center  flex-1 gap-8 border-l-[3px] rounded-10 bg-white-100 dark:bg-gray-900 shadow-xs transition-all duration-500 hover:shadow-orange-300 dark:hover:shadow-fuchsia-400 shadow-white dark:border dark:border-white px-5 py-4`}
        >
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <Image
              src={"/assets/images/totalDocsDb.png"}
              width={50}
              height={50}
              alt={"Total Docs"}
              className="object-contain "
            />
            <p className="text-base ">Total Docs</p>
          </div>
          <span>{stats.totalDocuments}</span>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
