from calculo_area import calcular_area
def test_area_1():
    assert calcular_area(2, 9) == 18

def test_area_2():
    assert calcular_area(3,8) == 24

def test_area_3():
    assert calcular_area(4, 7) == 28
