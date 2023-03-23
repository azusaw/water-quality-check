EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
Wire Wire Line
	7650 4250 7800 4250
Wire Wire Line
	7650 3050 7900 3050
$Comp
L power:Earth #PWR0101
U 1 1 6419E1A7
P 7900 3050
F 0 "#PWR0101" H 7900 2800 50  0001 C CNN
F 1 "Earth" H 7900 2900 50  0001 C CNN
F 2 "" H 7900 3050 50  0001 C CNN
F 3 "~" H 7900 3050 50  0001 C CNN
	1    7900 3050
	0    -1   -1   0   
$EndComp
$Comp
L power:Earth #PWR0102
U 1 1 6419E214
P 6200 3250
F 0 "#PWR0102" H 6200 3000 50  0001 C CNN
F 1 "Earth" H 6200 3100 50  0001 C CNN
F 2 "" H 6200 3250 50  0001 C CNN
F 3 "~" H 6200 3250 50  0001 C CNN
	1    6200 3250
	0    1    1    0   
$EndComp
$Comp
L Device:Battery_Cell BT1
U 1 1 6419E29A
P 4000 3950
F 0 "BT1" H 4118 4046 50  0000 L CNN
F 1 "Battery_Cell" H 4118 3955 50  0000 L CNN
F 2 "Battery:BatteryHolder_Eagle_12BH611-GR" V 4000 4010 50  0001 C CNN
F 3 "~" V 4000 4010 50  0001 C CNN
	1    4000 3950
	1    0    0    -1  
$EndComp
$Comp
L power:Earth #PWR0105
U 1 1 6419E2E6
P 4000 4150
F 0 "#PWR0105" H 4000 3900 50  0001 C CNN
F 1 "Earth" H 4000 4000 50  0001 C CNN
F 2 "" H 4000 4150 50  0001 C CNN
F 3 "~" H 4000 4150 50  0001 C CNN
	1    4000 4150
	1    0    0    -1  
$EndComp
$Comp
L Battery_Management:BQ297xy U2
U 1 1 6419E3AE
P 2650 3750
F 0 "U2" H 2650 4117 50  0000 C CNN
F 1 "BQ297xy" H 2650 4026 50  0000 C CNN
F 2 "Package_SON:WSON-6_1.5x1.5mm_P0.5mm" H 2650 4100 50  0001 C CNN
F 3 "http://www.ti.com/lit/ds/symlink/bq2970.pdf" H 2400 3950 50  0001 C CNN
	1    2650 3750
	-1   0    0    -1  
$EndComp
$Comp
L Device:Q_NMOS_DSG Q1
U 1 1 6419E4B4
P 1400 4800
F 0 "Q1" V 1650 4800 50  0000 C CNN
F 1 "Q_NMOS_CHG" V 1741 4800 50  0000 C CNN
F 2 "Package TO SOT SMD:SOT-416" H 1600 4900 50  0001 C CNN
F 3 "~" H 1400 4800 50  0001 C CNN
	1    1400 4800
	0    1    1    0   
$EndComp
$Comp
L Device:Q_NMOS_DSG Q2
U 1 1 6419E68F
P 1950 4800
F 0 "Q2" V 2200 4800 50  0000 C CNN
F 1 "Q_NMOS_DSG" V 2291 4800 50  0000 C CNN
F 2 "Package TO SOT SMD:SOT-416" H 2150 4900 50  0001 C CNN
F 3 "~" H 1950 4800 50  0001 C CNN
	1    1950 4800
	0    -1   1    0   
$EndComp
Wire Wire Line
	2250 3650 1400 3650
Wire Wire Line
	1400 3650 1400 4600
Wire Wire Line
	2250 3850 1950 3850
Wire Wire Line
	1950 3850 1950 4600
Wire Wire Line
	1750 4900 1600 4900
$Comp
L Device:R R1
U 1 1 6419E9F0
P 1000 4200
F 0 "R1" H 1070 4246 50  0000 L CNN
F 1 "2K2" H 1070 4155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0204_L3.6mm_D1.6mm_P5.08mm_Horizontal" V 930 4200 50  0001 C CNN
F 3 "~" H 1000 4200 50  0001 C CNN
	1    1000 4200
	1    0    0    -1  
