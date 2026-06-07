export const config = {
  apiTimeout: 30000,
  maxImageSize: 5 * 1024 * 1024, // 5MB
  maxMessageLength: 1000,
  messageDebounceDelay: 500,
  typingTimeout: 3000,
  onlineStatusInterval: 5000,
  retryAttempts: 3,
  retryDelay: 1000,
  paginationLimit: 20,
  imageCompressionQuality: 0.7,
  supportedImageFormats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  audioFormats: ['m4a', 'mp3', 'wav'],
  defaultAvatar: 'https://ui-avatars.com/api/?background=075E54&color=fff&size=128',
  deepLinks: {
    chat: 'chatapp://chat',
    call: 'chatapp://call',
  },
} as const;
