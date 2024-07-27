import poupler1 from "../assets/popular-01.jpg";
import poupler2 from "../assets/popular-02.jpg";
import poupler3 from "../assets/popular-03.jpg";
import poupler4 from "../assets/popular-04.jpg";
import poupler5 from "../assets/popular-05.jpg";
import poupler6 from "../assets/popular-06.jpg";
import poupler7 from "../assets/popular-07.jpg";
import poupler8 from "../assets/popular-08.jpg";
import game1 from "../assets/game-01.jpg";
import game2 from "../assets/game-02.jpg";
import game3 from "../assets/game-03.jpg";
import featured1 from "../assets/featured-01.jpg";
import featured2 from "../assets/featured-02.jpg";
import featured3 from "../assets/featured-03.jpg";
import service1 from "../assets/service-01.jpg";
import service2 from "../assets/service-02.jpg";
import service3 from "../assets/service-03.jpg";
import stream1 from "../assets/stream-01.jpg";
import stream2 from "../assets/stream-02.jpg";
import stream3 from "../assets/stream-03.jpg";
import stream4 from "../assets/stream-04.jpg";
import stream5 from "../assets/stream-05.jpg";
import stream6 from "../assets/stream-06.jpg";
import stream7 from "../assets/stream-07.jpg";
import stream8 from "../assets/stream-08.jpg";
import avatar1 from "../assets/avatar-01.jpg";
import avatar2 from "../assets/avatar-02.jpg";
import avatar3 from "../assets/avatar-03.jpg";
import avatar4 from "../assets/avatar-04.jpg";

import {
  IfeaturedGameBox,
  IgameLibraryData,
  IliveStream,
  IliveStreamService,
  ImostPopular,
  InavbarList,
} from "../interfaces";

export const NAVBAR_LIST: InavbarList[] = [
  {
    pageName: "Home",
    to: "/",
  },
  {
    pageName: "Browse",
    to: "browse",
  },
  {
    pageName: "Details",
    to: "details",
  },
  {
    pageName: "Streams",
    to: "Streams",
  },
];

export const MOST_POPULAR: ImostPopular[] = [
  {
    name: "Fortnite",
    type: "Sandbox",
    imgUrl: poupler1,
  },
  {
    name: "PubG",
    type: "Battle S",
    imgUrl: poupler2,
  },
  {
    name: "Dota2",
    type: "Steam-X",
    imgUrl: poupler3,
  },
  {
    name: " CS-GO",
    type: "Legendary",
    imgUrl: poupler4,
  },
  {
    name: "Mini Craft",
    type: "Legendary",
    imgUrl: poupler5,
  },
  {
    name: "Eagles Fly",
    type: "Matrix Games",
    imgUrl: poupler6,
  },
  {
    name: "Warface",
    type: "Max 3D ",
    imgUrl: poupler7,
  },
  {
    name: "Warcraft",
    type: "Legend",
    imgUrl: poupler8,
  },
];

export const GAMING_LIBRARY_DATA: IgameLibraryData[] = [
  {
    gameName: "Dota 2",
    gameType: "Sandbox",
    dataAdded: "24/08/2036",
    hoursPlayed: "634 H 22 Mins",
    isDownload: true,
    imgUrl: game1,
  },
  {
    gameName: "Fortnite",
    gameType: "Legendary",
    dataAdded: "22/06/2036",
    hoursPlayed: "740 H 52 Mins",
    isDownload: false,
    imgUrl: game2,
  },
  {
    gameName: "CS-GO",
    gameType: "Battle Royale",
    dataAdded: "21/04/2036",
    hoursPlayed: "892 H 14 Mins",
    isDownload: true,
    imgUrl: game3,
  },
];

export const FEATURED_GAME_BOX: IfeaturedGameBox[] = [
  {
    imageUrl: featured1,
    gameName: "Island Rusty",
  },
  {
    imageUrl: featured2,
    gameName: "Cs-Go",
  },
  {
    imageUrl: featured3,
    gameName: "Gamezer",
  },
];

export const LIVE_STREAM_SERVICE: IliveStreamService[] = [
  {
    imageUrl: service1,
    instruction: "Go To Your Profile",
    explain:
      "Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.",
  },
  {
    imageUrl: service2,
    instruction: "Live Stream Button",
    explain:
      "If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com",
  },
  {
    imageUrl: service3,
    instruction: "You Are Live",
    explain:
      "You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.",
  },
];

export const LIVE_STREAM: IliveStream[] = [
  {
    imageUrl: stream1,
    streamerName: "Kengan Omeg",
    streamCaption: "Just Talking With Fans",
    streamerPicture: avatar1,
  },
  {
    imageUrl: stream2,
    streamerName: " LahutaMalc",
    streamCaption: "CS-GO 36 Hours Live Stream",
    streamerPicture: avatar2,
  },
  {
    imageUrl: stream3,
    streamerName: "Areluwa",
    streamCaption: "Maybe Nathej Allnight Chillin'",
    streamerPicture: avatar3,
  },
  {
    imageUrl: stream4,
    streamerName: "NewGangTeam",
    streamCaption: "Live Streaming Till Morning",
    streamerPicture: avatar4,
  },
  {
    imageUrl: stream5,
    streamerName: "Yuma Mukami",
    streamCaption: "Epic Gaming Session",
    streamerPicture: avatar1,
  },
  {
    imageUrl: stream6,
    streamerName: "Haruto Amakawa",
    streamCaption: "Live Gaming Stream",
    streamerPicture: avatar2,
  },
  {
    imageUrl: stream7,
    streamerName: "Sora Kashiwagi",
    streamCaption: "Pro Gamer Tips",
    streamerPicture: avatar3,
  },
  {
    imageUrl: stream8,
    streamerName: "Riku Nanase",
    streamCaption: "Speedrun Marathon ",
    streamerPicture: avatar4,
  },
];

export const TOP_STREAMER = [
  {
    streamrImage: avatar1,
    streamrNumber: "01",
    streamerName: "LahutaM",
  },
  {
    streamrImage: avatar2,
    streamrNumber: "02",
    streamerName: "Kengan",
  },
  {
    streamrImage: avatar3,
    streamrNumber: "03",
    streamerName: "Areluwa",
  },
  {
    streamrImage: avatar4,
    streamrNumber: "04",
    streamerName: "OmegFollow",
  },
  {
    streamrImage: avatar2,
    streamrNumber: "05",
    streamerName: "GangTeam",
  },
];