$EndComp
Wire Wire Line
	3050 3850 3150 3850
Wire Wire Line
	3150 3850 3150 3100
Wire Wire Line
	1000 3100 1000 4050
Wire Wire Line
	1000 4350 1000 4900
Wire Wire Line
	1000 4900 1200 4900
Wire Wire Line
	2650 4050 2650 4900
Wire Wire Line
	2650 4900 2150 4900
$Comp
L Device:C_Small C1
U 1 1 6419EE34
P 3400 3800
F 0 "C1" H 3492 3846 50  0000 L CNN
F 1 "0u1" H 3492 3755 50  0000 L CNN
F 2 "Capacitor_SMD:C_1806_4516Metric_Pad1.57x1.80mm_HandSolder" H 3400 3800 50  0001 C CNN
F 3 "~" H 3400 3800 50  0001 C CNN
	1    3400 3800
	1    0    0    -1  
$EndComp
$Comp
L Device:R R2
U 1 1 6419EEA7
P 3400 3450
F 0 "R2" H 3470 3496 50  0000 L CNN
F 1 "330" H 3470 3405 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0204_L3.6mm_D1.6mm_P5.08mm_Horizontal" V 3330 3450 50  0001 C CNN
F 3 "~" H 3400 3450 50  0001 C CNN
	1    3400 3450
	1    0    0    -1  
$EndComp
Wire Wire Line
	3150 3100 1000 3100
Wire Wire Line
	3400 3600 3400 3650
Wire Wire Line
	3050 3650 3400 3650
Connection ~ 3400 3650
Wire Wire Line
	3400 3650 3400 3700
Wire Wire Line
	3400 4900 2650 4900
Connection ~ 2650 4900
Wire Wire Line
	3150 3100 3400 3100
Wire Wire Line
	3400 3100 3400 3300
Connection ~ 3150 3100
Wire Wire Line
	4000 3750 4000 3100
Wire Wire Line
	4000 3100 3400 3100
Connection ~ 3400 3100
Wire Wire Line
	3400 3900 3400 4050
Wire Wire Line
	3400 4050 4000 4050
Connection ~ 3400 4050
Wire Wire Line
	3400 4050 3400 4900
Wire Wire Line
	4000 4050 4000 4150
Connection ~ 4000 4050
Text GLabel 4150 3100 2    50   Input ~ 0
3v3
Wire Wire Line
	4150 3100 4000 3100
Connection ~ 4000 3100
$Comp
L Device:C_Small C3
U 1 1 641A1EAA
P 7800 4550
F 0 "C3" H 7892 4596 50  0000 L CNN
F 1 "0u1" H 7892 4505 50  0000 L CNN
F 2 "Capacitor_SMD:C_1806_4516Metric_Pad1.57x1.80mm_HandSolder" H 7800 4550 50  0001 C CNN
F 3 "~" H 7800 4550 50  0001 C CNN
	1    7800 4550
	1    0    0    -1  
$EndComp
$Comp
L power:Earth #PWR0107
U 1 1 641A1F46
P 7800 4650
F 0 "#PWR0107" H 7800 4400 50  0001 C CNN
F 1 "Earth" H 7800 4500 50  0001 C CNN
F 2 "" H 7800 4650 50  0001 C CNN
F 3 "~" H 7800 4650 50  0001 C CNN
	1    7800 4650
	1    0    0    -1  
$EndComp
Wire Wire Line
	7800 4450 7800 4250
$Comp
L Device:C_Small C2
U 1 1 641A26AE
P 7800 2750
F 0 "C2" H 7892 2796 50  0000 L CNN
F 1 "0u1" H 7892 2705 50  0000 L CNN
F 2 "Capacitor_SMD:C_1806_4516Metric_Pad1.57x1.80mm_HandSolder" H 7800 2750 50  0001 C CNN
F 3 "~" H 7800 2750 50  0001 C CNN
	1    7800 2750
	1    0    0    -1  
