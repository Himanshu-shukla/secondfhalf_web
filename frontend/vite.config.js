// DEFAULT VITE RUNNING STRUCTURE ------------------------------------------
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
 
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
 
 
// TO RUN FRONTEND ON MOBILE ------------------------------------------
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
 
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0',  // Makes Vite listen on all interfaces (accessible from other devices)
//     port: 5173,        // Port your Vite app will run on (can be changed if needed)
//   },
// })
 
// TO RUN TEST CASES WITH FRONTEND ------------------------------------------
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
 