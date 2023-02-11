import React from 'react';
import { ReactMic } from 'react-mic';
import styles from './reactmic.module.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }

  startRecording = () => {
    this.setState({ record: true });
  }

  stopRecording = () => {
    this.setState({ record: false });
  }

  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
  }

  render() {
    return (
      <div className='row'>
        <ReactMic
          record={this.state.record}
          className={styles.sound_wave}
          visualSetting="sinewave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="cyan"
          bitRate={256000}          // defaults -> 128000 (128kbps).  React-Mic-Gold only.
          sampleRate={96000}        // defaults -> 44100 (44.1 kHz).  It accepts values only in range: 22050 to 96000 (available in React-Mic-Gold)
          timeSlice={3000}
          backgroundColor="" />
        <div className="row p-2">

          {/* <button onClick={this.startRecording} type="button" className='btn btn-secondary px-2 py-3 ' >Start</button> */}
          {/* <button onClick={this.stopRecording} type="button" className='btn btn-secondary px-2 py-3 '>Stop</button> */}

        </div>
      </div >
    );
  }
}

