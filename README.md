<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Abrinay Smart Link

Smart link / Linktree personal para Abrinay Sound Architect.

## 🌐 Ver en vivo

**GitHub Pages:** [https://abrinay1997-stack.github.io/SOCIAL-LINK/](https://abrinay1997-stack.github.io/SOCIAL-LINK/)

> La aplicación se despliega automáticamente a GitHub Pages cada vez que se hace push a la rama `main`.

## 🚀 Ejecución Local

**Prerequisitos:** Node.js 18+

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```

3. La aplicación estará disponible en: `http://localhost:3000`

## 📦 Despliegue

### Despliegue Automático (GitHub Actions)

Cada push a la rama `main` activa automáticamente el workflow de GitHub Actions que:
1. Construye la aplicación
2. Despliega a GitHub Pages
3. Publica en: https://abrinay1997-stack.github.io/SOCIAL-LINK/

### Despliegue Manual

```bash
npm run build
```

Esto generará los archivos optimizados en la carpeta `dist/`.

## 🛠️ Tecnologías

- **React 19** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **Lucide React** - Iconos
- **GitHub Pages** - Hosting
