import argparse
import json
import os


parser = argparse.ArgumentParser()
parser.add_argument('jsonPath')
parser.add_argument('screenshotsPath')
args = parser.parse_args()

jsonPath = args.jsonPath
screenshotsDir = args.screenshotsPath

screenshots_list = os.listdir(screenshotsDir)
frames_list = [int(element.replace('.png', '')) for element in screenshots_list]
# frames_list.sort()

raw_text_list = []

result = json.loads(open(jsonPath, 'r').read())

segments = result['segments']

current_frame_index = 0
temp_paragraph = ""

try:
    for segment in segments:
            startTime = segment['start']
            endTime = segment['end']
            text = segment['text']
            print(startTime, endTime, text)
            # print("current frame number:", frames_list[current_frame_index])
            if endTime < frames_list[current_frame_index]:
                temp_paragraph+=text
            else:
                raw_text_list.append(temp_paragraph)
                temp_paragraph=text
                current_frame_index+=1
except:
    raw_text_list.append(temp_paragraph)
    print("Done")
        
print(raw_text_list)
print(len(raw_text_list))

with open(jsonPath+'.final.json', 'w') as f:
        f.write(json.dumps(raw_text_list, indent=4)) 
