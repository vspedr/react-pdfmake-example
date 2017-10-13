import React, { Component } from 'react';
import logo from './logo.svg';
import pdfMakeTable from './PdfMakeTable';
import './App.css';

class App extends Component {
  _exportPdfTable = () => {
    // change this number to generate more or less rows of data
    pdfMakeTable(500);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + pdfmake</h1>
        </header>
        <p className="App-intro">
          Sample PDF report generator using React and pdfmake.
        </p>
        <p>
          <button onClick={this._exportPdfTable}>
            Export PDF
          </button>
        </p>
      </div>
    );
  }
}

export default App;
