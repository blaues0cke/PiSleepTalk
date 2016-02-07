import json, sys;

fallback = ""
obj      = json.load(sys.stdin);

try:
	print obj['response']['checkins']['items'][0]['venue']['id']
except:
	print fallback