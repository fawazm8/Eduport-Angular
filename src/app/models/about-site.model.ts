export interface AboutFeature {
iconColor: any;
    id: number;
    aboutSiteId: number;
    title: string;
    description: string;
    iconUrl: string;
  }
  
  export interface AboutSite {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    features: AboutFeature[];
    createdAt: Date; // مثال على عمود إضافي
  }