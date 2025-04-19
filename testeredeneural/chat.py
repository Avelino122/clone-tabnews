import numpy as np

frases = ["oi", "tudo bem", "qual seu nome", "Qual dia é hoje", "data"]
respostas = ["dataset", "estou bem", "sou um bot", "hoje é neyday", "ola sou thierrys"]

vocabulário = list(set(" ".join(frases + respostas).split()))

def codificar(frase):
    return np.array([1 if palavra in frase.split() else 0 for palavra in vocabulário])

entradas = np.array([codificar(f) for f in frases])
saidas = np.array([codificar(r) for r in respostas])

np.random.seed(0)
pesos = 2 * np.random.random((len(vocabulário), len(vocabulário))) - 1

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivada(x):
    return x * (1 - x)

for i in range(10000):
    entrada = entradas
    soma = np.dot(entrada, pesos)
    saida = sigmoid(soma)

    erro = saidas - saida
    ajustes = erro * sigmoid_derivada(saida)
    pesos += np.dot(entrada.T, ajustes)

    if i % 2000 == 0:
        print(f"Iteração {i}, Erro médio: {np.mean(np.abs(erro))}")

def prever(frase):
    entrada = codificar(frase)
    saida = sigmoid(np.dot(entrada, pesos))
    palavras_saida = [vocabulário[i] for i, v in enumerate(saida) if v > 0.5]
    return " ".join(palavras_saida)

print("\nMini Chatbot (digite 'sair' para encerrar):")
while True:
    entrada_usuario = input("Você: ").lower()
    if entrada_usuario == "sair":
        break
    resposta = prever(entrada_usuario)
    print("Bot:", resposta)

