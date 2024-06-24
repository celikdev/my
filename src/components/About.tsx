import { Card } from "./ui";

const About = () => {
  return (
    <div className="flex flex-col w-[100%] h-[100%] gap-4">
      <div className="flex w-[100%] h-[50%] gap-4">
        <Card className="w-[60%] h-[100%] flex flex-col items-center justify-center">
          <h1 className="text-white font-semibold text-xl">Hakan</h1>
        </Card>
        <Card className="w-[40%] h-[100%] flex flex-col items-center justify-center">
          <h1 className="text-white font-semibold text-xl">Hakan</h1>
        </Card>
      </div>
      <Card className="w-[100%] h-[60%] flex flex-col items-center justify-center">
        <h1 className="text-white font-semibold text-xl">Hakan</h1>
      </Card>
    </div>
  );
};

export default About;
