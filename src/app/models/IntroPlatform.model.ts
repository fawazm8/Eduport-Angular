export interface IntroPlatform {
    Title: string; // عنوان المقدمة
    Description: string; // وصف المقدمة
    VideoUrl: string; // رابط الفيديو
    UserAvatar: string; // رابط صورة المستخدم
    CallToActionButtons: { Text: string; Url: string }[]; // أزرار الدعوة إلى الإجراء
  }