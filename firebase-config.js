// Configuración de tu proyecto Firebase (panaderia-91612)
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCICzSlA7n_2mRIgcUu-r2JeR_Cx-DYKy8",
  authDomain: "panaderia-91612.firebaseapp.com",
  projectId: "panaderia-91612",
  appId: "1:628049770874:web:3635a5501dd698392e3ec3"
};
// Si no has pegado tu configuración, la tienda sigue funcionando con productos.json
window.USAR_FIREBASE = String(window.FIREBASE_CONFIG.projectId).indexOf("PEGA") !== 0;
