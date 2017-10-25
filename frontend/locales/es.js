{
	"actions": {
		"add_text": 			 "Añadir texto",
		"back":  				 "Atrás",
        "ban_noise":             "Marcar la selección como ruido",
		"clear":                 "Limpiar",
		"clear_all_texts":       "Limpiar todos los textos",
		"clear_logs": 			 "Limpiar log",
        "clear_pending":         "Borrar ficheros pendientes",
        "concat_all_videos":     "Concatenar todos los videos",
        "concat_checked_videos": "Concatenar los videos seleccionados",
        "crop_to_marker":        "Recortar en la marca",
		"decrease_volume":       "Bajar volumen",
		"delete": 				 "Eliminar",
		"delete_file": 		 	 "Eliminar fichero",
        "delete_noise_filter":   "Eliminar filtro de ruido",
		"delete_recording": 	 "Eliminar grabación",
		"delete_text": 		     "Eliminar texto",
		"delete_video": 	     "Eliminar video",
        "disable_preview":       "Deshabilitar previsualización",
		"download_video": 		 "Descargar video",
        "enable_preview":        "Habilitar previsualización",
        "force_import":          "Forzar a importar ahora",
        "import_audio":          "Importar grabaciones",
		"increase_volume":       "Subir volumen",
		"insert_current_frame":  "Insertar posición del marco actual",
        "jump_to_marker":        "Saltar a la marca",
		"move_down": 			 "Bajar",
		"move_up": 				 "Subir",
		"pause":                 "Pausar",
        "play":                  "Reproducir",
        "play_from_here":        "Reproducir desde aquí",
        "play_from_marker":      "Reproducir desde la marca",
        "play_video":            "Reproducir video en el navegador",
		"reload_page": 			 "Recargar página",
		"save":                  "Guardar",
		"save_text": 			 "Guardar texto",
		"set_marker":            "Establecer marca",
        "set_playback_rate":     "Establecer velocidad de reproducción",
		"sort":                  "Ordenar",
		"sort_ascending":        "Ascendente",
		"step_backward":         "Atrás",
		"step_forward":          "Adelante",
		"stop":                  "Parar",
        "upload_file":           "Subir fichero",
		"view_logs": 			 "Ver registros",
        "view_noise_filters":    "Ver filtros de ruido"
	},
    "app": {
    	"name": 			     "PiSleepTalk"
    },
    "import": {
        "description":           "La función de importación le permite importar cualquier archivo de audio que desee. Puede utilizar cualquier formato de audio. Los archivos no compatibles se omiten y se borran automáticamente. Los archivos Zip se extraen automáticamente. Si los archivos en el archivo zip tienen el mismo nombre que archivos existentes en la carpeta de importación, el archivo existente se sobrescribe sin pedir permiso.",
        "empty":                 "Su carpeta de importación está vacía.",
        "error_1":               "No se han subido ficheros.",
        "error_2":               "Se ha producido un error mientras se guardaba el fichero, por favor, vuelva a intentarlo.",
        "force_text":            "La importación empezará automáticamente trasncurridos %s segundos tras subir el último fichero a la carpeta de importación.",
        "instant_approve":       "Usar los ficheros importados como grabaciones sin post-procesamiento.",
        "title":                 "Importar"
    },
    "logs": {
    	"description": 			 "Registros en bruto de node.js y otros programas como ffmpeg o sox.",
    	"empty_text": 			 "No hay registros.",
    	"title": 				 "Registros"
    },
    "menu": {
        "clear_pending":         "Eliminar ficheros pendientes",
    	"help":                  "Ayuda",
    	"home": 				 "Inicio",
        "import":                "Importar",
        "overview":              "Visión general",
    	"status": 				 "Estado",
    	"videos": 				 "Videos"
    },
    "modal": {
    	"an_error_occurred":     "Se ha producido un error",
        "ban_noise": {
            "ban_noise":         "Marcar selección como ruido",
            "description":       "¿Está seguro de que quiere marcar la selección como ruido?",
            "title":             "Marcar como ruido"
        },
    	"cancel":                "Cancelar",
    	"clear_logs": {
    		"clear_logs":  		 "Borrar registros",
    		"description":       "¿Está seguro de que quiere borrar todos los ficheros de registro? Esta acción no se puede deshacer.",
    		"title":             "Borrar registros"
    	},
        "clear_pending": {
            "clear":             "Borrar ficheros no procesados",
            "description":       "¿Está seguro de que quiere borrar los ficheros no procesados? Esta acción no se puede deshacer.",
            "title":             "Borrar ficheros no procesados"
        },
        "clear_texts": {
            "clear":             "Borrar",
            "description":       "¿Estás seguro de que quiere borrar todos los textos?",
            "title":             "Borrar textos"
        },
        "concat_videos": {
            "concat_videos":     "Concatenar videos",
            "description":       "¿Está seguro de concatenar los videos? La selección desaparecerá hasta que se renderize la pelicula final.",
            "title":             "Concatenar videos en una pelicula"
        },
    	"close":                 "Cerrar",
        "crop_to_marker": {
            "crop_to_marker":    "Recortar",
            "description":       "¿Está seguro de querer recortar el fichero de audio en la zona marcada? Esta acción no se puede deshacer.",
            "title":             "Recortar en la marca"
        },
      	"decrease_volume": {
    		"decrease_volume":   "Bajar volumen",
    		"description":       "¿Está seguro de bajar el volumen de este archivo de audio en un 50%? Esto hará que el archivo de audio quede fuera del rango de procesamiento hasta que se suba el volumen. El fichero de audio volverá a aparecer en la página principal automáticamente.",
    		"title":             "Bajar volumen"
    	},
    	"delete_file": {
    		"delete_file":   	 "Eliminar fichero",
    		"description":       "¿Está seguro de querer eliminar este fichero? Esta acción no se puede deshacer",
    		"title":             "Eliminar fichero"
    	},
        "force_import": {
            "description":       "¿Está seguro de querer forzar la importación ahora?",
            "force_import":      "Forzar importación",
            "title":             "Forzar importación"
        },
        "forced_import": {
            "description":       "El proceso de importación ha empezado correctamente. Por favor espere hasta que la carpeta de importación esté vacía.",
            "title":             "Importación forzada"
        },
       	"increase_volume": {
    		"description":       "¿Está seguro de subir el volumen del fichero de audio un 50%? Esto hara que el archivo de audio quede fuera del rango de procesamiento hasta que se baje el volumen. El fichero de audio volverá a aparecer en la página principal automáticamente.",
    		"increase_volume":   "Subir volumen",
    		"title":             "Subir volumen"
    	},
        "noise_banned": {
            "description":       "La parte seleccionada se reconoce como ruido y se elimina en futuras grabaciones.",
            "title":             "Ruido guardado"
        },
    	"ok": 			  	     "OK",
       	"preview_video": {
    		"title":             "Previsualización de video"
    	},
        "remove_noise_filter": {
            "description":       "¿Está seguro de eliminar este filtro de ruido? Esta acción no se puede deshacer. Los ficheros que hayan sido modificados con este filtro no se verán alterados.",
            "remove_filter":     "Eliminar filtro de ruido",
            "title":             "Eliminar filtro de ruido"
        },
    	"remove_recording": {
    		"delete_recording":  "Borrar grabación",
    		"description":       "¿Está seguro de querer borrar toda la grabación? Esta acción no se puede deshacer.",
    		"title":             "Borrar grabación"
    	},
    	"remove_video": {
    		"delete_video":  	 "Borrar video",
    		"description":       "¿Está seguro de querer borrar todo el video? Esta acción no se puede deshacer.",
    		"title":             "Borrar video"
    	},
        "set_frame": {
            "description":       "Por favor establezca el primer fotograma antes de empezar a reproducir.",
            "whoops":            "Whoops, perdón!"
        },
    	"set_marker": {
    		"description":       "Por favor establezca primero una marca para saltar a ella.",
            "description_2":     "Por favor establezca primero una marca para saltar a ella.",
            "description_3":     "Por favor establezca primero una marca para intentar recortar una grabación.",
            "description_4":     "Por favor establezca primero una marca para marcarla como ruido.",
            "whoops":            "Whoops, Perdon!"
    	},
        "set_playback_rate": {
            "description":       "Establezca la velocidad de reproducción. El valor por defecto es \"1.0\", un valor inferior es más lento y uno mayor es más rápido.",
            "set_playback_rate": "Set playback rate",
            "tip":               "Estandar: 1.0, lento: < 1.0, rápido: > 1.0",
            "title":             "Velocidad de reproducción" 
        },
        "upload_file": {
            "description":       "Subir un fichero de audio o un zip, que contenga ficheros de audio, a la carpeta de importación.",
            "title":             "Subir fichero",
            "upload_file":       "Subir fichero"
        }
    },
    "no_recordings": {
    	"description": 			 "Perdón, pero no hay grabaciones pendientes para usted. Por favor duerma y vuelva a esta página más tarde.",
    	"sub_description":       "Puede ver en la página de estado que todo funciona correctamente",
    	"title": 				 "No hay nuevas grabaciones"
    },
    "noise_filter": {
        "description":           "Todos los filtros de ruido que ha creado. Cada filtro de ruido está adjunto a una nueva grabación.",
        "empty_text":            "No hay filtros de ruido de momento. Para añadir un filtro simplemente establezca una marca en la página de inicio y presione el botón \"Crear fitro de ruido\".",
        "title":                 "Filtros de ruido"
    },
    "overview": {
        "description":           "Lista de todas las grabaciones sin procesar. Puede usar esta lista para borrar los ficheros que no quiera procesar en el futuro. Esta página está limitada a %s entradas por motivos de rendimiento. Mantenga presionada la tecla \"shift\" para saltar la confirmación.",
        "empty_text":            "No hay grabaciones sin procesar por el momento.",
        "title":                 "Visión general"
    },
    "shortcuts": {
    	"description":   	 	 "Puede utilizar atajos para ahorrar tiempo. Actualmente, están habilitadas las siguientes combinaciones:",
    	"keys": {
    		"1_9":  			 "1-9",
    		"1_9_description": 	 "Buscar parte N del fichero de audio",
            "b":                 "B",
            "b_description":     "Marcar selección como ruido",
            "c":                 "C",
            "c_description":     "Recortar en la marcar (Descartar el resto)",
            "d":                 "D",
            "d_description":     "Borrar grabación actual (mantener pulsada la tecla \"shift\" para saltar confirmación)",
            "dc":                "Doble click",
            "dc_description":    "Saltar a la posción he insertar texto",
            "down":              "Flecha abajo",
    		"down_description":  "Avanzar 10 segundos",
            "esc":               "ESC",
            "esc_description":   "Stop",
            "f":                 "F",
            "f_description":     "Cambiar de modo previsualización",
            "j":                 "J",
            "j_description":     "Saltar a la marca (y parar reproducción)",
            "left":              "Arrow left",
            "left_description":  "Retroceder 5 segundos",
            "p":                 "P",
            "p_description":     "Reproducir desde la marca",
            "m":                 "M",
            "m_description":     "Establecer marca",
            "right":             "Flecha derevha",
    		"right_description": "Avanzar 5 segundos",
    		"space":     	 	 "Espacio",
    		"space_description": "Play/Pause",
            "up":                "Flecha arriba",
    		"up_description":    "Retroceder 10 segundos"
    	},
    	"ok":            	 	 "OK",
    	"shortcuts":     	 	 "Atajos"
    },
    "state": {
        "not_recording":         "No grabando",
        "recording":             "Grabando"
    },
    "status": {
    	"description": 		     "Revise el estado de su instancia de PiSleepTalk. Pagina generada: %s",
    	"disk_space": 			 "Espacio disponible en disco %s de %s GB",
        "empty_text":            "No hay ficheros de audo o video disponibles actualmente.",
        "pending_files":         "Ficheros pendientes",
    	"title":  				 "Estado"
    },
    "table": {
    	"actions": 			 	 "Acciones",
        "concat":                "Concatenar",
    	"frame": 				 "Fotograma",
    	"length": 				 "Longitud",
    	"length_seconds_short":  "s",
        "listen":                "Escuchar",
    	"path": 				 "Ruta",
    	"size": 				 "Tamaño",
    	"size_kb": 			     "KB",
    	"text":       			 "Texto",
        "type":                  "Tipo"
    },
    "videos": {
        "description":           "Aquí puede ver todos los videos renderizados que ha grabado y generado el sistema para usted. La longitud de todas las escenas disponibles en segundos es: %s.",
        "empty_text": 			 "No hay videos renderizados disponibles en este momento.",
        "movie_title":           "Título del video",
        "movie_title_tip":       "El título de la pelicula empezará en %s segundos después de haber empezado.",
        "sub_description":       "Puede concatenar videos seleccionando el checkbox y presionando el botón \"Concatenar videos\".",
        "title":                 "Videos",
        "type_full":             "Video",
        "type_part":             "Escena"
    }
}
