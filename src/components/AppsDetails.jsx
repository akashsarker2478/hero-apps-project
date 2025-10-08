import React from "react";
import { useParams } from "react-router";
import useAppsData from "./Hook/useAppsData";
import download from "../assets/download.png";
import star from "../assets/star.png";
import like from "../assets/like.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppsDetails = () => {
  const { id } = useParams();
  const { products, loading} = useAppsData();
  const product = products.find((app) => String(app.id) === id);
  if (loading) return <p>loading...</p>;
  console.log(product);
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = product;

  return (
    <div>
      <div>
        <div className="md:flex gap-5">
          <img className="w-[350px] h-[350px] rounded-xl" src={image} alt="" />
          <div className="flex-1">
            <h3 className="font-bold text-3xl">{title}</h3>
            <p>
              Developed by :{" "}
              <span className="bg-gradient-to-b from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-semibold">
                {companyName}
              </span>
            </p>
            <div className="border-b border-gray-500 pb-5 w-full"></div>
            <div className="md:flex gap-3 my-5 items-center">
              <div className="p-8">
                <img src={download} alt="" />
                <p className=" my-2 text-[#001931]">Download</p>
                <p className=" font-extrabold text-2xl mt-1 text-black">
                  {downloads}
                </p>
              </div>
              <div className="p-8">
                <img src={star} alt="" />
                <p className=" my-2 text-[#001931]">Average Ratings</p>
                <p className=" font-extrabold text-2xl mt-1 text-black">
                  {ratingAvg}
                </p>
              </div>
              <div className="p-8">
                <img src={like} alt="" />
                <p className=" my-2 text-black">Total Reviews</p>
                <p className=" font-extrabold text-2xl mt-1 text-[#001931]">
                  {reviews}
                </p>
              </div>
            </div>
            <div>
              <button className="btn font-bold text-white bg-[#00D390] my-2">
                Install Now <span>({size} MB)</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 pb-5 w-full"></div>
        {/* chart */}
        <div className="mt-8 mb-5">
          <h3 className="font-bold text-xl mb-4">Ratings</h3>
          <div className="w-full h-[300px]">
            <ResponsiveContainer>
              <BarChart
                layout="vertical"
                data={ratings}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  stroke="#ccc"
                  strokeDasharray="50"
                  horizontal={false}
                />
                <YAxis dataKey="name" type="category" stroke="#888" />
                <XAxis type="number" stroke="#888" />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="#FF8811"
                  barSize={30}
                  name="Rating Count"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="border-b border-gray-300 pb-5 w-full"></div>
          <h3 className="font-bold text-xl my-4">Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
