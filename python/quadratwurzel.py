#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Einfache Python-App zur Berechnung der Quadratwurzel
"""

import math

def main():
    print("=" * 50)
    print("    QUADRATWURZEL-BERECHNER")
    print("=" * 50)
    print()
    
    while True:
        try:
            # Benutzereingabe
            zahl = input("Bitte geben Sie eine Zahl ein: ")
            
            # Prüfen ob der Benutzer das Programm beenden möchte
            if zahl.lower() in ['exit', 'quit', 'beenden', 'ende']:
                print("Auf Wiedersehen!")
                break
            
            # String zu Float konvertieren
            zahl_float = float(zahl)
            
            # Prüfen ob die Zahl negativ ist
            if zahl_float < 0:
                print("Fehler: Die Quadratwurzel einer negativen Zahl ist nicht definiert!")
                print()
                continue
            
            # Quadratwurzel berechnen
            quadratwurzel = math.sqrt(zahl_float)
            
            # Ergebnis anzeigen
            print(f"Die Quadratwurzel von {zahl_float} ist: {quadratwurzel:.6f}")
            print()
            
        except ValueError:
            print("Fehler: Bitte geben Sie eine gültige Zahl ein!")
            print()
        except KeyboardInterrupt:
            print("\n\nProgramm beendet.")
            break
        except Exception as e:
            print(f"Ein unerwarteter Fehler ist aufgetreten: {e}")
            print()

if __name__ == "__main__":
    main()
