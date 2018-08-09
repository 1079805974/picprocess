import glob
import phashfunc
import numpy as np

def dele(new_np, data_np):
    for i in range(len(data_np)):
        for j in range(len(new_np)):
            if data_np[i-1][0] == new_np[j-1][0] :
                new_np = np.delete(new_np, j-1, 0)
    return new_np
        

def hashprt(imagePath):
    data = []
    imagePath = imagePath.replace("\\","/")
    h = str(phashfunc.pHash(imagePath))
    filename = imagePath[imagePath.rfind("/") + 1:]
    insert = [h, imagePath]
    data.append(insert)
    return data

def index(filename):
    data = hashprt(filename)
    new_np = np.array(data, dtype = str)
    try:
        data_np = np.load('hashstr.npy')
        new_np = dele(new_np, data_np)
        data_np = np.concatenate((data_np, new_np), axis=0)
        np.save('hashstr.npy', data_np)
    except IOError : 
        np.save('hashstr.npy', new_np)
        
def delete(filename):
    try:
        data_np = np.load('hashstr.npy')
        for i in range(len(data_np)):
            if data_np[i][1] == filename:
                data_np = np.delete(data_np, i, 0)
        np.save('hashstr.npy', data_np)
        return 1
    except IOError : 
        return 0
