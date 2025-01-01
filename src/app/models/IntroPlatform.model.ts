export interface IntroPlatform {
  Id: number;
  Title: string;
  subtitle: string;
  Description: string;
  imageUrl: string;
  features?: { // الحقل الذي يسبب المشكلة
    title: string;
    description: string;
    iconUrl?: string;
    iconColor?: string;
  }[];
}