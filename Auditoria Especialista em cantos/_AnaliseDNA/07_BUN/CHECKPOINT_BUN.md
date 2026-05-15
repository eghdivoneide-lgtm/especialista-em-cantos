# 🚦 CHECKPOINT — Bundesliga (BUN)

Gerado em **2026-05-14** · Validação rápida em 5 min

---

## 1. Sanity Check — Contagens

- **Jogos processados:** 288
- **Times no dataset:** 18
- **Times com DNA Escoteiro:** 18
- **Baseline da liga:** 9.73 cantos/jogo (σ=3.54)
- **Cobertura placar:** 35/288 (12.2%)

## 2. Distribuição de Categorias

| Categoria | Quantidade | Times |
|---|---|---|
| **ELITE** | 5 | Bayern Munich, Dortmund, RB Leipzig, Bayer Leverkusen, Stuttgart |
| **MÉDIO** | 8 | Hoffenheim, Mainz, Eintracht Frankfurt, Freiburg, Augsburg, FC Koln, B. Monchengladbach, Hamburger SV |
| **AZARÃO** | 5 | St. Pauli, Union Berlin, Werder Bremen, Wolfsburg, Heidenheim |

## 3. Top 5 e Bottom 5 PowerScore (sanity visual)

### 🥇 Top 5 (maior PowerScore)

| # | Time | PowerScore | Categoria | Perfil DNA | Forma | n |
|---|---|---|---|---|---|---|
| 1 | Bayern Munich | 97.2 | ELITE | OFENSIVO_SOLIDO | `VVVEV` | 32 |
| 2 | Dortmund | 91.7 | ELITE | OFENSIVO_SOLIDO | `DEEVV` | 32 |
| 3 | RB Leipzig | 86.1 | ELITE | OFENSIVO_SOLIDO | `DVVVV` | 32 |
| 4 | Bayer Leverkusen | 80.6 | ELITE | OFENSIVO | `EDEVV` | 32 |
| 5 | Stuttgart | 75 | ELITE | OFENSIVO | `VEDDV` | 32 |

### 🪨 Bottom 5 (menor PowerScore)

| # | Time | PowerScore | Categoria | Perfil DNA | Forma | n |
|---|---|---|---|---|---|---|
| 14 | St. Pauli | 25 | AZARÃO | VULNERAVEL | `EVVDE` | 32 |
| 15 | Union Berlin | 19.4 | AZARÃO | EQUILIBRADO | `DDEDV` | 32 |
| 16 | Werder Bremen | 13.9 | AZARÃO | EQUILIBRADO | `DDDDD` | 32 |
| 17 | Wolfsburg | 8.3 | AZARÃO | EQUILIBRADO | `DEDDD` | 32 |
| 18 | Heidenheim | 2.8 | AZARÃO | EQUILIBRADO | `DEDED` | 32 |

## 4. Frequência das 12 Assinaturas

| Assinatura | Times c/ presença | % times |
|---|---|---|
| RUPTURA_HOME | 6 | 33% |
| BLITZ_INICIAL | 4 | 22% |
| EFETIVIDADE_CLINICA | 3 | 17% |
| ELITE_KILLER | 3 | 17% |
| DESEQUILIBRA_FAVORITO | 3 | 17% |
| SUCUMBE_AZARAO | 1 | 6% |
| RETRANCA_AVANCADA | 0 | 0% |
| ATAQUE_ESTERIL | 0 | 0% |
| MURO_DEFENSIVO | 0 | 0% |
| DEFESA_PRECARIA | 0 | 0% |
| CARRINHO_FACIL | 0 | 0% |
| TERMOMETRO_FORMA | 0 | 0% |

## 5. Sample Size dos 6 Buckets (qualidade da matriz)

| Bucket | Consolidado (n≥5) | Sugestivo (n=3-4) | Insuficiente (n<3) | Padrão detectado |
|---|---|---|---|---|
| casa_vs_elite | 9 | 9 | 0 | **10** |
| casa_vs_medio | 18 | 0 | 0 | **7** |
| casa_vs_azarao | 9 | 9 | 0 | **14** |
| fora_vs_elite | 9 | 9 | 0 | **16** |
| fora_vs_medio | 18 | 0 | 0 | **3** |
| fora_vs_azarao | 9 | 9 | 0 | **12** |

## 6. Surpresas detectadas (top 3 para revisão visual)

> Nenhuma divergência grande encontrada — DNA Escoteiro e PowerScore estão alinhados.

## 7. Cálculo manual visível — 3 times para conferência

