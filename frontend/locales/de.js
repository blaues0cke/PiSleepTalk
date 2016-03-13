{
	"actions": {
		"add_text": 			 "Text hinzufügen",
		"back":  				 "Zurück",
        "ban_noise":             "Abschnitt als Störgeräusch definieren",
		"clear":                 "Leeren",
		"clear_all_texts":       "Alle Texte leeren",
		"clear_logs": 			 "Logs löschen",
        "concat_all_videos":     "Alle Videos verbinden",
        "concat_checked_videos": "Ausgewählte Videos verbinden",
        "crop_to_marker":        "Auf Markierung beschneiden",
		"decrease_volume":       "Lautstärke verringern",
		"delete": 				 "Löschen",
		"delete_file": 		 	 "Datei löschen",
        "delete_noise_filter":   "Störgeräusch löschen",
		"delete_recording": 	 "Aufnahme löschen",
		"delete_text": 		     "Text löschen",
		"delete_video": 	     "Video löschen",
		"download_video": 		 "Video herunterladen",
        "force_import":          "Import sofort erzwingen",
		"increase_volume":       "Lautstärke erhöhen",
		"insert_current_frame":  "Aktuelle Frame-Position einfügen",
        "jump_to_marker":        "Zu Markierung springen",
		"move_down": 			 "Nach unten schieben",
		"move_up": 				 "Nach oben schieben",
		"play":                  "Abspielen",
		"play_from_marker":      "Von Markierung spielen",
		"play_video": 			 "Video im Browser abspielen",
		"reload_page": 			 "Seite neuladen",
		"save":                  "Speichern",
		"save_text": 			 "Text speichern",
		"set_marker":            "Markierung setzen",
		"sort":                  "Sortieren",
		"sort_ascending":        "Aufsteigend sortieren",
		"step_backward":         "Schritt zurück",
		"step_forward":          "Schritt vorwärts",
		"stop":                  "Stop",
        "upload_file":           "Datei hochladen",
		"view_logs": 			 "Logs betrachten",
        "view_noise_filters":    "Störgeräusche anzeigen"
	},
    "app": {
    	"name": 			     "PiSleepTalk"
    },
    "import": {
        "description":           "Die Import-Funktion erlaubt es, beliebige Audio-Dateien zu importieren. Nahezu jedes Audio-Format wird unterstützt. Nicht-unterstützte Dateien werden automatisch übersprungen und gelöscht. Zip-Dateien werden ebenfalls automatisch extrahiert. Heißen Dateien in Zip-Dateien gleich, wie bestehende Dateien im Import-Ordner, so werden diese ohne nachzufragen überschrieben.",
        "empty":                 "Der Import-Ordner ist zur Zeit leer.",
        "error_1":               "Du hast keine Datei hochgeladen.",
        "error_2":               "Beim Speichern der Datei ist ein Fehler aufgetreten, bitte versuche es später noch ein Mal.",
        "force_text":            "Der Import startet automatisch %s Sekunden nachdem die letzte Datei in den Import-Ordner geladen wurde.",
        "title":                 "Importieren"
    },
    "logs": {
    	"description": 			 "Nicht-aufbereitete Log-Dateien von node.js und anderen verwendeten Programmen wie ffmpeg oder sox.",
    	"empty_text": 			 "Derzeit sind keine Log-Dateien verfügbar.",
    	"title": 				 "Logs"
    },
    "menu": {
    	"help":                  "Hilfe",
    	"home": 				 "Start",
        "import":                "Importieren",
        "overview":              "Übersicht",
        "status":                "Status",
    	"videos": 				 "Videos"

    },
    "modal": {
    	"an_error_occurred":     "Es ist ein Fehler aufgetreten",
        "ban_noise": {
            "ban_noise":         "Abschnitt als Störgeräusch markieren",
            "description":       "Bist du sicher, dass du diesen Abschnitt als Störgeräusch markieren möchtest?",
            "title":             "Als Störgeräusch markieren"
        },
    	"cancel":                "Abbrechen",
    	"clear_logs": {
    		"clear_logs":  		 "Log-Dateien löschen",
    		"description":       "Bist du sicher, dass du alle Log-Dateien löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.",
    		"title":             "Log-Dateien löschen"
    	},
    	"clear_texts": {
    		"clear":  			 "Leeren",
    		"description":       "Bist du sicher, dass du alle Texte löschen möchtest?",
    		"title":             "Texte löschen"
    	},
        "concat_videos": {
            "concat_videos":     "Videos verbinden",
            "description":       "Bist du sicher, dass du diese Videos verbinden möchtest? Alle ausgewählten Videos werden verschwinden bis der Film gerendert ist.",
            "title":             "Videos zu vollem Film Verknüpfen"
        },
    	"close":                 "Schließen",
        "crop_to_marker": {
            "crop_to_marker":    "Beschneiden",
            "description":       "Bist du sicher, dass du diese Aufnahme auf den markierten Bereich beschneiden möchtest? Diese Aktion kann nicht rückgängig gemacht werden.",
            "title":             "Auf Markierung beschneiden"
        },
      	"decrease_volume": {
    		"decrease_volume":   "Lautstärke verringern",
    		"description":       "Bist du sicher, dass du die Lautstärke dieser Datei um 50% verringern möchtest? Die Datei wird verschoben und unsichtbar, bis die Lautstärke verringert wurde. Danach taucht die Datei wieder automatisch auf der Startseite auf.",
    		"title":             "Lautstärke verringern"
    	},
        "delete_file": {
            "delete_file":       "Datei löschen",
            "description":       "Bist du sicher, dass du diese Datei löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.",
            "title":             "Datei löschen"
        },
        "force_import": {
            "description":       "Bist du sicher, dass du den sofortigen Import erzwingen möchtest?",
            "force_import":      "Import erzwingen",
            "title":             "Import sofort erzwingen"
        },
        "forced_import": {
            "description":       "Der Datei-Import wurde erfolgreich erzwungen, bitte warten Sie, bis der Import-Ordner leer ist.",
            "title":             "Import erzwungen"
        },
        "increase_volume": {
            "description":       "Bist du sicher, dass du die Lautstärke dieser Datei um 50% erhöhen möchtest? Die Datei wird verschoben und unsichtbar, bis die Lautstärke erhöht wurde. Danach taucht die Datei wieder automatisch auf der Startseite auf.",
            "increase_volume":   "Lautstärke erhöhen",
            "title":             "Lautstärke erhöhen"
        },
        "noise_banned": {
            "description":       "Der markierte Bereich wird in Zukunft als Störgeräusch geführt und aus zukünftigen Aufnahmen entfernt.",
            "title":             "Störgeräusch erfasst"
        },
    	"ok": 			  	     "OK",
       	"preview_video": {
    		"title":             "Video-Vorschau"
    	},
        "remove_noise_filter": {
            "description":       "Bist du sicher, dass du dieses Störgeräusch löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden. Dateien, aus denen dieses Störgeräusch bereits entfernt wurde, verändern sich dadurch nicht.",
            "remove_filter":     "Störgeräusch löschen",
            "title":             "Störgeräusch löschen"
        },
    	"remove_recording": {
    		"delete_recording":  "Aufnahme löschen",
    		"description":       "Bist du sicher, dass du diese Aufnahme löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.",
    		"title":             "Aufnahme löschen"
    	},
    	"remove_video": {
    		"delete_video":  	 "Video löschen",
    		"description":       "Bist du sicher, dass du dieses Video löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.",
    		"title":             "Video löschen"
    	},
    	"set_marker": {
    		"description":       "Bitte setzte zu erst eine Markierung, bevor du zur selbigen springst.",
            "description_2":     "Bitte setzte zu erst eine Markierung, bevor du zur selbigen springst.",
            "description_3":     "Bitte setzte zu erst eine Markierung, bevor die Aufnahme auf selbige verkürzt.",
            "description_4":     "Bitte setzte zu erst eine Markierung, bevor du sie als Störgeräusch definierst.",
            "whoops":            "Hoppala, entschuldigung!"
    	},
        "upload_file": {
            "description":       "Lade eine Audio- oder Zip-Datei, die Audio-Dateien enthält, zum Importieren hoch.",
            "title":             "Datei hochladen",
            "upload_file":       "Datei hochladen"
        }
    },
    "no_recordings": {
    	"description": 			 "Entschuldigung, es liegen keine unbearbeiteten Aufnahmen vor. Bitte schlafe eine Nacht darüber und kehre dann zur dieser Seite zurück.",
    	"sub_description":       "Eventuell wirfst du einen Blick auf die Status-Seite um sicherzustellen, dass alles in Ordnung ist.",
    	"title": 				 "Keine neuen Aufnahmen"
    },
    "noise_filter": {
        "description":           "Hier siehst du alle Störgeräusche, die du definiert hast. Jedes Störgeräusch wird aus neuen Aufnahmen automatisch herausgeschnitten.",
        "empty_text":            "Es wurden noch keine Störgeräusche erfasst. Um das zu tun, kannst du auf der Startseite einfach einen Marker setzen und dann auf den \"Störgeräusch\"-Erstellen-Button klicken.",
        "title":                 "Störgeräusche"
    },
    "overview": {
        "description":           "Hier siehst du alle von dir unbearbeiteten Aufnahmen in einer Liste. Du kannst diese Übersicht nutzen, um Dateien, die du nicht weiterverarbeiten möchtest, direkt zu löschen. Diese Liste ist aus Performance-Gründen auf %s Einträge limitiert.",
        "empty_text":            "Es sind derzeit keine unbearbeiteten Aufnahmen vorhanden.",
        "title":                 "Übersicht"
    },
    "shortcuts": {
    	"description":   	 	 "You can use some shortcuts to save time. The following keys are supported right now:",
    	"keys": {
    		"1_9":  			 "1-9",
    		"1_9_description": 	 "Springe zu Abschnitt N der Audio-Datei",
            "b":                 "B",
            "b_description":     "Markierung als Störgeräusch erfasssen",
            "c":                 "C",
            "c_description":     "Aufnahmen auf Markierung beschneiden (Rest wegwerfen)",
            "dc":                "Doppeklick",
            "dc_description":    "Zu Position springen und sofort Text erstellen",
    		"down_description":  "Springe 10 Sekunden vor",
            "j":                 "J",
            "j_description":     "Zu Markierung springen (Und Wiedergabe stoppen)",   
    		"left_description":  "Springe 5 Sekunden zurück",
            "p":                 "P",
            "p_description":     "Von Markierung abspielen",
            "m":                 "M",
            "m_description":     "Markierung setzen",
    		"right_description": "Springe 5 Sekunden vor",
    		"space":     	 	 "Leertaste",
    		"space_description": "Abspielen/Pause",
    		"up_description":    "Springe 10 Sekunden zurück"
    	},
    	"ok":            	 	 "OK",
    	"shortcuts":     	 	 "Tastenkürzel"
    },
    "status": {
    	"description": 		     "Prüfe den Status deiner PiSleepTalk-Instanz. Seite generiert: %s",
    	"disk_space": 			 "%s Speicherplatz von %s GB sind aktuell frei",
        "empty_text":            "Es sind derzeit keine Video- oder Audiodateien im Dateisystem vorhanden.",
    	"title":  				 "Status"
    },
    "table": {
    	"actions": 			 	 "Aktionen",
        "concat":                "Verknüpfen",
    	"frame": 				 "Frame",
    	"length": 				 "Länge",
    	"length_seconds_short":  "s",
        "listen":                "Anhören",
    	"path": 				 "Pfad",
    	"size": 				 "Größe",
    	"size_kb": 			     "KB",
    	"text":       			 "Text",
        "type":                  "Typ"
    },
    "videos": {
        "description":           "Hier siehst du alle gerenderten Videos, die das System aufgenommen und für dich generiert hat.",
        "empty_text":            "Derzeit liegen keine generierten Videos vor.",
        "movie_title":           "Video-Titel",
        "movie_title_tip":       "Der Titel erscheint %s Sekunden am Start.",
        "sub_description":       "Du kannst Videos verbinden indem du sie per Checkbox auswählst und auf \"Videos verbinden\" drückst.",
        "title":                 "Videos",
        "type_full":             "Video",
        "type_part":             "Szene"
    }
}