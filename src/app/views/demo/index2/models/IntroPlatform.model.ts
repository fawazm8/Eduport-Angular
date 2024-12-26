export interface PartnerLogo {
    Id: number;
    LogoUrl: string;
  }
  
  export interface CallToActionButton {
    Id: number;
    Text: string;
    Url: string;
  }
  
  export interface SocialLink {
    LinkID: number;
    Platform: string;
    URL: string;
    IsActive: boolean;
  }
  
  export interface IntroPlatform {
    Id: number;
    Title: string;
    Description: string;
    VideoUrl: string;
    VisitTime: string;
    ContactNumber: string;
    UserAvatar: string;
    PartnerLogos: PartnerLogo[];
    CallToActionButtons: CallToActionButton[];
    SocialLinks: SocialLink[];
  }
  