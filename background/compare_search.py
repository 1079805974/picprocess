import argparse
import numpy as np
import phashfunc
import json

def comp(filename):
    data = np.load('hashstr.npy')
    print(len(data))
    comp = np.array([])

    ph = phashfunc.pHash(filename)
    for i in range(len(data)):
        comp = np.append(comp, phashfunc.out_score(ph, data[i][0]))

    data = np.column_stack((data, comp)) 

    c = sorted(data, key=lambda s : s[2], reverse=True)
    c = np.delete(c,0,1)
    return c.tolist()

