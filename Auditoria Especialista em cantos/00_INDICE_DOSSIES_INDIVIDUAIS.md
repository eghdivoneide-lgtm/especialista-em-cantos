# 📚 ÍNDICE MESTRE — DOSSIÊS INDIVIDUAIS POR TIME
*Gerado 2026-06-02 · 288 dossiês em 12 ligas*

> Cada liga tem uma pasta `11_Dossiês Individuais/` contendo um arquivo `.md` por time.
> Formato: 5 blocos (Identidade/DNA → Análise jogo-a-jogo → Padrões → Análise cruzada → Perfil preditivo).
> Status de confiabilidade no header de cada dossiê.

## 📊 Distribuição

| # | Liga | Pasta | Times | Cobertura tática média |
|---|------|-------|-------|------------------------|
| 01 | Brasileirão Série A | `01_Brasileirão Série A/11_Dossiês Individuais/` | 20 | ⚠️ 47% (Vitória 94% ✅) |
| 02 | Major League Soccer | `02_Major League Soccer/11_Dossiês Individuais/` | 30 | ⚠️ verificar header |
| 03 | Liga Profesional (ARG) | `03_Liga Profesional (ARG)/11_Dossiês Individuais/` | 30 | ⚠️ verificar header |
| 04 | USL Championship | `04_USL Championship/11_Dossiês Individuais/` | 25 | ⚠️ verificar header |
| 05 | Bundesliga | `05_Bundesliga/11_Dossiês Individuais/` | 18 | ⚠️ verificar header |
| 06 | A-League | `06_A-League/11_Dossiês Individuais/` | 12 | ⚠️ verificar header |
| 08 | Primera Div. (CHI) | `08_Primera Div. (CHI)/11_Dossiês Individuais/` | 16 | ⚠️ verificar header |
| 09 | LigaPro (ECU) | `09_LigaPro (ECU)/11_Dossiês Individuais/` | 16 | ⚠️ verificar header |
| 10 | Primera B (ARG) — ARG_B + ARG_M | `10_Primera B (ARG)/11_Dossiês Individuais/` | 58 | ⚠️ verificar header |
| 12 | Liga One China (CHN_2) | `12_Liga One China/11_Dossiês Individuais/` | 24 | ⚠️ verificar header |
| 13 | Brasileirão Série B | `13_Brasileirão Série B/11_Dossiês Individuais/` | 20 | ⚠️ verificar header |
| 14 | J2 Japão | `14_J2-J3 Japão/11_Dossiês Individuais/` | 19 | ⚠️ verificar header |
| **TOTAL** | | | **288** | |

## 🎯 Status de qualidade por categoria de dossiê

### 🟢 Gold standard (escritos manualmente, narrativa rica)
- **BR Série A — Flamengo** ([Flamengo.md](01_Brasileirão%20Série%20A/11_Dossiês%20Individuais/Flamengo.md))
- **BR Série A — Palmeiras** ([Palmeiras.md](01_Brasileirão%20Série%20A/11_Dossiês%20Individuais/Palmeiras.md))

### 🟡 Premium (escritos manualmente)
- **BR Série A — Fluminense, Internacional, Vasco**

### 🟢 Padrão completo manual (BR Série A — demais 15 times)
- Athletico-PR, São Paulo, Bragantino, Cruzeiro, Coritiba, Bahia, Botafogo, Vitória, Grêmio, Atlético-MG, Corinthians, Santos, Mirassol, Remo, Chapecoense

### 🤖 Gerados automaticamente (template 5 blocos)
- Todas as outras **11 ligas** (268 dossiês)
- Cada dossiê tem header com status de confiabilidade
- Análise jogo-a-jogo automática (com tags 🟢/🟡 indicando dados completos vs parciais)

## ⚠️ Limitações estruturais (todos os bancos)

| Campo | Status | Onde NÃO usar |
|-------|--------|---------------|
| Árbitro | ❌ 0 jogos | Análise de "árbitro afeta pace" |
| Desfalques | ❌ 0 jogos | Análise de "titular X muda padrão" |
| H2H com cantos | ❌ (existe só com gols em `Yaaken-Scanner/yaaken-data/_quarentena/h2h_memoria_BR.js`) | H2H histórico cantos |
| Formação | 47-94% por liga | Padrão "vs adv com 4-3-3" precisa amostra |
| Posse | 47-94% por liga | Padrão "posse vs cantos" precisa amostra |

## 🔧 Scripts geradores

| Script | Função |
|--------|--------|
| `projeto-fantasma/_dossie_time_br.js` | Extrair dados de UM time (qualquer liga, ajustar arquivo) |
| `projeto-fantasma/_gerador_dossie_universal.js` | Gerar dossiê automático para TODOS os times de uma liga |
| `projeto-fantasma/_auditoria_banco_br.js` | Auditar cobertura do banco |
| `projeto-fantasma/_consolidar_fontes_br.js` | Mesclar especialista + HDP-Pro + refinados |
| `projeto-fantasma/_aplicar_header_br.js` | Aplicar headers de confiabilidade padronizados |

## 📈 Como usar operacionalmente

### Antes de apostar em qualquer jogo:
1. Abrir os 2 dossiês (mandante + visitante) da liga correspondente
2. Verificar o header de confiabilidade (✅/⚠️/🔴)
3. Cruzar TABELA + CANTOS de ambos os times (paradoxos importam!)
4. Olhar matriz preditiva do Bloco 5 nos dois dossiês
5. Se padrão emergente em ambos converge → sinal forte
6. Se diverge → sinal ambíguo, evitar HDP com sizing alto

### Padrões cross-liga validados (presentes em múltiplas ligas):
- **"Vence cedo recua extremo"** — Palmeiras/BR, Athletico-PR/BR, Cruzeiro/BR, várias confirmações outras ligas
- **"Perdendo casa = chove cantos"** — Inter/BR padrão master, SP/BR confirmado
- **"AZARÃO_C consistente"** — Coritiba/BR, Chapecoense/BR, Bot/BR

---

*Próximos passos sugeridos*:
1. Enriquecer dossiês das ligas auto-geradas com análise manual jogo-a-jogo (gold standard)
2. Reescraping para coletar árbitro/desfalques (precisa atualizar `flashscore-monster.js`)
3. H2H com cantos (precisa novo coletor)
4. Validar padrões cross-liga em backtest
