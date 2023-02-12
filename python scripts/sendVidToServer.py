import requests
import argparse
import json

parser = argparse.ArgumentParser("video_path")
parser.add_argument("video_path")
args = parser.parse_args()
video_path = args.video_path

url = 'http://127.0.0.1:5000/upload_file'
file = {'file': open(video_path, 'rb')}

response = requests.put(url, files=file)

with open(video_path+'.json', 'w') as f:
    f.write(json.dumps(response.json(), indent=4))