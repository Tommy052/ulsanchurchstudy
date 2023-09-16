import Navbar from "./components/header";
import Image from "next/image";
import pick from "../public/png/sea-164989_640.jpg";
const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="container relative flex min-h-screen flex-col items-center  bg-deepBrown">
        <div className="relative w-full">
          <Image
            src={pick}
            alt="Picture of me"
            placeholder="blur"
              
            width={600}
            height={420}
            color="transparent"
          />

          <div className="absolute top-1/2 left-1/2 flex min-w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center pl-2 pr-2">
            <p className="text-white serif font-normal text-center  leading-[180%] ">
            너희 모든 나라들아 여호와를 찬양하며 너희 모든 백성들아 그를
            찬송할지어다 우리에게 향하신 여호와의 인자하심이 크시고 여호와의
            진실하심이 영원함이로다 할렐루야
            </p>
            <br/>
            <p className="serif mt-6 text-white break-keep px-7 text-center font-normal text-LightGrey text-sm pc:text-lg">시편&nbsp;117:1-2</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPage;
