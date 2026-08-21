def verificar_aprovacao(media):
    if media >= 7:
        return "aprovado"
    elif media >= 5 or media <= 6.99:
        return "recuperação"
    elif media < 5:
        return "reprovado"