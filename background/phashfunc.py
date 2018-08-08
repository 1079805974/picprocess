import cv2
import numpy as np
import collections

def flatten(x):
    result = []
    for el in x:
        if isinstance(x, collections.Iterable) and not isinstance(el, str):
            result.extend(flatten(el))
        else:
            result.append(el)
    return result

def pHash(imgfile):
    """get image pHash value"""
    img = cv2.imread(imgfile, 0) 
    img = cv2.resize(img, (64, 64), interpolation=cv2.INTER_CUBIC)

    h, w = img.shape[:2]
    vis0 = np.zeros((h,w), np.float32)
    vis0[:h,:w] = img      

    vis1 = cv2.dct(cv2.dct(vis0))
    vis1.resize((32,32),refcheck=False)

    img_list = vis1.flatten()

    avg = sum(img_list)*1./len(img_list)
    avg_list = ['0' if i<avg else '1' for i in img_list]

    return ''.join(['%x' % int(''.join(avg_list[x:x+4]),2) for x in range(0,32*32,4)])

def hammingDist(s1, s2):
    assert len(s1) == len(s2)
    return sum([ch1 != ch2 for ch1, ch2 in zip(s1, s2)])

def out_score(s1, s2):
    return 1 - hammingDist(s1, s2)*1. / (32*32/4)


pHash('./testdata/birdtest.jpg')