import Image from "next/image";
import Scooter from "./components/Scooter";
import ChooseColor from "./components/ChooseColor";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <Scooter />
        </div>
        <div className="">
          <ChooseColor />
        </div>
      </div>
    </div>
  );
}
