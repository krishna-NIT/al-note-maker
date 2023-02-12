import os
import whisper
# import argparse
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/api/v1/getSubsJson', methods=['POST'])
def getResponse():
    if request.method == 'POST':
    # data =
        print(request.files)
    # print(data)
    # try:
    #     query = data['query']
    #     queryAns = bot.response(query)
    #     print(queryAns)
    #     if not queryAns:
    #         return jsonify({'query': query,
    #                     'answer': "Sorry, we couldn't resolve your query. This query will be used for the further improvement of the bot."}), 201
    #     return jsonify({'query': query,
    #                     'answer': queryAns}), 201
    # except:
    #     return jsonify({'message': 'Some error occurred!'}), 401

if __name__ == '__main__':
    app.run(debug=True)

# parser = argparse.ArgumentParser()
# parser.add_argument('filePath')
# args = parser.parse_args()
# path = args.filePath



# print(frames_list)
# exit()

# model = whisper.load_model('base')
# if not os.path.exists(path+'.json'):
#     result = model.transcribe(path, fp16 = False, language="en")
#     with open(path+'.json', 'w') as f:
#         f.write(json.dumps(result, indent=4)) 




