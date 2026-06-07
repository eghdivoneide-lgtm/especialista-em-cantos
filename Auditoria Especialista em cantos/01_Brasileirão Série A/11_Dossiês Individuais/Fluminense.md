# 📋 DOSSIÊ FORENSE — FLUMINENSE
*Brasileirão Série A 2026 · 17 jogos · gerado 2026-06-02*
> ⚠️ **DOSSIÊ PARCIAL — AUDITORIA PÓS-FATO identificou limitações**
> - **Jogos no banco**: 17
> - **Cobertura tática** (formação/posse/finalizações): **41%** (apenas 7 de 17 jogos)
> - **Saldo cantos** (banco completo): +1.59 → **ELITE_C** (#3 da liga)
> - **Pace médio**: 9.59 cantos/jogo
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


> **Padrão EDS R3 — limitações honestas:**
> - 7 jogos com dados táticos completos (🟢) · 10 só placar+cantos (🟡)
> - Sem dados de desfalques, calendário ou suspensões
> - Bloco 5 entrega matriz preditiva por categoria de adversário

---

# BLOCO 1 — IDENTIDADE E DNA DO TIME

## 1.1 Perfil tático atual

**Formação principal:** Fluminense é **MAIS FLEXÍVEL que Palmeiras e MUITO MAIS que Flamengo** — usa 3 formações documentadas: **4-2-3-1** (5x · principal), **4-3-3** (1x · ofensiva), **5-4-1** (1x · ultra-defensiva). 5-4-1 documentado FORA vs Internacional indica que o Flu **se transforma em defensivo profundo contra ELITE_C visitante** — escolha tática rara entre grandes.

**Estilo de jogo predominante:** **time de POSSE com VOCAÇÃO TERRITORIAL**.
- Posse média (7 jogos): **60.3%** (mediana 60%). Picos: 67% Coritiba/Internacional/Mirassol (3 dos 7!). Vale: 50% São Paulo casa.
- Finalizações pró média: **12.4** (vs Fla 16, Palm 14.9). **MENOR volume de finalização**, mas saldo cantos positivo (+1.59).
- **Time de jogo curto, posse paciente**, gera cantos por aproximação tipo "futebol espanhol".
- Por isso o saldo cantos positivo (+1.59 → 3º liga) sem finalização alta.

**Como se comporta por placar:**
- **VENCENDO**: **MANTÉM controle, não recua extremamente** — vs Botafogo casa 1-0, manteve cantos 4-0; vs Atl-MG casa 1-0, manteve 3-2; vs Chapecoense 2-1, dominou cantos 7-1. **Padrão muito diferente do Palm que recua extremo**.
- **PERDENDO**: **PRESSIONA com volume** — vs Palmeiras fora (D 1-2): cantos 11-5 (DOMINOU em cantos perdendo!). Vs Flamengo CASA (D 1-2): cantos 8-2 — dominou massivamente em cantos!
- **EMPATANDO**: mantém ritmo, sem grande mudança.
- **Conclusão tática**: **Fluminense é o time MENOS reativo ao placar entre os grandes**. Mantém identidade de posse independente do contexto. Não muda de cara.

**Recua quando abre vantagem?** **NÃO de forma extrema**. Diferente de Palm e Fla. Continua dominando posse e gerando cantos por aproximação.

---

## 1.2 Contexto de temporada

- **Posição**: **3º** com 30 pts em 17 jogos (58.8% aproveitamento). Atrás de Palmeiras e Flamengo.
- **Objetivo**: G4 / Libertadores próximo ano. Ainda sonha com título mas longe.
- **Forma recente** (últimos 6 jogos: 04/04 → 23/05):
  - vs Coritiba (F): **E 1-1** (dominou cantos 10-3!!) ⚠️
  - vs Flamengo (C): **D 1-2** (dominou cantos 8-2!) ❌
  - vs Santos (F): **V 3-2** ✅
  - vs Internacional (F): **D 0-2** ❌
  - vs Vitória (C): **E 2-2** ⚠️
  - vs SP (C): **V 2-1** ✅
  - vs Mirassol (F): **D 0-1** ❌
  - **Resumo**: 2V/2E/3D nos últimos 7 — fase ruim. Tropeçando contra os menores. Em cantos: tem alguns picos absurdos (Coritiba 10-3, Flamengo 8-2 mesmo perdendo).
- **Desfalques**: ❌ Sem dado.
- **Fadiga**: Flu joga Sul-Americana (não Libertadores) — calendário relativamente mais leve.

---

## 1.3 Perfil ofensivo e defensivo

- **Dominante territorialmente?** **SIM, claramente** — posse 60% média é a maior entre os grandes BR analisados. Mas converte volume em cantos sem necessariamente em gols (apenas 27 gols pró em 17 jogos = 1.59/jogo).
- **Médias finalizações**: 12.4 pró vs ?? sof (mais alto). Saldo de finalizações talvez seja NEGATIVO em alguns jogos — vide vs SP casa (10-14) e vs Internacional fora (11-18). Time de posse mas não de chute.
- **Setores que geram mais cantos**: **lateral direita + posse no terço final**. Jogo curto pelas pontas, aproxima, sofre cantos.
- **Cantos por escanteios táticos ou volume real?** **Volume + paciência**. Não é time de cruzamento bruto. Acumula cantos por aproximação.

---

# BLOCO 2 — ANÁLISE JOGO A JOGO (17 partidas)

---

## 🟢 1. 04.04.2026 — FORA — vs CORITIBA — E 1-1 — Cantos 10x3 — Total 13 ⚡⚡

### Contexto pré-jogo
- **Importância**: FORA contra Coritiba (que é PARADOXO INVERSO — ELITE tabela 6º, mas AZARÃO_C 20º — fundo de tabela de cantos!).
- **Desfalques**: ❌ Sem dado.
- **Momento Coritiba**: ELITE da tabela mas pior do BR em cantos. Time defensivo ultra-econômico.
- **Expectativa tática esperada**: jogo difícil em pontos, baixo em cantos (Coritiba lacra).

### O que aconteceu no jogo
- **Flu 4-2-3-1 vs Coritiba 3-4-2-1**.
- **Posse Flu 67%** (DOMÍNIO ABSOLUTO fora!).
- Finalizações: Flu 15 x 10 Cor.
- HT cantos **6-1 PRO FLU** (massacre desde início).
- 2T cantos 4-2.
- Resultado empate 1-1 (não converteu).

### Análise de cantos individualizada
- **Por que 10x3?** Flu impôs posse extrema (67% fora!), gerou volume crescente. Coritiba (AZARÃO_C real) não conseguiu sair — gerou só 3 cantos defensivos. **Total 13 visitante contra Coritiba é OUTLIER absurdo** — Coritiba travou jogos da maioria.
- **Coerente?** **SIM** para Flu (vocação territorial). **SIM** para Coritiba ser dominado (AZARÃO_C). O OUTLIER é o **pace 13** — Coritiba normalmente trava em 6-8.
- **Era previsível?** Cantos PRÓ Flu OVER 6.5 = SIM (saiu 10). OVER 10.5 total = arriscado (saiu 13). UNDER em cantos pró Cor = trade óbvio (saiu só 3).
- **Superestimamos**: Coritiba defesa.
- **Subestimamos**: capacidade do Flu de fazer pace fora.

### Aprendizado para o mercado
- **Padrão MASTER**: **Flu vs AZARÃO_C com posse extrema = cantos PRÓ Flu OVER 6.5 sistemático**.
- **Classificação**: **CONFIRMOU PERFIL** Flu posse + AZARÃO_C Cor.

---

## 🟢🔴 2. 12.04.2026 — CASA — vs FLAMENGO — D 1-2 — Cantos 8x2 — Total 10 ⚡

### Contexto pré-jogo
- **Importância**: Clássico FluFla CASA. Máxima pressão.
- **Desfalques**: ❌ Sem dado.
- **Momento Flamengo**: 2º tabela, AZARÃO_C (-0.50). Vinha em ascensão.
- **Expectativa tática esperada**: pace alto (2 grandes). Mercado: OVER 10.5.

### O que aconteceu no jogo
- **Espelho 4-2-3-1**.
- **Posse Flu 60%** (controlou em casa).
- Finalizações: Flu 19 x 17 Fla (equilibrado).
- **🔴 FLAMENGO COM VERMELHO**.
- HT cantos 2-1, **2T cantos 6-1 PRO FLU** (com Fla com 10 homens).
- Resultado: **Flu PERDEU 1-2** apesar do massacre territorial!

### Análise de cantos individualizada
- **Por que 8x2?** Vermelho do Fla forçou bloco baixíssimo. Flu pressionou todo 2T (6 cantos!). Fla mortinho em cantos (apenas 2). **Eficiência do Fla salvou** (2 chances = 2 gols).
- **Coerente?** **SIM** total para Flu (mantém posse, gera cantos). **SIM** padrão Fla com vermelho (cede cantos).
- **Era previsível?** Pré-jogo OVER 9.5. **Pós-vermelho LIVE: cantos PRÓ Flu OVER 5.5** ouro.
- **Superestimamos**: nada (cantos seguiram lógica).
- **Subestimamos**: EFICIÊNCIA letal do Fla (mas isso é mercado 1x2).

### Aprendizado para o mercado
- **Padrão**: Flu mantém pressão CASA mesmo perdendo + vermelho do adv = cantos OVER pró Flu.
- **Classificação**: **CONFIRMOU PERFIL** (Flu não muda de identidade pelo placar).

---

## 🟢 3. 19.04.2026 — FORA — vs SANTOS — V 3-2 — Cantos 4x6 — Total 10

### Contexto pré-jogo
- **Importância**: FORA contra AZARÃO tabela (Santos 17º final). Obrigação de pontuar.
- **Desfalques**: ❌ Sem dado.
- **Momento Santos**: 17º tabela, MÉDIO_C. Em má fase.
- **Expectativa tática esperada**: jogo aberto (Flu costuma jogar, Santos em casa pressiona).

### O que aconteceu no jogo
- **Flu 4-3-3 (ofensivo!) vs Santos 4-2-3-1**.
- Posse Flu 53%.
- Finalizações 10-7.
- HT cantos 4-2, **2T cantos 0-4 PRO SANTOS** (DESLIGOU 2T!).
- Resultado V 3-2.

### Análise de cantos individualizada
- **Por que 4x6?** Flu dominou cantos HT (4-2), depois "matou" com gols e desligou no 2T (0 cantos pró em 45min!). Santos atacou 2T e gerou 4 cantos.
- **Coerente?** **PARCIALMENTE NÃO** para Flu — historicamente NÃO relaxa, mas aqui sim. Talvez sintetizou: 3 gols feitos = administração natural.
- **Era previsível?** OVER 8.5 razoável (saiu 10). Cantos PRÓ Santos 2T = não tinha como prever pré.
- **Superestimamos**: a constância da pressão do Flu.
- **Subestimamos**: que Flu com 3 gols feitos PODE relaxar (não sempre, mas pode).

### Aprendizado para o mercado
- **Sinal**: Flu com 4-3-3 ofensivo é menos comum, pode trazer pace alto HT.
- **Atenção**: Flu vencendo com folga FORA TAMBÉM PODE relaxar (mas menos extremo que Palm).
- **Classificação**: **OUTLIER PARCIAL** (Flu cedeu cantos 2T contra a média).

---

## 🟢 4. 03.05.2026 — FORA — vs INTERNACIONAL — D 0-2 — Cantos 3x3 — Total 6 ⚡

### Contexto pré-jogo
- **Importância**: FORA contra Inter (12º tabela, #1 ELITE_C +3.65). Inter casa = pace garantido.
- **Desfalques**: ❌ Sem dado.
- **Momento Inter**: ELITE_C absoluto. Casa.
- **Expectativa tática esperada**: pace ALTO esperado. OVER 11.

### O que aconteceu no jogo
- **AMBOS COM 5-4-1!!!** (jogo travadíssimo programado).
- **Posse Flu 67%** (Inter cedeu bola em casa).
- Finalizações: Flu 11 x 18 Inter (Inter chutou mais).
- HT cantos 1-1, 2T cantos 2-2.
- **PACE 6 — outlier ABSURDO** baixo dado adversário ELITE_C.
- Resultado D 0-2 (Inter eficiente).

### Análise de cantos individualizada
- **Por que 3x3 só?** 2 times com 5-4-1 = jogo travado por escolha tática. Flu fora com 5-4-1 é raro mesmo — tipo "vamos defender e esperar". Inter aceitou. Pace 6 reflete escolhas táticas.
- **Coerente?** **NÃO** para Inter ELITE_C (esperava-se 5+ cantos). **SIM** dado 5-4-1 dos dois.
- **Era previsível?** **SE soubesse das duas formações 5-4-1**: UNDER 8.5 ouro. Sem essa info, era contra-intuitivo.
- **Superestimamos**: Inter ELITE_C (não vai sempre explodir).
- **Subestimamos**: o efeito de "ambas formações ultra-defensivas" travarem jogo.

### Aprendizado para o mercado
- **Sinal CRÍTICO**: SEMPRE checar formações divulgadas. 5-4-1 + 5-4-1 = UNDER óbvio.
- **Classificação**: **OUTLIER EXPLICADO** (escolha tática mútua defensiva).

---

## 🟢 5. 09.05.2026 — CASA — vs VITÓRIA — E 2-2 — Cantos 6x3 — Total 9

### Contexto pré-jogo
- **Importância**: CASA contra MÉDIO defensivo.
- **Momento Vitória**: 11º tabela, AZARÃO_C. Sempre encastela contra grandes.
- **Expectativa tática esperada**: Flu domina mas travado. UNDER 9.5.

### O que aconteceu no jogo
- **Flu 4-2-3-1 vs Vitória 5-3-2**.
- Posse Flu 58%.
- Finalizações 12-10.
- HT cantos 4-1, 2T cantos 2-2.
- Resultado empate 2-2 (Vitória surpreendeu).

### Análise de cantos individualizada
- **Por que 6x3?** Flu furou bloco no 1T (4 cantos), 2T empatou pressão. Vitória escolheu 5-3-2 (mais ofensivo que 5-4-1 com Fla) — ousou um pouco mais.
- **Coerente?** SIM total. Pace 9 (UNDER 9.5 raspou).
- **Era previsível?** UNDER 9.5 com sinal claro (saiu 9). Cantos PRÓ Flu OVER 4.5 = ouro (saiu 6).
- **Superestimamos**: vitória do Flu (empatou).
- **Subestimamos**: Vitória empatar (mas isso é 1x2).

### Aprendizado para o mercado
- **Sinal**: Flu casa vs Vitória/Coritiba/Botafogo (AZARÃO_C) = cantos PRÓ Flu OVER 4.5 + UNDER 9.5.
- **Classificação**: **CONFIRMOU PERFIL** (Flu casa domina cantos contra AZARÃO_C).

---

## 🟢 6. 16.05.2026 — CASA — vs SÃO PAULO — V 2-1 — Cantos 3x5 — Total 8 ⚡

### Contexto pré-jogo
- **Importância**: CASA contra SP (ELITE 7º, ELITE_C #2).
- **Expectativa tática esperada**: pace alto.

### O que aconteceu no jogo
- **Espelho 4-2-3-1**.
- Posse 50% (paridade).
- Finalizações: Flu 10 x 14 SP (SP chutou mais).
- HT cantos 1-3, 2T cantos 2-2.
- **Flu venceu 2-1 com 2-0 no HT** (eficiência total, 2 chances 2 gols).

### Análise de cantos individualizada
- **Por que 3x5?** Flu marcou cedo, segurou. SP atacou os 90 minutos mas sem volume explosivo. **Esse jogo tem padrão "Flu eficiente, SP dominado mas com cantos a favor"** (típico ELITE_C visitando).
- **Coerente?** SIM. SP ELITE_C gerou seus cantos mesmo dominado em volume. Flu jogou 50% mas matou tudo no HT.
- **Era previsível?** OVER 9.5 razoável (saiu 8 raspou under). Cantos PRÓ SP visitante OVER 4.5 = ouro (saiu 5).
- **Superestimamos**: nada.
- **Subestimamos**: eficiência do Flu HT (2-0).

### Aprendizado para o mercado
- **Sinal**: Flu casa vs ELITE_C ainda aceita ser dominado em cantos (3-5).
- **Classificação**: **CONFIRMOU PERFIL** (SP ELITE_C visitante gera cantos).

---

## 🟢 7. 23.05.2026 — FORA — vs MIRASSOL — D 0-1 — Cantos 5x4 — Total 9

### Contexto pré-jogo
- **Importância**: FORA contra AZARÃO tabela (Mirassol 18º) que é ELITE_C surpresa.
- **Expectativa tática esperada**: jogo aberto, Mir pressionando.

### O que aconteceu no jogo
- **Espelho 4-2-3-1**.
- **Posse Flu 67%** (dominou fora!).
- Finalizações: Flu 10 x 13 Mir.
- Chutes no alvo Flu: APENAS 1!!! (ineficiência total).
- Cantos equilibrados 5-4.
- Resultado: D 0-1 (1 chute no alvo = 0 gols).

### Análise de cantos individualizada
- **Por que 5x4?** Pace 9 mediano. Flu dominou posse, gerou cantos modestamente. Mir ELITE_C respondeu.
- **Coerente?** SIM. Padrão Flu fora vs ELITE_C — pace na média, saldo neutro.
- **Era previsível?** UNDER 9.5 razoável (saiu 9). Empate em cantos previsível.
- **Superestimamos**: pontuação Flu (ineficiência letal — 1 alvo só).
- **Subestimamos**: Mirassol ELITE_C real.

### Aprendizado para o mercado
- **Sinal**: Flu fora vs ELITE_C = pace 9-10, saldo neutro.
- **Classificação**: **CONFIRMOU PERFIL** dos dois.

---

## 🟡 8. 23.03.2026 — CASA — vs GRÊMIO — V 2-1 — Cantos 3x6 — Total 9 ⚡

### Contexto pré-jogo
- **Importância**: CASA contra MÉDIO tabela / AZARÃO_C (Grêmio 13º/15º cantos).
- **Expectativa tática esperada**: Flu domina, jogo equilibrado pace.

### O que aconteceu no jogo
- Cantos 3-6 pro Grêmio (HT 1-3, 2T 2-3).
- Resultado V 2-1.

### Análise de cantos individualizada
- **Por que 3x6 EM CASA contra AZARÃO_C?** Outlier — Flu raramente é dominado em casa. Grêmio (AZARÃO_C real) gerou 6 cantos no Maracanã!! Provável: Grêmio veio com formação ofensiva esperando jogar.
- **Coerente?** **NÃO** para Flu (esperado saldo positivo). **NÃO** total para Grêmio (AZARÃO_C com 6 cantos é alto).
- **Era previsível?** Pace 9 (UNDER 9.5 raspou). Inversão de cantos casa = surpresa.
- **Superestimamos**: Flu casa.
- **Subestimamos**: Grêmio em casa do Flu.

### Aprendizado para o mercado
- **Sinal**: Flu nem sempre domina cantos em casa — verificar formação visitante.
- **Classificação**: **OUTLIER PARCIAL** (Flu casa atípico).

---

## 🟡 9. 26.03.2026 — FORA — vs BAHIA — E 1-1 — Cantos 4x6 — Total 10

### Contexto pré-jogo
- **Importância**: FORA contra MÉDIO.
- **Momento Bahia**: 8º tabela / MÉDIO_C.
- **Expectativa tática esperada**: jogo equilibrado.

### O que aconteceu no jogo
- Cantos 4-6 pro Bahia.
- HT cantos 4-4 (equilibrado), **2T cantos 0-2 pro Bahia** (Flu desligou 2T).
- Resultado empate 1-1.

### Análise de cantos individualizada
- **Por que 4x6?** Padrão Flu fora vs MÉDIO_C — saldo neutro-leve negativo. HT equilibrado, 2T cedeu.
- **Coerente?** SIM. Bahia casa pressiona, Flu fora administra.
- **Era previsível?** OVER 9.5 raspou (saiu 10).
- **Superestimamos**: nada.

### Aprendizado para o mercado
- **Classificação**: **CONFIRMOU PERFIL** (Flu fora ≠ Flu casa, pace alto).

---

## 🟡 10. 27.03.2026 — CASA — vs BOTAFOGO — V 1-0 — Cantos 4x0 — Total 4 ⚡⚡

### Contexto pré-jogo
- **Importância**: CASA contra MÉDIO/AZARÃO_C.
- **Momento Botafogo**: 10º tabela / AZARÃO_C (16º).
- **Expectativa tática esperada**: jogo travado.

### O que aconteceu no jogo
- **TOTAL 4 CANTOS** — outlier ABSURDO baixo.
- Cantos 4-0!! Botafogo NÃO conseguiu 1 canto sequer.
- HT 3-0, 2T 1-0.
- Flu V 1-0.

### Análise de cantos individualizada
- **Por que 4x0?** Botafogo AZARÃO_C extremo + Flu eficaz administrando 1-0 = jogo morto em cantos. **Botafogo com ZERO cantos em 90 minutos é raríssimo**.
- **Coerente?** SIM para Botafogo (AZARÃO_C). PARCIALMENTE para Flu (poderia ter feito mais, mas administrou).
- **Era previsível?** UNDER 8.5 = trade óbvio (saiu 4). Cantos pró Botafogo UNDER 2.5 = trade extremo (saiu 0!).
- **Superestimamos**: Botafogo (qualquer canto pró seria valor).
- **Subestimamos**: o extremo da travamento entre 2 times de baixo volume.

### Aprendizado para o mercado
- **Padrão**: Flu vs Botafogo / Coritiba (AZARÃO_C) casa = UNDER 8.5 sistemático.
- **Classificação**: **CONFIRMOU PERFIL** em versão extrema.

---

## 🟡 11. 30.03.2026 — FORA — vs PALMEIRAS — D 1-2 — Cantos 11x5 — Total 16 ⚡⚡

### Contexto pré-jogo
- **Importância**: FORA contra LÍDER (Palm 1º).
- **Expectativa tática esperada**: pace alto, jogo difícil.

### O que aconteceu no jogo
- Cantos: **11-5 PRO FLU** (saldo +6 fora contra líder!).
- HT cantos 7-1!!! (Flu dominou totalmente HT).
- 2T cantos 4-4.
- Resultado: D 1-2 (Palm eficiência letal de novo).

### Análise de cantos individualizada
- **Por que 11x5?** Flu pressionou Palm fora — confirmando padrão "Flu mantém identidade contra grandes". HT 7-1 é massacre. Palm padrão "recua fora vencendo" → aceitou ser dominado em cantos.
- **Coerente?** **SIM** para Flu (vocação posse, gera volume). **SIM** Palm (recua fora).
- **Era previsível?** **OVER 11.5 com sinal** (2 ELITES_C/grandes — saiu 16). **OVER 6.5 cantos PRÓ Flu** ouro (saiu 11).
- **Superestimamos**: Palm em casa (foi dominado em cantos).
- **Subestimamos**: a capacidade do Flu de impor pace fora vs grande.

### Aprendizado para o mercado
- **Padrão MASTER**: Flu fora vs ELITE = NÃO se intimida em cantos. OVER pró Flu apostável.
- **Classificação**: **CONFIRMOU PERFIL** (Flu posse fora também).

---

## 🟡 12. 31.03.2026 — FORA — vs REMO — V 2-0 — Cantos 4x6 — Total 10 ⚡

### Contexto pré-jogo
- **Importância**: FORA contra lanterna (Remo 19º). Obrigação.
- **Expectativa tática esperada**: Flu domina, mas Remo encastela.

### O que aconteceu no jogo
- Cantos 4-6 pro Remo (??? cedeu cantos ao lanterna!).
- HT cantos 4-1 PRO FLU, **2T cantos 0-5 PRO REMO** (DESLIGOU MÁXIMO).
- Resultado V 2-0.

### Análise de cantos individualizada
- **Por que 4x6?** **PADRÃO DE RELAXAMENTO descoberto no Flu** — pareceu raro mas aqui aconteceu CLARAMENTE: HT 4-1 dominando, marcou os gols, 2T 0-5 cedendo TUDO. Remo aproveitou.
- **Coerente?** **NÃO** com perfil clássico Flu (não relaxa). **SIM** com padrão "vence cedo fora + lanterna defendendo brio".
- **Era previsível?** UNDER 9.5 razoável (saiu 10). 0-5 no 2T era impossível prever.
- **Superestimamos**: a constância da pressão do Flu.
- **Subestimamos**: que Flu TAMBÉM pode relaxar (talvez por fadiga — não tinha dados).

### Aprendizado para o mercado
- **Padrão A descoberto no Flu**: vence cedo FORA = pode relaxar 2T (igual Palm e Fla).
- **Classificação**: **OUTLIER COMPORTAMENTAL** (Flu agindo como Palm).

---

## 🟡 13. 02.04.2026 — CASA — vs ATHLETICO-PR — V 3-2 — Cantos 7x1 — Total 8

### Contexto pré-jogo
- **Importância**: CASA contra ELITE (Athletico 4º, ELITE_C).
- **Expectativa tática esperada**: pace alto (2 ELITES_C).

### O que aconteceu no jogo
- Cantos: **7-1 PRO FLU** (DOMINOU ELITE_C!).
- HT cantos 3-0, 2T 4-1.
- Resultado V 3-2 (3 gols em casa).

### Análise de cantos individualizada
- **Por que 7x1?** Flu casa em modo PRESSÃO total. Athletico (que normalmente é ELITE_C agressivo) foi sufocado — 1 canto inteiro!!. **Flu casa pode dominar até ELITE_C quando está em forma**.
- **Coerente?** **SIM** para Flu casa quando ofensivo (vocação posse + casa = sufoca). **NÃO** para Athletico ELITE_C (esperava-se 4+ cantos).
- **Era previsível?** UNDER 9.5 razoável (saiu 8). Cantos PRÓ Flu OVER 5.5 ouro (saiu 7).
- **Superestimamos**: Athletico capacidade ofensiva fora.
- **Subestimamos**: Flu casa em forma máxima.

### Aprendizado para o mercado
- **Sinal**: Flu casa em forma = pode dominar até ELITE_C em cantos.
- **Classificação**: **CONFIRMOU PERFIL FLU** (casa = sufoca).

---

## 🟡 14. 03.04.2026 — FORA — vs VASCO — D 2-3 — Cantos 5x5 — Total 10

### Contexto pré-jogo
- **Importância**: FORA contra Vasco (AZARÃO/ELITE_C — paradoxo).
- **Expectativa tática esperada**: pace alto (Vasco ELITE_C casa).

### O que aconteceu no jogo
- Cantos equilibrados 5-5.
- HT cantos 2-1 pro Flu, 2T cantos 3-4 pro Vasco.
- Resultado D 2-3 (jogo de gols).

### Análise de cantos individualizada
- **Por que 5x5?** Pace 10 mediano. Vasco ELITE_C gerou seus cantos. Flu respondeu. Saldo neutro.
- **Coerente?** SIM. Vasco em casa contra grande = pace alto.
- **Era previsível?** OVER 9.5 razoável (saiu 10).
- **Superestimamos**: nada.

### Aprendizado para o mercado
- **Classificação**: **CONFIRMOU PERFIL** (jogo aberto entre 2 ofensivos).

---

## 🟡 15. 04.04.2026 — CASA — vs ATLÉTICO-MG — V 1-0 — Cantos 3x2 — Total 5 ⚡

### Contexto pré-jogo
- **Importância**: CASA contra AZARÃO tabela. **3º jogo em 3 dias** (fadiga!).
- **Momento Atl-MG**: AZARÃO/MÉDIO_C. Má fase.
- **Expectativa tática esperada**: Flu domina mas pace baixo.

### O que aconteceu no jogo
- **TOTAL 5 CANTOS** (extremo baixo).
- Cantos 3-2.
- Resultado V 1-0.

### Análise de cantos individualizada
- **Por que 5 totais?** Padrão Flu fadigado + Atl-MG defensivo + 1-0 garantido cedo = jogo morto.
- **Coerente?** Pace baixo coerente. Saldo +1 esperado.
- **Era previsível?** UNDER 8.5 ouro (saiu 5).
- **Superestimamos**: pace.
- **Subestimamos**: o impacto da fadiga.

### Aprendizado para o mercado
- **Sinal**: fadiga do Flu = UNDER 8.5 mais provável.
- **Classificação**: **CONFIRMOU PERFIL** com fator fadiga.

---

## 🟡 16. 07.04.2026 — CASA — vs CORINTHIANS — V 3-1 — Cantos 8x10 — Total 18 ⚡⚡⚡

### Contexto pré-jogo
- **Importância**: CASA contra AZARÃO/MÉDIO_C.
- **Expectativa tática esperada**: jogo equilibrado.

### O que aconteceu no jogo
- **TOTAL 18 CANTOS** (outlier ALTO!).
- Cantos 8-10 (Flu CEDEU cantos em casa pra Cor!).
- HT 3-2, **2T 5-8 pro Cor** (Flu cedeu 2T).
- Resultado V 3-1 (Flu eficiente).

### Análise de cantos individualizada
- **Por que 8x10 com pace 18?** Jogo MUITO aberto. Flu marcou 3 gols mas Corinthians atacou os 90 minutos gerando volume. Pace 18 inexplicável puramente por estatística (talvez Cor veio com formação ofensiva atípica).
- **Coerente?** **PARCIALMENTE NÃO** — pace 18 está acima de qualquer expectativa. Corinthians MÉDIO_C gerar 10 cantos visitante é EXTREMO.
- **Era previsível?** OVER 11.5 difícil de prever (saiu 18). LIVE quando pace começou alto = OVER 14.5 ouro.
- **Superestimamos**: nada (mercado já provavelmente apontava OVER).
- **Subestimamos**: o quanto Cor pode pressionar visitante (raro mas possível).

### Aprendizado para o mercado
- **Outlier raro** — explica-se por jogo atipicamente aberto.
- **Classificação**: **OUTLIER SEM EXPLICAÇÃO COMPLETA** (mais raro do dossiê Flu).

---

## 🟡 17. 26.04.2026 — CASA — vs CHAPECOENSE — V 2-1 — Cantos 7x1 — Total 8

### Contexto pré-jogo
- **Importância**: CASA contra LANTERNA absoluta (Chape 20º final).
- **Expectativa tática esperada**: Flu atropela, mas Chape encastela.

### O que aconteceu no jogo
- Cantos 7-1 (Flu dominou completamente).
- HT 3-0, 2T 4-1.
- V 2-1 (esquisito Chape ter feito gol).

### Análise de cantos individualizada
- **Por que 7x1?** Flu casa vs lanterna = padrão Cor (10-3) / Coritiba (6-1). Domínio total em cantos.
- **Coerente?** SIM total. Chape AZARÃO_C com 1 canto = consistente.
- **Era previsível?** Cantos PRÓ Flu OVER 5.5 ouro (saiu 7). UNDER 9.5 raspou (saiu 8).
- **Superestimamos**: nada.

### Aprendizado para o mercado
- **Confirma**: Flu casa vs AZARÃO_C = domina cantos.
- **Classificação**: **CONFIRMOU PERFIL** (Flu casa absoluto).

---

# BLOCO 3 — PADRÕES COMPORTAMENTAIS IDENTIFICADOS

## 3.1 Padrões por mando

| Métrica | CASA (9 jogos) | FORA (8 jogos) | Diferença |
|---------|----------------|----------------|-----------|
| Pace médio | **8.78** (baixo!) | **10.50** | +1.72 fora |
| Saldo cantos | **+2.11** | **+1.00** | -1.11 fora |
| % vitória | 56% (5V) | 25% (2V) | grande gap |

**Conclusão**: Flu CASA tem **pace BAIXO mas saldo positivo** = jogo travado mas Flu domina o que tem. FORA pace MAIOR mas saldo MENOR — joga aberto e equilibra. **Único time analisado com saldo positivo nos dois mandos**.

## 3.2 Padrões por força do adversário (TABELA)

| Categoria | n | Saldo cantos | Comportamento |
|-----------|---|--------------|---------------|
| ELITE tabela | 5 | **+1.4** | Domina ou empata em cantos |
| MÉDIO tabela | 6 | **+1.0** | Mediano-positivo |
| AZARÃO tabela | 6 | **+1.8** | Domina consistente |

**Conclusão**: Flu mais estável que outros — domina em qualquer categoria. Quase sem variação.

## 3.3 Padrões por força do adversário (CANTOS)

| Categoria | n | Saldo cantos | Comportamento |
|-----------|---|--------------|---------------|
| ELITE_C | 5 | **+0.4** | Empata pouco abaixo |
| MÉDIO_C | 5 | **+0.6** | Mediano |
| AZARÃO_C | 7 | **+3.3** | DOMINA fortemente |

**Conclusão**: Flu **sufoca AZARÃO_C** (Cor 7-1, Coritiba 10-3, Chape 7-1, Botafogo 4-0, Athletico 7-1). Vs ELITE_C, equilibra.

## 3.4 Padrões por placar

| Cenário | Comportamento Flu |
|---------|-------------------|
| **Vencendo confortável CASA** | Mantém posse, gera 6-7 cantos (Bot 4-0, Chape 7-1, Athletico 7-1) |
| **Vencendo FORA cedo** | **PODE relaxar 2T** (Remo 0-5, Santos 0-4) — padrão A emergente |
| **Empatando** | Mantém ritmo médio |
| **Perdendo CASA** | **PRESSIONA com volume** (Fla 8-2, mesmo perdendo!) |
| **Perdendo FORA** | **PRESSIONA** (Palm fora 11-5!!) |

**Padrão CRÍTICO**: Flu perdendo mantém identidade ofensiva — gera cantos mesmo perdendo. **Único time que faz isso em ambos mandos**.

## 3.5 Padrões por fase do jogo

| Distribuição | Casos |
|-------------|-------|
| **HT pesado pró Flu** | Coritiba (HT 6-1), Palmeiras (HT 7-1), Botafogo (HT 3-0), Chape (HT 3-0) |
| **2T pesado contra (relaxamento)** | Remo (2T 0-5), Santos (2T 0-4), Bahia (2T 0-2) |
| **Distribuído** | maioria dos jogos casa |

**Conclusão**: Flu costuma **dominar HT em cantos**, depois aliviar 2T quando o resultado tá feito.

## 3.6 Padrões por adversário específico

**Adversários previsivelmente PRÓ FLU**:
- Botafogo, Coritiba, Chapecoense, Vitória (AZARÃO_C verdadeiros)

**Adversários previsivelmente CONTRA**:
- Pouquíssimos — Flu raramente é dominado. Mirassol (ELITE_C visitante surpresa), Bahia fora.

**Adversários ARMADILHA**:
- Grêmio casa (saldo negativo inesperado)
- Corinthians casa (pace explosivo inesperado)

---

# BLOCO 4 — ANÁLISE CRUZADA

## 🔴 Vs BLOCO BAIXO / 5-4-1 / 5-3-2
- **DESBLOQUEIA cantos pró Flu** (posse alta fura).
- Evidência: Vitória 5-3-2 → Flu 6-3. Coritiba 3-4-2-1 → Flu 10-3.
- **Implicação**: cantos PRÓ Flu OVER 5.5 viável.

## 🟢 Vs PRESSÃO ALTA / 4-3-3 / 3-4-3
- Pace explode (Palm 4-3-3 → 16 cantos, Athletico 3-4-2-1 → 12). 
- **Implicação**: OVER 11.5 com sinal claro.

## ⚖️ Vs TÉCNICAMENTE SUPERIOR (Palm, Flamengo)
- **MANTÉM identidade** — domina cantos contra Palm fora (11-5) e Fla casa (8-2).
- **Implicação**: cantos PRÓ Flu sempre apostáveis vs ELITE.

## 🔻 Vs INFERIOR
- DOMINA cantos modestamente — pace 4-9, saldo +3 a +6.
- **Implicação**: UNDER 9.5 + cantos pró Flu OVER 4.5.

## 🚨 SUBESTIMAMOS
- **Corinthians casa** (gerou 10 cantos visitante - outlier sem explicação).
- **Mirassol fora** (ELITE_C surpresa, conseguiu equilibrar pace).
- **Grêmio casa** (formação ofensiva gerou 6 cantos visitante).

## 🚨 SUPERESTIMAMOS
- **Inter fora** (formação 5-4-1 travou jogo pra 6 cantos só).
- **Botafogo casa** (lanterna, gerou 0 cantos).
- **SP em força ofensiva** (gerou 5 cantos mas Flu venceu).

---

# BLOCO 5 — PERFIL PREDITIVO

## 5.1 — Matriz por adversário

| Cenário | Adv tabela | Adv cantos | Mando | Pace esperado | Saldo Flu | Mercado-mãe |
|---------|-----------|-----------|-------|---------------|-----------|-----------|
| A | ELITE | ELITE_C | CASA | médio (8-11) | +0 a +3 | OVER 9.5 com risco + cantos pró Flu OVER 4.5 |
| B | ELITE | ELITE_C | FORA | alto (10-16) | +2 a +6 | **OVER 11.5** + cantos pró Flu OVER 6.5 (Palm 11-5 modelo) |
| C | ELITE | MÉDIO_C/AZARÃO_C | qq mando | médio | +2 a +5 | cantos pró Flu OVER 5.5 |
| D | MÉDIO | MÉDIO_C | qq mando | médio (9-10) | +1 a +3 | cantos pró Flu OVER 4.5 |
| E | MÉDIO/AZAR | AZARÃO_C | CASA | **baixo (4-8)** | **+4 a +7** | **UNDER 8.5** + cantos pró Flu OVER 5.5 (Botafogo 4-0 modelo) |
| F | AZARÃO | ELITE_C | qq mando | médio-alto | 0 a +2 | OVER 9.5 (Mirassol surpresa) |
| G | AZARÃO | AZARÃO_C | CASA | **muito baixo (4-9)** | **+5 a +7** | **UNDER 8.5** + cantos pró Flu OVER 5.5 |

## 5.2 — Padrões SEMPRE aplicáveis

1. **Posse 60%+ FORA** — Flu pode dominar até casa do adv.
2. **Vence cedo FORA = pode relaxar 2T** (Remo, Santos).
3. **Perdendo (qq mando) = mantém pressão** — gera cantos mesmo perdendo.
4. **Vs AZARÃO_C: sufoca** (Botafogo 4-0, Coritiba 10-3, Chape 7-1).
5. **Vs ELITE_C: equilibra** (não foge da briga).

## 5.3 — Fatores de risco

| Fator | Impacto |
|-------|---------|
| **Fadiga** (3+ jogos em 5 dias) | Pace cai (Atl-MG 5 totais) |
| **Vermelho NO ADV** | Flu pressiona forte (Fla 6-1 2T) |
| **5-4-1 do adv** | Pode travar (Inter 6 totais) |
| **Sul-Americana semana** | Calendário relativamente leve, mas atenção |

## 5.4 — Mercados sugeridos

### ALTO VALOR
- **Flu casa vs AZARÃO_C** → cantos pró OVER 5.5 + UNDER 9.5 (Coritiba, Chape, Botafogo)
- **Flu FORA vs grande** → OVER 11.5 + cantos pró Flu OVER 5.5 (Palm 11-5)
- **Flu casa contra qq adv ELITE_C com vermelho** → cantos pró Flu OVER 6.5

### MODERADO
- **Flu casa vs MÉDIO_C** → cantos pró OVER 4.5 com pace 8-10

### EVITAR
- ❌ UNDER em jogos onde Flu enfrenta adv com formação ofensiva confirmada
- ❌ HDP −2.5 cantos pró Flu (raramente passa de +6)
- ❌ Cantos pró Flu vs Inter/SP em casa do adv quando há 5-4-1 mútuo

## 5.5 — Confiança: 🟢 ALTO

- 17 jogos = amostra robusta.
- Padrões consistentes (sufoca AZARÃO_C em 7 de 7 jogos).
- Outliers (Cor 8-10, Grêmio 3-6) são exceção, não padrão.

---

# 📌 CHECKLIST PRÉ-APOSTA

1. CASA ou FORA? (casa pace baixo +2, fora pace alto +1)
2. Adv ELITE/MÉDIO/AZARÃO tabela? (vs AZARÃO = sufoca)
3. Adv ELITE/MÉDIO/AZARÃO cantos? (vs AZARÃO_C = sufoca extra)
4. Formação adv? (5-4-1 = trava, 4-3-3 = pace explode)
5. Fadiga? (3+ jogos em 5 dias = UNDER)
6. Placar 1T? Vencendo fora = LIVE cantos adv

---

# 🆚 COMPARAÇÃO CRUZADA (Flu vs Palm vs Fla)

| Dimensão | Fluminense | Palmeiras | Flamengo |
|----------|-----------|-----------|----------|
| Saldo cantos médio | **+1.59** (3º liga) | 0.00 | −0.50 |
| Pace CASA | **8.78** (baixo) | 10.63 | 9.43 |
| Pace FORA | 10.50 | **13.89** (alto) | 9.33 |
| Saldo CASA | +2.11 | +2.13 | +0.86 |
| Saldo FORA | **+1.00** (positivo!) | −1.89 | −1.56 |
| vs AZARÃO_C | **+3.3** (sufoca) | +5.3 (sufoca extra) | +1.4 |
| Formações | 3 (4-2-3-1, 4-3-3, 5-4-1) | 2 (4-4-2, 4-2-3-1) | 1 (4-2-3-1) |
| Padrão perdendo | **Pressiona em ambos mandos** | Atropela em volume | Vai pra cima ainda mais |
| Padrão vencendo | Mantém em casa, pode relaxar fora | Recua extremo fora | Recua casa também |

**Insight**: Flu é o **único entre os 3 grandes com SALDO POSITIVO em ambos mandos**. Padrão mais estável → mercado mais previsível.

---

*Dossiê forense — 17 partidas Brasileirão 2026 · 7 dados completos · 10 placar+cantos.*
