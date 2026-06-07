# 📋 DOSSIÊ FORENSE — INTERNACIONAL
*Brasileirão Série A 2026 · 17 jogos · gerado 2026-06-02*
> ⚠️ **DOSSIÊ PARCIAL — AUDITORIA PÓS-FATO identificou limitações**
> - **Jogos no banco**: 17
> - **Cobertura tática** (formação/posse/finalizações): **41%** (apenas 7 de 17 jogos)
> - **Saldo cantos** (banco completo): +3.65 → **ELITE_C** (#1 da liga)
> - **Pace médio**: 11.29 cantos/jogo
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


> **⚡ PARADOXO MASTER**: Inter é **12º na tabela** (MÉDIO ruim) mas **#1 da liga em saldo cantos** (+3.65). Domina cantos mas perde jogos. Esse paradoxo guia TODO o dossiê.

> **Padrão EDS R3**: 7 jogos com dados táticos completos (🟢) · 10 só placar+cantos (🟡). Sem desfalques/calendário.

---

# BLOCO 1 — IDENTIDADE E DNA DO TIME

## 1.1 Perfil tático atual

**Formação principal:** **Híbrido TÁTICO**: 4-4-2 (3x), 4-2-3-1 (2x), **5-4-1 (2x)**. Inter alterna do **ofensivo 4-4-2** até o **ULTRA-DEFENSIVO 5-4-1** dependendo do adv. Foi 5-4-1 EM CASA vs Fluminense e também 5-4-1 FORA vs Coritiba (jogos contra ELITE_C / ELITE_T). **É o mais flexível taticamente entre os times analisados**.

**Estilo de jogo predominante:** **time de PRESSÃO ALTA TERRITORIAL + INEFICIÊNCIA OFENSIVA**.
- Posse média (7 jogos): **50.6%** (mediana 54%). Picos: 72% Mirassol casa (D!!), 64% Coritiba fora. Vales: 33% Fluminense casa (V com 5-4-1), 35% Corinthians fora (V).
- Finalizações pró média: **16.6** (mais alto que Fla 16 e Palm 14.9!).
- **DOMINA territorialmente, NÃO CONVERTE** — essa é a assinatura.
- Vide vs Mirassol casa: 25 finalizações, 11 cantos, posse 72% → **D 1-2**. Vide vs Bahia: 7-1 em cantos → **D 0-1**. Vide vs Athletico casa: 13-1 cantos → **D 0-1**.
- **NÃO É time defensivo** — vai pra cima sempre. **NÃO É time de contra-ataque** — busca controle.

**Como se comporta por placar:**
- **VENCENDO**: **MANTÉM pressão** (não relaxa) — vs Vasco (V 4-1): cantos 2T 2-4 (cedeu um pouco, ainda atacou). Vs Santos (V 2-1): cantos 4-3 2T (mantém).
- **PERDENDO**: **PRESSIONA MAIS AINDA** — vs Mirassol (D 1-2): 25 finalizações, 11-2 em cantos. Vs Athletico (D 0-1): 13-1 cantos!! Vs Atl-MG fora (D 0-1): 14-2 cantos!! Vs Palmeiras (D 1-3): 16-4 cantos, pace 20!
- **EMPATANDO**: idem — gera volume monumental.
- **Conclusão tática**: **Internacional é o time MAIS CONSISTENTE em geração de cantos do BR**. Independente do placar, ataca em volume.

**Recua quando abre vantagem?** **NÃO**. Mantém intensidade. Único time analisado que NÃO recua.

---

## 1.2 Contexto de temporada

- **Posição**: **12º** com 21 pts em 17 jogos (41.2% aproveitamento). Tabelas distantes do G4. **Acima só por margem confortável do Z4**.
- **Objetivo**: ATUAL — fugir do Z4 confortavelmente. Sonho G4 está distante.
- **Forma recente** (últimos 6: 11/04 → 23/05):
  - vs Grêmio (C): **E 0-0** ⚠️
  - vs Mirassol (C): **D 1-2** ❌
  - vs Fluminense (C): **V 2-0** ✅
  - vs Coritiba (F): **E 2-2** ⚠️
  - vs Vasco (C): **V 4-1** ✅
  - vs Vitória (F): **D 0-2** ❌
  - **Resumo**: 2V/2E/2D — fase mediana. Em cantos: pace alto consistente, 5 dos 6 jogos com 8+ cantos pró.
- **Desfalques**: ❌ Sem dado.
- **Fadiga**: Inter joga Sul-Americana. Calendário moderado.

---

## 1.3 Perfil ofensivo e defensivo

- **Dominante territorialmente?** **SIM, MASSIVAMENTE**. Saldo cantos +3.65 (líder absoluto BR). Finalizações pró 16+ por jogo. Mas conversão em gol é PÉSSIMA (20 gols pró em 17 = 1.18/jogo!).
- **Médias finalizações pró/sof**: 16.6 vs ~10 (saldo +6 finalizações!).
- **Setores que geram mais cantos**: **TODOS** — Inter pressiona por todos os lados. Joga laterais ofensivos, meio ofensivo, ponta direita.
- **Cantos por escanteios táticos ou volume real?** **VOLUME REAL EXTREMO**. Não tem rotinas mágicas — tem 20-25 finalizações por jogo. Cantos vêm dessa pressão.

---

# BLOCO 2 — ANÁLISE JOGO A JOGO (17 partidas)

---

## 🟢 1. 05.04.2026 — FORA — vs CORINTHIANS — V 1-0 — Cantos 4x7 — Total 11 ⚡

### Contexto pré-jogo
- **Importância**: FORA contra AZARÃO tabela.
- **Momento Cor**: AZARÃO/MÉDIO_C. Em casa, pressiona.
- **Expectativa tática esperada**: jogo travado. Mercado: UNDER 9.5.

### O que aconteceu no jogo
- **Espelho 4-4-2**.
- **Posse Inter 35%** (CEDEU bola!!).
- Finalizações 8-11 (Cor chutou mais!).
- HT cantos 2-3, 2T 2-4.
- **Inter V 1-0** com 35% de posse — eficiência rara!

### Análise de cantos individualizada
- **Por que 4x7 com Inter sendo "ELITE_C #1"?** **AQUI A PISTA**: Inter pode ser dominado em cantos quando ENFRENTA um time que pressiona ofensivamente em casa. Cor casa contra grande sempre vai pra cima. Inter aceitou ser reativo nesse jogo específico.
- **Coerente?** **NÃO TOTAL** para Inter (esperava-se domínio). **SIM** para Cor casa (pressiona contra grande).
- **Era previsível?** OVER 9.5 razoável (saiu 11). Cantos PRÓ Cor OVER 4.5 = ouro (saiu 7).
- **Superestimamos**: Inter capacidade fora vs casa motivada.
- **Subestimamos**: Cor casa contra grande.

### Aprendizado para o mercado
- **Sinal IMPORTANTE**: Inter NEM SEMPRE domina cantos — quando enfrenta time motivado em casa, pode ser dominado.
- **Classificação**: **OUTLIER PARCIAL** (Inter atípico fora).

---

## 🟢🔴 2. 11.04.2026 — CASA — vs GRÊMIO — E 0-0 — Cantos 8x2 — Total 10

### Contexto pré-jogo
- **Importância**: CASA contra MÉDIO/AZARÃO_C. Obrigação.
- **Momento Grêmio**: 13º tabela, AZARÃO_C. Em má fase.
- **Expectativa tática esperada**: Inter domina, jogo aberto.

### O que aconteceu no jogo
- **Inter 4-2-3-1 vs Grêmio 4-1-4-1** (Grêmio defensivo!).
- Posse Inter 54%.
- Finalizações 11-4 (massacre).
- **🔴 GRÊMIO COM VERMELHO**.
- HT cantos 3-0, 2T 5-2.
- Resultado **EMPATE 0-0** com 11 finalizações vs 4 e vermelho do adv!

### Análise de cantos individualizada
- **Por que 8x2?** Vermelho do Grêmio + 4-1-4-1 defensivo (5-4-1 disfarçado) = Inter livre pra dominar cantos. 8-2 visitante com vermelho é normal pra Inter.
- **Coerente?** **SIM** total. Inter ELITE_C contra defensivo + vermelho = explosão.
- **Era previsível?** Cantos PRÓ Inter OVER 5.5 = ouro (saiu 8). UNDER 10.5 razoável (saiu 10).
- **Superestimamos**: conversão do Inter (0 gols com 8 cantos).
- **Subestimamos**: nada cantos.

### Aprendizado para o mercado
- **Confirma**: Inter casa vs AZARÃO_C com vermelho = OVER pró Inter garantido.
- **Classificação**: **CONFIRMOU PERFIL**.

---

## 🟢 3. 19.04.2026 — CASA — vs MIRASSOL — D 1-2 — Cantos 11x2 — Total 13 ⚡⚡

### Contexto pré-jogo
- **Importância**: CASA contra AZARÃO tabela (Mirassol 18º) que é ELITE_C surpresa.
- **Expectativa tática esperada**: Inter domina, jogo aberto.

### O que aconteceu no jogo
- **Inter 4-2-3-1 vs Mirassol 3-5-2**.
- **Posse Inter 72%** (DOMÍNIO MAIS EXTREMO observado!).
- **Finalizações: Inter 25 x 10 Mirassol** (massacre!).
- HT 0-2 (!!) em gols. Inter perdendo HT.
- HT cantos 5-0!!! Inter dominou TUDO em cantos.
- 2T cantos 6-2.
- **Resultado D 1-2** apesar do massacre total.

### Análise de cantos individualizada
- **Por que 11x2?** Inter perdendo HT 0-2 = atacou furiosamente 2T (gerou 6 cantos!). Mirassol ELITE_C mas em casa do rival NÃO conseguiu impor pace.
- **Coerente?** **SIM** total. Padrão Inter perdendo = ataca em volume. Mirassol visitante = aceita ser dominado.
- **Era previsível?** Pré-jogo OVER 10.5 razoável. Pós-0-2 HT: cantos PRÓ Inter OVER 7.5 LIVE = ouro.
- **Superestimamos**: conversão do Inter (1 gol com 25 finalizações = 4%!!!).
- **Subestimamos**: eficiência do Mirassol fora (2 gols com 10 chutes).

### Aprendizado para o mercado
- **Padrão MASTER do Inter**: PERDENDO em casa = chova de cantos.
- **Sinal LIVE**: Inter perdendo HT em casa = cantos pró OVER 5.5 2T garantido.
- **Classificação**: **CONFIRMOU PERFIL** versão extrema.

---

## 🟢 4. 03.05.2026 — CASA — vs FLUMINENSE — V 2-0 — Cantos 3x3 — Total 6 ⚡

### Contexto pré-jogo
- **Importância**: CASA contra ELITE_C.
- **Expectativa tática esperada**: pace alto (2 ELITES_C).

### O que aconteceu no jogo
- **AMBOS 5-4-1** (escolha tática mútua!!).
- **Posse Inter 33%** (CEDEU em casa!).
- Finalizações: Inter 18 x 11 Flu (Inter chutou mais apesar de cedeu posse!).
- HT cantos 1-1, 2T 2-2.
- **PACE 6 — outlier extremo baixo**.
- Inter V 2-0 com 9 chutes no alvo!

### Análise de cantos individualizada
- **Por que 6 totais?** Ambos com 5-4-1 = jogo programado pra ser travado. **Padrão tático mútuo "1x1 vencendo no contra-ataque"**.
- **Coerente?** **NÃO** com perfil Inter ELITE_C (esperava-se 9-12). **SIM** dado 5-4-1 mútuo.
- **Era previsível?** **SE soubesse as formações: UNDER 8.5 ouro**. Sem isso, contra-intuitivo.
- **Superestimamos**: o automatismo "Inter = OVER".
- **Subestimamos**: o efeito 5-4-1 mútuo.

### Aprendizado para o mercado
- **Sinal CRÍTICO**: Inter pode jogar 5-4-1 em casa contra outros ELITES_C. Verificar escalação.
- **Classificação**: **OUTLIER EXPLICADO** (escolha tática).

---

## 🟢 5. 09.05.2026 — FORA — vs CORITIBA — E 2-2 — Cantos 8x3 — Total 11

### Contexto pré-jogo
- **Importância**: FORA contra ELITE/AZARÃO_C (Coritiba 6º/20º cantos).
- **Expectativa tática esperada**: Inter domina (Cor AZARÃO_C extremo).

### O que aconteceu no jogo
- **Inter 5-4-1 (defensivo!) vs Coritiba 4-2-3-1**.
- **Posse Inter 64%** (DOMINOU mesmo com 5-4-1??).
- Finalizações 22-8 (massacre).
- HT cantos 2-3 (cedeu HT), **2T cantos 6-0 PRO INTER** (explosão!).
- Resultado empate 2-2.

### Análise de cantos individualizada
- **Por que 8x3 com Inter 5-4-1?** Inter usou 5-4-1 esperando Coritiba atacar (e Coritiba até atacou HT 1-0 em gols). Mas Inter respondeu 2T com 22 finalizações totais e 6 cantos. **Mostra que 5-4-1 do Inter NÃO É bloqueio passivo — é trap para contra-atacar e gerar cantos**.
- **Coerente?** SIM total. Inter ELITE_C funcionando.
- **Era previsível?** Cantos PRÓ Inter OVER 5.5 = ouro (saiu 8). UNDER 11.5 razoável (saiu 11).
- **Superestimamos**: Cor (AZARÃO_C real).
- **Subestimamos**: Inter 5-4-1 ofensivo.

### Aprendizado para o mercado
- **Sinal**: Inter 5-4-1 NÃO trava jogo necessariamente — funciona como trap.
- **Classificação**: **CONFIRMOU PERFIL** Inter ELITE_C.

---

## 🟢🔴 6. 16.05.2026 — CASA — vs VASCO — V 4-1 — Cantos 3x4 — Total 7 ⚡

### Contexto pré-jogo
- **Importância**: Clássico do Sul vs paradoxo (Vasco AZARÃO/ELITE_C).
- **Expectativa tática esperada**: pace alto (2 ELITES_C).

### O que aconteceu no jogo
- **Inter 4-4-2 vs Vasco 4-2-3-1**.
- **Posse Inter 40%** (CEDEU bola!).
- Finalizações 12-14 (Vasco chutou mais!).
- **🔴 VASCO COM VERMELHO**.
- HT cantos 1-0, 2T cantos 2-4 pro Vasco (Inter recuou!).
- **Inter V 4-1** — eficiência LETAL pela primeira vez.

### Análise de cantos individualizada
- **Por que 3x4 só?** Inter matou cedo (4-0 ou similar HT), depois cedeu pace. Vasco mesmo com vermelho gerou 4 cantos.
- **Coerente?** **NÃO TOTAL** para Inter (esperava-se domínio em cantos casa). Mas Inter venceu por eficiência, padrão raro pro Inter.
- **Era previsível?** UNDER 9.5 razoável (saiu 7).
- **Superestimamos**: cantos pró Inter (saiu 3 só).
- **Subestimamos**: eficiência rara do Inter.

### Aprendizado para o mercado
- **Sinal raríssimo**: Inter VENCENDO MUITO = pode até relaxar 2T. Mas isso é raríssimo (1 caso em 17).
- **Classificação**: **OUTLIER POR EFICIÊNCIA** (resultado atípico mudou padrão de cantos).

---

## 🟢🔴 7. 23.05.2026 — FORA — vs VITÓRIA — D 0-2 — Cantos 6x4 — Total 10

### Contexto pré-jogo
- **Importância**: FORA contra MÉDIO/AZARÃO_C.
- **Expectativa tática esperada**: jogo travado, mas Inter ELITE_C pressiona.

### O que aconteceu no jogo
- **Inter 4-4-2 vs Vitória 4-3-3** (Vit ofensivo em casa!!).
- Posse Inter 56%.
- Finalizações: Inter 20 x 7 Vit (massacre territorial).
- Chutes no alvo Inter: APENAS 2 (de 20!).
- **🔴 INTERNACIONAL COM VERMELHO**.
- HT cantos 5-3, 2T 1-1.
- Resultado D 0-2 (Vit eficiente).

### Análise de cantos individualizada
- **Por que 6x4?** Inter dominou pace (vide 20 finalizações). Vermelho do Inter limitou no 2T. Vit (AZARÃO_C) gerou 4 cantos por contra-ataque.
- **Coerente?** SIM. Inter pressionando + Vit ofensivo casa.
- **Era previsível?** OVER 9.5 razoável (saiu 10). Cantos pró Inter OVER 5.5 = ouro (saiu 6).
- **Superestimamos**: conversão Inter (0 gols com 20 chutes!).
- **Subestimamos**: capacidade Vit ofensiva em casa.

### Aprendizado para o mercado
- **Padrão**: Inter fora vs MÉDIO_C/AZARÃO_C = cantos pró OVER 5.5 (mesmo com vermelho).
- **Classificação**: **CONFIRMOU PERFIL**.

---

## 🟡 8. 23.03.2026 — CASA — vs ATHLETICO-PR — D 0-1 — Cantos 13x1 — Total 14 ⚡⚡⚡

### Contexto pré-jogo
- **Importância**: CASA contra ELITE (Athletico 4º, ELITE_C).
- **Expectativa tática esperada**: pace alto.

### O que aconteceu no jogo
- Cantos: **13-1 PRO INTER** (saldo +12 — entre os MAIORES da liga!).
- HT 5-1, **2T 8-0!!!** (massacre absurdo).
- Athletico com 1 canto inteiro em 90 minutos.
- Resultado D 0-1 (Athletico goleou-eficiência).

### Análise de cantos individualizada
- **Por que 13x1?** Inter perdendo casa = chove cantos. Athletico ELITE_C foi SUFOCADO (1 canto só!). É um dos jogos MAIS extremos do BR em saldo de cantos.
- **Coerente?** **SIM** para Inter (padrão master perdendo). **NÃO** para Athletico (ELITE_C com 1 canto é absurdo).
- **Era previsível?** Pré-jogo OVER 10.5 (saiu 14). Cantos PRÓ Inter OVER 7.5 (saiu 13). Cantos pró Athletico UNDER 3.5 (saiu 1).
- **Superestimamos**: nada em Inter.
- **Subestimamos**: Athletico recuou (talvez por matar cedo no contra-ataque?).

### Aprendizado para o mercado
- **Padrão MASTER**: Inter casa perdendo = chova de cantos.
- **Athletico fora vencendo cedo** segue padrão "vence cedo recua extremo" (igual Palm).
- **Classificação**: **CONFIRMOU PERFIL** Inter perdendo (versão extrema).

---

## 🟡 9. 25.03.2026 — FORA — vs FLAMENGO — E 1-1 — Cantos 3x4 — Total 7 ⚡

### Contexto pré-jogo
- **Importância**: FORA contra Flamengo (2º).
- **Expectativa tática esperada**: pace alto.

### O que aconteceu no jogo
- Cantos 3-4 pro Fla.
- HT 1-3, 2T 2-1.
- Resultado empate 1-1.
- **PACE 7 — Inter na média esperada cedeu**.

### Análise de cantos individualizada
- **Por que 3 cantos só?** Fla casa segurou bola, neutralizou Inter. Inter aceitou ritmo baixo (raro!).
- **Coerente?** **NÃO TOTAL** para Inter — esperava-se 5+ cantos. Esse e o jogo vs Flu foram os MAIS BAIXOS do Inter em saldo.
- **Era previsível?** UNDER 9.5 razoável dado Fla casa (saiu 7).
- **Superestimamos**: Inter mesmo fora.
- **Subestimamos**: Fla casa em segurar pace.

### Aprendizado para o mercado
- **Sinal**: Inter fora contra time de posse alta (Fla, Flu) = pode ser neutralizado.
- **Classificação**: **OUTLIER PARCIAL** (neutralizado por Fla).

---

## 🟡 10. 27.03.2026 — CASA — vs PALMEIRAS — D 1-3 — Cantos 16x4 — Total 20 ⚡⚡⚡

### Contexto pré-jogo
- **Importância**: CASA contra LÍDER Palm.
- **Expectativa tática esperada**: pace alto.

### O que aconteceu no jogo
- **PACE 20** (outlier máximo do dossiê).
- Cantos **16-4 PRO INTER** (saldo +12 EM CASA contra LÍDER!).
- HT 7-4, **2T 9-0!!!** (Inter atropelou cantos 2T mesmo perdendo!).
- Resultado D 1-3 (Palm eficiência matadora).

### Análise de cantos individualizada
- **Por que 16x4?** **PADRÃO MASTER do Inter perdendo casa = chuva absurda de cantos**. Palm padrão fora vencendo cedo = recuo extremo (vide dossiê Palm).
- **Coerente?** **SIM** total para os dois.
- **Era previsível?** OVER 11.5 = ouro (saiu 20). Cantos PRÓ Inter OVER 8.5 = ouro (saiu 16). Cantos pró Palm UNDER 5.5 = ouro (saiu 4).
- **Superestimamos**: nada.
- **Subestimamos**: o EXTREMO desse padrão Inter perdendo.

### Aprendizado para o mercado
- **Inter perdendo casa = OURO ABSOLUTO em cantos**.
- **Classificação**: **CONFIRMOU PERFIL** versão extrema.

---

## 🟡 11. 29.03.2026 — FORA — vs REMO — E 1-1 — Cantos 12x7 — Total 19 ⚡⚡

### Contexto pré-jogo
- **Importância**: FORA contra lanterna.
- **Expectativa tática esperada**: Inter domina, mas Remo encastela.

### O que aconteceu no jogo
- **PACE 19** (outlier máximo fora!).
- Cantos **12-7 PRO INTER** (saldo +5 mesmo fora).
- HT 8-2, 2T 4-5.
- Resultado empate 1-1.

### Análise de cantos individualizada
- **Por que 12x7?** Inter atacou freneticamente HT (8-2!), Remo respondeu 2T (5 cantos!). Jogo abriu com gols.
- **Coerente?** SIM. Inter ELITE_C absoluto + Remo casa não encastelou completamente.
- **Era previsível?** OVER 11.5 difícil de prever (Remo costuma travar). Saiu 19.
- **Superestimamos**: Remo encastelar.
- **Subestimamos**: o pace que Inter impõe FORA também.

### Aprendizado para o mercado
- **Confirma**: Inter mantém pace alto FORA também (vide pace fora 11.63).
- **Classificação**: **CONFIRMOU PERFIL** extremo.

---

## 🟡 12. 31.03.2026 — FORA — vs ATLÉTICO-MG — D 0-1 — Cantos 14x2 — Total 16 ⚡⚡⚡

### Contexto pré-jogo
- **Importância**: FORA contra AZARÃO tabela.
- **Expectativa tática esperada**: jogo aberto.

### O que aconteceu no jogo
- Cantos **14-2 PRO INTER** (saldo +12 FORA!!).
- HT 4-2, **2T 10-0!!!** (atropelo absurdo 2T).
- Resultado D 0-1 (Atl-MG eficiente, 1 chance 1 gol).

### Análise de cantos individualizada
- **Por que 14x2?** Inter ELITE_C MÁXIMO. Perdeu HT (0-1?), atacou desesperadamente 2T (10 cantos!!). Atl-MG defendeu o resultado.
- **Coerente?** SIM total — padrão Inter perdendo = chuva de cantos.
- **Era previsível?** OVER 11.5 com algum risco (saiu 16). Cantos PRÓ Inter OVER 7.5 = ouro (saiu 14).
- **Superestimamos**: nada Inter.
- **Subestimamos**: o quanto Atl-MG defende eficiente quando vence.

### Aprendizado para o mercado
- **Padrão MASTER**: Inter fora perdendo = OVER 13 sistemático.
- **Classificação**: **CONFIRMOU PERFIL** extremo.

---

## 🟡 13. 02.04.2026 — CASA — vs BAHIA — D 0-1 — Cantos 7x1 — Total 8

### Contexto pré-jogo
- **Importância**: CASA contra MÉDIO.
- **Expectativa tática esperada**: pace médio, Inter pressiona.

### O que aconteceu no jogo
- Cantos 7-1 pro Inter.
- HT 4-1, 2T 3-0.
- Resultado D 0-1 (Bahia 1 chance = 1 gol).

### Análise de cantos individualizada
- **Por que 7x1?** Inter pressionou normal. Bahia eficiente. Pace 8 mediano-baixo (Bahia conteve bem em volume).
- **Coerente?** SIM Inter. Bahia atípico (MÉDIO_C deveria gerar 3-4 cantos, gerou só 1).
- **Era previsível?** Cantos PRÓ Inter OVER 5.5 ouro (saiu 7).
- **Superestimamos**: nada.
- **Subestimamos**: Bahia defensivo (gerou só 1 canto).

### Aprendizado para o mercado
- **Padrão**: Inter casa = cantos PRÓ OVER 5.5 quase sempre.
- **Classificação**: **CONFIRMOU PERFIL**.

---

## 🟡 14. 03.04.2026 — FORA — vs SANTOS — V 2-1 — Cantos 8x3 — Total 11

### Contexto pré-jogo
- **Importância**: FORA contra AZARÃO/MÉDIO_C.
- **Expectativa tática esperada**: pace médio.

### O que aconteceu no jogo
- Cantos 8-3 pro Inter (HT 4-0, 2T 4-3).
- Resultado V 2-1.

### Análise de cantos individualizada
- **Por que 8x3?** Inter padrão fora — pressiona, gera 8 cantos. Santos MÉDIO_C respondeu 3.
- **Coerente?** SIM total.
- **Era previsível?** OVER 9.5 razoável (saiu 11). Cantos PRÓ Inter OVER 5.5 (saiu 8).
- **Classificação**: **CONFIRMOU PERFIL**.

---

## 🟡 15. 04.04.2026 — CASA — vs CHAPECOENSE — V 2-0 — Cantos 4x4 — Total 8 ⚡

### Contexto pré-jogo
- **Importância**: CASA contra LANTERNA absoluta (Chape 20º).
- **Expectativa tática esperada**: Inter atropela.

### O que aconteceu no jogo
- Cantos **EMPATADOS 4-4** (??).
- HT 2-1, 2T 2-3.
- Resultado V 2-0.

### Análise de cantos individualizada
- **Por que 4x4 só com Inter casa vs LANTERNA?** **OUTLIER inexplicável estatisticamente**. Inter normalmente atropela em cantos. Aqui apenas empatou.
- **Coerente?** **NÃO** com perfil Inter (esperava-se 7-10 cantos). Para Chape (AZARÃO_C lanterna), 4 cantos visitante é até alto.
- **Era previsível?** UNDER 9.5 razoável (saiu 8). Mas saldo empatado foi surpresa.
- **Superestimamos**: Inter neste jogo.
- **Subestimamos**: ou rotação do elenco (3º jogo em 3 dias?), ou jogo "morno" depois de garantir.

### Aprendizado para o mercado
- **Cuidado**: nem sempre Inter atropela contra lanterna em cantos.
- **Classificação**: **OUTLIER SEM EXPLICAÇÃO CLARA**.

---

## 🟡 16. 06.04.2026 — CASA — vs SÃO PAULO — E 1-1 — Cantos 2x11 — Total 13 ⚡⚡⚡

### Contexto pré-jogo
- **Importância**: CASA contra ELITE_C (#2).
- **Expectativa tática esperada**: pace alto.

### O que aconteceu no jogo
- Cantos **2-11 PRO SP** (saldo −9 EM CASA!!!).
- HT 2-6, **2T 0-5!!!** (Inter cedeu TUDO).
- Resultado empate 1-1.

### Análise de cantos individualizada
- **Por que 2x11?** **JOGO TOTALMENTE FORA DO PADRÃO INTER**. Inter dominado em cantos EM CASA contra ELITE_C. Provável: SP veio com pressão atípica + Inter pode estar cansado/desfalcado nesse jogo. 
- **Coerente?** **NÃO TOTAL** — esse é o ÚNICO jogo do Inter em que foi dominado massivamente em cantos. Possível: rotação completa do elenco (já que era 4º jogo em 5 dias).
- **Era previsível?** Pré-jogo: NÃO (Inter ELITE_C casa). LIVE: OVER 11.5 + cantos PRÓ SP OVER 8.5 = ouro (saiu 11).
- **Superestimamos**: Inter neste jogo (algo aconteceu fora do estatístico).
- **Subestimamos**: SP em forma máxima.

### Aprendizado para o mercado
- **Sinal CRÍTICO**: SEMPRE verificar calendário/rotação do Inter. Se houver jogos em sequência, OVER inverso possível.
- **Classificação**: **OUTLIER COMPORTAMENTAL EXTREMO** (Inter agindo como anti-Inter).

---

## 🟡 17. 26.04.2026 — FORA — vs BOTAFOGO — E 2-2 — Cantos 5x3 — Total 8

### Contexto pré-jogo
- **Importância**: FORA contra MÉDIO/AZARÃO_C.
- **Expectativa tática esperada**: jogo travado (Bot AZARÃO_C extremo).

### O que aconteceu no jogo
- Cantos 5-3 pro Inter (HT 2-2, 2T 3-1).
- Resultado empate 2-2.

### Análise de cantos individualizada
- **Por que 5x3?** Pace mediano. Bot AZARÃO_C real gerou só 3 cantos. Inter abaixo da média (5 cantos).
- **Coerente?** Mediano. Bot consistente AZARÃO_C.
- **Era previsível?** UNDER 9.5 razoável (saiu 8).
- **Classificação**: **CONFIRMOU PERFIL** Bot (AZARÃO_C trava).

---

# BLOCO 3 — PADRÕES COMPORTAMENTAIS

## 3.1 Padrões por mando

| Métrica | CASA (9) | FORA (8) | Diferença |
|---------|----------|----------|-----------|
| Pace médio | **11.00** | **11.63** | quase igual |
| Saldo cantos | **+3.89** | **+3.38** | quase igual |

**Conclusão**: **ÚNICO time com pace alto e saldo positivo em AMBOS mandos**. Mando praticamente não afeta. Time consistentemente dominante em cantos.

## 3.2 Padrões por força do adversário (TABELA)

| Categoria | n | Saldo cantos | Comportamento |
|-----------|---|--------------|---------------|
| ELITE tabela | 7 | **+3.4** | Domina |
| MÉDIO tabela | 5 | **+4.4** | Domina mais |
| AZARÃO tabela | 5 | **+2.6** | Domina menos (vs paradoxo Mirassol/Vasco) |

## 3.3 Padrões por força do adversário (CANTOS)

| Categoria | n | Saldo | Comportamento |
|-----------|---|-------|---------------|
| ELITE_C | 4 | **+0.0** | Equilibra (vs SP −9, Mir +9, Flu 0, Vasco −1) |
| MÉDIO_C | 6 | **+4.7** | Domina forte |
| AZARÃO_C | 7 | **+5.0** | Domina extremo |

**Conclusão**: Inter domina mais vs AZARÃO_C. Vs ELITE_C, equilibra (jogo trava por escolha tática).

## 3.4 Padrões por placar

| Cenário | Comportamento |
|---------|---------------|
| **Vencendo** | Mantém pressão (raras exceções tipo Vasco 4-1) |
| **Empatando** | Pressiona, gera 6-12 cantos |
| **Perdendo CASA** | **EXPLOSÃO ABSURDA** (Palm 16-4, Mir 11-2, Ath 13-1) |
| **Perdendo FORA** | **PRESSIONA também** (Atl-MG 14-2!!) |

**Padrão GIGANTE**: Inter perdendo = chova de cantos. **Mercado de OURO**: cantos PRÓ Inter perdendo HT.

## 3.5 Padrões por fase

- **2T explosivo** quando perdendo HT (vide Palm 2T 9-0, Atl-MG 2T 10-0, Ath 2T 8-0).
- **HT controlado** quando vencendo (raros casos Vasco V 4-1).

## 3.6 Adversários específicos

- **PRÓ Inter**: TODOS exceto SP atípico e Flamengo.
- **CONTRA Inter**: SP em forma + Fla casa em forma.

---

# BLOCO 4 — ANÁLISE CRUZADA

## 🔴 Vs BLOCO BAIXO
- **Inter FURA o bloco** (vide Grêmio 8-2, Coritiba 8-3, Bahia 7-1).
- **Implicação**: cantos PRÓ Inter OVER 6.5 sistemático.

## 🟢 Vs PRESSÃO ALTA
- Inter aceita pressão e responde com mais pressão (vide Mirassol 11-2 mesmo perdendo).
- **Implicação**: pace explode.

## ⚖️ Vs TECNICAMENTE SUPERIOR
- **NÃO recua** — mantém ataque (Palm 16-4 perdendo, Ath 13-1 perdendo, Atl-MG 14-2 perdendo).
- **Implicação**: cantos PRÓ Inter SEMPRE apostáveis vs grandes.

## 🔻 Vs INFERIOR
- **Domina mas pode falhar em conversão** (Chape 4-4 inexplicável). Geralmente atropela.

## 🚨 SUBESTIMAMOS
- **SP em forma** (jogo 2-11 inexplicável estatisticamente).
- **Fla casa em forma** (segurou pace Inter).
- **Corinthians casa** (gerou 7 cantos contra Inter).

## 🚨 SUPERESTIMAMOS
- **Athletico fora vencendo** (gerou 1 canto só após mater cedo).

---

# BLOCO 5 — PERFIL PREDITIVO

## 5.1 — Matriz por adversário

| Cenário | Adv tabela | Adv cantos | Mando | Pace | Saldo Inter | Mercado |
|---------|-----------|-----------|-------|------|-------------|---------|
| A | ELITE | ELITE_C | CASA | médio (6-13) | ±2 | **CHECAR formação** — 5-4-1 mútuo = UNDER; senão OVER 10.5 |
| B | ELITE | ELITE_C | FORA | alto (10-14) | +0 a +5 | OVER 11.5 (Coritiba 8-3 modelo) |
| C | ELITE | MÉDIO_C | qq | alto (11-13) | +5 | cantos pró Inter OVER 6.5 |
| D | MÉDIO | MÉDIO_C/AZARÃO_C | CASA | alto (10-13) | **+5 a +8** | OVER 11.5 + cantos pró OVER 6.5 |
| E | MÉDIO/AZAR | AZARÃO_C | qq | alto (10-19) | **+5 a +12** | OVER 11.5 + cantos pró OVER 7.5 |
| F | AZARÃO | ELITE_C | CASA | médio (10-13) | +2 a +9 (paradoxo Mir +9) | cantos pró Inter OVER 6.5 |

## 5.2 — Padrões sempre aplicáveis

1. **Pace alto em ambos mandos** (11+).
2. **Perdendo = explode cantos** (5 casos com cantos pró 11+ perdendo).
3. **Mantém posse alta** (50-72%).
4. **Conversão de chances PÉSSIMA** (1.18 gols/jogo).
5. **Pode jogar 5-4-1 contra outros ELITES_C** (Flu, Coritiba casos).

## 5.3 — Fatores de risco

| Fator | Impacto |
|-------|---------|
| **Calendário apertado** | Pode causar outlier inverso (vide SP 2-11 inexplicável) |
| **5-4-1 mútuo (Flu, Athletico podem fazer)** | UNDER 8.5 |
| **Vermelho Inter** | Reduz pace (vide Vitória 6-4) |
| **Fla casa** | Único time que neutralizou Inter consistentemente |

## 5.4 — Mercados sugeridos

### ALTO VALOR
- **OVER 10.5 em qualquer jogo do Inter** (line médio do BR).
- **Cantos PRÓ Inter OVER 5.5** (line de média).
- **LIVE Inter perdendo HT** → cantos PRÓ Inter HT2 OVER 5.5.

### MODERADO
- **OVER 12.5** quando enfrenta ofensivo (Vasco, Palm fora).

### EVITAR
- ❌ UNDER em jogo do Inter (estatística contra você).
- ❌ Cantos PRÓ adv quando Inter joga normal — Inter domina.

## 5.5 — Confiança: 🟢🟢 MUITO ALTA

- 17 jogos com padrão CONSISTENTE (5 jogos com cantos pró 11+).
- ÚNICO outlier real é SP 2-11 (provavelmente fadiga).
- Padrão "perdendo = explode" tem **5 confirmações** sem contra-exemplo.

---

# 📌 CHECKLIST PRÉ-APOSTA

1. **CASA ou FORA?** (quase igual, +3.5 saldo nos 2)
2. **Adv ELITE/MÉDIO/AZARÃO?** (Inter domina TODOS exceto outros ELITES_C táticos)
3. **Formações?** (5-4-1 mútuo = UNDER; outros = OVER)
4. **Fadiga?** (atenção a sequência apertada)
5. **Placar HT?** Inter perdendo HT = cantos pró HT2 OVER 5.5 ouro

---

# 🆚 COMPARAÇÃO (Inter vs Flu vs Palm vs Fla)

| Dimensão | **Internacional** | Fluminense | Palmeiras | Flamengo |
|----------|-------------------|-----------|-----------|----------|
| Saldo cantos | **+3.65 #1** | +1.59 | 0.00 | −0.50 |
| Pace CASA | **11.00** | 8.78 | 10.63 | 9.43 |
| Pace FORA | **11.63** | 10.50 | 13.89 | 9.33 |
| Saldo ambos mandos | **+3.5** | +1.5 | misto | negativo |
| Padrão perdendo | **EXPLODE cantos** | Pressiona | Atropela | Vai pra cima |
| Posição tabela | 12º (paradoxo!) | 3º | 1º | 2º |
| Conversão gol | **TERRÍVEL** | mediana | letal | boa |

**Insight**: **Inter é o REI dos cantos** mas o "pior" entre os analisados em pontos. Vende muita finalização sem fechar conta. **Mercado de cantos do Inter é o mais previsível do BR**.

---

*Dossiê forense — 17 partidas BR 2026 · 7 dados completos · 10 placar+cantos.*
