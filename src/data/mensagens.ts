// Definimos um "tipo" para nossa carta, para o TypeScript entender a estrutura
export type MensagemMistica = {
  name: string;
  meaning: string;
  emoji: string;
};

// Agora, nosso array é do tipo MensagemMistica[]
export const mensagensMisticas: MensagemMistica[] = [
  // Mensagens de Intuição
  { name: "A Intuição", meaning: "Hoje, a intuição é sua melhor guia.", emoji: "🔮" },
  { name: "A Voz Interior", meaning: "Ouça sua voz interior; ela sabe o caminho.", emoji: "🌊" },
  { name: "O Espelho", meaning: "Olhe para dentro: as respostas que você procura já estão aí.", emoji: "🪞" },
  { name: "A Chave", meaning: "O autoconhecimento é a chave para a sua próxima porta.", emoji: "🗝️" },
  { name: "A Fênix", meaning: "Sua energia está se renovando. Permita-se florescer.", emoji: "🔥" },

  // Mensagens de Oportunidade
  { name: "A Surpresa", meaning: "Uma nova oportunidade surgirá onde você menos espera.", emoji: "✨" },
  { name: "A Bênção", meaning: "Esteja aberto(a) a mudanças inesperadas. Elas trazem bênçãos.", emoji: "U+1FA84" },
  { name: "O Ciclo", meaning: "Um ciclo está se fechando para dar espaço a um novo começo.", emoji: "U+1FA90" },
  { name: "O Vento", meaning: "O vento da mudança sopra a seu favor.", emoji: "💨" },
  { name: "A Semente", meaning: "Pequenos começos levarão a grandes resultados.", emoji: "🌱" },

  // Mensagens de Paciência
  { name: "A Clareza", meaning: "A paciência trará a clareza que você busca.", emoji: "⏳" },
  { name: "O Universo", meaning: "O universo conspira a seu favor. Confie.", emoji: "U+1F32C" },
  { name: "O Tempo", meaning: "Confie no tempo das coisas. Tudo acontece quando deve.", emoji: "U+1F55C" },
  { name: "A Raiz", meaning: "A semente que você plantou está crescendo, mesmo que você não veja.", emoji: "U+1F331" },
  { name: "A Fé", meaning: "Mantenha a fé. O melhor está por vir.", emoji: "U+1F64F" },

  // Mensagens de Ação
  { name: "O Foco", meaning: "É hora de focar na sua energia e bem-estar.", emoji: "U+1F3AF" },
  { name: "A Intenção", meaning: "Concentre sua intenção no que você realmente deseja.", emoji: "U+1F52E" },
  { name: "O Passo", meaning: "Um passo de cada vez constrói o castelo.", emoji: "U+1F9E6" },
  { name: "A Montanha", meaning: "Sua determinação é a força que move montanhas.", emoji: "U+1F3D4" },
  { name: "A Coragem", meaning: "Aja com coragem e o caminho se abrirá.", emoji: "U+1F981" },

  // ... (e assim por diante para todas as outras)
];