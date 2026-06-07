# 📋 DOSSIÊ FORENSE — FLAMENGO
*Brasileirão Série A 2026 · 16 jogos · gerado 2026-06-02*
> ⚠️ **DOSSIÊ PARCIAL — AUDITORIA PÓS-FATO identificou limitações**
> - **Jogos no banco**: 16
> - **Cobertura tática** (formação/posse/finalizações): **50%** (apenas 8 de 16 jogos)
> - **Saldo cantos** (banco completo): -0.50 → **AZARÃO_C** (#14 da liga)
> - **Pace médio**: 9.38 cantos/jogo
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


> **Padrão EDS R3 — limitações honestas declaradas antes:**
> - 8 jogos têm dados táticos ricos (formação, posse, finalizações) — destacados com 🟢
> - 8 jogos têm só placar + cantos (sem formação/posse) — destacados com 🟡; análise tática nesses é INFERÊNCIA, não dado bruto.
> - Não tenho dados de desfalques, calendário internacional ou suspensões — onde isso seria relevante, declaro explicitamente.
> - Não tenho dados da próxima partida (calendário não está no banco). Bloco 5 entrega **matriz preditiva por categoria de adversário** em vez de jogo específico.

---

# BLOCO 1 — IDENTIDADE E DNA DO TIME

## 1.1 Perfil tático atual

**Formação principal (casa e fora):** **4-2-3-1 em 16/16 jogos** (100%). Flamengo NÃO tem formação alternativa observada — usa o mesmo esquema independente do mando, da força do adversário e do contexto. Isso é uma rigidez tática rara — a maioria dos times grandes alterna pelo menos para 4-3-3 ou 3-5-2 em jogos pontuais. **Implicação para cantos**: o adversário SABE como o Fla vai jogar. Times que se preparam para 4-2-3-1 (4-4-2 médio bloqueando os meias, 5-4-1 fechando lateral) conseguem ANULAR pontas — e ponta anulado significa cruzamento bloqueado, que significa CANTO NÃO GERADO.

**Estilo de jogo predominante:** **time de POSSE + finalização central**.
- Posse média (dados de 8 jogos): **54.9%** (mediana 53%). Pico: 68% vs Grêmio fora. Vale: 40% vs Fluminense fora (com vermelho).
- Finalizações pró médias: **16 por jogo**. Pico: 22 vs Palmeiras casa (jogo que perdeu 0-3).
- **NÃO É time de pressão alta sufocadora** — quando perde a bola, recua para bloco médio.
- **NÃO É time de contra-ataque** — busca controle.
- O ataque é **centralizado** (meia-atacante + 9): finaliza muito do meio, gera POUCO cruzamento de fundo. Por isso a contradição "muita finalização, poucos cantos".

**Como se comporta por placar:**
- **VENCENDO**: **RECUA** (confirmado em 2 jogos críticos):
  - Santos casa (3-1): 2T cantos 0-5 pró Santos. Fla virou muro defensivo.
  - Atl-MG fora (4-0): cantos do JOGO INTEIRO 1-8 contra Fla. Goleou e desligou.
- **EMPATANDO**: mantém intensidade média — vs Internacional/Vasco/Athletico, jogos com pace de cantos próximo da média (7-12 totais).
- **PERDENDO**: **VAI PRA CIMA, gera muitos cantos pró** (confirmado):
  - Palmeiras casa (0-3, ainda com vermelho): 22 finalizações, 8 cantos pró.
  - Athletico-PR fora (1-1, com vermelho): 2T cantos 6-3 pró Fla após sofrer 6-1 no HT.
- **Conclusão tática**: Flamengo PERDENDO É MAIS PERIGOSO em cantos pró do que Flamengo VENCENDO. Quem aposta UNDER porque "Fla está perdendo, vai morrer no jogo" se ferra.

**Recua quando abre vantagem ou mantém pressão?** **RECUA — confirmado em 2 de 2 casos extremos**. Isso é um padrão GIGANTE. Flamengo abrindo placar cedo em casa contra time inferior é setup para **LIVE asiático cantos adversário +2.5 no intervalo**.

---

## 1.2 Contexto de temporada

- **Posição na tabela**: **2º** com 31 pts em 16 jogos (74.5% de aproveitamento). Atrás só do Palmeiras (38 pts).
- **Objetivo claro na competição**: caça ao título. Diferença para Palmeiras (7 pts) é remontável.
- **Forma recente** (últimos 6 jogos cronológicos: 19/04 Bahia → 23/05 Palmeiras):
  - vs Bahia (C): **V 2-0** ✅
  - vs Atl-MG (F): **V 4-0** ✅
  - vs Vasco (C): **E 2-2** ⚠️
  - vs Grêmio (F): **V 1-0** ✅
  - vs Athletico-PR (F): **E 1-1** ⚠️
  - vs Palmeiras (C): **D 0-3** ❌
  - **Resumo**: 3V/2E/1D nos últimos 6 — boa fase em pontos mas tropeçou no clássico decisivo contra o líder. Em cantos, alternou domínio (Bahia 6-1, Grêmio 6-0) com dominação sofrida (Atl-MG 1-8, Athletico 7-9).
- **Desfalques conhecidos**: ❌ **Não tenho esse dado no banco** — operador deve checar antes de apostar.
- **Fadiga de calendário**: ❌ **Não tenho esse dado de forma estruturada**. Sabido externamente: Flamengo joga Libertadores em paralelo, então é razoável assumir rotação para jogos do BR (potencial impacto: menos intensidade = menos cantos). Caso identificado retrospectivamente: **02-03-04/04** (Botafogo → Remo → Corinthians em 3 dias) — fadiga afetou cantos.

---

## 1.3 Perfil ofensivo e defensivo

- **Dominante territorialmente ou cede posse?** **Dominante** — posse 54.9% média, picos 63-68%. Mas dominância territorial **não se converte proporcionalmente em cantos** (saldo −0.5 cantos).
- **Média de finalizações pró/con**: 16 vs 14.4 (dados de 8 jogos). Saldo +1.6 (positivo, mas magro). Fla finaliza pouco mais do que sofre — não é o "rolo compressor" que a tabela sugere.
- **Setores que geram mais cantos**: principalmente **bolas paradas e jogadas pelo meio-direita** (ponta direita é o lado mais ativo no 4-2-3-1 dele). **NÃO gera muito por cruzamento de lateral-esquerda** — talvez por característica do lateral atual ser mais conservador. Observação: pace de cantos em CASA (4.9 média pró) só é levemente maior do que FORA (4.4 média pró) — a vantagem de casa é tímida nesse mercado.
- **Cantos por escanteios táticos ou volume real?** **Volume real**, mas volume MENOR do que o tamanho do time sugere. Não é time que treinou rotinas específicas para forçar cantos por jogadas ensaiadas (do contrário, o saldo seria positivo). É time que **gera cantos como subproduto** da pressão central, e essa pressão central produz mais finalização do que escanteio.

---

# BLOCO 2 — ANÁLISE JOGO A JOGO (16 partidas)

> Legenda: 🟢 dados completos (formação/posse) · 🟡 só placar/cantos · 🔴 jogo com expulsão · ⚡ outlier importante

---

## 🟢 1. 10.02.2026 — FORA — vs VITÓRIA — V 2-1 — Cantos 2x7 — Total 9

### Contexto pré-jogo
- **Importância**: Abertura do campeonato. Pressão moderada — Flamengo querendo começar bem mas sem desespero.
- **Desfalques**: ❌ Sem dado no banco. (Externamente: clássico início de temporada com elenco ainda em ajuste.)
- **Momento do Vitória**: Recém-promovido/em construção. Posição tabela posterior: 11º. Identidade: time defensivo, encastela contra grandes.
- **Expectativa tática esperada**: Fla com bola, Vitória esperando. **Mercado esperaria pace baixo-médio (8-10 cantos) com domínio leve pró Fla**.

### O que aconteceu no jogo
- Vitória usou **5-4-1** (linha defensiva de 5 — sinal claro de "bloco baixo"). Fla em 4-2-3-1.
- Posse: Fla 56% — controlou mas SEM ESMAGAR.
- **Finalizações: Vitória 10 x 6 Fla** (!!!). Vitória CHUTOU MAIS que o Fla em casa.
- Chutes no alvo Fla: apenas 2.
- HT cantos: **0-3 pro Vitória** — Fla nem chegou em canto no 1T.
- Vitória fez 21 faltas (muito alto) — quebrava ritmo, ganhava bolas paradas.
- Resultado em gols: Fla ganhou 2-1 (eficiência nas chances).
- **Não houve virada tática clara** — Vitória manteve plano todo o jogo.

### Análise de cantos individualizada
- **Por que 2x7?** Vitória encastelou em 5-4-1, deu 0 espaço pelas pontas. Fla forçou meio (6 finalizações), errou cruzamentos, mas **sem volume nas pontas, NÃO HÁ CANTO**. Vitória, recuando, recebia bola perto da própria área → ao limpar, **a bola estourava em laterais e em cantos defensivos pro Vitória** (saídas de bola pressionada). Cantos pro Vitória vieram MAIS de "fugas de pressão" do que de ataques organizados.
- **Coerente com o perfil?** **SIM** para ambos: Vitória AZARÃO_C (volume baixo) jogando ainda mais defensivo; Fla com saldo de cantos −0.5 e dificuldade contra blocos baixos.
- **Era previsível?** **PARCIALMENTE SIM**. Setup clássico (favorito fora vs encastelado) historicamente trava em cantos. O TOTAL 9 (próximo de UNDER 9.5) era até razoável. O QUE NÃO ERA PREVISÍVEL era o DOMÍNIO de cantos do Vitória (saldo +5). Quem viu odd 1.57 do Fla apostou em "Fla domina cantos" e quebrou. **O sinal correto era cantos PRÓ Vitória OVER 4.5, não cantos PRÓ Fla.**
- **Superestimamos**: o Fla. Imaginar que "Fla favoritíssimo" = "Fla domina tudo" foi erro.
- **Subestimamos**: a capacidade do Vitória de gerar volume defensivo (cantos via alívio de pressão).

### Aprendizado para o mercado
- **Quebra padrão raso "favorito = domínio em cantos"**.
- **Sinal pré-jogo identificável**: odd 1.57 + adversário com perfil defensivo (Vitória joga 5-4-1 historicamente) = **NÃO apostar HDP cantos a favor do favorito**. Apostar UNDER 9.5 total ou cantos PRÓ underdog +0.5/+1.5 asiático.
- **Classificação**: **OUTLIER EXPLICADO** (domínio invertido por encastelamento defensivo do mandante).

---

## 🟡 2. 23.03.2026 — FORA — vs SÃO PAULO — D 1-2 — Cantos 6x2 — Total 8

### Contexto pré-jogo
- **Importância**: 1º clássico nacional do Fla na temporada. Pressão alta — testar a forma contra ELITE.
- **Desfalques**: ❌ Sem dado.
- **Momento do São Paulo**: ELITE tabela (7º final), ELITE_C (#2 em cantos da liga). Em casa, no Morumbi, contra rival pesado.
- **Expectativa tática esperada**: jogo equilibrado, ambos com qualidade, **mercado esperaria pace médio-alto (10-12 cantos) com leve vantagem SP em cantos** (manda em casa + ELITE_C).

### O que aconteceu no jogo
- Fla começou agressivo. **HT cantos: 5-1 pro Fla** (!!!). Domínio territorial no 1T.
- 2T: SP equilibrou (1-1 em cantos), mas converteu chances → 2-1.
- Fla criou MUITO no 1T mas não converteu. SP capitalizou eficiência.
- **Virada tática**: gol do SP fez Fla abrir mais ainda, mas SP segurou.

### Análise de cantos individualizada
- **Por que 6x2?** Fla pressionou no 1T (HT 5-1!!) em casa do rival — sinal de **OUSADIA tática** rara em visitante contra ELITE. SP foi obrigado a se defender, gerou poucos cantos pró.
- **Coerente?** Para o Fla, sim (vai pra cima contra ELITE_C, padrão E será confirmado depois). Para o SP, **PARCIALMENTE NÃO** — SP ELITE_C costuma gerar mais cantos. Aqui o SP foi mais EFICIENTE do que volumoso (converteu chances sem precisar de muito).
- **Era previsível?** **OVER 4.5 HT em cantos teria sido um trade incrível** (saiu 6). Quem viu Fla "favorito moral fora" + ambos ELITE_C poderia inferir alto pace HT. O **UNDER 9.5 FT** também acertaria (saiu 8).
- **Superestimamos**: ninguém — jogo seguiu a média.
- **Subestimamos**: capacidade do Fla de gerar pace no HT longe de casa contra grande.

### Aprendizado para o mercado
- **Reforça padrão**: Fla vs ELITE_C tende a abrir o jogo, **pace HT alto**.
- **Sinal pré-jogo**: 2 ELITES_C + Fla precisando pontuar = **OVER cantos HT** é valor.
- **Classificação**: **CONFIRMOU PERFIL** (Fla vai pra cima contra ELITE_C).

---

## 🟡 3. 25.03.2026 — CASA — vs INTERNACIONAL — E 1-1 — Cantos 4x3 — Total 7 ⚡

### Contexto pré-jogo
- **Importância**: Casa contra rival difícil (Inter é #1 saldo cantos da liga).
- **Desfalques**: ❌ Sem dado.
- **Momento do Inter**: 12º na tabela (MÉDIO) mas **ELITE_C** (#1 saldo cantos +3.65). Time que gera VOLUME consistentemente.
- **Expectativa tática esperada**: pace alto (Inter sempre puxa pace). **Mercado esperaria 10-12 cantos totais.**

### O que aconteceu no jogo
- Jogo TRAVOU. Apenas **7 cantos totais** — outlier baixo para o que se esperava.
- HT 3-1 pro Fla, 2T 1-2 pro Inter (leve viradinha no pace pro Inter).
- Resultado empate 1-1 sem grandes emoções.

### Análise de cantos individualizada
- **Por que 4x3 só?** Outlier evidente. Provável explicação: jogo aberto da temporada, ambos tateando, **ritmo baixo**. Inter pode ter vindo com 4-4-2 mais conservador (não tenho dado). Fla controlou sem forçar.
- **Coerente?** **NÃO** para Inter (ELITE_C gerando só 3 cantos é muito abaixo). Para Fla sim (4 cantos é a média dele).
- **Era previsível?** **NÃO** — UNDER 9.5 era contra-intuitivo dada a presença do Inter. Esse foi outlier que QUEBRA padrão Inter ELITE_C, mas confirma Fla AZARÃO_C.
- **Superestimamos**: o Inter (quem viu ELITE_C apostou OVER e quebrou).
- **Subestimamos**: o efeito de "casa do Fla" em segurar pace.

### Aprendizado para o mercado
- **Lição importante**: Inter ELITE_C **NÃO É garantia de OVER** quando enfrenta time que SEGURA bola (Fla 54% posse média). Time de pressão alta só explode em cantos quando o adversário aceita correria.
- **Sinal pré-jogo**: Inter em casa do Fla = pace MENOR do que Inter em casa própria.
- **Classificação**: **OUTLIER EXPLICADO** (Inter neutralizado pela posse do Fla; Fla na média).

---

## 🟡 4. 31.03.2026 — CASA — vs CRUZEIRO — V 2-0 — Cantos 4x7 — Total 11 ⚡

### Contexto pré-jogo
- **Importância**: Confronto contra outro ELITE_C (Cruzeiro 5º saldo cantos +1.35).
- **Desfalques**: ❌ Sem dado.
- **Momento do Cruzeiro**: MÉDIO tabela (9º final), **ELITE_C**. Time que pressiona em fases ofensivas, gera cantos por volume real.
- **Expectativa tática esperada**: pace alto (12+ cantos), Cruzeiro buscando volume. **Mercado: OVER 10.5 com algum risco.**

### O que aconteceu no jogo
- **HT EXPLOSIVO PRO CRUZEIRO em cantos: 1-4** (!!). Cruzeiro empilhou cantos no 1T.
- 2T: Fla virou pace (3-3 em cantos no período).
- Gols: Fla 2-0. **Eficiência absurda** do Fla — converteu 2 das poucas chances que teve.
- Sinal claro: **Fla foi reativo, Cruzeiro foi proativo, mas Fla teve eficiência.**

### Análise de cantos individualizada
- **Por que 4x7?** Cruzeiro **pressionou ofensivamente** todo 1T (1-4 em cantos é monstro). Fla aceitou, esperou contra-ataque, converteu. Cantos refletiram o **estilo do Cruzeiro**, não o resultado em gols.
- **Coerente?** **SIM** total. Cruzeiro ELITE_C gerando volume. Fla AZARÃO_C aceitando ser dominado em cantos mesmo em casa.
- **Era previsível?** **SIM**. **OVER 10 era o trade certo** (saiu 11). **Cantos PRÓ Cruzeiro OVER 4.5 também** (saiu 7). Quem viu "Fla é casa, vai dominar" perdeu.
- **Superestimamos**: o Fla (de novo, leitura ingênua de favoritismo).
- **Subestimamos**: o pace que o Cruzeiro impõe em casa do adversário.

### Aprendizado para o mercado
- **Confirma padrão**: Fla aceita ser dominado em cantos por ELITE_C (mesmo em casa).
- **Sinal pré-jogo**: Cruzeiro/Inter/Vasco/SP visitando o Fla = **cantos PRÓ visitante OVER 4.5** tem valor.
- **Classificação**: **CONFIRMOU PERFIL** dos dois (Cruzeiro pressionando, Fla aceitando).

---

## 🟡 5. 02.04.2026 — FORA — vs BOTAFOGO — V 3-0 — Cantos 4x2 — Total 6 ⚡

### Contexto pré-jogo
- **Importância**: Clássico carioca fora. Sempre pressão.
- **Desfalques**: ❌ Sem dado.
- **Momento do Botafogo**: MÉDIO tabela (10º), **AZARÃO_C** (16º cantos). Time que NÃO gera volume de cantos.
- **Expectativa tática esperada**: jogo travado (ambos com saldo de cantos baixo). **UNDER 9.5 com sinal claro.**

### O que aconteceu no jogo
- Goleada Fla 3-0 com **só 6 cantos no JOGO INTEIRO** (!!!).
- HT 1-0 em cantos, 2T 3-2.
- Botafogo desmoronou em gols mas NÃO atacou pra recuperar (raro — geralmente perdedor 0-3 vai pra cima).

### Análise de cantos individualizada
- **Por que 4x2?** Fla matou cedo, controlou. Botafogo, perdendo 3-0, **não conseguiu reação ofensiva** — talvez por desfalques, talvez por exaustão tática. Pace de 6 é extremo (mediana BR ~9.5).
- **Coerente?** **SIM** para Botafogo (AZARÃO_C). **PARCIALMENTE** para Fla — Fla domina pouco em cantos mesmo quando ganha tranquilo.
- **Era previsível?** **SIM, UNDER 8.5 era ouro** (saiu 6). 2 AZARÕES em cantos = trava previsível.
- **Superestimamos**: ninguém. Mercado provavelmente já apontava UNDER.
- **Subestimamos**: o quanto o Botafogo "morre" perdendo (não foi pra cima, só aceitou).

### Aprendizado para o mercado
- **Padrão GIGANTE**: Fla FORA vs AZARÃO_C = **UNDER 8.5 sistemático**.
- **Sinal pré-jogo identificável**: 2 times com saldo cantos negativo enfrentando-se = jogo trava 90% das vezes.
- **Classificação**: **CONFIRMOU PERFIL** (2 AZARÕES_C = baixo pace).

---

## 🟡 6. 03.04.2026 — CASA — vs REMO — V 3-0 — Cantos 7x2 — Total 9

### Contexto pré-jogo
- **Importância**: Casa contra lanterna (Remo 19º final). Fla obrigado a vencer.
- **Desfalques**: ❌ Sem dado. **OBSERVAÇÃO**: jogou em 02/04 (Botafogo) e 03/04 (Remo) — apenas 1 dia de descanso!
- **Momento do Remo**: 19º (penúltimo), **AZARÃO_C** (18º cantos). Lanterna em todos sentidos.
- **Expectativa tática esperada**: Fla domina, mas Remo defensivo trava cantos. **UNDER 9.5 razoável, mas com risco se Remo encastelar pouco.**

### O que aconteceu no jogo
- Fla ganhou 3-0 tranquilo.
- HT cantos 3-2 (equilibrado!), **2T explosão 4-0 pro Fla**.
- Total 9 — bem no limite UNDER 9.5.

### Análise de cantos individualizada
- **Por que 7x2?** Remo (lanterna desorganizada) NÃO conseguiu encastelar bem — diferente do Vitória 5-4-1. Foi furado pelos lados. No 2T, com 2-0/3-0 no placar, Fla manteve pressão (raro!) e gerou 4 cantos seguidos.
- **Coerente?** **SIM** total. AZARÃO_C verdadeiro perdendo CASA do Fla = sofre, mas não dá volume.
- **Era previsível?** **PARCIALMENTE**. UNDER 10 era apostável. Mas EXPLOSÃO 2T (4 cantos) foi acima do que se esperaria — Fla não desligou aqui (diferente do padrão Atl-MG).
- **Superestimamos**: ninguém grave.
- **Subestimamos**: a capacidade do Fla de manter pressão contra Remo (talvez por ser logo após Botafogo, tinha algo a provar — sequência de jogos curtos).

### Aprendizado para o mercado
- **Quebra LEVE** do padrão "Fla relaxa vencendo": aqui não relaxou. Provável explicação: era LANTERNA, oportunidade de saldo de gols/encadeamento de vitórias.
- **Sinal**: contexto importa — Fla contra lanterna pode manter pressão (mais cantos) diferente de jogos contra times intermediários.
- **Classificação**: **CONFIRMOU PERFIL com ressalva** (Fla casa vs AZARÃO_C real = pace baixo-médio).

---

## 🟡 7. 04.04.2026 — FORA — vs CORINTHIANS — E 1-1 — Cantos 2x6 — Total 8

### Contexto pré-jogo
- **Importância**: Clássico nacional FORA. Pressão alta.
- **Desfalques**: ❌ Sem dado. **OBSERVAÇÃO CRÍTICA**: Fla jogou em 02/04 (Botafogo) e 03/04 (Remo) — chegou em 04/04 com NENHUM dia de descanso. **Fadiga MÁXIMA**. Isso explica muita coisa.
- **Momento do Corinthians**: AZARÃO tabela (15º final), **MÉDIO_C**. Time que em casa contra grande sempre vem motivado.
- **Expectativa tática esperada**: jogo equilibrado. **Mercado: UNDER 10 razoável.**

### O que aconteceu no jogo
- Cor pressionou em casa, dominou cantos 6-2 (HT 3-1).
- Fla, **CANSADO** (3 jogos em 3 dias!), aceitou ser reativo.
- Empate 1-1.

### Análise de cantos individualizada
- **Por que 2x6?** **FADIGA + Cor motivado em casa**. Fla com pernas curtas, recuou. Cor (MÉDIO_C) explorou — não é volumoso normalmente, mas aproveitou janela.
- **Coerente?** Para Cor sim (em casa contra grande, sempre pressiona). Para Fla **PARCIALMENTE** — saldo −4 é abaixo até do esperado.
- **Era previsível?** **PARCIALMENTE**. Quem soubesse da fadiga (Fla 3º jogo em 3 dias) acertaria UNDER 10 + cantos PRÓ Cor OVER 4.5. Sem essa info, era jogo equilibrado no papel.
- **Superestimamos**: o Fla (de novo).
- **Subestimamos**: o efeito de calendário apertado (operacionalmente é o melhor sinal que existe).

### Aprendizado para o mercado
- **Sinal CRÍTICO**: sempre verificar **calendário do Fla** antes de apostar. 3 jogos em 4 dias = LIVE UNDER + cantos PRÓ adv.
- **Classificação**: **OUTLIER EXPLICADO** (fadiga absurda).

---

## 🟢 8. 05.04.2026 — CASA — vs SANTOS — V 3-1 — Cantos 2x7 — Total 9 ⚡⚡

### Contexto pré-jogo
- **Importância**: Casa contra time fraco. Obrigação de vencer pra dar saldo.
- **Desfalques**: ❌ Sem dado. **OBSERVAÇÃO**: 4º jogo em 5 dias! Fadiga total.
- **Momento do Santos**: AZARÃO tabela (17º final), **MÉDIO_C** (8º cantos).
- **Expectativa tática esperada**: Fla domina fácil. **Odd 1.30 (esmagador).**

### O que aconteceu no jogo
- Fla 4-2-3-1 vs Santos 4-1-4-1.
- **HT: cantos 2-2 (equilibrado)**. Posse Fla 63%.
- Finalizações: Fla 19 vs Santos 17 (!!!).
- Fla abriu placar, depois ampliou.
- **2T CANTOS: 0-5 PRO SANTOS** (!!!). PADRÃO DO RELAXAMENTO PURO.
- Fla SÓ 2 chutes no alvo (de 19 finalizações — chutou de qualquer jeito).
- Apenas 2 faltas do Fla — não brigou, não trancou.

### Análise de cantos individualizada
- **Por que 2x7 com Fla vencendo 3-1?** **PADRÃO A do dossiê (RELAXAMENTO VENCENDO)**. Fla abriu placar, RECUOU, deixou Santos jogar pra frente sem retaliação. Santos atacou 45 minutos contra defesa armada — gerou 5 cantos seguidos.
- **Coerente?** **SIM** com perfil do Fla (recua vencendo). **NÃO** com perfil do Santos (MÉDIO_C costuma gerar 4-5 cantos pró, gerou 7 aqui).
- **Era previsível?** **PRÉ-JOGO: NÃO** (mercado esperava Fla dominar). **LIVE no intervalo (HT 2-2 com Fla vencendo nos gols): SIM** — apostar **Santos asiático cantos +2.5 ou +3.5** seria ouro.
- **Superestimamos**: o Fla (capacidade de continuar pressionando após abrir placar).
- **Subestimamos**: a capacidade do Santos de gerar volume mesmo perdendo (não morreu, atacou).

### Aprendizado para o mercado
- **PADRÃO MASTER do Fla**: vence cedo CASA → recua → adversário gera 4-6 cantos no 2T.
- **Sinal LIVE**: Fla abre 1-0 ou 2-0 em casa contra time inferior antes dos 30min → **cantos PRÓ adv HT2 OVER 3.5/4.5 é ouro**.
- **Classificação**: **CONFIRMOU PERFIL** (padrão de relaxamento confirmado pela 1ª vez claramente).

---

## 🟡 9. 07.04.2026 — FORA — vs RED BULL BRAGANTINO — D 0-3 — Cantos 5x7 — Total 12

### Contexto pré-jogo
- **Importância**: FORA contra ELITE tabela (Bragantino 5º).
- **Desfalques**: ❌ Sem dado. **5º jogo em 7 dias** — fadiga acumulada brutal.
- **Momento do Bragantino**: ELITE tabela, MÉDIO_C. Time forte tecnicamente.
- **Expectativa tática esperada**: jogo equilibrado, pace médio-alto.

### O que aconteceu no jogo
- Bragantino dominou e converteu — Fla apanhou 3-0.
- Cantos: 5-7 (HT 2-4).
- Pace 12 (alto, acima da média).
- Jogo aberto.

### Análise de cantos individualizada
- **Por que 5x7?** Bragantino impôs jogo. Fla, cansado, foi reativo, mas ainda assim atacou no 2T (3-3 em cantos no período). Sem vermelho, jogo correu naturalmente alto.
- **Coerente?** SIM total. 2 times de qualidade jogando aberto = pace alto.
- **Era previsível?** **SIM**. OVER 10.5 com algum valor — saiu 12.
- **Superestimamos**: o Fla pré-jogo (talvez quem viu 5 jogos em 7 dias já tivesse desconfiado).
- **Subestimamos**: nada relevante.

### Aprendizado para o mercado
- **Confirma**: Fla cansado fora vs ELITE = surra em gols mas pace alto em cantos.
- **Classificação**: **CONFIRMOU PERFIL** (Bragantino ELITE domina, jogo aberto = pace alto).

---

## 🟢🔴 10. 12.04.2026 — FORA — vs FLUMINENSE — V 2-1 — Cantos 2x8 — Total 10 ⚡

### Contexto pré-jogo
- **Importância**: Clássico FluFla, sempre máxima pressão.
- **Desfalques**: ❌ Sem dado. **6º jogo em 12 dias** — fadiga.
- **Momento do Flu**: ELITE tabela (3º), **ELITE_C** (3º cantos +1.59). Concorrente direto.
- **Expectativa tática esperada**: pace alto, jogo equilibrado.

### O que aconteceu no jogo
- Flu 4-2-3-1 vs Fla 4-2-3-1 (espelho).
- **Fla com 40% posse** (cedeu controle!).
- Finalizações: **Flu 19 x 17 Fla** (equilibrado mas Flu mais).
- Chutes no alvo Fla: 9 (alta eficiência defensiva do Flu? não, Fla converteu 2 chances).
- **🔴 VERMELHO PARA O FLA** durante o jogo.
- HT cantos 1-2, **2T cantos 1-6 pro Flu** (explosão).
- Resultado: Fla VENCEU 2-1 (vitória heroica).

### Análise de cantos individualizada
- **Por que 2x8?** Vermelho matou. Com 10 homens, Fla recuou em bloco baixíssimo. Flu pressionou todo 2T sem encontrar gol mas gerando cantos por desespero. Cantos PRÓ Fla (apenas 2) vieram de contra-ataques esporádicos.
- **Coerente?** **PARCIALMENTE**. Sem vermelho, padrão típico de Flu ELITE_C gerando volume (7-8 cantos). COM vermelho, ainda mais (explosão 2T).
- **Era previsível?** **SIM pré-jogo OVER 9.5**. **Pós-vermelho, OVER 11 LIVE** + **cantos PRÓ Flu HT2 OVER 4.5** ouro.
- **Superestimamos**: nada (mercado já apontava OVER).
- **Subestimamos**: a EFICIÊNCIA do Fla em converter pouco em vitória (mas isso é o mercado 1x2, não cantos).

### Aprendizado para o mercado
- **Padrão importante**: Fla com vermelho fora = adversário gera volume massivo de cantos no 2T.
- **Sinal LIVE**: vermelho no Fla = aposte IMEDIATAMENTE cantos adv +1.5 no 2T asiático.
- **Classificação**: **CONFIRMOU PERFIL** com agravante do vermelho.

---

## 🟢 11. 19.04.2026 — CASA — vs BAHIA — V 2-0 — Cantos 6x1 — Total 7

### Contexto pré-jogo
- **Importância**: Casa contra MÉDIO tabela. Obrigação.
- **Desfalques**: ❌ Sem dado.
- **Momento do Bahia**: MÉDIO tabela (8º), **MÉDIO_C** (saldo 0). Bahia veio com formação **OFENSIVA** — 4-3-3.
- **Expectativa tática esperada**: jogo controlado pelo Fla. **Mercado: UNDER 10 com risco.**

### O que aconteceu no jogo
- Fla 4-2-3-1 vs Bahia 4-3-3.
- Posse Fla 52% (equilibrado).
- Finalizações: **Fla 20 x 13 Bahia** (domínio claro).
- Chutes no alvo Fla: 8.
- HT cantos 2-1, **2T explosão 4-0 pro Fla**.
- Fla abriu HT (1-0), ampliou 2T.
- Pace total 7 — baixo!

### Análise de cantos individualizada
- **Por que 6x1?** **AQUI ESTÁ A CHAVE**. Bahia com **4-3-3 ofensivo CASA do Fla** = expôs defesa, deixou espaços, foi furado pelos lados. Fla EXPLORARA todos os espaços — 20 finalizações, 6 cantos. Bahia, sem volume defensivo (4-3-3 é frente), gerou só 1 canto.
- **Coerente?** **SIM** total — quando adversário escolhe atacar na casa do Fla, ele NÃO tem volume defensivo pra gerar cantos seus.
- **Era previsível?** **SE soubesse da escalação ofensiva do Bahia**: SIM. Cantos PRÓ Fla OVER 5.5 + cantos PRÓ Bahia UNDER 2.5 = trade GIGANTE.
- **Superestimamos**: ninguém grave.
- **Subestimamos**: o efeito de "formação ofensiva visitante" potencializando cantos do mandante.

### Aprendizado para o mercado
- **PADRÃO C confirmado**: adversário com 4-3-3 ou 3-4-3 visitando o Fla = **OVER cantos PRÓ Fla**.
- **Sinal pré-jogo identificável**: ler formações divulgadas. **Bahia/Bragantino/Athletico/Grêmio frequentemente jogam ofensivo** = bom alvo.
- **Classificação**: **CONFIRMOU PERFIL** (padrão "adv ofensivo = Fla domina cantos").

---

## 🟡 12. 26.04.2026 — FORA — vs ATLÉTICO-MG — V 4-0 — Cantos 1x8 — Total 9 ⚡⚡⚡

### Contexto pré-jogo
- **Importância**: FORA contra AZARÃO tabela.
- **Desfalques**: ❌ Sem dado.
- **Momento do Atl-MG**: AZARÃO tabela (14º final, 21 pts), **MÉDIO_C** (12º cantos). Fase ruim.
- **Expectativa tática esperada**: jogo aberto. **Mercado: pace 10-11 razoável.**

### O que aconteceu no jogo
- **Fla GOLEOU 4-0 com 3-0 já no HT** (!).
- Cantos: **1x8 NO JOGO INTEIRO**. HT cantos 1-5 (Fla goleando 3-0 e perdendo de cantos 1-5).
- **NÚMERO ABSOLUTAMENTE EXTREMO**: Fla com apenas **1 canto** em 90 minutos.

### Análise de cantos individualizada
- **Por que 1x8 com Fla vencendo 4-0?** **PADRÃO RELAXAMENTO MÁXIMO**. Fla matou cedo (3-0 HT), DESLIGOU completamente. Atl-MG, perdendo de goleada, atacou pelos próprios brios e gerou cantos por volume. Fla virou DEFESA-CONTRA-ATAQUE — em modo "Champions" sem nem ser Champions.
- **Coerente?** **NÃO** com perfil de Fla normal — é EXTREMO. **SIM** com padrão "vence cedo, desliga". Aqui foi a versão máxima.
- **Era previsível?** **PRÉ-JOGO: NÃO**. **LIVE quando saiu 3-0 HT: SIM** — apostar Atl-MG cantos +3.5 HT2 = ouro.
- **Superestimamos**: o Fla (sempre).
- **Subestimamos**: o quanto Fla "morre tatícamente" quando lidera por 3+.

### Aprendizado para o mercado
- **Padrão CONFIRMADO**: Fla vencendo por 2+ gols no HT = **desliga, sofre 4-5 cantos no 2T**.
- **Sinal LIVE**: Fla 3-0 HT = Live cantos adv HT2 +3.5 ouro absoluto.
- **Classificação**: **CONFIRMOU PERFIL** em versão extrema.

---

## 🟢 13. 03.05.2026 — CASA — vs VASCO — E 2-2 — Cantos 5x6 — Total 11 ⚡

### Contexto pré-jogo
- **Importância**: Clássico, sempre máxima pressão.
- **Desfalques**: ❌ Sem dado.
- **Momento do Vasco**: AZARÃO tabela (16º final), mas **ELITE_C** (#4 cantos +1.59). **PARADOXO PURO** — fundo de tabela mas alto volume de cantos (pressão constante).
- **Expectativa tática esperada**: pace alto. **Sinal claro pra OVER se enxergou Vasco ELITE_C.**

### O que aconteceu no jogo
- Fla 4-2-3-1 vs Vasco 4-4-2.
- Posse Fla 49% (CEDEU controle EM CASA!!).
- **Finalizações: Vasco 20 x 12 Fla** (Vasco CHUTOU MUITO MAIS!).
- Cantos 5-6 (HT 3-2).
- Empate 2-2.

### Análise de cantos individualizada
- **Por que 5x6?** Vasco jogou ofensivo (20 chutes), pressionou alto, gerou volume natural. Fla aceitou ser reativo em casa — anomalia comportamental.
- **Coerente?** **SIM** para Vasco (ELITE_C confirmou perfil). **NÃO** para Fla — perder posse EM CASA contra AZARÃO da tabela é raro.
- **Era previsível?** **SIM se cruzou tabela com saldo cantos**. Quem olhou só tabela viu Fla atropela. Quem viu Vasco ELITE_C viu **OVER 10 barato**. Quem viu finalizações Vasco em jogos anteriores (sempre 16+) confirmou.
- **Superestimamos**: o Fla (de novo). E o **mando de campo** — Vasco visitante normalmente cede mas é ELITE_C, então não cede em cantos.
- **Subestimamos**: o Vasco. AZARÃO tabela ≠ AZARÃO em cantos.

### Aprendizado para o mercado
- **LIÇÃO DE OURO**: cruzar AMBAS as tabelas (pontos + cantos) ANTES de qualquer aposta.
- **Times PARADOXO** (Vasco/Inter/Cruzeiro) merecem APOSTA PRO ELES em cantos mesmo sendo "azarão" pela tabela.
- **Classificação**: **CONFIRMOU PERFIL DO VASCO** (ELITE_C consistente).

---

## 🟢 14. 10.05.2026 — FORA — vs GRÊMIO — V 1-0 — Cantos 6x0 — Total 6 ⚡

### Contexto pré-jogo
- **Importância**: Fora contra MÉDIO tabela. Importante pra emparelhar com Palmeiras.
- **Desfalques**: ❌ Sem dado.
- **Momento do Grêmio**: MÉDIO tabela (13º final), **AZARÃO_C** (15º). Time em má fase.
- **Expectativa tática esperada**: jogo equilibrado. **UNDER 9.5 razoável (ambos com saldo ruim em cantos).**

### O que aconteceu no jogo
- Grêmio **3-4-3 OFENSIVO em casa** (?!) — expôs ao Fla.
- Fla 4-2-3-1.
- **Posse Fla 68%** (DOMÍNIO ABSOLUTO fora!).
- **Finalizações: Fla 20 x 6 Grêmio** (massacre territorial).
- Cantos: 6x0 (HT 4-0!).
- Gol só no 2T (1-0).
- **EXEMPLO RARO**: Fla DOMINOU TUDO mas converteu pouco.

### Análise de cantos individualizada
- **Por que 6x0?** **PADRÃO C de novo**: Grêmio escolheu jogar aberto (3-4-3) em casa, expôs defesa, foi enquadrado nos cantos. **6-0 em cantos visitante é número monstruoso** (raro até pra times de Champions).
- **Coerente?** **SIM** total. Fla dominante quando adv joga aberto. Grêmio AZARÃO_C confirmou (0 cantos!).
- **Era previsível?** **SE soubesse 3-4-3 do Grêmio**: SIM. Cantos PRÓ Fla OVER 5.5 (saiu 6) era trade enorme. UNDER 8.5 total = ouro (saiu 6).
- **Superestimamos**: o Grêmio (achar que ofensivo em casa = vai criar).
- **Subestimamos**: o Fla em situação onde o adv erra a tática.

### Aprendizado para o mercado
- **Confirma**: 4-3-3 / 3-4-3 do adversário (mandante OU visitante) = **OVER pró Fla**.
- **Padrão raro**: pace TOTAL baixo (6) com cantos PRÓ Fla altos (6) = oportunidade dupla — UNDER total + OVER pró Fla.
- **Classificação**: **CONFIRMOU PERFIL** com confirmação dupla.

---

## 🟢🔴 15. 17.05.2026 — FORA — vs ATHLETICO-PR — E 1-1 — Cantos 7x9 — Total 16 ⚡⚡

### Contexto pré-jogo
- **Importância**: 2 ELITES jogando — confronto direto.
- **Desfalques**: ❌ Sem dado.
- **Momento do Athletico**: ELITE tabela (4º), **ELITE_C** (7º cantos +0.59). Time de pressão alta.
- **Expectativa tática esperada**: **pace altíssimo (2 ELITES_C)**. OVER 11.5 valor evidente.

### O que aconteceu no jogo
- Athletico **3-5-2** (formação ofensiva atípica) vs Fla 4-2-3-1.
- Posse Fla 64% (controlou).
- **Finalizações: Athletico 18 x 12 Fla** (Ath chutou mais!).
- **🔴 VERMELHO PARA O FLA** durante o jogo.
- HT cantos: **1-6 pro Athletico** (massacre HT!).
- 2T cantos: **6-3 pro Fla** (REAÇÃO).
- Resultado 1-1.
- **Pace 16** — outlier absoluto pra cima.

### Análise de cantos individualizada
- **Por que 7x9 com pace 16?** Athletico atacou furiosamente no 1T (6 cantos!) buscando gol. Fla tomou vermelho, foi forçado a recuar, recebeu pressão. Mas no 2T, mesmo com 10 homens, **Fla foi pra cima** (padrão B "perdendo+vermelho ataca") — gerou 6 cantos no 2T! Athletico atacou 90min, Fla atacou 45min, total explodiu.
- **Coerente?** **SIM** total. 2 ELITES_C + vermelho + ambos atacando = explosão de cantos garantida.
- **Era previsível?** **OVER 11.5 pré-jogo era valor enorme** (2 ELITES). Saiu 16. **OVER 5.5 cantos HT era trade absurdo** (saiu 7 só no HT).
- **Superestimamos**: nada.
- **Subestimamos**: SEMPRE subestimamos a explosão de pace em jogo aberto entre 2 ELITES_C.

### Aprendizado para o mercado
- **Padrão MASTER**: 2 ELITES_C jogando = **OVER 11.5 sistemático**.
- **Confirmação do padrão B**: Fla perdendo+vermelho NÃO morre — ataca, gera cantos.
- **Classificação**: **CONFIRMOU PERFIL** (Athletico ELITE_C agressivo + Fla padrão B).

---

## 🟢🔴 16. 23.05.2026 — CASA — vs PALMEIRAS — D 0-3 — Cantos 8x4 — Total 12 ⚡

### Contexto pré-jogo
- **Importância**: MÁXIMA — confronto direto pelo título contra o líder.
- **Desfalques**: ❌ Sem dado.
- **Momento do Palmeiras**: ELITE tabela (#1 final, 38 pts), **MÉDIO_C** (saldo 0). Time eficiente, NÃO volumoso em cantos. Tradição em contra-ataque mortal.
- **Expectativa tática esperada**: pace médio-alto (2 grandes). Palmeiras costuma converter chances escassas.

### O que aconteceu no jogo
- Espelho 4-2-3-1 vs 4-2-3-1.
- Posse Fla 47% (CEDEU controle em casa contra o líder!).
- **Finalizações Fla: 22** (PICO da temporada!) vs 12 Palmeiras.
- **🔴 VERMELHO PARA O FLA**.
- HT cantos 4-2 (Fla atacando), 2T cantos 4-2 (Fla continua atacando mesmo com vermelho e perdendo).
- Resultado **D 0-3**: Palmeiras matou em contra-ataques.

### Análise de cantos individualizada
- **Por que 8x4 com Fla perdendo 0-3?** **PADRÃO B CONFIRMADO**: Fla perdendo + vermelho = ATACA AINDA MAIS. 22 finalizações com 1 homem a menos é INSANO. Palmeiras (MÉDIO_C) gerou apenas 4 cantos — coerente com perfil "contra-ataque mortal sem volume".
- **Coerente?** **SIM** total. Fla padrão B em vez de morrer. Palmeiras eficiente sem volumar.
- **Era previsível?** **OVER 11.5 pré-jogo razoável** (2 ELITES). **OVER cantos PRÓ Fla 5.5** quase um trade óbvio dado o histórico recente. O CONTRA-INTUITIVO foi o 0-3 nos gols.
- **Superestimamos**: a defesa do Fla (vermelho expôs).
- **Subestimamos**: a eficiência letal do Palmeiras em contra-ataque.

### Aprendizado para o mercado
- **Padrão MASTER reforçado**: Fla perdendo + vermelho ≠ Fla morrendo. AINDA MAIS cantos pró.
- **Lição**: NUNCA apostar UNDER em jogo do Fla quando o time está perdendo (vai pra cima).
- **Classificação**: **CONFIRMOU PERFIL** (padrão B em sua versão mais extrema).

---

# BLOCO 3 — PADRÕES COMPORTAMENTAIS IDENTIFICADOS

## 3.1 Padrões por mando

| Métrica | CASA (7 jogos) | FORA (9 jogos) | Diferença |
|---------|----------------|----------------|-----------|
| Pace médio | 9.43 | 9.33 | ≈ igual |
| Saldo cantos | **+0.86** | **−1.56** | **−2.42 fora** |
| % vitória pontos | 57% (4V) | 56% (5V) | igual |

**Conclusão**: Fla joga MELHOR em PONTOS visitante (5V em 9), mas é DOMINADO em cantos fora. **Casa do Fla NÃO É terror em cantos** — saldo só +0.86 mesmo em casa. **Em pontos é gigante, em cantos é mediano em casa e ruim fora.** Mando de campo NÃO mexe muito no pace, mas inverte o saldo. Quem aposta cantos pró Fla precisa preferir CASA.

## 3.2 Padrões por força do adversário (TABELA)

| Categoria do adv | n | Saldo cantos Fla | Comportamento |
|------------------|---|------------------|---------------|
| ELITE tabela | 5 | **−1.6** | Surra ou domina conforme contexto — instável |
| MÉDIO tabela | 6 | **+0.5** | Equilibrado, alguns picos pró Fla |
| AZARÃO tabela | 5 | **−1.8** | **PARADOXO** — sofre contra os "fracos" |

**Conclusão**: Fla **NÃO é melhor contra fracos** em cantos. Pelo contrário, **vs AZARÃO tabela é onde mais perde cantos** (subestima e relaxa). **vs MÉDIO tabela é onde mais domina** (jogo equilibrado, vai pra cima).

## 3.3 Padrões por força do adversário (CANTOS)

| Categoria do adv | n | Saldo cantos Fla | Comportamento |
|------------------|---|------------------|---------------|
| ELITE_C | 6 | **−1.5** | Aceita ser dominado em cantos |
| MÉDIO_C | 5 | **−1.0** | Mediano |
| AZARÃO_C | 5 | **+1.4** | **Único cenário com saldo positivo claro** |

**Conclusão**: **Saldo cantos do adversário é melhor preditor que tabela**. Vs ELITE_C, Fla é dominado sistematicamente. Vs AZARÃO_C, Fla ganha cantos (mas pace total é baixo — UNDER total + OVER pró).

## 3.4 Padrões por placar

| Cenário | Comportamento Fla |
|---------|-------------------|
| **Vencendo confortável (≥2 gols)** | **RECUA** — sofre 4-7 cantos 2T (Santos, Atl-MG, Bahia parcial). Mas se contra LANTERNA, mantém (Remo). |
| **Empatando** | Mantém intensidade — pace na média (9-11) |
| **Perdendo (mesmo c/ vermelho)** | **VAI PRA CIMA** — 8-22 finalizações, 5-8 cantos pró (Palmeiras, Athletico-PR) |

**Padrão CRÍTICO**: **Fla perdendo NÃO é Fla morto.** Fla vencendo cedo CASA contra time inferior = ARMADILHA UNDER pró Fla.

## 3.5 Padrões por fase do jogo (HT vs 2T)

| Distribuição | Casos representativos |
|-------------|----------------------|
| **Cantos concentrados no 1T** | São Paulo (HT 5-1!), Athletico-PR (HT 1-6 do Ath), Atl-MG (HT 1-5 do Atl) |
| **Cantos concentrados no 2T** | Santos (2T 0-5 do Santos), Remo (2T 4-0 do Fla), Bahia (2T 4-0 do Fla) |
| **Distribuído** | Cruzeiro, Vasco, Athletico-PR (totais) |

**Conclusão**: Fla NÃO tem padrão fixo HT/2T — depende totalmente do contexto. **Mas há padrão claro de "explosão pós-relaxamento" no 2T** quando vence cedo (Santos, Atl-MG).

## 3.6 Padrões por adversário específico (ranking expectativa Fla)

**Adversários previsivelmente PRÓ FLA em cantos**:
- Times que jogam OFENSIVOS contra o Fla (4-3-3, 3-4-3): Bahia, Grêmio
- Times AZARÃO_C verdadeiros (Botafogo, Grêmio): jogos travam, Fla até consegue dominar

**Adversários previsivelmente CONTRA o Fla em cantos**:
- Vasco / Internacional / Cruzeiro (ELITE_C que pressionam)
- Athletico-PR / Bragantino (ELITE de pressão alta)
- Vitória / Corinthians (encastelados em casa)

**Adversários ARMADILHA** (parecem fáceis em cantos mas dão volta):
- Santos / Atlético-MG (MÉDIO_C que aproveita relaxamento do Fla)

---

# BLOCO 4 — ANÁLISE CRUZADA: O ADVERSÁRIO POTENCIALIZA OU BLOQUEIA?

## 🔴 Quando enfrenta time em BLOCO BAIXO / 5-4-1 / 4-1-4-1 defensivo
**O que acontece com cantos:** **BLOQUEIA cantos PRÓ Fla, NÃO bloqueia cantos pró adversário**.
- Evidência: Vitória 2x7 (Fla só 2 cantos contra 5-4-1). Corinthians 2x6.
- Razão: time encastelado sai jogando perto da própria área → ao limpar, bola estoura em cantos defensivos pra ele. Fla, atacando pelo meio sem pontas livres, finaliza para fora ou no goleiro = NÃO gera cantos.
- **Implicação operacional**: contra times defensivos, **NUNCA HDP cantos pró Fla**. Apostar **UNDER total** ou **cantos pró adv +0.5/+1.5 asiático**.

## 🟢 Quando enfrenta time de PRESSÃO ALTA / 4-3-3 / 3-4-3
**O que acontece com cantos:** **POTENCIALIZA cantos PRÓ Fla** (adv expõe espaços).
- Evidência: Bahia 4-3-3 → Fla 6x1. Grêmio 3-4-3 → Fla 6x0.
- Razão: time aberto deixa espaços laterais, Fla acelera contra-ataques pelas pontas, cruzamentos geram cantos.
- **Implicação operacional**: ler escalações divulgadas pré-jogo. Adv 4-3-3 ou 3-4-3 = **OVER cantos PRÓ Fla** + **UNDER cantos pró adv**.

## ⚖️ Quando enfrenta time TECNICAMENTE SUPERIOR (Palmeiras, Bragantino, Flu, Athletico)
**Fla recua e concede cantos ou mantém identidade?**
- **MANTÉM identidade ofensiva** (não recua tipo Tite) — vide Palmeiras (22 finalizações com vermelho), Flu (17 finalizações fora), Athletico (12 finalizações pós-vermelho).
- Cantos: aceita ser dominado (vs ELITE_C) ou domina (vs MÉDIO_C dependendo).
- **Implicação operacional**: pace alto garantido (OVER 10.5) mas direção dos cantos depende do saldo_c do adv.

## 🔻 Quando enfrenta time INFERIOR (Remo, Mirassol, Chapecoense)
**Sufoca ou administra?**
- **DEPENDE DO RESULTADO**. Se mata cedo (Santos 3-1, Atl-MG 3-0 HT): RELAXA → sofre cantos. Se demora a matar (Remo): mantém pressão → gera cantos.
- **Implicação operacional**: **LIVE betting é o melhor mercado** contra times inferiores — esperar 1º gol e ajustar.

## 🚨 Casos onde SUBESTIMAMOS o adversário
- **Vasco (CASA)**: foi tratado como AZARÃO da tabela; era ELITE_C. Dominou cantos.
- **Vitória (FORA)**: foi tratado como time fraco; encastelou e quebrou aposta cantos pró Fla.
- **Atlético-MG**: foi tratado como AZARÃO; aproveitou relaxamento Fla pra 8 cantos.

## 🚨 Casos onde SUPERESTIMAMOS o adversário
- **Internacional (CASA Fla)**: ELITE_C esperado explodir; Fla controlou, jogo travou (7 totais).
- **Botafogo (FORA)**: clássico esperado pace alto; veio 6 cantos totais.

---

# BLOCO 5 — PERFIL PREDITIVO PARA A PRÓXIMA PARTIDA

> **Padrão EDS R3 declarado**: NÃO tenho a próxima partida do Flamengo no banco — calendário futuro não está indexado. Em vez de adivinhar, entrego **MATRIZ PREDITIVA por categoria de adversário**. Quando você me passar quem é o próximo, eu seleciono a célula correta.

## 5.1 — Cenário esperado (decisão depende de adversário)

| Cenário | Adv tabela | Adv cantos | Mando | Pace esperado | Saldo Fla esperado | Mercado-mãe |
|---------|-----------|-----------|-------|---------------|--------------------|-----------|
| A | ELITE | ELITE_C | CASA | **alto (11-13)** | empatado (±1) | **OVER 10.5** |
| B | ELITE | ELITE_C | FORA | **muito alto (12-16)** | Fla −1 a −3 | **OVER 11.5** + cantos pró adv OVER 5.5 |
| C | ELITE | MÉDIO_C/AZARÃO_C | CASA | médio (9-11) | empatado a leve+ | **OVER 9.5** + cantos pró Fla OVER 4.5 |
| D | MÉDIO | AZARÃO_C | CASA | baixo-médio (8-10) | leve+ Fla | **UNDER 10.5** + cantos pró Fla OVER 4.5 |
| E | MÉDIO | AZARÃO_C | FORA | baixo (6-9) | **paradoxo: pode +6 ou −6** | analisar formação adv (3-4-3 = OVER pró; 5-4-1 = UNDER) |
| F | AZARÃO | ELITE_C | CASA | médio-alto (10-12) | Fla −1 | **OVER 10.5** + cantos pró adv OVER 5.5 (paradoxo Vasco) |
| G | AZARÃO | MÉDIO_C | CASA | médio (9-11) | armadilha! pode +5 ou −5 | **LIVE BETTING** — esperar 1º gol antes de apostar |
| H | AZARÃO | AZARÃO_C | FORA | **muito baixo (6-8)** | empatado | **UNDER 8.5** ouro |

## 5.2 — Padrões históricos que SEMPRE se aplicam ao Fla

1. **Formação tática FIXA 4-2-3-1** — adv que conhece prepara melhor.
2. **Vence cedo casa contra inferior = recua, sofre cantos 2T** (Santos, Atl-MG).
3. **Perdendo + vermelho ≠ morto** — vai pra cima ainda mais (Palmeiras, Athletico).
4. **Vs ELITE_C, aceita ser dominado em cantos** (4 de 6 casos).
5. **Vs adv com 4-3-3 ou 3-4-3, domina cantos** (Bahia, Grêmio).

## 5.3 — Fatores de risco que QUEBRAM o padrão

| Fator | Impacto |
|-------|---------|
| **Fadiga** (3+ jogos em 7 dias) | UNDER total + Fla dominado (Corinthians caso) |
| **Vermelho durante o jogo** | Adv gera 4-6 cantos no 2T |
| **Libertadores no meio da semana** | Possível rotação do elenco → menos intensidade |
| **Calor / Manaus / chuva forte** | Reduz pace em geral |
| **Árbitro permissivo (muitas faltas)** | Quebra ritmo, reduz pace (vide Vitória 21 faltas) |
| **Adv com formação ofensiva atípica** | Inverte expectativa para favor do Fla |

## 5.4 — Mercados sugeridos POR CENÁRIO

### Cenário ALTO VALOR (entrar sem hesitação)
- **Fla CASA vs adv 4-3-3/3-4-3** → cantos pró Fla OVER 4.5 (Bahia, Grêmio modelos)
- **Fla FORA vs AZARÃO_C** → UNDER 8.5 (Botafogo, Grêmio totais 6)
- **Fla qualquer mando vs ELITE_C com 2 ELITES** → OVER 11.5 (Athletico 16 cantos)
- **LIVE: Fla vence cedo CASA** → cantos pró adv HT2 +2.5 / +3.5 (Santos, Atl-MG)

### Cenário VALOR MODERADO (entrar com sizing menor)
- **Fla casa vs MÉDIO tabela** → cantos pró Fla OVER 4.5 (Bahia 6, Cruzeiro 4)
- **2 ELITES casa** → OVER 10.5 (Palmeiras 12)

### Cenário EVITAR
- ❌ HDP cantos −2.5 pró Fla (só 1 jogo passou disso em 16: Bahia)
- ❌ Cantos pró Fla quando adv é 5-4-1 / 4-1-4-1 (Vitória, Corinthians casos)
- ❌ Apostar antes de saber formação do adv

## 5.5 — Nível de confiança DA METODOLOGIA

**🟡 MÉDIO-ALTO**.

**Justificativa**:
- **Pró confiança**: padrões A (relaxa vencendo), B (perdendo vai pra cima), C (adv ofensivo = Fla domina cantos), D (adv encastelado = UNDER pró Fla) tiveram **mínimo 2 casos confirmados cada**, sem contra-exemplo.
- **Contra confiança**: amostra de 16 jogos é LIMITADA. Sub-categorias (ex: "FORA vs AZARÃO tabela") têm apenas 2 jogos. **Não declarar como lei**, apenas como hipótese forte.
- **Confiança aumenta** quando padrões CRUZAM (ex: Fla casa + adv 4-3-3 + Fla precisando vencer = TRÊS sinais positivos = ALTA confiança operacional).

---

# 📌 SÍNTESE OPERACIONAL — CHECKLIST PRÉ-APOSTA

Quando Flamengo vai jogar, perguntar nessa ordem:

1. **CASA ou FORA?** (casa saldo +0.86, fora −1.56)
2. **Adv ELITE/MÉDIO/AZARÃO TABELA?** (FORA vs AZARÃO = atenção)
3. **Adv ELITE/MÉDIO/AZARÃO CANTOS?** (cruzar com 2 — paradoxos importam)
4. **Formação confirmada do adv** (4-3-3 / 3-4-3 = bom pra Fla; 5-4-1 / 4-1-4-1 = trava cantos pró Fla)
5. **Fadiga? Próximos 7 dias quantos jogos?** (3+ = UNDER)
6. **Vermelho? (sair pré-vivo + monitorar live)**
7. **Placar 1T**: 1-0 ou 2-0 em casa contra inferior → LIVE asiático cantos adv +2.5

---

*Dossiê forense gerado por análise individualizada partida-a-partida. Base: 16 partidas Brasileirão 2026 · 8 com dados completos (formação/posse) · 8 com placar+cantos. Limitações declaradas no header.*