$EndComp
$Comp
L power:Earth #PWR0108
U 1 1 641A26F6
P 7800 2650
F 0 "#PWR0108" H 7800 2400 50  0001 C CNN
F 1 "Earth" H 7800 2500 50  0001 C CNN
F 2 "" H 7800 2650 50  0001 C CNN
F 3 "~" H 7800 2650 50  0001 C CNN
	1    7800 2650
	-1   0    0    1   
$EndComp
Wire Wire Line
	7800 2850 7800 2950
Connection ~ 7800 2950
Wire Wire Line
	7800 2950 7650 2950
Text GLabel 6450 3050 0    50   Input ~ 0
rxd
$Comp
L Connector:Conn_01x04_Female J1
U 1 1 641BE419
P 4600 3150
F 0 "J1" H 4492 2725 50  0000 C CNN
F 1 "Conn_01x04_Female" H 4492 2816 50  0000 C CNN
F 2 "Connectors Pin Header:PinHeader_1x04_P1.27mm_Vertical" H 4600 3150 50  0001 C CNN
F 3 "~" H 4600 3150 50  0001 C CNN
	1    4600 3150
	-1   0    0    1   
$EndComp
Text GLabel 6450 2950 0    50   Input ~ 0
txd
Text GLabel 5100 2950 2    50   Input ~ 0
txd
Text GLabel 5100 3050 2    50   Input ~ 0
rxd
$Comp
L power:Earth #PWR0103
U 1 1 641C1C80
P 5150 3150
F 0 "#PWR0103" H 5150 2900 50  0001 C CNN
F 1 "Earth" H 5150 3000 50  0001 C CNN
F 2 "" H 5150 3150 50  0001 C CNN
F 3 "~" H 5150 3150 50  0001 C CNN
	1    5150 3150
	0    -1   -1   0   
$EndComp
Text GLabel 7950 4250 2    50   Input ~ 0
vcc
Wire Wire Line
	7950 4250 7800 4250
Connection ~ 7800 4250
Text GLabel 5100 3250 2    50   Input ~ 0
vcc
Wire Wire Line
	5100 2950 4800 2950
Wire Wire Line
	5100 3050 4800 3050
Wire Wire Line
	5150 3150 4800 3150
Wire Wire Line
	5100 3250 4900 3250
$Comp
L Device:C_Small C4
U 1 1 641CD1AA
P 4900 3450
F 0 "C4" H 4992 3496 50  0000 L CNN
F 1 "0u1" H 4992 3405 50  0000 L CNN
F 2 "Capacitor_SMD:C_1806_4516Metric_Pad1.57x1.80mm_HandSolder" H 4900 3450 50  0001 C CNN
F 3 "~" H 4900 3450 50  0001 C CNN
	1    4900 3450
	1    0    0    -1  
$EndComp
$Comp
L power:Earth #PWR0104
U 1 1 641CDA9D
P 4900 3550
F 0 "#PWR0104" H 4900 3300 50  0001 C CNN
F 1 "Earth" H 4900 3400 50  0001 C CNN
F 2 "" H 4900 3550 50  0001 C CNN
F 3 "~" H 4900 3550 50  0001 C CNN
	1    4900 3550
	1    0    0    -1  
$EndComp
Wire Wire Line
	4900 3350 4900 3250
Connection ~ 4900 3250
Wire Wire Line
	4900 3250 4800 3250
Text GLabel 8250 2950 2    50   Input ~ 0
3v3
$Comp
L Connector:Conn_01x08_Male J3
U 1 1 641D1D02
P 7850 3750
F 0 "J3" H 7822 3632 50  0000 R CNN
F 1 "Conn_01x08_Male" H 7822 3723 50  0000 R CNN
F 2 "Connectors Pin Header:PinHeader_1x08_P1.27mm_Vertical" H 7850 3750 50  0001 C CNN
F 3 "~" H 7850 3750 50  0001 C CNN
	1    7850 3750
	-1   0    0    1   
