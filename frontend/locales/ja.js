{
	"actions": {
		"add_text": 			 "テキスト追加",
		"back":  				 "戻る",
        "ban_noise":             "選択された物をノイスとして決める",
		"clear":                 "クリア",
		"clear_all_texts":       "全部のテキストクリア",
		"clear_logs": 			 "ロッグクリア",
        "clear_pending":         "保留中のファイルを削除",
        "concat_all_videos":     "全部の動画を連結",
        "concat_checked_videos": "選択動画を連結",
        "crop_to_marker":        "マーカーをトリミング",
		"decrease_volume":       "音量を下げる",
		"delete": 				 "削除",
		"delete_file": 		 	 "ファイルを削除",
        "delete_noise_filter":   "フィルタノイスを削除",
		"delete_recording": 	 "レコーディングを削除",
		"delete_text": 		     "テキストを削除",
		"delete_video": 	     "動画を削除",
        "disable_preview":       "プレビューモードを無効にする",
		"download_video": 		 "動画をダウンロード",
        "enable_preview":        "プレビューモードを有効にする",
        "force_import":          "今インポート強制",
        "import_audio":          "レコーディングをインポートする",
		"increase_volume":       "音量を上げる",
		"insert_current_frame":  "現在のフレームの位置を挿入",
        "jump_to_marker":        "マーカーにジャンプ",
		"move_down": 			 "下に移動",
		"move_up": 				 "上に移動",
		"pause":                 "一時停止",
        "play":                  "再生",
        "play_from_here":        "ここからプレー",
        "play_from_marker":      "マーカーから再生",
        "play_video":            "ブラウザで動画を再生",
		"reload_page": 			 "ページをリロード",
		"save":                  "保存",
		"save_text": 			 "テキスト保存",
		"set_marker":            "マーカを決める",
        "set_playback_rate":     "集合再生レート",
		"sort":                  "ソート",
		"sort_ascending":        "ソート昇順",
		"step_backward":         "後方ステップ",
		"step_forward":          "踏み出す",
		"stop":                  "ストップ",
        "upload_file":           "ファイルをアップロード",
		"view_logs": 			 "ロッグを見る",
        "view_noise_filters":    "ノイスフィルタを見る"
	},
    "app": {
    	"name": 			     "PiSleepTalk"
    },
    "import": {
        "description":           "インポート機能を使用すると、あなたが望む任意のオーディオファイルをインポートすることができます。あなたが好きなオーディオ形式を使用することができます。サポートされていないファイルはスキップされ、自動的に削除されます。Zipファイルも自動的に抽出されます。zipファイル内のファイルがインポートフォルダ内の既存のファイルと同じような名前を持っている場合は、既存のファイルは確認せずに上書きされます",
        "empty":                 "あなたのインポートフォルダは、現時点では空です。",
        "error_1":               "ファイルアップロードをしなかった.",
        "error_2":               "エラーは、ファイルを保存しているときに、後で再試行してください起こりました。",
        "force_text":            "インポートが後に自動的に開始されます %s 秒 最後のファイルがインポートフォルダにアップロードされました。",
        "instant_approve":       "後処理なしで完全な録音としてインポートされたファイルを使用します",
        "title":                 "インポート"
    },
    "logs": {
    	"description": 			 "Node.jsのの生ログファイルとソックス対ffmpegのようないくつか使用されるプログラム。",
    	"empty_text": 			 "ロッグデータがない",
    	"title": 				 "ロッグ"
    },
    "menu": {
        "clear_pending":         "保留中のファイルを削除します。",
    	"help":                  "ヘルプ",
    	"home": 				 "ホム",
        "import":                "インポート",
        "overview":              "概要",
    	"status": 				 "ステタス",
    	"videos": 				 "動画"
    },
    "modal": {
    	"an_error_occurred":     "エラーになった",
        "ban_noise": {
            "ban_noise":         "ノイズとしてマーク選択",
            "description":       "あなたはノイズとして選択をマークにしてもよろしいですか？",
            "title":             "ノイズ選択"
        },
    	"cancel":                "キャンセル",
    	"clear_logs": {
    		"clear_logs":  		 "ロッグクリア",
    		"description":       "あなたはすべてのログファイルを消去しますか？これは、元に戻すことはできません。",
    		"title":             "ロッグクリア"
    	},
        "clear_pending": {
            "clear":             "ファイルクリア",
            "description":       "あなたはすべての未処理のファイルをクリアしますか？これは、元に戻すことはできません。",
            "title":             "ファイルクリア"
        },
        "clear_texts": {
            "clear":             "クリア",
            "description":       "あなたは、すべてのテキストデータを削除してもよろしいですか？",
            "title":             "テキストデータクリア"
        },
        "concat_videos": {
            "concat_videos":     "動画を連結",
            "description":       "あなたがビデオを連結しますか？最終的なムービーがレンダリングされるまで表示されなくなります選択。",
            "title":             "動画を連結から映画になる"
        },
    	"close":                 "閉じる",
        "crop_to_marker": {
            "crop_to_marker":    "トリミング",
            "description":       "あなたはマークされた領域に音声ファイルをトリミングしますか？これは、元に戻すことはできません。",
            "title":             "マーカにトリミング"
        },
      	"decrease_volume": {
    		"decrease_volume":   "音量を下げる",
    		"description":       "あなたは50％、このオーディオファイルの音量を減少させますか？体積が減少するまで、これがあなたの処理範囲から離れてファイルを移動します。オーディオファイルが自動的にホームページ上に再表示されます。",
    		"title":             "音量を下げる"
    	},
    	"delete_file": {
    		"delete_file":   	 "ファイルを削除",
    		"description":       "あなたはこのファイルを削除してもよろしいですか？これを元に戻すことはできません。",
    		"title":             "ファイルを削除"
    	},
        "force_import": {
            "description":       "あなたは再、今インポートを強制するには？",
            "force_import":      "インポート強制",
            "title":             "インポート強制"
        },
        "forced_import": {
            "description":       "インポートフォルダを空になるまで輸入が正常に開始された、お待ちください。",
            "title":             "インポート強制"
        },
       	"increase_volume": {
    		"description":       "あなたは50％、このオーディオファイルの音量を増加させますか？ボリュームが増加するまで、これがあなたの処理範囲から離れてファイルを移動します。オーディオファイルが自動的にホームページ上に再表示されます。",
    		"increase_volume":   "音量を上げます",
    		"title":             "音量を上げます"
    	},
        "noise_banned": {
            "description":       "選択した部分はないノイズとして認識され、さらにレコーディングで除去されます。",
            "title":             "ノイズ保存"
        },
    	"ok": 			  	     "OK",
       	"preview_video": {
    		"title":             "動画 プレビュー"
    	},
        "remove_noise_filter": {
            "description":       "あなたはこのノイズフィルタを削除しますか？これは、元に戻すことはできません。すでにこのノイズフィルタを使用して修正されたファイルは、変更されないままになります。",
            "remove_filter":     "ノイスフォルタを削除",
            "title":             "ノイスフォルタを削除"
        },
    	"remove_recording": {
    		"delete_recording":  "レコヂングを削除",
    		"description":       "あなたは全体の記録を削除してもよろしいですか？これを元に戻すことはできません。",
    		"title":             "レコヂングを削除"
    	},
    	"remove_video": {
    		"delete_video":  	 "動画を削除",
    		"description":       "あなたは全体のビデオを削除してもよろしいですか？これを元に戻すことはできません。",
    		"title":             "動画を削除"
    	},
        "set_frame": {
            "description":       "あなたはそれから再生しようとする前に、最初のフレームを設定してください。",
            "whoops":            "すみません"
        },
    	"set_marker": {
    		"description":       "あなたはそれにジャンプしようとする前に最初のマーカーを設定してください。",
            "description_2":     "あなたはそれにジャンプしようとする前に最初のマーカーを設定してください。",
            "description_3":     "あなたはそれに記録をトリミングしようとする前に最初のマーカーを設定してください。",
            "description_4":     "あなたはノイズとしてそれをマークする前に、最初のマーカーを設定してください。",
            "whoops":            "すみません"
    	},
        "set_playback_rate": {
            "description":       "ここに新しい再生速度を入力します。 番号 \"1.0\" はファウルと, 小さい数が遅くなり、より大きな数の方が高速です。",
            "set_playback_rate": "集合再生レート",
            "tip":               "標準: 1.0, もっとゆっくり: < 1.0, もっと早く: > 1.0",
            "title":             "再生レート" 
        },
        "upload_file": {
            "description":       "ジップまたは音アップロード, それは、インポートフォルダにオーディオファイルが含まれています。",
            "title":             "ファイルアップロード",
            "upload_file":       "ファイルアップロード"
        }
    },
    "no_recordings": {
    	"description": 			 "申し訳ございませんが、現在のために未処理の記録を持っていません。後でこのページに戻るには、それの上で寝るしてください。",
    	"sub_description":       "あなたは必ずすべてが正しく動作している作るためにステータスページをチェックすることができます。",
    	"title": 				 "新しい録音はありません"
    },
    "noise_filter": {
        "description":           "ここでは、作成したすべてのノイズフィルタを参照してください。ひとつひとつのノイズフィルタは、すべての新しい記録に追加されます。",
        "empty_text":            "いいえノイズフィルタはまだなかったされています。フィルタを追加するには、スタートページ上のマーカーを設定し、ヒット \"ノイズフィルタを作成します\" ボタン.",
        "title":                 "ノイズフィルタ"
    },
    "overview": {
        "description":           "ここでは、すべての未処理の録画リストを参照してください。あなたが将来的に処理しないファイルを削除するには、このリストを使用することができます。このページには、いくつかのパフォーマンス上の問題により、％sのエントリに制限されています。セキュリティの質問をスキップするには、[削除]ボタンをクリックしながらShiftキーを押したままにします。",
        "empty_text":            "未処理の記録は、現時点では利用できません。",
        "title":                 "概要"
    },
    "shortcuts": {
    	"description":   	 	 "あなたは時間を節約するためにいくつかのショートカットを使用することができます。次のキーは今サポートされています。:",
    	"keys": {
    		"1_9":  			 "1-9",
    		"1_9_description": 	 "オーディオファイルのNを部分にシーク",
            "b":                 "B",
            "b_description":     "ノイズとしてフラグ選択",
            "c":                 "C",
            "c_description":     "市場へのクロップ（残りを捨てます）",
            "d":                 "D",
            "d_description":     "現在の記録を（セキュリティの質問を無効にするには、Shiftキーを押し）削除",
            "dc":                "ダブルクリック",
            "dc_description":    "位置にジャンプし、テキストを作成",
            "down":              "下矢印",
    		"down_description":  "前方に10秒スキップ",
            "esc":               "ESC",
            "esc_description":   "ストップ",
            "f":                 "F",
            "f_description":     "トグルプレビューモード",
            "j":                 "J",
            "j_description":     "マーカーにジャンプ（と再生を停止）",
            "left":              "左矢印",
            "left_description":  "5秒スキップバック",
            "p":                 "P",
            "p_description":     "マーカーから再生",
            "m":                 "M",
            "m_description":     "セットマーカー",
            "right":             "右矢印",
    		"right_description": "前方に5秒をスキップ",
    		"space":     	 	 "空間",
    		"space_description": "再生/一時停止",
            "up":                "上矢印",
    		"up_description":    "10秒スキップバック"
    	},
    	"ok":            	 	 "OK",
    	"shortcuts":     	 	 "ショートカット"
    },
    "state": {
        "not_recording":         "レコーディングしない",
        "recording":             "レコーディング"
    },
    "status": {
    	"description": 		     "状態を確認し、あなたの PiSleepTalk . ページが生成されます: %s",
    	"disk_space": 			 "ディスク容量を無料で %s of %s GB",
        "empty_text":            "今すぐ利用可能なオーディオまたはビデオファイルはありない。",
        "pending_files":         "ファイルを保留中",
    	"title":  				 "状態"
    },
    "table": {
    	"actions": 			 	 "アクション",
        "concat":                "連結",
    	"frame": 				 "フレーム",
    	"length": 				 "長さ",
    	"length_seconds_short":  "s",
        "listen":                "聞く",
    	"path": 				 "",
    	"size": 				 "サイズ",
    	"size_kb": 			     "KB",
    	"text":       			 "テキスト",
        "type":                  "タイプ"
    },
    "videos": {
        "description":           "ここでは、システムが記録され、あなたのために生成されたすべてのレンダリングされた動画を見ることができます。秒で使用可能なすべてのシーンの長さがあります: %s.",
        "empty_text": 			 "いいえレンダリングされたビデオは、現時点では利用できない。",
        "movie_title":           "動画タイトル",
        "movie_title_tip":       "映画のタイトルは、スタートの％秒間表示されます。",
        "sub_description":       "あなたは、チェックボックスを選択することで、動画をCONCATと押すことができます \"連結動画\" ボタン.",
        "title":                 "動画",
        "type_full":             "動画",
        "type_part":             "シーン"
    }
}