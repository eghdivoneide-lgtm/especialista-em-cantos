# 🚦 CHECKPOINT — Brasileirão Série B (BR_B)

Gerado em **2026-05-14** · Validação rápida em 5 min

---

## 1. Sanity Check — Contagens

- **Jogos processados:** 68
- **Times no dataset:** 20
- **Times com DNA Escoteiro:** 20
- **Baseline da liga:** 10.44 cantos/jogo (σ=4.13)
- **Cobertura placar:** 9/68 (13.2%)

## 2. Distribuição de Categorias

| Categoria | Quantidade | Times |
|---|---|---|
| **ELITE** | 6 | Sao Bernardo, Vila Nova FC, Fortaleza, Sport Recife, Operario-PR, Criciuma |
| **MÉDIO** | 8 | Botafogo SP, Ceara, Juventude, Avai, Novorizontino, Athletic Club, Atletico GO, Cuiaba |
| **AZARÃO** | 6 | Nautico, Goias, Ponte Preta, CRB, Londrina, America MG |

## 3. Top 5 e Bottom 5 PowerScore (sanity visual)

### 🥇 Top 5 (maior PowerScore)

| # | Time | PowerScore | Categoria | Perfil DNA | Forma | n |
|---|---|---|---|---|---|---|
| 1 | Sao Bernardo | 97.5 | ELITE | OFENSIVO | `DVVDE` | 6 |
| 2 | Vila Nova FC | 92.5 | ELITE | OFENSIVO | `EVVEV` | 7 |
| 3 | Fortaleza | 87.5 | ELITE | EQUILIBRADO | `VEVVE` | 7 |
| 4 | Sport Recife | 82.5 | ELITE | DEFENSIVO | `VEVEE` | 7 |
| 5 | Operario-PR | 77.5 | ELITE | DEFENSIVO | `DEEEV` | 7 |

### 🪨 Bottom 5 (menor PowerScore)

| # | Time | PowerScore | Categoria | Perfil DNA | Forma | n |
|---|---|---|---|---|---|---|
| 16 | Goias | 22.5 | AZARÃO | EQUILIBRADO | `DVDED` | 6 |
| 17 | Ponte Preta | 17.5 | AZARÃO | EQUILIBRADO | `DDEVD` | 7 |
| 18 | CRB | 12.5 | AZARÃO | EQUILIBRADO | `EDDDE` | 7 |
| 19 | Londrina | 7.5 | AZARÃO | EQUILIBRADO | `DEDDE` | 7 |
| 20 | America MG | 2.5 | AZARÃO | VULNERAVEL | `EDEDD` | 7 |

## 4. Frequência das 12 Assinaturas

| Assinatura | Times c/ presença | % times |
|---|---|---|
| RUPTURA_HOME | 10 | 50% |
| BLITZ_INICIAL | 8 | 40% |
| EFETIVIDADE_CLINICA | 4 | 20% |
| RETRANCA_AVANCADA | 3 | 15% |
| ATAQUE_ESTERIL | 2 | 10% |
| ELITE_KILLER | 1 | 5% |
| MURO_DEFENSIVO | 0 | 0% |
| DEFESA_PRECARIA | 0 | 0% |
| CARRINHO_FACIL | 0 | 0% |
| DESEQUILIBRA_FAVORITO | 0 | 0% |
| SUCUMBE_AZARAO | 0 | 0% |
| TERMOMETRO_FORMA | 0 | 0% |

## 5. Sample Size dos 6 Buckets (qualidade da matriz)

| Bucket | Consolidado (n≥5) | Sugestivo (n=3-4) | Insuficiente (n<3) | Padrão detectado |
|---|---|---|---|---|
| casa_vs_elite | 0 | 0 | 20 | **0** |
| casa_vs_medio | 0 | 2 | 18 | **0** |
| casa_vs_azarao | 0 | 1 | 19 | **1** |
| fora_vs_elite | 0 | 0 | 20 | **0** |
| fora_vs_medio | 0 | 2 | 18 | **1** |
| fora_vs_azarao | 0 | 0 | 20 | **0** |

## 6. Surpresas detectadas (top 3 para revisão visual)

1. **Sport Recife** — Perfil DNA "DEFENSIVO" com PowerScore alto (82.5) → ELITE. Esperar buckets com poucos cantos pró mas dominância via gols.
2. **Operario-PR** — Perfil DNA "DEFENSIVO" com PowerScore alto (77.5) → ELITE. Esperar buckets com poucos cantos pró mas dominância via gols.

