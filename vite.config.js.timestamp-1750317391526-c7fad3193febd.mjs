// vite.config.js
import { defineConfig } from "file:///D:/A_Job/SoftWare/HtcSoftware_Web/node_modules/vite/dist/node/index.js";
import react from "file:///D:/A_Job/SoftWare/HtcSoftware_Web/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\A_Job\\SoftWare\\HtcSoftware_Web";
var vite_config_default = defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.zip", "**/*.exe"],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      // Alias for src
      components: path.resolve(__vite_injected_original_dirname, "src/components"),
      // Alias for components
      hooks: path.resolve(__vite_injected_original_dirname, "src/hooks"),
      // Alias for hooks
      layout: path.resolve(__vite_injected_original_dirname, "src/layout"),
      // Alias for layout
      pages: path.resolve(__vite_injected_original_dirname, "src/pages"),
      // Alias for pages
      routes: path.resolve(__vite_injected_original_dirname, "src/routes"),
      // Alias for routes
      utils: path.resolve(__vite_injected_original_dirname, "src/utils"),
      // Alias for utils
      assets: path.resolve(__vite_injected_original_dirname, "src/assets")
      // Alias for assets
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxBX0pvYlxcXFxTb2Z0V2FyZVxcXFxIdGNTb2Z0d2FyZV9XZWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEFfSm9iXFxcXFNvZnRXYXJlXFxcXEh0Y1NvZnR3YXJlX1dlYlxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQV9Kb2IvU29mdFdhcmUvSHRjU29mdHdhcmVfV2ViL3ZpdGUuY29uZmlnLmpzXCI7LyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCcgLy8gSW1wb3J0IHRoZSBwYXRoIG1vZHVsZVxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBhc3NldHNJbmNsdWRlOiBbJyoqLyouemlwJywgJyoqLyouZXhlJ10sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksIC8vIEFsaWFzIGZvciBzcmNcbiAgICAgIGNvbXBvbmVudHM6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cycpLCAvLyBBbGlhcyBmb3IgY29tcG9uZW50c1xuICAgICAgaG9va3M6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaG9va3MnKSwgLy8gQWxpYXMgZm9yIGhvb2tzXG4gICAgICBsYXlvdXQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbGF5b3V0JyksIC8vIEFsaWFzIGZvciBsYXlvdXRcbiAgICAgIHBhZ2VzOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzJyksIC8vIEFsaWFzIGZvciBwYWdlc1xuICAgICAgcm91dGVzOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3JvdXRlcycpLCAvLyBBbGlhcyBmb3Igcm91dGVzXG4gICAgICB1dGlsczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy91dGlscycpLCAvLyBBbGlhcyBmb3IgdXRpbHNcbiAgICAgIGFzc2V0czogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9hc3NldHMnKSwgLy8gQWxpYXMgZm9yIGFzc2V0c1xuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVEsb0JBQW1CO0FBQzNCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLGVBQWUsQ0FBQyxZQUFZLFVBQVU7QUFBQSxFQUN0QyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUE7QUFBQSxNQUNsQyxZQUFZLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQTtBQUFBLE1BQ3BELE9BQU8sS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQTtBQUFBLE1BQzFDLFFBQVEsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQTtBQUFBLE1BQzVDLE9BQU8sS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQTtBQUFBLE1BQzFDLFFBQVEsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQTtBQUFBLE1BQzVDLE9BQU8sS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQTtBQUFBLE1BQzFDLFFBQVEsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQTtBQUFBLElBQzlDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
