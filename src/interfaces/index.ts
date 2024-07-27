export interface InavbarList {
  pageName: string;
  to: string;
}

export interface ImostPopular {
  name: string;
  type: string;
  imgUrl: string;
}

export interface IgameLibraryData {
  gameName: string;
  gameType: string;
  dataAdded: string;
  hoursPlayed: string;
  isDownload: boolean;
  imgUrl: string;
}

export interface IfeaturedGameBox {
  imageUrl: string;
  gameName: string;
}

export interface IliveStreamService {
  imageUrl: string;
  instruction: string;
  explain: string;
}
export interface IliveStream {
  imageUrl: string;
  streamerName: string;
  streamCaption: string;
  streamerPicture: string;
}
