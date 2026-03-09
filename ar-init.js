// ar-init.js
// Handles AR startup, loading screen, scan prompt, and image target events

(function () {
  'use strict';

  const loadingScreen = document.getElementById('loading-screen');
  const scanPrompt    = document.getElementById('scan-prompt');

  // Hide loading screen once XR is ready
  window.addEventListener('xrloaded', function () {
    if (loadingScreen) {
      loadingScreen.style.transition = 'opacity 0.5s';
      loadingScreen.style.opacity = '0';
      setTimeout(function () {
        loadingScreen.style.display = 'none';
      }, 500);
    }
    if (scanPrompt) {
      scanPrompt.style.display = 'block';
    }
  });

  // Hide prompt when target is found
  document.addEventListener('DOMContentLoaded', function () {
    var scene = document.querySelector('a-scene');
    if (!scene) return;

    scene.addEventListener('xrimagefound', function () {
      if (scanPrompt) scanPrompt.style.display = 'none';
    });

    scene.addEventListener('xrimagelost', function () {
      if (scanPrompt) scanPrompt.style.display = 'block';
    });
  });

})();
