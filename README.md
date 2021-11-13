# mmn-assignment-ausstellung 
## Thema:
In Rahmen des Semester-Projektes sollen Sie eine Web-Anwendung als digitalen
Ausstellungsraum entwickeln. Diese Anwendung soll am Ende folgende Features zur
Verfügung stellen:
- Ein „Ausstellungsraum“, in dem verschiedene, multimediale Ausstellungsstücke
wie Bilder, Videos- oder Audio-Clips angezeigt werden können.
- Eine Such-Funktion, mit der Inhalte nach ihrem Namen, Tags oder weiteren MetaInformationen gefiltert werden können.
- Eine Datenbank, welche diese Meta-Informationen und Tags verwaltet.
- Eine „Administrator-Ansicht“, in der authorisierte Nutzer:innen Informationen
eintragen und aktualisieren und neue Ausstellungsstücke anlegen können.
- Eine Zugriffsverwaltung, so dass Teile oder die gesamte Ausstellung nur von
bestimmten Nutzer:innengruppen oder während bestimmter Zeiträume eingesehen
werden können.
Diese Anwendung werden Sie im Laufe des Semesters mit JavaScript, HTML, PHP und
MySQL umsetzen. Die Meilensteine legen dabei grundlegende Funktionen dar, die ihre
Anwendung erfüllen muss. Es steht Ihnen frei darüber hinaus weitere Funktionen zu
implementieren.

## Meilenstein 1: Frontend
Der erste Meilenstein in diesem Projekt wird das Frontend sein, also die
Nutzerschnittstelle, die für Nutzer:innen im Browser zu sehen ist. Sie werden diese
Schnittstelle im Rahmen zukünftiger Meilensteine jedoch auch weiter anpassen.
### HTML-Struktur
Erstellen Sie eine HTML-Datei ausstellung.html. Diese Datei ist Ihre Hauptseite.
Auf der Seite sollten zu sehen sein:
- ein Header, der einen passenden Titel für Ihre Anwendung anzeigt.
- ein Footer, in dem Sie als Autoren der Seite gelistet sind.
- ein zentraler Bereich, in dem Ausstellungsstücke angezeigt werden können.
  Hierbei gibt es zwei Ansichten: eine Übersicht, in der alle Stücke aufgelistet
  werden und (auf Wunsch der Nutzer:in) eine Detailansicht.
  Die genaue Art der Darstellung, von einer einfachen Gallerie-Ansicht bis zu
  begehbaren virtuellen Ausstellungsräumen, können Sie frei gestalten.
- ein Suchfeld um nach Inhalten zu suchen
### Dynamisches Markup
Die Ausstellungsstücke in der Übersicht sollen dynamisch angezeigt werden, d.h.
nicht im HTML festgeschrieben sein, sondern via JavaScript erstellt werden.
Im Material zu diesem Meilenstein finden Sie eine JavaScript-Datei, welche
exemplarisch eine Liste von Bilder mit Meta-Informationen beinhaltet. Indem Sie
diese Datei in Ihre Web-Anwendung einbinden, können Sie die Informationen aus
dieser Datei nutzen. Alternativ können Sie auch eigene Werke mit vergleichbaren
Meta-Informationen als Ausstellungsstücke nutzen.
Überlegen Sie sich eine geeignete Darstellung. Diese Darstellung muss das
Ausstellungsstück selber und mindestens drei verschiedene Arten von MetaInformation darstellen. Generieren Sie diese Darstellung via JavaScript.
### Suche/Filter
Um die Inhalte zu filtern sollen Sie nun das Such-Feld nutzen: tippt der Nutzer dort
einen Suchbegriff ein, so werden die Inhalte aufgelistet, deren Beschreibung den
eingegebenen Suchbegriff enthalten. Die Anzeige wird dynamisch aktualisiert
während der Nutzer tippt. Der Suchbegriff muss jedoch immer mindestens 3
Zeichen lang sein. Bei kürzerer Eingabe wird die Seite nicht aktualisiert.
