const conf = {
  apiKey: String(import.meta.env.VITE_API_KEY),
  authDomain: String(import.meta.env.VITE_DOMAIN_ID),
  projectId: String(import.meta.env.VITE_PROJECT_ID),
  storageBucket: String(import.meta.env.VITE_BUCKET_ID),
  messagingSenderId: String(import.meta.env.VITE_SENDER_ID),
  appId: String(import.meta.env.VITE_APP_URL),
};
export default conf;