$EndComp
$Comp
L Switch:SW_Push SW1
U 1 1 641D5A70
P 5750 3150
F 0 "SW1" H 5750 3435 50  0000 C CNN
F 1 "SW_Push" H 5750 3344 50  0000 C CNN
F 2 "Buttons THT:Push_E-Switch_KS01Q01" H 5750 3350 50  0001 C CNN
F 3 "~" H 5750 3350 50  0001 C CNN
	1    5750 3150
	1    0    0    -1  
$EndComp
$Comp
L power:Earth #PWR0106
U 1 1 641D6C43
P 5550 3150
F 0 "#PWR0106" H 5550 2900 50  0001 C CNN
F 1 "Earth" H 5550 3000 50  0001 C CNN
F 2 "" H 5550 3150 50  0001 C CNN
F 3 "~" H 5550 3150 50  0001 C CNN
	1    5550 3150
	0    1    1    0   
$EndComp
Wire Wire Line
	6200 3250 6450 3250
Wire Wire Line
	5950 3150 6100 3150
Wire Wire Line
	7800 2950 8250 2950
Text GLabel 6100 3050 1    50   Input ~ 0
rst
Wire Wire Line
	6100 3050 6100 3150
Connection ~ 6100 3150
Wire Wire Line
	6100 3150 6450 3150
Text GLabel 7650 3150 2    50   Input ~ 0
rst
Text GLabel 7650 3250 2    50   Input ~ 0
3v3
$Comp
L Arduino:Arduino_Nano_Every U1
U 1 1 6419DD67
P 7050 3750
F 0 "U1" H 7050 4817 50  0000 C CNN
F 1 "Arduino_Nano_Every" H 7050 4726 50  0000 C CNN
F 2 "Arduino:Arduino_Nano_Every" H 7050 3000 50  0001 C CNN
F 3 "https://store.arduino.cc/usa/nano-every" H 7050 3750 50  0001 C CNN
	1    7050 3750
	1    0    0    -1  
$EndComp
Wire Wire Line
	7650 4350 7650 4500
Wire Wire Line
	7650 4500 6450 4500
Wire Wire Line
	6450 4500 6450 4450
$Comp
L Connector:Conn_01x10_Male J2
U 1 1 641E7ABD
P 6250 3750
F 0 "J2" H 5800 4100 50  0000 C CNN
F 1 "Conn_01x10_Male" H 5800 4000 50  0000 C CNN
F 2 "Connectors Pin Header:PinHeader_1x10_P1.27mm_Vertical" H 6250 3750 50  0001 C CNN
F 3 "~" H 6250 3750 50  0001 C CNN
	1    6250 3750
	1    0    0    -1  
$EndComp
$Comp
L Connector:Conn_01x02_Male J4
U 1 1 641E95A1
P 6250 4350
F 0 "J4" H 5800 4600 50  0000 C CNN
F 1 "Conn_01x02_Male" H 5850 4500 50  0000 C CNN
F 2 "Connectors Pin Header:PinHeader_1x02_P1.27mm_Vertical" H 6250 4350 50  0001 C CNN
F 3 "~" H 6250 4350 50  0001 C CNN
	1    6250 4350
	1    0    0    -1  
$EndComp
$Comp
L power:Earth #PWR0109
U 1 1 641EF8A9
P 7650 4150
F 0 "#PWR0109" H 7650 3900 50  0001 C CNN
F 1 "Earth" H 7650 4000 50  0001 C CNN
F 2 "" H 7650 4150 50  0001 C CNN
F 3 "~" H 7650 4150 50  0001 C CNN
	1    7650 4150
	0    -1   -1   0   
$EndComp
$Comp
L Device:Q_NPN_CBE Q3
U 1 1 64207F64
P 5850 5100
F 0 "Q3" V 6178 5100 50  0000 C CNN
F 1 "Q_NPN_CBE" V 6087 5100 50  0000 C CNN
F 2 "Package TO SOT SMD:SOT-416" H 6050 5200 50  0001 C CNN
F 3 "~" H 5850 5100 50  0001 C CNN
	1    5850 5100
	0    -1   -1   0   
