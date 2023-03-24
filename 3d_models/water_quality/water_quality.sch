EESchema Schematic File Version 4
EELAYER 26 0
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
$Comp
L Connector_Generic_MountingPin:Conn_01x03_MountingPin J2
U 1 1 6419E042
P 4750 2400
F 0 "J2" H 4838 2273 50  0000 L CNN
F 1 "Conn_01x03_MountingPin" H 4838 2364 50  0000 L CNN
F 2 "Connector_Hirose:Hirose_DF13-03P-1.25DSA_1x03_P1.25mm_Vertical" H 4750 2400 50  0001 C CNN
F 3 "~" H 4750 2400 50  0001 C CNN
	1    4750 2400
	-1   0    0    1   
$EndComp
Wire Wire Line
	7650 4250 7800 4250
Text GLabel 7900 4250 2    50   Input ~ 0
3v3
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
Wire Wire Line
	6450 3250 6200 3250
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
L power:Earth #PWR0103
U 1 1 6419E227
P 4750 2100
F 0 "#PWR0103" H 4750 1850 50  0001 C CNN
F 1 "Earth" H 4750 1950 50  0001 C CNN
F 2 "" H 4750 2100 50  0001 C CNN
F 3 "~" H 4750 2100 50  0001 C CNN
	1    4750 2100
	-1   0    0    1   
$EndComp
$Comp
L power:Earth #PWR0104
U 1 1 6419E238
P 4950 2300
F 0 "#PWR0104" H 4950 2050 50  0001 C CNN
F 1 "Earth" H 4950 2150 50  0001 C CNN
F 2 "" H 4950 2300 50  0001 C CNN
F 3 "~" H 4950 2300 50  0001 C CNN
	1    4950 2300
	0    -1   -1   0   
$EndComp
Text GLabel 4950 2400 2    50   Input ~ 0
3v3
Text GLabel 4950 2500 2    50   Input ~ 0
s
Text GLabel 7650 3950 2    50   Input ~ 0
s
$Comp
L Device:Battery_Cell BT1
U 1 1 6419E29A
P 4000 3950
F 0 "BT1" H 4118 4046 50  0000 L CNN
F 1 "Battery_Cell" H 4118 3955 50  0000 L CNN
F 2 "Battery:BatteryHolder_Keystone_103_1x20mm" V 4000 4010 50  0001 C CNN
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
F 2 "Package_TO_SOT_SMD:TO-263-3_TabPin2" H 1600 4900 50  0001 C CNN
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
F 2 "Package_TO_SOT_SMD:TO-263-3_TabPin2" H 2150 4900 50  0001 C CNN
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
L Connector_Generic:Conn_01x02 J1
U 1 1 641A1B05
P 4750 1700
F 0 "J1" H 4830 1692 50  0000 L CNN
F 1 "Conn_01x02" H 4830 1601 50  0000 L CNN
F 2 "Connector_Hirose:Hirose_DF13-02P-1.25DS_1x02_P1.25mm_Horizontal" H 4750 1700 50  0001 C CNN
F 3 "~" H 4750 1700 50  0001 C CNN
	1    4750 1700
	1    0    0    -1  
$EndComp
Text GLabel 4550 1700 0    50   Input ~ 0
sIn_1
Text GLabel 4550 1800 0    50   Input ~ 0
sIn_2
$Comp
L Connector_Generic:Conn_02x04_Counter_Clockwise J4
U 1 1 641A1BF7
P 6700 1900
F 0 "J4" H 6750 2217 50  0000 C CNN
F 1 "Conn_02x04_Counter_Clockwise" H 6750 2126 50  0000 C CNN
F 2 "Connector_IDC:IDC-Header_2x04_P2.54mm_Vertical" H 6700 1900 50  0001 C CNN
F 3 "~" H 6700 1900 50  0001 C CNN
	1    6700 1900
	1    0    0    -1  
$EndComp
Text GLabel 6500 1800 0    50   Input ~ 0
txd
Text GLabel 6500 1900 0    50   Input ~ 0
chdp
Text GLabel 6500 2000 0    50   Input ~ 0
rst
Text GLabel 6500 2100 0    50   Input ~ 0
3v3
$Comp
L power:Earth #PWR0106
U 1 1 641A1CE1
P 7000 1800
F 0 "#PWR0106" H 7000 1550 50  0001 C CNN
F 1 "Earth" H 7000 1650 50  0001 C CNN
F 2 "" H 7000 1800 50  0001 C CNN
F 3 "~" H 7000 1800 50  0001 C CNN
	1    7000 1800
	0    -1   -1   0   
$EndComp
Text GLabel 7000 1900 2    50   Input ~ 0
gp2
Text GLabel 7000 2000 2    50   Input ~ 0
gp0
Text GLabel 7000 2100 2    50   Input ~ 0
rxd
Text GLabel 6450 2950 0    50   Input ~ 0
txd
Text GLabel 7950 2950 2    50   Input ~ 0
3v3
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
Connection ~ 7800 4250
Wire Wire Line
	7800 4250 7900 4250
Wire Wire Line
	7950 2950 7800 2950
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
Text GLabel 8200 2000 0    50   Input ~ 0
chdp
Text GLabel 8600 2000 2    50   Input ~ 0
3v3
$Comp
L Device:C_Small C4
U 1 1 641A2BA6
P 8400 1800
F 0 "C4" H 8492 1846 50  0000 L CNN
F 1 "0u1" H 8492 1755 50  0000 L CNN
F 2 "Capacitor_SMD:C_1806_4516Metric_Pad1.57x1.80mm_HandSolder" H 8400 1800 50  0001 C CNN
F 3 "~" H 8400 1800 50  0001 C CNN
	1    8400 1800
	1    0    0    -1  
$EndComp
$Comp
L power:Earth #PWR0109
U 1 1 641A2BE0
P 8400 1700
F 0 "#PWR0109" H 8400 1450 50  0001 C CNN
F 1 "Earth" H 8400 1550 50  0001 C CNN
F 2 "" H 8400 1700 50  0001 C CNN
F 3 "~" H 8400 1700 50  0001 C CNN
	1    8400 1700
	-1   0    0    1   
$EndComp
Wire Wire Line
	8600 2000 8400 2000
Wire Wire Line
	8400 1900 8400 2000
Connection ~ 8400 2000
Wire Wire Line
	8400 2000 8200 2000
$Comp
L Connector_Generic:Conn_01x03 J3
U 1 1 641A353D
P 4750 3050
F 0 "J3" H 4670 2725 50  0000 C CNN
F 1 "Conn_01x03" H 4670 2816 50  0000 C CNN
F 2 "Connector_Hirose:Hirose_DF13-03P-1.25DSA_1x03_P1.25mm_Vertical" H 4750 3050 50  0001 C CNN
F 3 "~" H 4750 3050 50  0001 C CNN
	1    4750 3050
	-1   0    0    1   
$EndComp
Text GLabel 4950 2950 2    50   Input ~ 0
gp2
Text GLabel 4950 3050 2    50   Input ~ 0
gp0
Text GLabel 4950 3150 2    50   Input ~ 0
rst
$EndSCHEMATC
