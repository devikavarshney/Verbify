import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import time
from fastapi import FastAPI, Form
import cv2
from cvzone.HandTrackingModule import HandDetector
from cvzone.ClassificationModule import Classifier
import numpy as np
import math


cap = cv2.VideoCapture(0)

detector= HandDetector(maxHands=1)
classifier = Classifier("Model/keras_model.h5" , "Model/labels.txt")

offset = 20
imgsize=300
counter = 0
folder = "data/Z"

labels = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

while True :
    success, img = cap.read()
    imgout = img.copy()
    hands, img = detector.findHands(img)
    # if hands is None or img is None:
    #     continue
    if hands:
        hand = hands[0]
        x,y,w,h = hand['bbox']

        imgwhite = np.ones((imgsize,imgsize,3),np.uint8)*255

        imgcrop = img[y - offset : y + h +offset , x - offset : x + w + offset]

        imgcropshape = imgcrop.shape

        aspectratio = h/w

        if aspectratio > 1:
            k = imgsize/h
            wcal = math.ceil(k*w)
            imgresize = cv2.resize(imgcrop,(wcal,imgsize))
            imgresizeshape = imgresize.shape
            wgap = math.ceil((imgsize-wcal)/2)
            imgwhite[:, wgap:wcal+wgap] = imgresize
            prediction, index = classifier.getPrediction(imgwhite,draw=False)
            print(prediction,index)

        else:
            k = imgsize/w
            hcal = math.ceil(k*h)
            imgresize = cv2.resize(imgcrop,(imgsize,hcal))
            imgresizeshape = imgresize.shape
            hgap = math.ceil((imgsize-hcal)/2)
            imgwhite[hgap:hcal + hgap, :] = imgresize
            prediction, index = classifier.getPrediction(imgwhite,draw=False)

        # cv2.rectangle(imgout,(x-offset,y-offset-50),(x-offset+150,y-offset),(255,0,255),cv2.FILLED)
        cv2.putText(imgout,labels[index],(x,y-20),cv2.FONT_HERSHEY_COMPLEX,2,(255,0,255),2)
        cv2.rectangle(imgout,(x-offset,y-offset),(x+w+offset,y+h+offset),(255,0,255),4)
        cv2.imshow("Imagecrop",imgcrop)
        cv2.imshow("Imagewhite",imgwhite)

    cv2.imshow("Image",imgout)
    cv2.waitKey(1)
