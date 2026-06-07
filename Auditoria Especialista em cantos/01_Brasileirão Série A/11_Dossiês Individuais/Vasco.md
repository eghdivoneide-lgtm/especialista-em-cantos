# 📋 DOSSIÊ FORENSE — VASCO
*Brasileirão Série A 2026 · 17 jogos · gerado 2026-06-02*
> ⚠️ **DOSSIÊ PARCIAL — AUDITORIA PÓS-FATO identificou limitações**
> - **Jogos no banco**: 17
> - **Cobertura tática** (formação/posse/finalizações): **41%** (apenas 7 de 17 jogos)
> - **Saldo cantos** (banco completo): +1.59 → **ELITE_C** (#4 da liga)
> - **Pace médio**: 9.35 cantos/jogo
> - **Status oficial**: ⚠️ PARCIAL
>
> ⚠️ **NÃO USE este dossiê para**:
> - HDP cantos com sizing alto (amostra de formação/posse insuficiente)
> - Validação de padrões com N=1 (declare como hipótese, não padrão)
>
> ✅ **PODE USAR para**:
> - Pace médio e saldo de cantos (cobertura 100%)
> - Classificação ELITE_C/MÉDIO_C/AZARÃO_C (banco completo)
> - Padrões por placar HT/FT (cobertura 100%)
> - Padrões por mando (cobertura 100%)
>
> ❌ **Limitações estruturais do banco BR** (descartar análises sobre):
> - Árbitro (0 jogos no banco)
> - Desfalques/lesões (0 jogos)
> - H2H histórico com cantos (H2H existe no `Yaaken-Scanner` mas só com gols)
>
> 🔧 Banco mais rico disponível: `projeto-fantasma/_banco_br_consolidado.json` (179 jogos vs 167)

---


> **⚡ PARADOXO**: Vasco é **16º na tabela** (AZARÃO) mas **#4 em saldo de cantos** (+1.59, ELITE_C). Vasco PRESSIONA mais do que vence. Esse paradoxo é a chave.

> **Padrão EDS R3**: 7 jogos com dados completos (🟢) · 10 só placar+cantos (🟡).

---

# BLOCO 1 — IDENTIDADE E DNA DO TIME

## 1.1 Perfil tático atual

**Formação principal:** **4-2-3-1 em 6/7 jogos** (86%). Uma vez 4-4-2 (fora vs Fla — jogo importante, formação mais ofensiva). Quase rígido (parecido com Fla), exceto pelo ajuste pontual em decisões.

**Estilo de jogo predominante:** **time de POSSE com ALTA FINALIZAÇÃO mas baixa eficiência**.
- Posse média (7 jogos): **57.9%** (mediana 59%). Picos: 63% Botafogo casa, 62% SP casa, 60% Inter fora. Vale: 51% Fla fora.
- Finalizações pró média: **17.1** (alta!).
- Chutes no alvo: **5.0** (média) — converte mal.
- **NÃO É time defensivo** — mesmo perdendo na tabela, pressiona alto.

**Como se comporta por placar:**
- **VENCENDO**: **MANTÉM pressão** — vs Palm casa (V 2-1): cantos 9-5 (5-2 2T). Vs Flu casa (V 3-2): cantos 5-5 (4-3 2T). Vs Athletico casa (V 1-0): cantos 4-3.
- **PERDENDO**: pressiona com mais volume — vs Bot casa (D 1-2): 17 finalizações. Vs Brag casa (D 0-3): 14 fin, 6 cantos.
- **EMPATANDO**: mantém ritmo.

**Recua quando abre vantagem?** **NÃO de forma extrema**. Mais parecido com Flu — mantém identidade.

---

## 1.2 Contexto de temporada

- **Posição**: **16º** com 20 pts em 17 jogos (39.2%). **PERTO DO Z4**. Pressão de fuga.
- **Objetivo**: AFASTAR Z4. Cada ponto vale.
- **Forma recente** (últimos 6: 11/04 → 24/05):
  - vs Remo (F): **E 1-1** ⚠️
  - vs SP (C): **V 2-1** ✅ (PADRÃO PURO: virou jogo com cantos 5-2 HT)
  - vs Fla (F): **E 2-2** ⚠️
  - vs Athletico (C): **V 1-0** ✅
  - vs Inter (F): **D 1-4** ❌ (com vermelho)
  - vs Brag (C): **D 0-3** ❌
  - **Resumo**: 2V/2E/2D — fase regular. Pressão Z4 latente.

---

## 1.3 Perfil ofensivo e defensivo

- **Dominante territorialmente?** SIM — posse 57.9% média (alta). MAS conversão é fraca (22 gols pró em 17 = 1.29/jogo).
- **Médias finalizações**: 17.1 pró (alta!). Sof não calculada mas equilibrada.
- **Setores que geram mais cantos**: pelas pontas. Vasco tem laterais ativos.

---

# BLOCO 2 — ANÁLISE JOGO A JOGO (17 partidas)

---

## 🟢 1. 04.04.2026 — CASA — vs BOTAFOGO — D 1-2 — Cantos 3x2 — Total 5 ⚡

### Contexto pré-jogo
- **Importância**: Clássico carioca CASA. Vasco favorito (odd 1.91).
- **Momento Bot**: MÉDIO/AZARÃO_C. Pressão Z4 também.
- **Expectativa tática esperada**: jogo equilibrado, pace médio.

### O que aconteceu no jogo
- Vasco 4-2-3-1 vs Bot 4-3-3 (Bot OFENSIVO!).
- **Posse Vasco 63%**.
- Finalizações 17-18 (Bot chutou mais por contra-ataque!).
- HT cantos 2-1, 2T 1-1.
- **PACE 5** — outlier ABSURDO baixo!

### Análise de cantos individualizada
- **Por que 5 cantos só?** Clássico travado. Vasco dominou posse mas Bot ofensivo (4-3-3) jogou aberto. **Volume de finalização não virou cantos** — chutes diretos.
- **Coerente?** **NÃO** para Vasco ELITE_C (esperava-se 6+ cantos). **SIM** para Bot AZARÃO_C.
- **Era previsível?** UNDER 8.5 ouro (saiu 5). Pré-jogo difícil prever pace tão baixo.
- **Superestimamos**: Vasco em cantos casa.
- **Subestimamos**: o efeito "clássico travado".

### Aprendizado para o mercado
- **Sinal**: clássicos cariocas tendem a travar (Bot/Flu/Fla casos).
- **Classificação**: **OUTLIER EXPLICADO** (clássico + Bot AZARÃO_C).

---

## 🟢 2. 11.04.2026 — FORA — vs REMO — E 1-1 — Cantos 6x3 — Total 9

### Contexto pré-jogo
- **Importância**: FORA contra lanterna.
- **Expectativa tática esperada**: Vasco domina, mas Remo encastela.

### O que aconteceu no jogo
- Espelho 4-2-3-1.
- Posse Vasco 57%.
- Finalizações 19-12.
- HT 3-1, 2T 3-2.
- Empate 1-1.

### Análise de cantos individualizada
- **Por que 6x3?** Vasco padrão ELITE_C fora — pressiona, gera 6 cantos. Remo AZARÃO_C respondeu 3.
- **Coerente?** SIM total.
- **Era previsível?** OVER 8.5 razoável (saiu 9). Cantos PRÓ Vasco OVER 4.5 (saiu 6).
- **Classificação**: **CONFIRMOU PERFIL**.

---

## 🟢 3. 18.04.2026 — CASA — vs SÃO PAULO — V 2-1 — Cantos 6x5 — Total 11

### Contexto pré-jogo
- **Importância**: CASA contra ELITE/ELITE_C.
- **Expectativa tática esperada**: pace alto.

### O que aconteceu no jogo
- Espelho 4-2-3-1.
- **Posse Vasco 62%**.
- Finalizações 20-10 (massacre).
- HT cantos 5-2!! 2T cantos 1-3 (cedeu 2T).
- **SP fez gol HT (0-1)**. Vasco virou 2T com 2 gols.
- Padrão "perdendo HT casa, vira 2T com pressão".

### Análise de cantos individualizada
- **Por que 6x5?** Vasco perdendo HT pressionou desesperadamente (5-2 em cantos HT!), virou jogo. 2T administrou (cedeu cantos).
- **Coerente?** SIM total. Padrão Vasco perdendo casa = ataca.
- **Era previsível?** OVER 9.5 razoável (saiu 11). LIVE Vasco perdendo HT casa = cantos pró HT2 OVER 4.5 = ouro.
- **Superestimamos**: nada.
- **Subestimamos**: capacidade do Vasco de virar.

### Aprendizado para o mercado
- **Padrão**: Vasco casa perdendo HT = OVER cantos HT2.
- **Classificação**: **CONFIRMOU PERFIL** (Vasco ELITE_C real).

---

## 🟢 4. 03.05.2026 — FORA — vs FLAMENGO — E 2-2 — Cantos 6x5 — Total 11 ⚡

### Contexto pré-jogo
- **Importância**: Clássico FluFla-Vasco. CASA do Fla.
- **Expectativa tática esperada**: pace alto.

### O que aconteceu no jogo
- **Vasco 4-4-2 (ofensivo!) vs Fla 4-2-3-1**.
- **Posse Vasco 51%** (paridade no Maracanã!).
- **Finalizações: Vasco 20 x 12 Fla** (Vasco chutou MAIS na casa do rival!!).
- Chutes no alvo Vasco: 6.
- HT 2-3, 2T 4-2 (Vasco virou pace).
- Empate 2-2.

### Análise de cantos individualizada
- **Por que 6x5?** Vasco com 4-4-2 ofensivo + ELITE_C + jogo aberto = dominou cantos 2T. Fla padrão "casa contra ELITE_C aceita ser dominado".
- **Coerente?** SIM total para os dois.
- **Era previsível?** OVER 10.5 razoável (saiu 11). Cantos PRÓ Vasco OVER 4.5 = ouro mesmo fora (saiu 6).
- **Superestimamos**: Fla casa em cantos.
- **Subestimamos**: Vasco ousadia fora (4-4-2 atípico).

### Aprendizado para o mercado
- **Sinal**: Vasco com 4-4-2 fora = sinal de "vai pra cima" → OVER cantos PRÓ Vasco.
- **Classificação**: **CONFIRMOU PERFIL Vasco ELITE_C**.

---

## 🟢 5. 10.05.2026 — CASA — vs ATHLETICO-PR — V 1-0 — Cantos 4x3 — Total 7

### Contexto pré-jogo
- **Importância**: CASA contra ELITE (Athletico 4º).
- **Expectativa tática esperada**: pace alto (2 ELITES_C).

### O que aconteceu no jogo
- Vasco 4-2-3-1 vs Ath 3-4-2-1.
- Posse Vasco 53%.
- Finalizações 16-9 (dominou).
- HT cantos 4-2 (Vasco dominou HT), 2T 0-1 (RELAXOU 2T).
- V 1-0 (matou cedo, segurou).

### Análise de cantos individualizada
- **Por que 4x3 com pace 7?** Vasco matou cedo (1-0 HT), recuou 2T (0 cantos próprios 2T!). Athletico ELITE_C foi neutralizado.
- **Coerente?** **PARCIALMENTE**. Vasco recuou aqui (raro!). Athletico ELITE_C com 3 cantos é abaixo da média.
- **Era previsível?** UNDER 9.5 razoável (saiu 7). 
- **Superestimamos**: pace pré-jogo.
- **Subestimamos**: Vasco PODE recuar quando vence cedo.

### Aprendizado para o mercado
- **Sinal raro**: Vasco vencendo cedo casa = pode relaxar 2T (1 caso documentado).
- **Classificação**: **CONFIRMOU PERFIL parcial** (Vasco ELITE_C HT, mas 2T relaxou).

---

## 🟢🔴 6. 16.05.2026 — FORA — vs INTERNACIONAL — D 1-4 — Cantos 4x3 — Total 7

### Contexto pré-jogo
- **Importância**: FORA contra Inter (líder absoluto de cantos).
- **Expectativa tática esperada**: pace alto, Inter pressiona.

### O que aconteceu no jogo
- Vasco 4-2-3-1 vs Inter 4-4-2.
- Posse Vasco 60% (CEDEU contra Inter!).
- Finalizações 14-12 (equilibrado).
- **🔴 VASCO COM VERMELHO**.
- HT 0-1 em cantos (atípico!), 2T 4-2 pro Vasco.
- Resultado D 1-4 (Inter eficiência rara, ver Inter dossiê).

### Análise de cantos individualizada
- **Por que 4x3?** Vermelho do Vasco limitou. **OUTLIER duplo**: Inter normalmente domina cantos, aqui só 3. Vasco com vermelho foi pra cima 2T mesmo perdendo (4 cantos 2T).
- **Coerente?** **NÃO TOTAL** para Inter (atípico). **SIM** para Vasco perdendo (pressiona mesmo com 10).
- **Era previsível?** UNDER 9.5 saiu (7). Pré-jogo OVER esperado.
- **Superestimamos**: Inter neste jogo.

### Aprendizado para o mercado
- **Cuidado**: jogos com Inter podem ser outliers (vide SP 2-11).
- **Classificação**: **OUTLIER DUPLO**.

---

## 🟢 7. 24.05.2026 — CASA — vs BRAGANTINO — D 0-3 — Cantos 6x6 — Total 12

### Contexto pré-jogo
- **Importância**: CASA contra ELITE/MÉDIO_C.
- **Expectativa tática esperada**: pace alto.

### O que aconteceu no jogo
- Espelho 4-2-3-1.
- Posse Vasco 59%.
- Finalizações 14-21 (Brag chutou MAIS!).
- HT cantos 2-3, 2T 4-3.
- Resultado D 0-3 (Brag eficiência).

### Análise de cantos individualizada
- **Por que 6x6?** Pace alto. Brag (MÉDIO_C) gerou seus cantos. Vasco respondeu igualmente.
- **Coerente?** SIM total.
- **Era previsível?** OVER 11.5 razoável (saiu 12).
- **Classificação**: **CONFIRMOU PERFIL**.

---

## 🟡 8. 23.03.2026 — FORA — vs MIRASSOL — D 1-2 — Cantos 5x5 — Total 10

### Contexto e análise
- 2 ELITES_C jogando = empate em cantos esperado.
- Pace 10 mediano.
- **Classificação**: **CONFIRMOU PERFIL**.

---

## 🟡 9. 26.03.2026 — CASA — vs CHAPECOENSE — E 1-1 — Cantos 14x0 — Total 14 ⚡⚡⚡

### Contexto pré-jogo
- CASA contra LANTERNA absoluta.
- **Expectativa**: Vasco atropela.

### O que aconteceu
- **Cantos: 14-0** (saldo +14, ENTRE OS MAIORES DA TEMPORADA BR!).
- HT cantos **10-0!!!** (jogo decidido nos cantos HT).
- 2T 4-0.
- Resultado **EMPATE 1-1** apesar do massacre absoluto.

### Análise de cantos individualizada
- **Por que 14x0?** Vasco ELITE_C casa + Chape (lanterna absoluta AZARÃO_C) = explosão total. 10 cantos no HT é raríssimo. Chape com ZERO cantos em 90min.
- **Coerente?** SIM extremo.
- **Era previsível?** Cantos PRÓ Vasco OVER 8.5 = trade absurdo (saiu 14). UNDER 14.5 trade fácil (saiu 14 raspou).
- **Superestimamos**: conversão Vasco (empate 1-1 com 14 cantos!).
- **Subestimamos**: nada cantos.

### Aprendizado para o mercado
- **Padrão**: Vasco casa vs Chape/Remo (lanternas reais) = OVER cantos pró 8.5 garantido.
- **Classificação**: **CONFIRMOU PERFIL** versão extrema.

---

## 🟡 10. 27.03.2026 — CASA — vs BAHIA — D 0-1 — Cantos 8x4 — Total 12

### Contexto e análise
- Vasco casa pressionou (8 cantos, HT 5-4 alto), perdeu por eficiência Bahia.
- **Classificação**: **CONFIRMOU PERFIL** (Vasco casa pressiona mesmo MÉDIO_C).

---

## 🟡 11. 30.03.2026 — FORA — vs SANTOS — D 1-2 — Cantos 2x5 — Total 7 ⚡

### Contexto e análise
- **Vasco com APENAS 2 CANTOS fora** (atípico!).
- HT 1-5 pro Santos (Vasco dominado HT).
- Possivel fadiga (3º jogo em 4 dias).
- **Classificação**: **OUTLIER por fadiga**.

---

## 🟡 12. 31.03.2026 — CASA — vs PALMEIRAS — V 2-1 — Cantos 9x5 — Total 14 ⚡

### Contexto e análise
- Vasco CASA contra LÍDER, V 2-1.
- Cantos 9-5 (DOMINOU em cantos contra líder!).
- HT 4-3, 2T 5-2.
- **Padrão MASTER**: Vasco casa vs grande = OVER pró garantido. Palm padrão "fora pode perder pace".
- **Classificação**: **CONFIRMOU PERFIL** (Vasco ELITE_C casa + Palm fora vulnerável).

---

## 🟡 13. 02.04.2026 — FORA — vs CRUZEIRO — E 3-3 — Cantos 4x5 — Total 9

### Contexto e análise
- 2 ELITES_C = pace alto razoável (9).
- Jogo aberto (3-3 em gols!).
- **Classificação**: **CONFIRMOU PERFIL** (jogo de gols).

---

## 🟡 14. 03.04.2026 — CASA — vs FLUMINENSE — V 3-2 — Cantos 5x5 — Total 10

### Contexto e análise
- 2 ELITES_C — pace alto esperado.
- Empate cantos. Vasco eficiência.
- **Classificação**: **CONFIRMOU PERFIL**.

---

## 🟡 15. 04.04.2026 — CASA — vs GRÊMIO — V 2-1 — Cantos 0x2 — Total 2 ⚡⚡⚡

### Contexto e análise
- **PACE 2 — OUTLIER ABSOLUTO MÍNIMO**.
- Vasco com ZERO cantos em casa contra Grêmio.
- Provável: fadiga extrema (5º jogo em 8 dias?) ou estado estranho do gramado.
- **Classificação**: **OUTLIER INEXPLICÁVEL ESTATISTICAMENTE**.

---

## 🟡 16. 07.04.2026 — FORA — vs CORITIBA — E 1-1 — Cantos 4x3 — Total 7

### Contexto e análise
- 2 AZARÃOS_C jogando (mesmo Vasco ELITE_C, contexto FORA + Cor AZARÃO_C) = pace baixo.
- **Classificação**: **CONFIRMOU PERFIL** (jogo travado).

---

## 🟡 17. 26.04.2026 — FORA — vs CORINTHIANS — D 0-1 — Cantos 7x5 — Total 12

### Contexto e análise
- Vasco fora com 7 cantos (alta — ELITE_C confirmou).
- HT 2-4 (cedeu HT), 2T 5-1 (atropelou 2T mesmo perdendo!).
- **Padrão**: Vasco perdendo = ataca 2T.
- **Classificação**: **CONFIRMOU PERFIL**.

---

# BLOCO 3 — PADRÕES COMPORTAMENTAIS

## 3.1 Padrões por mando

| Métrica | CASA (9) | FORA (8) | Diferença |
|---------|----------|----------|-----------|
| Pace médio | **9.67** | **9.00** | quase igual |
| Saldo cantos | **+2.56** | **+0.50** | gap de 2 |

## 3.2 Padrões por força do adv (TABELA)

| Categoria | n | Saldo | Comportamento |
|-----------|---|-------|---------------|
| ELITE | 7 | **+0.7** | Equilibra |
| MÉDIO | 4 | **+0.0** | Mediano |
| AZARÃO | 6 | **+3.5** | Domina forte |

## 3.3 Padrões por força do adv (CANTOS)

| Categoria | n | Saldo | Comportamento |
|-----------|---|-------|---------------|
| ELITE_C | 7 | **+0.3** | Equilibra |
| MÉDIO_C | 5 | **+0.6** | Mediano |
| AZARÃO_C | 5 | **+4.4** | Domina extremo (Chape +14!) |

## 3.4 Padrões por placar

- **Perdendo CASA**: pressiona (Botafogo 17 fin, SP virou jogo, Brag 14 fin)
- **Perdendo FORA**: atacou 2T (Cor 5-1 2T, Inter 4-2 com vermelho)
- **Vencendo cedo casa**: PODE relaxar (Athletico 0-1 2T)

## 3.5 Padrões por fase

- HT pesado pró Vasco quando casa vs AZARÃO_C (Chape 10-0)
- 2T pesado pró quando perdendo
- Outliers de pace baixo aparecem em fadiga (Santos 2-5, Grêmio 0-2)

## 3.6 Adversários específicos

- PRÓ Vasco: Chape (massacre), Remo, Botafogo casa
- CONTRA Vasco: Bot (clássico trava), Santos (cantos negativos)

---

# BLOCO 4 — ANÁLISE CRUZADA

## 🔴 Vs BLOCO BAIXO
- Vasco FURA (Chape 14-0, Coritiba 4-3 cedeu).
- Implicação: cantos pró Vasco OVER 5.5 contra encastelados em casa.

## 🟢 Vs PRESSÃO ALTA
- Aceita pressão, joga aberto, pace explode (Bahia, Brag).

## ⚖️ Vs TÉCNICO SUPERIOR
- MANTÉM identidade — vide Palm casa 9-5 (V!!), Flu casa 5-5 (V), Fla fora 6-5 (E).

## 🔻 Vs INFERIOR
- DOMINA cantos extremamente (Chape 14-0).

## 🚨 SUBESTIMAMOS
- Botafogo clássico (trava jogo).
- Santos fora (gerou cantos contra paradoxal).

## 🚨 SUPERESTIMAMOS
- Vasco em alguns jogos específicos (fadiga não calculável).

---

# BLOCO 5 — PERFIL PREDITIVO

## 5.1 — Matriz por adversário

| Cenário | Adv tabela | Adv cantos | Mando | Pace | Saldo Vasco | Mercado |
|---------|-----------|-----------|-------|------|-------------|---------|
| A | ELITE | ELITE_C | CASA | médio (7-12) | +0 a +4 | OVER 9.5 + cantos pró OVER 4.5 |
| B | ELITE | ELITE_C | FORA | médio (9-11) | +0 a +2 | OVER 9.5 (Vasco mantém pace fora) |
| C | ELITE | MÉDIO_C | qq | médio (10-12) | 0 a +4 | OVER 10.5 |
| D | MÉDIO | MÉDIO_C | qq | médio (8-12) | +2 | OVER 9.5 |
| E | AZAR | AZARÃO_C | CASA | médio-alto (10-14) | **+5 a +14 ⚡** | **cantos pró Vasco OVER 7.5** |
| F | AZAR | AZARÃO_C | FORA | baixo (6-9) | 0 a +3 | UNDER 9.5 |

## 5.2 — Padrões sempre aplicáveis

1. **ELITE_C real** — vai pra cima em qualquer mando.
2. **Casa vs AZARÃO_C lanterna** = atropela em cantos.
3. **Perdendo = pressiona** em ambos mandos.
4. **Posse alta** (57.9% média).
5. **Pode jogar 4-4-2 ofensivo** em jogos decisivos fora.

## 5.3 — Fatores de risco

| Fator | Impacto |
|-------|---------|
| Fadiga (3+ jogos em 4 dias) | Pace despenca (Santos 2-5, Grêmio 0-2 outliers) |
| Vermelho | Reduz mas mantém pressão 2T |
| Clássico carioca | Tende a travar (Bot 3-2) |
| Pressão Z4 | Pode quebrar consistência |

## 5.4 — Mercados sugeridos

### ALTO VALOR
- Vasco casa vs lanterna/AZARÃO_C → cantos pró OVER 6.5 (Chape 14, Palm 9, Flu 5, Bahia 8)
- Vasco fora vs grande → OVER 9.5 (Fla 11, Palm fora — em qualquer mando)
- LIVE Vasco perdendo HT casa → cantos pró HT2 OVER 4.5

### EVITAR
- ❌ UNDER em jogo do Vasco (ELITE_C garante pace)
- ❌ Apostar contra Vasco em casa de tabela (paradoxo)

## 5.5 — Confiança: 🟢 ALTA

- ELITE_C consistente (saldo +1.59 em 17 jogos).
- Outliers (Grêmio 0-2, Bot 3-2) explicáveis por fadiga/clássicos.

---

# 📌 CHECKLIST

1. CASA ou FORA? (casa +2.56, fora +0.5)
2. Tabela vs Cantos do adv? (PARADOXO Vasco = aposta contra a tabela é boa)
3. Formação? (4-4-2 do Vasco = ofensivo)
4. Fadiga? (atenção sempre)
5. Placar HT? Vasco perdendo casa = pressiona

---

*Dossiê forense — 17 partidas BR 2026.*
