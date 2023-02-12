import os
import whisper

from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
model = whisper.load_model('base')

@app.route('/upload_file', methods=['PUT'])
def upload_file():
    # print(request.files)
    file = request.files['file']
    file.save('received_file.mp4')
    # return 'File uploaded successfully'
    result = model.transcribe('received_file.mp4', fp16 = False, language="en")
    os.remove('received_file.mp4')
    return jsonify(result), 200

if __name__ == '__main__':
    app.run()
