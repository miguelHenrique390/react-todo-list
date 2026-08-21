from saudacao import saudacao

def test_saudacao():
    assert saudacao("josue") == f"olá josue, seja bem vindo"

def test_saudacao1():
    assert saudacao("") == f"olá {''}, seja bem vindo"

def test_saudacao2():
    assert saudacao("antonio") != f"olá matheus, seja bem vindo"