## 7. Cálculo manual visível — 3 times para conferência

> Pegue uma calculadora. Os 3 times abaixo têm o PowerScore decomposto + 1 bucket detalhado. Se bater = metodologia consistente.

### Sao Bernardo (ELITE)

**PowerScore decomposto:**

- gp_jogo = 1.67 → 1.67 × 30 = **50.1**
- gc_jogo = 0.83 → (2 - 0.83) × 20 = **23.4**
- forma = `DVVDE` → valores [0, 1, 1, 0, 0.5] → média = **0.5** × 25 = **12.5**
- v_pct = (casa 33% + fora 67%) / 2 = **50** × 0.25 = **12.5**
- **PowerRaw total = 98.5** → percentil na liga = **97.5** → categoria **ELITE**

### Novorizontino (MÉDIO)

**PowerScore decomposto:**

- gp_jogo = 1.17 → 1.17 × 30 = **35.1**
- gc_jogo = 1 → (2 - 1) × 20 = **20**
- forma = `EDEVV` → valores [0.5, 0, 0.5, 1, 1] → média = **0.6** × 25 = **15**
- v_pct = (casa 33% + fora 33%) / 2 = **33** × 0.25 = **8.25**
- **PowerRaw total = 78.35** → percentil na liga = **50** → categoria **MÉDIO**

### America MG (AZARÃO)

**PowerScore decomposto:**

- gp_jogo = 0.57 → 0.57 × 30 = **17.1**
- gc_jogo = 1.71 → (2 - 1.71) × 20 = **5.8**
- forma = `EDEDD` → valores [0.5, 0, 0.5, 0, 0] → média = **0.2** × 25 = **5**
- v_pct = (casa 0% + fora 0%) / 2 = **0** × 0.25 = **0**
- **PowerRaw total = 27.9** → percentil na liga = **2.5** → categoria **AZARÃO**

## 8. Matriz DNA × DNA — Linhas-chave (top 5 por cantos totais)

| Mandante × Visitante | Cantos total | Mand × Vis | Dom mand % | n | Qualifier |
|---|---|---|---|---|---|
| DEFENSIVO × EQUILIBRADO | **13.33** | 9.22 × 4.11 | 100% | 9 | consolidado |
| EQUILIBRADO × DEFENSIVO | **12.43** | 7.71 × 4.71 | 57.1% | 7 | consolidado |
| DEFENSIVO × DEFENSIVO | **11.5** | 6.38 × 5.13 | 37.5% | 8 | consolidado |
| OFENSIVO × DEFENSIVO | **11.33** | 5.67 × 5.67 | 33.3% | 3 | sugestivo |
| EQUILIBRADO × VULNERAVEL | **11.33** | 3 × 8.33 | 0% | 3 | sugestivo |

## 9. Divergências DNA-Escoteiro × Performance Real

> Casos onde o perfil DNA promete uma coisa mas o PowerScore (performance recente real) entrega outra.
> Esses são os pontos onde o motor pode estar sendo enganado pelo DNA estático.

| Time | Categoria | Perfil DNA | Tipo de divergência | Severidade | Evidência |
|---|---|---|---|---|---|
| **Sao Bernardo** | ELITE | OFENSIVO | Ofensivo subentregando | MEDIA | cantos_pro=4.17 \| media_liga_cantos_pro=5.22 \| gap_vs_media_pct=20.1 \| gols_pro=3 \| power_score=97.5 \| n_jogos=6 |
| **Nautico** | AZARÃO | DEFENSIVO | Defensivo medíocre | MEDIA | cantos_sofridos=6 \| media_liga_cantos_sof=5.22 \| cantos_sof_vs_media_pct=14.9 \| acima_da_media=true \| gols_sofridos=1 \| power_score=27.5 \| n_jogos=7 |

## 10. Anomalias e limitações detectadas

- Cobertura de placar baixa (13.2%) → assinaturas EFETIVIDADE_CLINICA, ATAQUE_ESTERIL, MURO_DEFENSIVO, DEFESA_PRECARIA podem estar com baixa confiabilidade

---

## ✅ Decisão de aprovação

Se os números acima fazem sentido, autorize o processamento das outras 6 ligas. Caso contrário, indique o que precisa ser ajustado.
