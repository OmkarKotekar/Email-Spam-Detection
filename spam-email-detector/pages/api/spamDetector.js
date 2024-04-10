// pages/api/spamDetector.js

import { spawn } from 'child_process';
import { join } from 'path';

export default async function handler(req, res) {
  const pythonScriptPath = join(process.cwd(),'spam_detector.py');
  const pythonProcess = spawn('python', [pythonScriptPath]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    res.status(200).json({ prediction: data });
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
    res.status(500).json({ error: 'An error occurred while executing the script.' });
  });
}
