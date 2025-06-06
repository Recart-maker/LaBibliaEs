const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'biblia.txt');
const rawText = fs.readFileSync(inputPath, 'utf-8');
const lines = rawText.split('\n');

const verseData = {};

lines.forEach(line => {
  // Limpieza de espacios extra y saltos de línea
  const cleanedLine = line.trim();
  
  // Expresión regular mejorada
  const match = cleanedLine.match(/^(\d?\s?[^\d]+?)\s+(\d+):(\d+)\s*(.*)$/);
  
  if (match) {
    const book = match[1].replace(/\s+/g, ' ').trim(); // Normaliza espacios
    const chapter = parseInt(match[2]);
    const verse = parseInt(match[3]);
    const text = match[4].trim();

    // Inicializar estructuras si no existen
    if (!verseData[book]) verseData[book] = {};
    if (!verseData[book][chapter]) verseData[book][chapter] = [];
    
    // Almacenar texto manteniendo el orden numérico
    verseData[book][chapter][verse] = text;
  }
});

// Eliminar huecos en los arrays (por versículos faltantes)
Object.keys(verseData).forEach(book => {
  Object.keys(verseData[book]).forEach(chapter => {
    verseData[book][chapter] = verseData[book][chapter].filter(v => v !== null);
  });
});

// Exportar datos (manteniendo tu lógica original)
const outputJS = path.join(__dirname, 'verseData.js');
const outputJSON = path.join(__dirname, 'verseData.json');

const jsOutput = `window.verseData = ${JSON.stringify(verseData, null, 2)};`;
fs.writeFileSync(outputJS, jsOutput, 'utf-8');

fs.writeFileSync(outputJSON, JSON.stringify(verseData, null, 2), 'utf-8');

console.log('✅ Archivos generados correctamente');