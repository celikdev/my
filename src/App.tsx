import { useState } from "react";
import { Card, CarouselCard, Tab } from "./components/ui";
import { About, AnalysisBoard } from "./components";
import {
  InstagramIcon,
  LichessIcon,
  TwitchIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from "./assets/icons";

import Fotograf from "./assets/muhammet.jpg";
import { Carousel } from "@trendyol-js/react-carousel";

// Ogrenciler
import Ogrenci1 from "./assets/ogrenciler/ogrenci_1.jpeg";
import Ogrenci2 from "./assets/ogrenciler/ogrenci_2.jpeg";
import Ogrenci3 from "./assets/ogrenciler/ogrenci_3.jpeg";
import Ogrenci4 from "./assets/ogrenciler/ogrenci_4.jpeg";
import Ogrenci5 from "./assets/ogrenciler/ogrenci_5.jpeg";
import Ogrenci6 from "./assets/ogrenciler/ogrenci_6.jpeg";
import Ogrenci7 from "./assets/ogrenciler/ogrenci_7.jpeg";
import Ogrenci8 from "./assets/ogrenciler/ogrenci_8.jpeg";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("AnalysisBoard");

  return (
    <main className="flex md:flex-row flex-col md:h-[100vh] w-full p-4 gap-4">
      <div className="w-[100%] md:w-[50%] h-[100%] flex flex-col gap-4">
        <div className="w-[100%] h-[30%] flex gap-4">
          <div className="flex flex-col gap-4 w-[60%] h-[100%]">
            <Card className="w-[100%] h-[100%] flex items-center justify-center">
              <h1 className="text-white font-extrabold md:text-4xl text-lg text-center">
                Muhammet Ali Yurtseven
              </h1>
            </Card>
            <Card className="w-[100%] flex items-center justify-center sm:gap-6 md:gap-8 gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/muhammet_yrtsvn/"
              >
                <InstagramIcon className="fill-white/60 transition-colors w-8 md:w-14 sm:w-12 duration-300 hover:fill-white" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/+905077153161"
              >
                <WhatsAppIcon className="fill-white/60 transition-colors w-8 md:w-14 sm:w-12 duration-300 hover:fill-white" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCGjVELeuLxrwRjcpaH8kHag"
              >
                <YoutubeIcon className="fill-white/60 transition-colors w-8 md:w-14 sm:w-12 duration-300 hover:fill-white" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitch.tv/muhammetyurtseven"
              >
                <TwitchIcon className="fill-white/60 transition-colors w-8 md:w-14 sm:w-12 duration-300 hover:fill-white" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://lichess.org/@/MuhammetYurtseven"
              >
                <LichessIcon
                  className="
                fill-white/60 transition-colors w-8 h-8 md:w-14 md:h-14 sm:w-12 sm:h-12 duration-300 hover:fill-white
                "
                />
              </a>
            </Card>
          </div>
          <Card className="w-[40%] md:h-[100%] flex items-center justify-center">
            <img
              src={Fotograf}
              alt="fotograf"
              className="object-cover md:rounded-full md:w-2/3 w-full"
            />
          </Card>
        </div>
        <div className="flex gap-4 w-full md:h-[30%] h-max">
          <Card className="w-[100%] h-[100%] flex flex-col gap-4">
            <span className="flex justify-between w-full">
              <h1 className="font-extrabold md:text-3xl text-white/80">
                Hakkımda
              </h1>
            </span>
            <div className="w-full h-full">
              <p className="text-white/70 md:text-base text-sm">
                Merhabalar ben Muhammet Ali YURTSEVEN,24 yaşındayım 5 yaşımdan
                beri yarı aktif (son 4 sene tam aktif olmak üzere) satranç
                oynuyorum. 8-11 yaş arası il birinciliğim ve bir kaç kez de il
                derecelerim var. Bir çok oyuncunun yardımcı antrenörlüğüne
                başladım. Elde ettiğim deneyimlerim ve hazırlıklarımla 2021-2022
                seneleri arasında antrenörlük dersi ve staj görevi yaptım 2022
                yılından beri aktif olarak ders vermekteyim. 1000 -1500 arası
                öğrenciler ile çalışıyorum ve bu seviye arası ile çalışmaktan
                keyif alıyorum. Genelde ilk hedefim öğrencimi 1 sene içerisinde
                iyi bir seviyeye getirip üst kademe antrenörler yardımı ile
                Türkiye satrancına katmak.
              </p>
            </div>
          </Card>
        </div>
        <Card className="w-[100%] md:h-[40%] h-[20%]">
          <Carousel
            transition={0.5}
            show={1}
            slide={1}
            className="md:h-[100%] h-[10%] w-full"
            useArrowKeys
            hideArrows={false}
            infinite
            swiping
            autoSwipe={3000}
          >
            <CarouselCard source={Ogrenci1} />
            <CarouselCard source={Ogrenci2} />
            <CarouselCard source={Ogrenci3} />
            <CarouselCard source={Ogrenci4} />
            <CarouselCard source={Ogrenci5} />
            <CarouselCard source={Ogrenci6} />
            <CarouselCard source={Ogrenci7} />
            <CarouselCard source={Ogrenci8} />
          </Carousel>
        </Card>
      </div>
      <div className="md:w-[50%] h-[100%] w-full flex-col gap-4 flex">
        <Card className="w-[100%] h-[10%] flex-col items-center justify-center px-4 py-0 md:flex hidden">
          <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </Card>
        {selectedTab == "AnalysisBoard" ? <AnalysisBoard /> : <About />}
      </div>
    </main>
  );
};

export default App;
