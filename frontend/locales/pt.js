{
	"actions": {
		"add_text": 			 "Adicionar texto",
		"back":  				 "Atrás",
        "ban_noise":             "Marcar seleção como ruído",
		"clear":                 "Limpar",
		"clear_all_texts":       "Limpar todos os textos",
		"clear_logs": 			 "Limpar registos",
        "clear_pending":         "Limpar ficheiros pendentes",
        "concat_all_videos":     "Concatenar todos os vídeos",
        "concat_checked_videos": "Concatenar os vídeos selecionados",
        "crop_to_marker":        "Recortar para marcador",
		"decrease_volume":       "Reduzir volume",
		"delete": 				 "Eliminar",
		"delete_file": 		 	 "Eliminar ficheiro",
        "delete_noise_filter":   "Eliminar filtro de ruído",
		"delete_recording": 	 "Eliminar gravação",
		"delete_text": 		     "Eliminar texto",
		"delete_video": 	     "Eliminar vídeo",
        "disable_preview":       "Desativar previsualização",
		"download_video": 		 "Descarregar vídeo",
        "enable_preview":        "Ativar previsualização",
        "force_import":          "Forçar importação",
        "import_audio":          "Importar gravações",
		"increase_volume":       "Aumentar volume",
		"insert_current_frame":  "Inserir posição do frame atual",
        "jump_to_marker":        "Saltar para marcador",
		"move_down": 			 "Mover para baixo",
		"move_up": 				 "Mover para cima",
		"pause":                 "Pausar",
        "play":                  "Reproduzir",
        "play_from_here":        "Reproduzir aqui",
        "play_from_marker":      "Reproduzir desde marcador",
        "play_video":            "Reproduzir vídeo no browser",
		"reload_page": 			 "Recarregar página",
		"save":                  "Guardar",
		"save_text": 			 "Guardar texto",
		"set_marker":            "Estabelecer marcador",
        "set_playback_rate":     "Estabelecer velocidade de reprodução",
		"sort":                  "Ordenar",
		"sort_ascending":        "Ordenar ascendente",
		"step_backward":         "Retroceder",
		"step_forward":          "Avançar",
		"stop":                  "Parar",
        "upload_file":           "Carregar ficheiro",
		"view_logs": 			 "Ver registos",
        "view_noise_filters":    "Ver filtros de ruído"
	},
    "app": {
    	"name": 			     "PiSleepTalk"
    },
    "import": {
        "description":           "A funcionalidade de importação permite-lhe importar qualquer ficheiro de áudio que deseje. Pode usar qualquer formato de áudio. Os ficheiros não suportados são omitidos e eliminados automaticamente. Além disso, ficheiros Zip são extraídos automaticamente. Se ficheiros no arquivo Zip tiverem o mesmo nome de ficheiros existentes na pasta de importação, estes serão sobrescritos sem pedir permissão.",
        "empty":                 "A sua pasta de importação está vazia.",
        "error_1":               "Nenhum arquivo foi carregado.",
        "error_2":               "Um erro ocorreu ao gravar o seu ficheiro, por favor tente novamente mais tarde.",
        "force_text":            "A importação começará automaticamente %s segundos após carregado o último ficheiro para a pasta de importação.",
        "instant_approve":       "Usar os ficheiros importados como gravações sem pós-processamento.",
        "title":                 "Importar"
    },
    "logs": {
    	"description": 			 "Registos em bruto de node.js e outros programas usados como ffmpeg ou sox.",
    	"empty_text": 			 "Não existem registos disponíveis neste momento.",
    	"title": 				 "Registos"
    },
    "menu": {
        "clear_pending":         "Limpar ficheiros pendentes",
    	"help":                  "Ajuda",
    	"home": 				 "Início",
        "import":                "Importar",
        "overview":              "Visão geral",
    	"status": 				 "Estado",
    	"videos": 				 "Vídeos"
    },
    "modal": {
    	"an_error_occurred":     "Ocorreu um erro",
        "ban_noise": {
            "ban_noise":         "Marcar selección como ruído",
            "description":       "Tem a certeza que deseja marcar aa seleção como ruído?",
            "title":             "Marcar como ruído"
        },
    	"cancel":                "Cancelar",
    	"clear_logs": {
    		"clear_logs":  		 "Limpar registos",
    		"description":       "Tem a certeza que deseja limpar todos os ficheiros de registos? Esta ação não pode ser desfeita.",
    		"title":             "Limpar registos"
    	},
        "clear_pending": {
            "clear":             "Limpar ficheiros pendentes",
            "description":       "Tem a certeza que deseja limpar todos os ficheiros por processar? Esta ação não pode ser desfeita.",
            "title":             "Limpar ficheiros pendentes"
        },
        "clear_texts": {
            "clear":             "Limpar",
            "description":       "Tem a certeza que deseja limpar todos os textos?",
            "title":             "Limpar textos"
        },
        "concat_videos": {
            "concat_videos":     "Concatenar vídeos",
            "description":       "Tem a certeza que deseja concatenar os vídeos? A seleção desaparecerá até que se renderize a película final.",
            "title":             "Concatenar vídeos num filme"
        },
    	"close":                 "Fechar",
        "crop_to_marker": {
            "crop_to_marker":    "Recortar",
            "description":       "Tem a certeza que deseja recortar o ficheiro de áudio para o marcador? Esta ação não pode ser desfeita.",
            "title":             "Recortar para marcador"
        },
      	"decrease_volume": {
    		"decrease_volume":   "Reduzir volume",
    		"description":       "Tem a certeza que deseja reduzir o volume deste ficheiro de áudio em 50%? Isto moverá o ficheiro para fora do seu alcance de processamento até que o volume tenha sido reduzido. O ficheiro de áudio voltará a aparecer automaticamente volverá a aparecer na página principal.",
    		"title":             "Reduzir volume"
    	},
    	"delete_file": {
    		"delete_file":   	 "Eliminar ficheiro",
    		"description":       "Tem a certeza que deseja eliminar este ficheiro? Esta ação não pode ser desfeita.",
    		"title":             "Eliminar ficheiro"
    	},
        "force_import": {
            "description":       "Tem a certeza que deseja forçar a importação agora?",
            "force_import":      "Forçar importação",
            "title":             "Forçar importação"
        },
        "forced_import": {
            "description":       "O proceso de importação começou corretamente. Por favor aguarda até que a pasta de importação esteja vazia.",
            "title":             "Importação forçada"
        },
       	"increase_volume": {
    		"description":       "Tem a certeza que deseja aumentar o volume deste ficheiro de áudio em 50%? Isto moverá o ficheiro para fora do seu alcance de processamento até que o volume tenha sido aumentado. O ficheiro de áudio voltará a aparecer automaticamente volverá a aparecer na página principal.",
    		"increase_volume":   "Aumentar volume",
    		"title":             "Aumentar volume"
    	},
        "noise_banned": {
            "description":       "A parte selecionada é agora reconhecida como ruído e será eliminada em futuras gravações.",
            "title":             "Ruído guardado"
        },
    	"ok": 			  	     "OK",
       	"preview_video": {
    		"title":             "Previsualização de vídeo"
    	},
        "remove_noise_filter": {
            "description":       "Tem a certeza que deseja eliminar este filtro de ruído? Esta ação não pode ser desfeita. Os ficheiros que tenham sido modificados usando este filtro de ruído não serão modificados.",
            "remove_filter":     "Eliminar filtro de ruído",
            "title":             "Eliminar filtro de ruído"
        },
    	"remove_recording": {
    		"delete_recording":  "Eliminar gravação",
    		"description":       "Tem a certeza que deseja eliminar a gravação completa? Esta ação não pode ser desfeita.",
    		"title":             "Eliminar gravação"
    	},
    	"remove_video": {
    		"delete_video":  	 "Eliminar vídeo",
    		"description":       "Tem a certeza que deseja eliminar o vídeo completo? Esta ação não pode ser desfeita.",
    		"title":             "Eliminar vídeo"
    	},
        "set_frame": {
            "description":       "Por favor estabeleça um frame primeiro antes de tentar reproduzir desde ele.",
            "whoops":            "Whoops, perdão!"
        },
    	"set_marker": {
    		"description":       "Por favor estabeleça primeiro um marcador antes de tentar saltar para ele.",
            "description_2":     "Por favor estabeleça primeiro um marcador antes de tentar saltar para ele.",
            "description_3":     "Por favor estabeleça primeiro um marcador antes de tentar recortar a gravação para ele.",
            "description_4":     "Por favor estabeleça primeiro um marcador antes de marcá-lo como ruído.",
            "whoops":            "Whoops, perdão!"
    	},
        "set_playback_rate": {
            "description":       "Estabeleça a velocidade de reprodução. O valor por defeito é \"1.0\", um valor inferior é mais lento e um maior é mais rápido.",
            "set_playback_rate": "Estabelecer velocidade de reprodução",
            "tip":               "Padrão: 1.0, lento: < 1.0, rápido: > 1.0",
            "title":             "Velocidade de reprodução"
        },
        "upload_file": {
            "description":       "Carregue um ficheiro áudio ou zip (contendo ficheiros de áudio) para a pasta de importação.",
            "title":             "Carregar ficheiro",
            "upload_file":       "Carregar ficheiro"
        }
    },
    "no_recordings": {
    	"description": 			 "Perdão, não temos gravações por processar para si neste momento. Por favor volte a esta página mais tarde.",
    	"sub_description":       "Pode consultar a página de estado para certificar-se que tudo está a funcionar corretamente.",
    	"title": 				 "Não existem novas gravações"
    },
    "noise_filter": {
        "description":           "Aqui encontra todos os filtros de ruído que criou. Cada filtro de ruído é acrescentado a cada nova gravação.",
        "empty_text":            "Não existem filtros de ruído de momento. Para adicionar um filtro, simplesmente estabeleça um marcador na página de início e pressione o botão \"Criar fitro de ruído\".",
        "title":                 "Filtros de ruído"
    },
    "overview": {
        "description":           "Aqui encontra uma lista de todas as gravações por processar. Pode usar esta lista para eliminar ficheiros que não quer processar no futuro. Esta página está limitada a %s entradas por motivos de rendimento. Mantenha pressionada a tecla \"shift\" enquanto carrega no botão de apagar para saltar a pergunta de segurança.",
        "empty_text":            "Não existem gravações por processar neste momento.",
        "title":                 "Visão geral"
    },
    "shortcuts": {
    	"description":   	 	 "Pode utilizar atalhos para poupar tempo. As seguintes combinações são suportadas atualmente:",
    	"keys": {
    		"1_9":  			 "1-9",
    		"1_9_description": 	 "Procurar parte N do ficheiro de áudio",
            "b":                 "B",
            "b_description":     "Marcar seleção como ruído",
            "c":                 "C",
            "c_description":     "Recortar no marcador (Descartar o resto)",
            "d":                 "D",
            "d_description":     "Eliminar gravação atual (Manter pressionada a tecla \"shift\" para desativar a pergunta de sergurança)",
            "dc":                "Duplo clique",
            "dc_description":    "Saltar para posição e inserir texto",
            "down":              "Seta para baixo",
    		"down_description":  "Avançar 10 segundos",
            "esc":               "ESC",
            "esc_description":   "Parar",
            "f":                 "F",
            "f_description":     "Alternar modo de previsualização",
            "j":                 "J",
            "j_description":     "Saltar para marcador (e parar reprodução)",
            "left":              "Seta para a esquerda",
            "left_description":  "Retroceder 5 segundos",
            "p":                 "P",
            "p_description":     "Reproduzir desde marcador",
            "m":                 "M",
            "m_description":     "Estabelecer marcador",
            "right":             "Seta para a direita",
    		"right_description": "Avançar 5 segundos",
    		"space":     	 	 "Espaço",
    		"space_description": "Reproduzir/Pausar",
            "up":                "Seta para cima",
    		"up_description":    "Retroceder 10 segundos"
    	},
    	"ok":            	 	 "OK",
    	"shortcuts":     	 	 "Atalhos"
    },
    "state": {
        "not_recording":         "Não gravando",
        "recording":             "Gravando"
    },
    "status": {
    	"description": 		     "Rever o estado da sua instância de PiSleepTalk. Página gerada: %s",
    	"disk_space": 			 "Espaço livre em disco %s de %s GB",
        "empty_text":            "Não existem ficheiros de áudio ou vídeo disponíveis neste momento.",
        "pending_files":         "Ficheiros pendentes",
    	"title":  				 "Estado"
    },
    "table": {
    	"actions": 			 	 "Ações",
        "concat":                "Concatenar",
    	"frame": 				 "Frame",
    	"length": 				 "Duração",
    	"length_seconds_short":  "s",
        "listen":                "Ouvir",
    	"path": 				 "Rota",
    	"size": 				 "Tamanho",
    	"size_kb": 			     "KB",
    	"text":       			 "Texto",
        "type":                  "Tipo"
    },
    "videos": {
        "description":           "Aqui pode encontrar todos os vídeos renderizados que o sistema gravou e gerou para si. A duração de todas os segmentos disponíveis em segundos é: %s.",
        "empty_text": 			 "Não existem vídeos renderizados disponíveis neste momento.",
        "movie_title":           "Título do vídeo",
        "movie_title_tip":       "O título do filme será apresentado durante %s segundos no início.",
        "sub_description":       "Pode concatenar vídeos selecionando a checkbox e pressionando o botão \"Concatenar vídeos\".",
        "title":                 "Vídeos",
        "type_full":             "Vídeo",
        "type_part":             "Segmento"
    }
}