> Pegue uma calculadora. Os 3 times abaixo têm o PowerScore decomposto + 1 bucket detalhado. Se bater = metodologia consistente.

### Bayern Munich (ELITE)

**PowerScore decomposto:**

- gp_jogo = 3.53 → 3.53 × 30 = **105.9**
- gc_jogo = 1.09 → (2 - 1.09) × 20 = **18.2**
- forma = `VVVEV` → valores [1, 1, 1, 0.5, 1] → média = **0.9** × 25 = **22.5**
- v_pct = (casa 81% + fora 88%) / 2 = **84.5** × 0.25 = **21.13**
- **PowerRaw total = 167.73** → percentil na liga = **97.2** → categoria **ELITE**

**Bucket detalhado (fora_vs_medio, n=8, consolidado):**

- cantos pró média = **6** (σ=2)
- cantos sofridos média = **4.13** (σ=1.62)
- diferencial = **1.88** | win_rate_cantos = 50%
- variação vs baseline pró (6.44): **-6.8%**
- padrão detectado? **❌ NÃO**

### Augsburg (MÉDIO)

**PowerScore decomposto:**

- gp_jogo = 1.31 → 1.31 × 30 = **39.3**
- gc_jogo = 1.75 → (2 - 1.75) × 20 = **5**
- forma = `DVDED` → valores [0, 1, 0, 0.5, 0] → média = **0.3** × 25 = **7.5**
- v_pct = (casa 38% + fora 31%) / 2 = **34.5** × 0.25 = **8.63**
- **PowerRaw total = 60.43** → percentil na liga = **47.2** → categoria **MÉDIO**

**Bucket detalhado (fora_vs_medio, n=7, consolidado):**

- cantos pró média = **3.29** (σ=1.58)
- cantos sofridos média = **5.14** (σ=2.36)
- diferencial = **-1.86** | win_rate_cantos = 14.3%
- variação vs baseline pró (4.53): **-27.5%**
- padrão detectado? **✅ SIM**

### Heidenheim (AZARÃO)

**PowerScore decomposto:**

- gp_jogo = 1.19 → 1.19 × 30 = **35.7**
- gc_jogo = 2.16 → (2 - 2.16) × 20 = **-3.2**
- forma = `DEDED` → valores [0, 0.5, 0, 0.5, 0] → média = **0.2** × 25 = **5**
- v_pct = (casa 25% + fora 6%) / 2 = **15.5** × 0.25 = **3.88**
- **PowerRaw total = 41.37** → percentil na liga = **2.8** → categoria **AZARÃO**

**Bucket detalhado (casa_vs_medio, n=7, consolidado):**

- cantos pró média = **5.14** (σ=2.64)
- cantos sofridos média = **5.14** (σ=2.17)
- diferencial = **0** | win_rate_cantos = 71.4%
- variação vs baseline pró (4.5): **+14.3%**
- padrão detectado? **❌ NÃO**

## 8. Matriz DNA × DNA — Linhas-chave (top 5 por cantos totais)

| Mandante × Visitante | Cantos total | Mand × Vis | Dom mand % | n | Qualifier |
|---|---|---|---|---|---|
| CAMISA_ABERTA × EQUILIBRADO | **11.6** | 7 × 4.6 | 60% | 10 | consolidado |
| OFENSIVO_SOLIDO × EQUILIBRADO | **11** | 7.77 × 3.23 | 83.9% | 31 | consolidado |
| OFENSIVO_SOLIDO × OFENSIVO | **10.67** | 5.83 × 4.83 | 33.3% | 6 | consolidado |
| EQUILIBRADO × CAMISA_ABERTA | **10.6** | 5.1 × 5.5 | 30% | 10 | consolidado |
| OFENSIVO × EQUILIBRADO | **10.19** | 6.38 × 3.81 | 52.4% | 21 | consolidado |

## 9. Divergências DNA-Escoteiro × Performance Real

> Casos onde o perfil DNA promete uma coisa mas o PowerScore (performance recente real) entrega outra.
> Esses são os pontos onde o motor pode estar sendo enganado pelo DNA estático.

✅ Nenhuma divergência forte detectada — DNA Escoteiro e PowerScore alinhados.

## 10. Anomalias e limitações detectadas

- Cobertura de placar baixa (12.2%) → assinaturas EFETIVIDADE_CLINICA, ATAQUE_ESTERIL, MURO_DEFENSIVO, DEFESA_PRECARIA podem estar com baixa confiabilidade

---

## ✅ Decisão de aprovação

Se os números acima fazem sentido, autorize o processamento das outras 6 ligas. Caso contrário, indique o que precisa ser ajustado.
