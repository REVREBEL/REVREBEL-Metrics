import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIDGETS_DIR = path.resolve(__dirname, '../widgets');
const COMPONENTS_DIR = path.resolve(__dirname, '../components');
const UI_DIR = path.resolve(__dirname, '../components/ui');
const OUTPUT_FILE = path.resolve(__dirname, '../lib/workshop/registry.ts');
const OUTPUT_DIR = path.dirname(OUTPUT_FILE);

const toPascalCase = (str) => 
  str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

function generate() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const registryEntries = [];

  // 1. Scan Widgets
  if (fs.existsSync(WIDGETS_DIR)) {
    const widgets = fs.readdirSync(WIDGETS_DIR).filter(f => 
      fs.statSync(path.join(WIDGETS_DIR, f)).isDirectory()
    );
    widgets.forEach(f => {
      const hasMetadata = fs.existsSync(path.join(WIDGETS_DIR, f, 'metadata.ts'));
      registryEntries.push(`  ${f}: { 
    name: "${f}", 
    type: "widget",
    component: dynamic(() => import('@/widgets/${f}/index')),
    metadata: ${hasMetadata ? `require('@/widgets/${f}/metadata').metadata` : 'null'}
  }`);
    });
  }

  // 2. Scan UI Primitives (Fixed with bracket notation to avoid parse error)
  if (fs.existsSync(UI_DIR)) {
    const uiFiles = fs.readdirSync(UI_DIR).filter(f => f.endsWith('.tsx'));
    uiFiles.forEach(f => {
      const name = f.replace('.tsx', '');
      const safeKey = `ui_${name.replace(/[^a-zA-Z0-9]/g, '_')}`;
      const pascalName = toPascalCase(name);
      
      registryEntries.push(`  ${safeKey}: { 
    name: "${name}", 
    type: "ui-primitive",
    component: dynamic(() => import('@/components/ui/${name}').then(mod => (mod as any).${pascalName} || (mod as any).default || (mod as any)[Object.keys(mod)[0]])),
    metadata: null
  }`);
    });
  }

  // 3. Scan Custom Components
  if (fs.existsSync(COMPONENTS_DIR)) {
    const customFiles = fs.readdirSync(COMPONENTS_DIR).filter(f => 
      f.endsWith('.tsx') && !f.includes('workshop')
    );
    customFiles.forEach(f => {
      const name = f.replace('.tsx', '');
      const safeKey = `custom_${name.replace(/[^a-zA-Z0-9]/g, '_')}`;
      
      registryEntries.push(`  ${safeKey}: { 
    name: "${name}", 
    type: "custom-component",
    component: dynamic(() => import('@/components/${name}').then(mod => (mod as any).default || (mod as any)[Object.keys(mod)[0]])),
    metadata: null
  }`);
    });
  }

  const content = `// AUTOMATICALLY GENERATED - DO NOT EDIT
import dynamic from 'next/dynamic';

export const WORKSHOP_REGISTRY: Record<string, any> = {
${registryEntries.join(',\n')}
};`;

  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(`✅ Universal Registry Generated: Found ${registryEntries.length} items.`);
}

generate();
