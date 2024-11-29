import Dropzone from "./components/Dropzone";

const page = () => {
  return (
    <div className="p-2">
      <h1 className="text-5xl mb-5">Upload files</h1>
      <Dropzone className="p-16 mt-10 border border-neutral-200" />
    </div>
  );
};

export default page;
