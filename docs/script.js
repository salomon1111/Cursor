(function(){
  'use strict';

  /** @type {HTMLInputElement|null} */
  const input = document.getElementById('number-input');
  const resultEl = document.getElementById('result');
  const errorEl  = document.getElementById('error');
  const resultRow = document.querySelector('.result-row');
  const copyBtn = document.getElementById('copy-btn');

  if(!input || !resultEl || !errorEl || !resultRow || !copyBtn){
    return;
  }

  function showResult(message){
    resultEl.textContent = message;
    resultRow.hidden = false;
    errorEl.hidden = true;
  }

  function showError(message){
    errorEl.textContent = message;
    errorEl.hidden = false;
    resultRow.hidden = true;
  }

  function parseLocaleNumber(value){
    // Erlaubt Komma oder Punkt als Dezimaltrennzeichen
    const normalized = value.replace(',', '.').trim();
    if(normalized === '') return NaN;
    return Number(normalized);
  }

  function formatNumber(n){
    return n.toLocaleString('de-DE', { maximumFractionDigits: 6, minimumFractionDigits: 0 });
  }

  function compute(){
    const raw = input.value;
    const num = parseLocaleNumber(raw);

    if(raw.trim() === ''){
      // Leerer Zustand: alles ausblenden und Styles zurücksetzen
      resultRow.hidden = true;
      errorEl.hidden = true;
      input.classList.remove('is-valid','is-invalid');
      return;
    }

    if(Number.isNaN(num)){
      showError('Fehler: Bitte geben Sie eine gültige Zahl ein.');
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      return;
    }
    if(num < 0){
      showError('Fehler: Die Quadratwurzel einer negativen Zahl ist nicht definiert.');
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      return;
    }

    const sqrt = Math.sqrt(num);
    const prettyIn  = formatNumber(num);
    const prettyOut = sqrt.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 6 });
    showResult(`√${prettyIn} = ${prettyOut}`);
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  }

  // Sofortige Berechnung beim Tippen (mit kleinem Debounce)
  let timer = 0;
  input.addEventListener('input', function(){
    window.clearTimeout(timer);
    timer = window.setTimeout(compute, 120);
  });

  // Fokus beim Laden
  window.setTimeout(() => input.focus(), 50);

  // Copy-Funktion
  async function copyToClipboard(){
    const text = resultEl.textContent || '';
    if(!text) return;
    try{
      if(navigator.clipboard && navigator.clipboard.writeText){
        await navigator.clipboard.writeText(text);
      }else{
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.top = '-1000px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      copyBtn.classList.add('success');
      copyBtn.textContent = 'Kopiert!';
      window.setTimeout(() => {
        copyBtn.classList.remove('success');
        copyBtn.textContent = 'Kopieren';
      }, 1200);
    }catch(e){
      copyBtn.textContent = 'Fehler';
      window.setTimeout(() => copyBtn.textContent = 'Kopieren', 1200);
    }
  }

  copyBtn.addEventListener('click', copyToClipboard);
})();


