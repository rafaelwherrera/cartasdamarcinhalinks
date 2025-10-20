"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type MysticCard = {
    name: string;
    meaning: string;
    emoji: string;
};

const mensagensMisticas: MysticCard[] = [
    // Intuição e Autoconhecimento
    { name: "Intuição", meaning: "Hoje, a intuição é sua melhor guia.", emoji: "🔮" },
    { name: "Voz Interior", meaning: "Ouça sua voz interior; ela sabe o caminho.", emoji: "🌙" },
    { name: "Reflexão", meaning: "Olhe para dentro: as respostas que você procura já estão aí.", emoji: "🪞" },
    { name: "Autoconhecimento", meaning: "O autoconhecimento é a chave para a sua próxima porta.", emoji: "✨" },
    { name: "Renovação", meaning: "Sua energia está se renovando. Permita-se florescer.", emoji: "🌱" },

    // Oportunidade e Mudança
    { name: "Oportunidade", meaning: "Uma nova oportunidade surgirá onde você menos espera.", emoji: "🌟" },
    { name: "Abertura", meaning: "Esteja aberto(a) a mudanças inesperadas. Elas trazem bênçãos.", emoji: "🍃" },
    { name: "Novo Ciclo", meaning: "Um ciclo está se fechando para dar espaço a um novo começo.", emoji: "🔁" },
    { name: "Vento da Mudança", meaning: "O vento da mudança sopra a seu favor.", emoji: "🌬️" },
    { name: "Pequenos Começos", meaning: "Pequenos começos levarão a grandes resultados.", emoji: "🏗️" },

    // Paciência e Confiança
    { name: "Paciência", meaning: "A paciência trará a clareza que você busca.", emoji: "⏳" },
    { name: "Confiança", meaning: "O universo conspira a seu favor. Confie.", emoji: "🛡️" },
    { name: "Tempo Certo", meaning: "Confie no tempo das coisas. Tudo acontece quando deve.", emoji: "🕰️" },
    { name: "Crescimento", meaning: "A semente que você plantou está crescendo, mesmo que você não veja.", emoji: "🌿" },
    { name: "Fé", meaning: "Mantenha a fé. O melhor está por vir.", emoji: "🙏" },

    // Ação e Foco
    { name: "Foco", meaning: "É hora de focar na sua energia e bem-estar.", emoji: "🎯" },
    { name: "Intenção", meaning: "Concentre sua intenção no que você realmente deseja.", emoji: "🧭" },
    { name: "Passos", meaning: "Um passo de cada vez constrói o castelo.", emoji: "👣" },
    { name: "Determinação", meaning: "Sua determinação é a força que move montanhas.", emoji: "⛰️" },
    { name: "Coragem", meaning: "Aja com coragem e o caminho se abrirá.", emoji: "🗝️" },

    // Sorte e Destino
    { name: "Sorte", meaning: "A sorte está ao seu lado hoje. Aproveite!", emoji: "🍀" },
    { name: "Maravilha", meaning: "Algo maravilhoso está prestes a acontecer.", emoji: "🎁" },
    { name: "Presente", meaning: "Você está exatamente onde deveria estar neste momento.", emoji: "📍" },
    { name: "Sinais", meaning: "Sinais do universo estão por toda parte. Preste atenção.", emoji: "✨" },
    { name: "Proteção", meaning: "Uma energia protetora guia seus passos.", emoji: "🛡️" },

    // Relacionamentos e Conexão
    { name: "Conexão", meaning: "Uma conexão importante trará novas perspectivas.", emoji: "🤝" },
    { name: "Perdão", meaning: "O perdão é a ponte para a sua paz interior.", emoji: "🌉" },
    { name: "Amor-próprio", meaning: "Cultive o amor-próprio e atrairá o amor que merece.", emoji: "💖" },
    { name: "Harmonia", meaning: "Harmonia e equilíbrio estão chegando aos seus relacionamentos.", emoji: "⚖️" },
    { name: "Seja Luz", meaning: "Seja luz na vida de alguém hoje.", emoji: "🕯️" },

    // Superação e Força
    { name: "Força", meaning: "Você é mais forte do que imagina. Acredite!", emoji: "💪" },
    { name: "Vitória", meaning: "Os desafios de hoje são as vitórias de amanhã.", emoji: "🏆" },
    { name: "Liberação", meaning: "A lua minguante leva embora o que não te serve mais.", emoji: "🌘" },
    { name: "Resiliência", meaning: "Sua resiliência é sua maior magia.", emoji: "🪄" },
    { name: "Ascensão", meaning: "Transforme obstáculos em degraus para sua ascensão.", emoji: "🚀" }
];

export function TarotCard() {

    const [dailyCard, setDailyCard] = useState<MysticCard | null>(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        // Removemos toda a lógica de 'localStorage' e 'Date'.
        // Agora, ele apenas sorteia uma carta nova toda vez que a página carrega.
        const randomCard = mensagensMisticas[Math.floor(Math.random() * mensagensMisticas.length)];
        setDailyCard(randomCard);
        setIsRevealed(false); // Garante que a nova carta sempre comece virada
    }, []); // O array vazio [] faz isso rodar apenas uma vez por carregamento

    if (!dailyCard) {
        return (
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm p-6 text-center">
                <p className="text-sm text-muted-foreground">Carregando sua carta do dia...</p>
            </Card>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/40">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                        <motion.span
                            className="text-2xl"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* 4. Use a propriedade .emoji */}
                            {dailyCard.emoji}
                        </motion.span>
                        Mensagem do Dia
                    </CardTitle>

                </CardHeader>

                <CardContent>
                    <motion.div
                        className="cursor-pointer rounded-lg border-2 border-primary/30 bg-gradient-to-br from-secondary/20 to-primary/10 p-6 text-center min-h-[120px] flex flex-col justify-center" // Adicionei min-h para evitar pulos
                        onClick={() => setIsRevealed(!isRevealed)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <AnimatePresence mode="wait">
                            {isRevealed ? (
                                <motion.div
                                    key="revealed"
                                    initial={{ rotateY: 90, opacity: 0 }}
                                    animate={{ rotateY: 0, opacity: 1 }}
                                    exit={{ rotateY: -90, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-2"
                                >
                                    {/* 5. A GRANDE CORREÇÃO: Use as propriedades .name e .meaning */}
                                    <p className="text-xl font-serif font-bold text-primary">{dailyCard.name}</p>
                                    <p className="text-md text-foreground/90">{dailyCard.meaning}</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="hidden"
                                    initial={{ rotateY: 90, opacity: 0 }}
                                    animate={{ rotateY: 0, opacity: 1 }}
                                    exit={{ rotateY: -90, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-2"
                                >
                                    <motion.p
                                        className="text-6xl"
                                        animate={{ rotateY: [0, 10, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >

                                    </motion.p>
                                    <p className="text-sm text-muted-foreground">
                                        Clique para revelar sua mensagem!
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
