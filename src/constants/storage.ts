export const storageKeys = {
  auth: {
    user: '@auth/user',
    token: '@auth/token',
    refreshToken: '@auth/refresh_token',
  },
  settings: {
    theme: '@settings/theme',
    language: '@settings/language',
    notifications: '@settings/notifications',
    privacy: '@settings/privacy',
  },
  chat: {
    drafts: '@chat/drafts',
    lastMessage: '@chat/last_message',
  },
  cache: {
    users: '@cache/users',
    messages: '@cache/messages',
  },
} as const;