$EndComp
$Comp
L Simulation_SPICE:DIODE D2
U 1 1 642102ED
P 5500 5400
F 0 "D2" H 5500 5617 50  0000 C CNN
F 1 "DIODE" H 5500 5526 50  0000 C CNN
F 2 "Diodes THT:D_T-1_P5.08mm_Horizontal" H 5500 5400 50  0001 C CNN
F 3 "~" H 5500 5400 50  0001 C CNN
F 4 "Y" H 5500 5400 50  0001 L CNN "Spice_Netlist_Enabled"
F 5 "D" H 5500 5400 50  0001 L CNN "Spice_Primitive"
	1    5500 5400
	1    0    0    -1  
$EndComp
$Comp
L Device:R R5
U 1 1 6421141F
P 6150 5400
F 0 "R5" H 6220 5446 50  0000 L CNN
F 1 "1K" H 6220 5355 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0204_L3.6mm_D1.6mm_P5.08mm_Horizontal" V 6080 5400 50  0001 C CNN
F 3 "~" H 6150 5400 50  0001 C CNN
	1    6150 5400
	0    -1   -1   0   
$EndComp
Wire Wire Line
	5650 5400 5850 5400
Wire Wire Line
	5850 5300 5850 5400
Connection ~ 5850 5400
Wire Wire Line
	5850 5400 6000 5400
Wire Wire Line
	5650 5000 5450 5000
Wire Wire Line
	6050 5000 6350 5000
Wire Wire Line
	6350 5000 6350 5400
Wire Wire Line
	6350 5400 6300 5400
$Comp
L power:Earth #PWR0110
U 1 1 64218223
P 5850 5400
F 0 "#PWR0110" H 5850 5150 50  0001 C CNN
F 1 "Earth" H 5850 5250 50  0001 C CNN
F 2 "" H 5850 5400 50  0001 C CNN
F 3 "~" H 5850 5400 50  0001 C CNN
	1    5850 5400
	1    0    0    -1  
$EndComp
Text GLabel 4100 5000 0    50   Input ~ 0
3v3
Wire Wire Line
	5350 5400 4950 5400
$Comp
L Device:LED D1
U 1 1 6420B035
P 4950 5200
F 0 "D1" V 4989 5082 50  0000 R CNN
F 1 "LED" V 4898 5082 50  0000 R CNN
F 2 "LED SMD:LED_1812_4532Metric" H 4950 5200 50  0001 C CNN
F 3 "~" H 4950 5200 50  0001 C CNN
	1    4950 5200
	0    -1   -1   0   
$EndComp
Wire Wire Line
	4950 5350 4950 5400
Wire Wire Line
	4950 5050 4950 5000
Connection ~ 4950 5000
Wire Wire Line
	4950 5000 5150 5000
Wire Wire Line
	4550 5000 4950 5000
Wire Wire Line
	4250 5000 4100 5000
$Comp
L Device:R R3
U 1 1 642368F5
P 4400 5000
F 0 "R3" V 4193 5000 50  0000 C CNN
F 1 "1K" V 4284 5000 50  0000 C CNN
F 2 "Resistors THT:R_Axial_DIN0204_L3.6mm_D1.6mm_P5.08mm_Horizontal" V 4330 5000 50  0001 C CNN
F 3 "~" H 4400 5000 50  0001 C CNN
	1    4400 5000
	0    1    1    0   
$EndComp
$Comp
L Device:R R4
U 1 1 64237084
P 5300 5000
F 0 "R4" V 5093 5000 50  0000 C CNN
F 1 "220" V 5184 5000 50  0000 C CNN
F 2 "Resistors THT:R_Axial_DIN0204_L3.6mm_D1.6mm_P5.08mm_Horizontal" V 5230 5000 50  0001 C CNN
F 3 "~" H 5300 5000 50  0001 C CNN
	1    5300 5000
	0    1    1    0   
$EndComp
$EndSCHEMATC
