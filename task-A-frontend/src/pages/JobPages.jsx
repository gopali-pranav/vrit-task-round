import TopSection from "../components/TopSection";
import AfterFeedbackSection from "../components/AfterFeedbackSection";

const JobPages = () => {
  return (
    <div>
      <div className="container bg-herobgcolor p-8 ">
        <h1 className="text-headertext text-2xl font-semibold ml-48">
          Find your dream <span className="text-primary">job</span>
        </h1>
      </div>
      <div className="bg-white shadow-lg w-[1100px] flex justify-center ml-52 mt-10 ">
        <input
          type="text"
          className="border-r  p-3 w-3/5"
          placeholder="Job tittle, Keyword..."
        />
        <input
          type="text"
          className=" p-3 w-3/5 border-l "
          placeholder="Enter location"
        />
        <button className="bg-primary w-40 rounded-md">Search Job</button>
      </div>
      <div className="border-b w-[1100px] flex gap-8 p-4 ml-52 justify-between mt-10 ">
        <select name="" id="" className="border p-3 w-32 rounded-md">
          <option value="">Job Type</option>
        </select>
        <select name="" id="" className="border p-3 w-32 rounded-md">
          <option value="">Job Type</option>
        </select>
        <select name="" id="" className="border p-3 w-32 rounded-md">
          <option value="">Job Type</option>
        </select>
        <select name="" id="" className="border p-3 w-32 rounded-md">
          <option value="">Job Type</option>
        </select>
        <select name="" id="" className="border p-3 w-32 rounded-md">
          <option value="">Job Type</option>
        </select>
      </div>
      <div className="border-b w-[1100px] flex gap-8 p-4 ml-52 justify-between mt-10 ">
        <div>
          <p className="text-sm text-lorem">Showing results for</p>
          <h1 className="text-lg">All available jobs (112)</h1>
        </div>
        <div className="flex items-center gap-2">
          <p>Sort By:</p>{" "}
          <select name="" id="" className="border p-3 w-44 rounded-md">
            <option value="">Most Relevant</option>
          </select>
        </div>
      </div>
      <TopSection />
      <AfterFeedbackSection />
    </div>
  );
};

export default JobPages;
