# Typescript Design Patterns

## Creational Design Patterns (Erzeugungsmuster)

### Factory Method (Farbikmethode)

*Kurzbeschreibung*: Konkrete Objekte sollen einfach erweiterbar sein. Dabei dient es zur Erzeugung
von Objekten, deren konkrete Typen Kindklassen einer Erzeugerklasse sind. 

*Anwendungsfälle:*
+ Dient der Einhaltung des Single Responsibility Prinzips. 
+ Einhaltung des Open Closed Prinzips: Offen für Erweiterungen, geschlossen für Modifikationen.

[Factory Method Quellcode](https://github.com/JensBekersch/TypescriptDesignPatterns/tree/master/src/CreationalPatterns/Factory)

## Behavioral Patterns (Verhaltensmuster)

### Command [Simple] (Befehl, Kommando)

*Kurzbeschreibung*: Mit diesem Pattern soll eine Entkopplung zwischen dem Sender und Empfänger erreicht werden. Dabei können Befehle in eine Liste eingereiht werden und die Reihenfolge der Abarbeitung 
im Bezug auf Ausführung und Zeitpunkt kontrolliert werden. 

*Anwendungsfälle:*
+ Zeitliche und/oder räumliche Entkopplung von Aufruf und Ausführung
+ Bereitstellung von Undo/Redo
+ Parametrisierung

[Command Pattern Quellcode](https://github.com/JensBekersch/TypescriptDesignPatterns/tree/master/src/BehavioralPatterns/Command%5BSimple%5D)
