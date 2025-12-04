# 📊 GUIA DE GOOGLE SHEETS

## Como Configurar as Planilhas de Dados Dinâmicos

---

## 1️⃣ PLANILHA DE EQUIPE

**Nome:** `MOCS_Equipe` ou `Equipe`

| Nome | Cargo | Foto |
|------|-------|------|
| Ana Silva | Secretária Geral | https://randomuser.me/api/portraits/women/44.jpg |
| Carlos Souza | Diretor Acadêmico | https://randomuser.me/api/portraits/men/32.jpg |
| Beatriz Costa | Diretora Administrativa | https://randomuser.me/api/portraits/women/68.jpg |
| João Pedro | Head de Marketing | https://randomuser.me/api/portraits/men/85.jpg |
| Maria Santos | Diretora Acadêmica | https://randomuser.me/api/portraits/women/12.jpg |
| Lucas Oliveira | Diretor de Logística | https://randomuser.me/api/portraits/men/56.jpg |

**Colunas EXATAS:**
- `Nome` (texto)
- `Cargo` (texto)
- `Foto` (URL da imagem)

---

## 2️⃣ PLANILHA DE NOTÍCIAS

**Nome:** `MOCS_Noticias` ou `Noticias`

| Titulo | Data | Imagem | Link |
|--------|------|--------|------|
| Inscrições abertas para o MOCS XII | 04 Dez 2025 | https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80 | /pages/contato.html |
| Workshop de Oratória confirmado | 20 Nov 2025 | https://images.unsplash.com/photo-1475721027767-p753c96d996c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80 | # |
| Resultado da Seletiva de Staff | 15 Out 2025 | https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80 | # |
| MOCS em Sala iniciado | 10 Out 2025 | https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80 | # |

**Colunas EXATAS:**
- `Titulo` (texto)
- `Data` (data formatada DD MMM YYYY)
- `Imagem` (URL da imagem - mínimo 300x200px)
- `Link` (URL ou # para desabilitar)

---

## 3️⃣ PLANILHA DE PARCEIROS

**Nome:** `MOCS_Parceiros` ou `Parceiros`

| Nome |
|------|
| CEFET-MG |
| Diplomacia Civil |
| ONU Brasil |
| MinEduc BH |
| Secretaria de Estado de Educação |

**Colunas EXATAS:**
- `Nome` (texto)

---

## 🔧 PASSO A PASSO PARA PUBLICAR

### 1. Criar a Planilha
1. Abra Google Sheets: https://sheets.google.com
2. Clique em "Planilha em branco"
3. Adicione o título (ex: `MOCS_Equipe`)
4. Preencha os dados conforme tabelas acima

### 2. Tornar Pública
1. Clique em **"Compartilhar"** (canto superior direito)
2. Escolha **"Qualquer pessoa com o link"** > **"Editor"**
3. Copie o link (você precisará depois)

### 3. Publicar em CSV
1. No Google Sheets, clique em **"Arquivo"**
2. Clique em **"Compartilhar"** > **"Publicar na Web"**
3. Escolha:
   - Intervalo: **"Dados editáveis"** ou deixe automático
   - Formato: **"CSV (.csv)"**
4. Clique em **"Publicar"**
5. Copie a URL que aparece

### 4. Pegar o ID da Planilha
A URL será algo como:
```
https://docs.google.com/spreadsheets/d/1nRkZfx_k3qZ9z7xJxK8yQ9z_a7b8c9dEfGhIjK/pub?output=csv
```

O **ID** é: `1nRkZfx_k3qZ9z7xJxK8yQ9z_a7b8c9dEfGhIjK`

### 5. Editar js/sheets.js
Abra o arquivo `/js/sheets.js` e edite:

```javascript
const SHEET_CONFIG = {
    team: '1nRkZfx_k3qZ9z7xJxK8yQ9z_a7b8c9dEfGhIjK',      // Seu ID aqui
    news: '2pSqLfx_k4rZ9z8yKyL9zR0a_b8c9d0EfGhIjL',      // Seu ID aqui
    partners: '3qTrMfx_k5sZ9z9yLzM0aS1b_c9d0e1FfGhIjM'   // Seu ID aqui
};
```

### 6. Testar
1. Abra `index.html` no navegador
2. Role até "Equipe", "Notícias" e "Parceiros"
3. Verifique se os dados aparecem
4. Se não aparecer: 
   - Abra Console (F12)
   - Procure por erros vermelhos
   - Verifique se os IDs estão corretos

---

## 🎨 FONTES PARA IMAGENS

### Gerar Avatares
- https://randomuser.me/api/portraits/ (grátis, sem crédito)
- https://api.dicebear.com/9.x/ (vários estilos)

### Stock Photos
- https://unsplash.com/ (grátis)
- https://pexels.com/ (grátis)
- https://pixabay.com/ (grátis)

### Banners/Heróis
Procure por: "conference", "team", "meeting", "diplomacy"

---

## ❌ ERROS COMUNS

| Erro | Solução |
|------|---------|
| Nada aparece | Verifique IDs em `js/sheets.js` |
| Imagens em X | URL da imagem está quebrada |
| Dados não atualizam | Espere 1 minuto, atualize a página |
| Console diz "CORS" | Spreadsheet pode não estar público |
| Nomes com acentos viram lixo | Use encoding UTF-8 no Sheets |

---

## 💡 DICA PROFISSIONAL

Para **testar localmente** sem publicar na Web:

1. Copie a URL da planilha:
```
https://docs.google.com/spreadsheets/d/SEU_ID/edit
```

2. Mude para CSV:
```
https://docs.google.com/spreadsheets/d/SEU_ID/export?format=csv
```

3. Copie o ID e cole em `js/sheets.js`

---

## 🚀 PRÓXIMOS PASSOS

1. ✅ Criar as 3 planilhas
2. ✅ Preencher com dados reais
3. ✅ Obter os IDs
4. ✅ Editar `js/sheets.js`
5. ✅ Testar no navegador
6. ✅ Publicar online
7. ✅ Compartilhar o link!

---

**Dúvidas?** Verifique o console do navegador (F12) para mensagens de erro.
