import json, sys;

fallback = "13371337133713371337"
obj      = json.load(sys.stdin);

try:
	print obj['recenttracks']['track'][0]['date']['uts']
except:
	print fallback