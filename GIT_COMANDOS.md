🚀 COMANDOS GIT - PUBLICAR SITE MOCS

═══════════════════════════════════════════════════════════════════

OPÇÃO 1: GITHUB PAGES (Recomendado)

1️⃣ Configurar repositório local:
   git config user.name "Seu Nome"
   git config user.email "seu.email@example.com"

2️⃣ Adicionar todos os arquivos:
   git add .

3️⃣ Fazer commit:
   git commit -m "Site MOCS completo: 8 páginas, Google Sheets integration, responsive design"

4️⃣ Enviar para GitHub:
   git push origin main

5️⃣ Habilitar GitHub Pages:
   → Abra: https://github.com/seu-usuario/MocsSite/settings
   → Navegue até "Pages"
   → Source: Branch: main, Folder: / (root)
   → Clique "Save"

6️⃣ Site ficará disponível em:
   https://seu-usuario.github.io/MocsSite

═══════════════════════════════════════════════════════════════════

OPÇÃO 2: NETLIFY (Alternativa fácil)

1️⃣ Fazer commit local:
   git add .
   git commit -m "Site MOCS pronto para deploy"
   git push origin main

2️⃣ Ir para: https://app.netlify.com

3️⃣ Clique em "Add new site" → "Import an existing project"

4️⃣ Escolha "GitHub"

5️⃣ Selecione repositório "MocsSite"

6️⃣ Configurar:
   → Build command: (deixar em branco)
   → Publish directory: /
   → Clique "Deploy"

7️⃣ Site ficará disponível em:
   seu-site.netlify.app

═══════════════════════════════════════════════════════════════════

OPÇÃO 3: VERCEL (Mais rápido)

1️⃣ Fazer commit local:
   git add .
   git commit -m "Site MOCS pronto"
   git push origin main

2️⃣ Ir para: https://vercel.com/new

3️⃣ Clique "Import Git Repository"

4️⃣ Selecione repositório "MocsSite"

5️⃣ Clique "Import"

6️⃣ Vercel detecta automaticamente e faz deploy

7️⃣ Site ficará disponível em:
   mocsite.vercel.app

═══════════════════════════════════════════════════════════════════

📝 COMMITS IMPORTANTES

Primeiro commit:
   git commit -m "feat: Site MOCS estrutura completa

   - 8 páginas HTML (home + 7 internas)
   - CSS responsivo e moderno
   - JavaScript modular
   - Google Sheets integration
   - Menu mobile
   - Galeria com lightbox
   - Formulários
   - Timeline histórica"

Futuras atualizações:

   # Adicionar equipe real:
   git commit -m "data: Add team members to Google Sheets"

   # Customizar cores:
   git commit -m "style: Update brand colors (#205395, #FF751F)"

   # Adicionar parceiro:
   git commit -m "data: Add new partner institution"

   # Corrigir bug:
   git commit -m "fix: Mobile menu not closing on iOS Safari"

═══════════════════════════════════════════════════════════════════

✅ DEPOIS DO PUSH

Depois que fizer push, você pode:

1. Ver commits:
   git log --oneline

2. Ver status:
   git status

3. Ver branches:
   git branch -a

4. Voltar para commit anterior (cuidado!):
   git revert HEAD~1

5. Atualizar site remoto:
   git push origin main

═══════════════════════════════════════════════════════════════════

🔒 SEGURANÇA

NUNCA commitar:
   ❌ Senhas
   ❌ Tokens de API
   ❌ Informações sensíveis

Se cometeu erro:
   git reset HEAD~1              # Desfazer último commit (mantém arquivos)
   git reset --hard HEAD~1       # Desfazer com perda (cuidado!)

═══════════════════════════════════════════════════════════════════

📊 DICAS DE GIT

Ver alterações antes de commit:
   git diff

Ver histórico completo:
   git log

Ver histórico de um arquivo:
   git log -- pages/contato.html

Desfazer alterações em um arquivo:
   git checkout -- arquivo.html

Criar tag para versão:
   git tag -a v1.0 -m "Versão 1.0 - Site MOCS"
   git push origin v1.0

═══════════════════════════════════════════════════════════════════

💬 COMMITS COM EMOJI (Opcional)

Tornar commits mais visuais:

   ✨ Feature:
      git commit -m "✨ Add lightbox to gallery"

   🐛 Bug fix:
      git commit -m "🐛 Fix mobile menu toggle"

   📝 Documentation:
      git commit -m "📝 Add Google Sheets guide"

   🎨 Style:
      git commit -m "🎨 Update brand colors"

   ♻️ Refactor:
      git commit -m "♻️ Simplify CSS with variables"

   📦 Dependencies:
      git commit -m "📦 Update Bootstrap Icons to 1.11.1"

   🚀 Deploy:
      git commit -m "🚀 Deploy to GitHub Pages"

═══════════════════════════════════════════════════════════════════

📋 WORKFLOW COMPLETO

1. Fazer alterações locais
   → Edite arquivos

2. Verificar status:
   git status

3. Adicionar arquivos:
   git add .

4. Fazer commit:
   git commit -m "Descrição clara da mudança"

5. Enviar:
   git push origin main

6. Verificar online:
   → GitHub: github.com/seu-usuario/MocsSite
   → Site: seu-usuario.github.io/MocsSite

═══════════════════════════════════════════════════════════════════

🆘 ERRO COMUM: "fatal: not a git repository"

Solução:
   cd /workspaces/MocsSite
   git init
   git remote add origin https://github.com/seu-usuario/MocsSite.git
   git branch -M main
   git push -u origin main

═══════════════════════════════════════════════════════════════════

✅ SITE PRONTO PARA COMPARTILHAR!

Depois de fazer push, você pode:
   - Compartilhar link do site
   - Adicionar no currículo
   - Mostrar para a equipe MOCS
   - Receber feedback
   - Iterar e melhorar

═══════════════════════════════════════════════════════════════════

Pronto! Site do MOCS está online! 🎉

═══════════════════════════════════════════════════════════════════
