# Skill: /design — Frontend Design Audit & Improvement

## Description

Audita e melhora o design de UI/UX do projeto catalogo-tenatacado (React + Vite + TypeScript). Executa o servidor de desenvolvimento, tira screenshots, analisa problemas visuais e implementa correções.

## Stack do projeto

- React 19 + TypeScript + Vite
- CSS customizado (sem Tailwind) — estilos em `src/styles/style.css` e arquivos `.css` por componente
- Framer Motion (animações), Swiper (totem slider), Lucide React (ícones), Lenis (smooth scroll)
- Fonte principal: Barlow Condensed (Google Fonts)
- Paleta: `--gold: #FF6B00`, `--black: #0a0a0a`, `--white: #ffffff`, `--gray: #888`
- Design system escuro (dark mode por padrão)

## Arquivos principais de estilo

| Arquivo | Responsabilidade |
|---|---|
| `src/styles/style.css` | Estilos globais, hero, produtos, footer, micro-interações |
| `src/components/ProductCard.css` | Cards de produto (branco sobre fundo cinza) |
| `src/components/Hero.css` | Hero section |
| `src/components/Header.css` | Header sticky com filtros |
| `src/components/Totem/TotemDisplay.css` | Container do slider totem |
| `src/components/Totem/SlideCategoria.css` | Grid de produtos no totem |
| `src/components/Totem/MansaoMaromba.css` | Slide premium (dark gold luxury) |

## Como invocar

```
/design                          → auditoria geral de todo o projeto
/design card                     → foco nos ProductCards
/design totem                    → foco no TotemDisplay e slides
/design mansao                   → foco na seção Mansão Maromba
/design hero                     → foco na hero section
/design spacing                  → auditoria de espaçamento e alinhamento
/design typography               → auditoria de tipografia e legibilidade
/design colors                   → auditoria de contraste e paleta de cores
/design mobile                   → auditoria responsiva (mobile first)
/design perf                     → análise de performance visual (LCP, CLS)
```

## O que fazer ao ser invocado

### 1. Inicie o servidor de desenvolvimento (se não estiver rodando)

```bash
# Verifique se já está rodando
curl -sf http://localhost:5173 || npm run dev &
# Aguarde estar pronto
timeout 20 bash -c 'until curl -sf http://localhost:5173; do sleep 1; done'
```

### 2. Tire screenshots para análise visual

Use `npx playwright` ou o script abaixo (adaptado ao ambiente Windows):

```js
// screenshot_design.cjs — rode com: node screenshot_design.cjs
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'design_audit_desktop.png', fullPage: true });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: 'design_audit_mobile.png', fullPage: true });
  await browser.close();
})();
```

Coloque o script na raiz do projeto (`node screenshot_design.cjs`), tire os screenshots e leia as imagens com a ferramenta Read.

### 3. Analise os problemas e classifique por severidade

**CRÍTICO** — quebra funcional ou ilegibilidade:
- Texto sobre fundo sem contraste suficiente (WCAG AA: mín. 4.5:1)
- Overflow ou conteúdo cortado
- Botões/links muito pequenos em mobile (mín. 44×44px touch target)

**IMPORTANTE** — experiência degradada:
- Espaçamentos inconsistentes entre seções
- Tipografia muito pequena ou linha base irregular
- Transições abruptas (sem ease)

**SUGESTÃO** — polimento:
- Alinhamento visual não intencional
- Falta de hierarquia visual
- Oportunidade de micro-interação

### 4. Implemente as correções

- Edite apenas os arquivos CSS/TSX necessários
- Respeite o design system existente (paleta, fontes, tokens CSS)
- Não quebre estilos de outros componentes
- Após cada mudança, rode `npm run build` para garantir que compila
- Tire screenshot de verificação após as correções

### 5. Reporte o resultado

Apresente:
- Lista de problemas encontrados (com severidade)
- O que foi corrigido
- O que ficou como sugestão (não implementado)
- Screenshot antes/depois se possível

## Regras de design do projeto

1. **Contraste**: textos sobre dark background usam `#ffffff` ou `rgba(255,255,255,0.7)` — nunca abaixo de 0.5 de opacidade para texto informativo
2. **Espaçamento**: múltiplos de 4px (4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64)
3. **Border radius**: 4px para cards (cantos levemente arredondados), 999px para pills/badges
4. **Sombras no tema claro**: `box-shadow: 0 4px 20px rgba(0,0,0,0.06)` em repouso, `0 20px 40px rgba(0,0,0,0.12)` em hover
5. **Fonte mínima**: 0.65rem (~10px) para disclaimers, 0.75rem para labels, 1rem para corpo de texto
6. **Totem**: elementos clicáveis devem ter `min-height: 44px` e `touch-action: manipulation`
7. **Animações**: sempre incluir `@media (prefers-reduced-motion: reduce)` como fallback

## Tokens CSS disponíveis

```css
--gold: #FF6B00;
--gold-light: #FF8C33;
--black: #0a0a0a;
--dark: #111111;
--dark2: #141414;
--dark3: #1a1a1a;
--white: #ffffff;
--gray: #888888;
```

## Notas importantes

- O projeto usa CSS customizado, **não** Tailwind — edite os arquivos `.css` diretamente
- Framer Motion controla animações de entrada/hover nas cards — não conflite com `transition` CSS nas mesmas propriedades
- O Totem é acessado clicando em "Vitrine" no header — sempre verifique ele separadamente
- A seção Mansão Maromba tem identidade visual própria (gold luxury) — respeite o design sem "normalizar"
