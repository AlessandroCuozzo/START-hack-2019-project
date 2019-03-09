#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Mar  9 02:04:56 2019

@author: cuozzo
"""

Sectors = {
        
        Admin / HR / Consulting / CEO
8380
Banking / Insurance
5474
Catering / Food / Tourism
3182
Chemical / Pharma / Biotechnology
1402
Construction / Architecture / Engineer
8967
Electronics / Engineering / Watches
3625
Finance / Trusts / Real Estate
2941
Graphic Art / Typography / Printing
356
Information Technology / Telecom
8382
Machine / Plant Engin / Manufacturing
4802
Medicine / Care / Therapy
7095
Marketing / Communications / Editorial
2362
Public Administration / Education / Social
4414
Purchasing / Logistics / Trading
1967
Sales / Customer Service / Admin
7847
Sport / Wellness / Culture
543
Surveillance / Police / Customs / Rescue
514
Vehicles / Craft / Warehouse / Transport
        
        }

categories =bn ["Technical Skills", "Soft skills", "Professional experience"]

dictionary

E = set()

with open('CV.txt') as f:
    for line in f:
        line = line.rstrip()
        