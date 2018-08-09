import os
import indeximage

def bianli(dir, func):
    for root, dirs, files in os.walk(dir):
        for name in files:
            func(os.path.join(root, name))
        # for name in dirs:
        #     bianli(name, func)
def adssmofjao(file):
    print(file)
    indeximage.index(file)

os.remove('./hashstr.npy')
bianli('./static/dataset', adssmofjao)

