from aprovar_media import verificar_aprovacao
def calc_aprov_1():
    assert verificar_aprovacao(7) == "aprovado"

def calc_aprov_2():
    assert verificar_aprovacao(3) == "reprovado"

def calc_aprov_3():
    assert verificar_aprovacao(6,5) == "recuperação"