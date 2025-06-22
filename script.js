function cargarMapa() {
    document.getElementById('mapa-placeholder').outerHTML = `
      <iframe 
        src="https://maps.google.com/maps?q=-31.145858473260564,-64.04186294838763&z=16&output=embed"
        width="100%" 
        height="300" 
        style="border:0; border-radius: 15px; box-shadow: 0 0 10px rgba(0,255,255,0.2);" 
        allowfullscreen="" 
        loading="lazy">
      </iframe>`;
  }

