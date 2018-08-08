import cv2
import numpy as np

def select(filename):
    image = cv2.imread(filename)
    sp = image.shape
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    gradX = cv2.Sobel(gray, ddepth=cv2.CV_32F, dx=1, dy=0, ksize=-1)
    gradY = cv2.Sobel(gray, ddepth=cv2.CV_32F, dx=0, dy=1, ksize=-1)

    #subtract the y-gradient from the x-gradient
    gradient = cv2.subtract(gradX, gradY)
    gradient = cv2.convertScaleAbs(gradient)

    #blur thej threshold the image
    blurred = cv2.blur(gradient, (9, 9))
    (_, thresh) = cv2.threshold(blurred, 90, 255, cv2.THRESH_BINARY)

    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (25, 25))
    closed = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)

    #perform a series of erosions and dilations
    closed = cv2.erode(closed, None, iterations=4)
    closed = cv2.dilate(closed, None, iterations=4)

    (im2, cnts, opt) = cv2.findContours(closed.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    #print cv2.contourArea(cnts);
    # cv2.imshow("Image", im2)
    # cv2.waitKey(0)
    c = sorted(cnts, key=cv2.contourArea, reverse=True)[0]

    #compute the rotated bounding box of the largest contour
    rect = cv2.minAreaRect(c)
    box = np.int0(cv2.boxPoints(rect))

    #cv2.drawContours(image, [box], -1, (0, 255, 0), 1)
    # cv2.imshow("Image", image)
    # cv2.imwrite("contoursImage 2.jpg", image)
    # cv2.waitKey(0)

    Xs = [i[0] for i in box]
    Ys = [i[1] for i in box]
    x1 = max(min(Xs),0)
    x2 = min(max(Xs),sp[1])
    y1 = max(min(Ys),0)
    y2 = min(max(Ys),sp[0])
    hight = y2 - y1
    width = x2 - x1
    cropImg = image[y1:y2, x1:x2]
    # cv2.imshow("Image", cropImg)
    # cv2.waitKey(0)
    cv2.imwrite(filename, cropImg)

# select("d:/2data/dataset/bird9.jpg")