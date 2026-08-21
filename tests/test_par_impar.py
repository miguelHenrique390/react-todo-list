from num_par_impar import eh_par
def test_num_1():
    assert eh_par(2) == True

def test_num_2():
    assert eh_par(3) == False

def test_num_3():
    assert eh_par(5) == False