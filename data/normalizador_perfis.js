// normalizador_perfis.js — Schema unificado para perfis de times BR/ARG/outros
// BR não tem tendencia/volatilidade/fatores → inferidos aqui
// ARG já tem tudo → apenas remapeado para o schema padrão

window.normalizarPerfil = function(nome, raw, liga) {
  const MEDIA_LIGA = { BR: 9.8, ARG: 8.5, MLS: 9.5, USL: 9.5 };
  const media = MEDIA_LIGA[liga] || 9.8;

  if (liga === 'BR') {
    const xFTm = raw.xFT_mandante || 0;
    const xFTv = raw.xFT_visitante || 0;
    return {
      nome,
      liga,
      n_jogos: (raw.jogos_mandante || 0) + (raw.jogos_visitante || 0),
      xHT_mandante: raw.xHT_mandante,
      xFT_mandante: xFTm,
      xHT_visitante: raw.xHT_visitante,
      xFT_visitante: xFTv,
      tendencia_cantos: xFTm > xFTv ? 'crescente' : 'estavel',
      volatilidade: parseFloat(Math.abs(xFTm - xFTv).toFixed(2)),
      fator_ataque: parseFloat((xFTm / media).toFixed(2)),
      fator_defesa: parseFloat((xFTv / media).toFixed(2)),
      posse_media: null,
      finalizacoes_media: null,
      perfil_ataque: raw.perfil_ataque,
      perfil_defesa_vis: raw.perfil_defesa_vis,
      alertas: raw.alertas || []
    };
  }

  // ARG e outros — schema rico, apenas remapeamento
  return {
    nome,
    liga,
    n_jogos: raw.n_jogos,
    xHT_mandante: raw.xHT_mandante,
    xFT_mandante: raw.xFT_mandante,
    xHT_visitante: raw.xHT_visitante,
    xFT_visitante: raw.xFT_visitante,
    tendencia_cantos: raw.tendencia_cantos,
    volatilidade: raw.volatilidade,
    fator_ataque: raw.fator_ataque,
    fator_defesa: raw.fator_defesa,
    posse_media: raw.posse_media != null ? raw.posse_media : null,
    finalizacoes_media: raw.finalizacoes_media != null ? raw.finalizacoes_media : null,
    perfil_ataque: raw.perfil_ataque,
    perfil_defesa_vis: raw.perfil_defesa_vis,
    alertas: raw.alertas || []
  };
};
